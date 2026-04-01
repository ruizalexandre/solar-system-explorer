/**
 * Solar System Explorer — Main Application
 * Pure vanilla JavaScript, no dependencies.
 */

(function () {
  "use strict";

  /* ===== DOM refs ===== */
  const nav = document.getElementById("planet-nav");
  const orbitsContainer = document.getElementById("orbits-container");
  const solarView = document.getElementById("solar-system-view");
  const detailPanel = document.getElementById("detail-panel");
  const closeBtn = document.getElementById("close-detail");

  /* ===== Config ===== */
  const ORBIT_BASE = 70;
  const ORBIT_STEP = 38;
  const PLANET_SIZES = {
    mercure: 8, venus: 12, terre: 14, mars: 10,
    jupiter: 28, saturne: 24, uranus: 18, neptune: 17
  };

  /* ===== Animation state ===== */
  const orbitAngles = {};
  const orbitSpeeds = {
    mercure: 0.003, venus: 0.0022, terre: 0.0018, mars: 0.0014,
    jupiter: 0.0008, saturne: 0.0006, uranus: 0.0004, neptune: 0.0003
  };
  let animationId = null;
  let currentPlanetId = null;
  let orbitPaused = false;

  /* ===== Low-Poly Terrain Generator (Perspective/Isometric) ===== */
  function generateTerrain(colors, seed) {
    var W = 1920, H = 1080;
    var COLS = 32, ROWS = 28;

    // Seeded random
    var s = seed || 42;
    function rand() {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    }

    // Generate 3D heightmap grid on XZ ground plane
    // x: left-right, z: depth (into screen), y: height (up)
    var gridW = 20, gridD = 30; // world units
    var heights = [];
    var rowLen = COLS + 1;

    for (var r = 0; r <= ROWS; r++) {
      for (var c = 0; c <= COLS; c++) {
        var wx = (c / COLS - 0.5) * gridW;
        var wz = (r / ROWS) * gridD + 1.5; // depth: 1.5 to 31.5

        // Height: more variation closer to camera, smoother far away
        var heightScale = 0.6 + rand() * 1.2;
        // Add some coherent bumps using pseudo-noise
        var bump1 = Math.sin(wx * 1.3 + rand() * 2) * Math.cos(wz * 0.8 + rand()) * 0.5;
        var bump2 = Math.sin(wx * 2.7 + wz * 1.1) * 0.3;
        var wy = (rand() - 0.4) * heightScale + bump1 + bump2;

        // Flatten near edges to avoid weird clipping
        var edgeFade = 1.0 - Math.pow(Math.abs(c / COLS - 0.5) * 2, 3);
        wy *= edgeFade;

        // Add jitter to x/z positions (not height)
        var jitterX = (c > 0 && c < COLS) ? (rand() - 0.5) * (gridW / COLS) * 0.6 : 0;
        var jitterZ = (r > 0 && r < ROWS) ? (rand() - 0.5) * (gridD / ROWS) * 0.5 : 0;

        heights.push({
          wx: wx + jitterX,
          wy: wy,
          wz: wz + jitterZ
        });
      }
    }

    // Perspective projection: camera at (0, 2, 0) looking forward along +Z
    var camY = 2.2;
    var fov = 1.1; // focal length factor

    function project(p) {
      var relY = p.wy - camY; // relative to camera height
      var z = p.wz;
      if (z < 0.3) z = 0.3;
      var sx = W / 2 + (p.wx / z) * W * fov;
      var sy = H * 0.35 + (relY / z) * H * fov; // horizon at ~35% from top
      return { x: sx, y: sy, z: z };
    }

    // Project all points
    var projected = [];
    for (var i = 0; i < heights.length; i++) {
      projected.push(project(heights[i]));
    }

    // Generate triangles (back to front for painter's algorithm)
    var triList = [];
    for (var r = 0; r < ROWS; r++) {
      for (var c = 0; c < COLS; c++) {
        var tl = r * rowLen + c;
        var tr = tl + 1;
        var bl = (r + 1) * rowLen + c;
        var br = bl + 1;

        if ((r + c) % 2 === 0) {
          triList.push([tl, tr, bl]);
          triList.push([tr, br, bl]);
        } else {
          triList.push([tl, tr, br]);
          triList.push([tl, br, bl]);
        }
      }
    }

    // Sort triangles back-to-front (by average z, descending = far first)
    triList.sort(function (a, b) {
      var za = (projected[a[0]].z + projected[a[1]].z + projected[a[2]].z);
      var zb = (projected[b[0]].z + projected[b[1]].z + projected[b[2]].z);
      return zb - za;
    });

    // Render triangles with lighting
    var polys = '';
    // Light direction (from above-right)
    var lx = 0.3, ly = -0.8, lz = -0.2;
    var ll = Math.sqrt(lx * lx + ly * ly + lz * lz);
    lx /= ll; ly /= ll; lz /= ll;

    for (var i = 0; i < triList.length; i++) {
      var tri = triList[i];
      var p0 = projected[tri[0]], p1 = projected[tri[1]], p2 = projected[tri[2]];
      var h0 = heights[tri[0]], h1 = heights[tri[1]], h2 = heights[tri[2]];

      // Skip triangles behind camera or off-screen
      var avgZ = (p0.z + p1.z + p2.z) / 3;
      if (avgZ < 0.5) continue;

      // Compute face normal for shading
      var ax = h1.wx - h0.wx, ay = h1.wy - h0.wy, az = h1.wz - h0.wz;
      var bx = h2.wx - h0.wx, by = h2.wy - h0.wy, bz = h2.wz - h0.wz;
      var nx = ay * bz - az * by;
      var ny = az * bx - ax * bz;
      var nz = ax * by - ay * bx;
      var nl = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
      nx /= nl; ny /= nl; nz /= nl;

      // Flip normal if pointing down
      if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }

      // Lambertian shading
      var dot = nx * lx + ny * ly + nz * lz;
      var shade = 0.4 + Math.max(0, -dot) * 0.6; // ambient 0.4, diffuse 0.6

      // Distance fog: far triangles get darker
      var fogFactor = Math.min(1, Math.max(0, 1 - (avgZ - 2) / 28));
      shade *= (0.3 + fogFactor * 0.7);

      // Pick color
      var colorIdx = Math.floor(rand() * colors.length);
      var baseColor = colors[colorIdx];

      var cr = parseInt(baseColor.slice(1, 3), 16);
      var cg = parseInt(baseColor.slice(3, 5), 16);
      var cb = parseInt(baseColor.slice(5, 7), 16);

      cr = Math.round(cr * shade);
      cg = Math.round(cg * shade);
      cb = Math.round(cb * shade);

      var fillColor = 'rgb(' + cr + ',' + cg + ',' + cb + ')';

      polys += '<polygon points="' +
        p0.x.toFixed(1) + ',' + p0.y.toFixed(1) + ' ' +
        p1.x.toFixed(1) + ',' + p1.y.toFixed(1) + ' ' +
        p2.x.toFixed(1) + ',' + p2.y.toFixed(1) +
        '" fill="' + fillColor + '" stroke="' + fillColor + '" stroke-width="0.3"/>';
    }

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice">' + polys + '</svg>';
  }

  function hashString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function setTerrain(colors, name) {
    var el = document.getElementById("terrain-bg");
    if (el && colors) {
      var seed = hashString(name || "default");
      el.innerHTML = generateTerrain(colors, seed);
    }
  }

  /* ===== Build Navigation ===== */
  function buildNav() {
    SOLAR_SYSTEM.forEach(function (body) {
      var btn = document.createElement("button");
      btn.className = "nav-btn";
      btn.textContent = body.name;
      btn.dataset.id = body.id;
      btn.addEventListener("click", function () {
        closeBurger();
        openDetail(body.id);
      });
      nav.appendChild(btn);
    });
  }

  /* ===== Build Orbits & Planets ===== */
  function buildOrbits() {
    var planets = SOLAR_SYSTEM.filter(function (b) { return b.orbitIndex > 0; });

    planets.forEach(function (planet) {
      var radius = ORBIT_BASE + (planet.orbitIndex - 1) * ORBIT_STEP;
      var size = radius * 2;

      var ring = document.createElement("div");
      ring.className = "orbit-ring";
      ring.style.width = size + "px";
      ring.style.height = size + "px";
      orbitsContainer.appendChild(ring);

      var dot = document.createElement("div");
      dot.className = "planet-dot";
      dot.dataset.id = planet.id;
      var pSize = PLANET_SIZES[planet.id] || 12;
      dot.style.width = pSize + "px";
      dot.style.height = pSize + "px";

      var label = document.createElement("span");
      label.className = "body-label";
      label.textContent = planet.name;
      dot.appendChild(label);

      dot.addEventListener("mouseenter", function () { orbitPaused = true; });
      dot.addEventListener("mouseleave", function () { orbitPaused = false; });
      dot.addEventListener("click", function () {
        openDetail(planet.id);
      });

      solarView.appendChild(dot);
      orbitAngles[planet.id] = (planet.orbitIndex / 9) * Math.PI * 2;
    });
  }

  /* ===== Animate Orbits ===== */
  function animate() {
    var centerX = solarView.offsetWidth / 2;
    var centerY = solarView.offsetHeight / 2;

    var planets = SOLAR_SYSTEM.filter(function (b) { return b.orbitIndex > 0; });

    planets.forEach(function (planet) {
      var radius = ORBIT_BASE + (planet.orbitIndex - 1) * ORBIT_STEP;
      var speed = orbitSpeeds[planet.id] || 0.003;
      if (!orbitPaused) orbitAngles[planet.id] += speed;

      var angle = orbitAngles[planet.id];
      var x = centerX + Math.cos(angle) * radius;
      var y = centerY + Math.sin(angle) * radius;

      var dot = solarView.querySelector('.planet-dot[data-id="' + planet.id + '"]');
      if (dot) {
        var pSize = PLANET_SIZES[planet.id] || 12;
        dot.style.left = (x - pSize / 2) + "px";
        dot.style.top = (y - pSize / 2) + "px";
      }
    });

    animationId = requestAnimationFrame(animate);
  }

  /* ===== Sun click ===== */
  document.getElementById("sun-container").addEventListener("click", function () {
    openDetail("soleil");
  });

  /* ===== Detail Panel ===== */
  function openDetail(id) {
    var body = SOLAR_SYSTEM.find(function (b) { return b.id === id; });
    if (!body) return;

    currentPlanetId = id;

    // Set terrain background
    setTerrain(body.terrain, body.name);

    // Highlight nav
    document.querySelectorAll(".nav-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.id === id);
    });

    // Header
    var sphere = document.getElementById("detail-sphere-container");
    sphere.innerHTML = '<div class="body-sphere"></div>';
    document.getElementById("detail-name").textContent = body.name;
    document.getElementById("detail-type").textContent = body.type;

    // Remove back button if exists
    var existingBack = detailPanel.querySelector(".back-btn");
    if (existingBack) existingBack.remove();

    // Reset tabs
    var tabsContainer = document.getElementById("detail-tabs");
    tabsContainer.innerHTML = "";
    var tabs = ["overview", "physical", "orbit", "exploration", "moons"];
    var tabLabels = {
      overview: "Vue d'ensemble",
      physical: "Caracteristiques",
      orbit: "Orbite",
      exploration: "Exploration",
      moons: "Lunes"
    };
    tabs.forEach(function (t) {
      var btn = document.createElement("button");
      btn.className = "tab" + (t === "overview" ? " active" : "");
      btn.dataset.tab = t;
      btn.textContent = tabLabels[t];
      btn.onclick = function () {
        tabsContainer.querySelectorAll(".tab").forEach(function (tb) { tb.classList.remove("active"); });
        btn.classList.add("active");
        renderTab(t, body);
      };
      tabsContainer.appendChild(btn);
    });

    renderTab("overview", body);

    // Sources
    var srcList = document.getElementById("source-links");
    srcList.innerHTML = "";
    body.sources.forEach(function (src) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = src.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = src.label;
      li.appendChild(a);
      srcList.appendChild(li);
    });

    // Show panel
    detailPanel.classList.remove("hidden");
    detailPanel.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  /* ===== Open Moon Detail ===== */
  function openMoonDetail(moon, parentBody) {
    // Set terrain for moon
    var moonTerrain = moon.terrain || parentBody.terrain;
    setTerrain(moonTerrain, moon.name);

    // Header
    var sphere = document.getElementById("detail-sphere-container");
    sphere.innerHTML = '<div class="body-sphere"></div>';
    document.getElementById("detail-name").textContent = moon.name;
    document.getElementById("detail-type").textContent = moon.type || "Satellite naturel";

    // Add back button
    var existingBack = detailPanel.querySelector(".back-btn");
    if (existingBack) existingBack.remove();

    var backBtn = document.createElement("button");
    backBtn.className = "back-btn";
    backBtn.innerHTML = "&larr; " + parentBody.name;
    backBtn.addEventListener("click", function () {
      openDetail(parentBody.id);
    });
    var detailHeader = document.getElementById("detail-header");
    detailHeader.parentNode.insertBefore(backBtn, detailHeader);

    // Build tabs for moon
    var tabsContainer = document.getElementById("detail-tabs");
    tabsContainer.innerHTML = "";

    var moonTabs = ["overview", "physical", "orbit"];
    var tabLabels = {
      overview: "Vue d'ensemble",
      physical: "Caracteristiques",
      orbit: "Orbite",
      exploration: "Exploration"
    };

    if (moon.exploration && moon.exploration.length > 0) {
      moonTabs.push("exploration");
    }

    moonTabs.forEach(function (t) {
      var btn = document.createElement("button");
      btn.className = "tab" + (t === "overview" ? " active" : "");
      btn.dataset.tab = t;
      btn.textContent = tabLabels[t];
      btn.onclick = function () {
        tabsContainer.querySelectorAll(".tab").forEach(function (tb) { tb.classList.remove("active"); });
        btn.classList.add("active");
        renderMoonTab(t, moon);
      };
      tabsContainer.appendChild(btn);
    });

    renderMoonTab("overview", moon);

    document.getElementById("detail-sources").style.display = "none";
    detailPanel.scrollTop = 0;
  }

  function renderMoonTab(tab, moon) {
    var content = document.getElementById("detail-content");
    var html = "";

    switch (tab) {
      case "overview":
        html = '<p style="font-size:1.05rem;line-height:1.8;margin-top:1rem">' + (moon.overview || moon.desc) + '</p>';
        break;

      case "physical":
        if (moon.physical) {
          html = '<div class="info-grid">';
          Object.keys(moon.physical).forEach(function (key) {
            var item = moon.physical[key];
            html += '<div class="info-card"><div class="label">' + key + '</div><div class="value">' + item.value + (item.unit ? '<span class="unit">' + item.unit + '</span>' : '') + '</div></div>';
          });
          html += '</div>';
        } else {
          html = '<p style="color:var(--text-muted);margin-top:1rem">Donnees physiques non disponibles.</p>';
        }
        break;

      case "orbit":
        if (moon.orbit) {
          html = '<div class="info-grid">';
          Object.keys(moon.orbit).forEach(function (key) {
            var item = moon.orbit[key];
            html += '<div class="info-card"><div class="label">' + key + '</div><div class="value">' + item.value + (item.unit ? '<span class="unit">' + item.unit + '</span>' : '') + '</div></div>';
          });
          html += '</div>';
        } else {
          html = '<p style="color:var(--text-muted);margin-top:1rem">Donnees orbitales non disponibles.</p>';
        }
        break;

      case "exploration":
        if (moon.exploration && moon.exploration.length > 0) {
          html = '<div class="mission-timeline">';
          moon.exploration.forEach(function (m) {
            var badgeClass = "badge-" + m.agency;
            var agencyLabel = m.agency === "nasa" ? "NASA" : m.agency === "esa" ? "ESA" : "Autre";
            html += '<div class="mission-item"><div class="mission-year">' + m.year + '</div><div class="mission-info"><h4>' + m.name + '<span class="mission-badge ' + badgeClass + '">' + agencyLabel + '</span></h4><p>' + m.desc + '</p></div></div>';
          });
          html += '</div>';
        }
        break;
    }

    content.innerHTML = html;
  }

  function renderTab(tab, body) {
    var content = document.getElementById("detail-content");
    var html = "";

    document.getElementById("detail-sources").style.display = "";

    switch (tab) {
      case "overview":
        html = '<p style="font-size:1.05rem;line-height:1.8;margin-top:1rem">' + body.overview + '</p>';
        break;

      case "physical":
        html = '<div class="info-grid">';
        Object.keys(body.physical).forEach(function (key) {
          var item = body.physical[key];
          html += '<div class="info-card"><div class="label">' + key + '</div><div class="value">' + item.value + (item.unit ? '<span class="unit">' + item.unit + '</span>' : '') + '</div></div>';
        });
        html += '</div>';
        break;

      case "orbit":
        html = '<div class="info-grid">';
        Object.keys(body.orbit).forEach(function (key) {
          var item = body.orbit[key];
          html += '<div class="info-card"><div class="label">' + key + '</div><div class="value">' + item.value + (item.unit ? '<span class="unit">' + item.unit + '</span>' : '') + '</div></div>';
        });
        html += '</div>';
        break;

      case "exploration":
        if (body.exploration.length === 0) {
          html = '<p style="color:var(--text-muted);margin-top:1rem">Aucune mission referencee.</p>';
        } else {
          html = '<div class="mission-timeline">';
          body.exploration.forEach(function (m) {
            var badgeClass = "badge-" + m.agency;
            var agencyLabel = m.agency === "nasa" ? "NASA" : m.agency === "esa" ? "ESA" : "Autre";
            html += '<div class="mission-item"><div class="mission-year">' + m.year + '</div><div class="mission-info"><h4>' + m.name + '<span class="mission-badge ' + badgeClass + '">' + agencyLabel + '</span></h4><p>' + m.desc + '</p></div></div>';
          });
          html += '</div>';
        }
        break;

      case "moons":
        if (body.moons.length === 0) {
          html = '<p style="color:var(--text-muted);margin-top:1rem">' + body.name + ' ne possede aucune lune connue.</p>';
        } else {
          html = '<h3>' + body.moons.length + ' lune' + (body.moons.length > 1 ? 's' : '') + ' principale' + (body.moons.length > 1 ? 's' : '') + '</h3>';
          html += '<div class="moon-grid">';
          body.moons.forEach(function (moon, idx) {
            html += '<div class="moon-card" data-moon-idx="' + idx + '"><h4>' + moon.name + ' <span class="moon-arrow">&rarr;</span></h4><p>' + moon.desc + '</p></div>';
          });
          html += '</div>';
        }
        break;
    }

    content.innerHTML = html;

    if (tab === "moons") {
      content.querySelectorAll(".moon-card").forEach(function (card) {
        card.addEventListener("click", function () {
          var idx = parseInt(card.dataset.moonIdx, 10);
          var moon = body.moons[idx];
          if (moon) openMoonDetail(moon, body);
        });
      });
    }
  }

  /* ===== Close detail ===== */
  closeBtn.addEventListener("click", closeDetail);
  detailPanel.addEventListener("click", function (e) {
    if (e.target === detailPanel) closeDetail();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDetail();
  });

  function closeDetail() {
    detailPanel.classList.add("hidden");
    document.body.style.overflow = "";
    document.querySelectorAll(".nav-btn").forEach(function (btn) {
      btn.classList.remove("active");
    });
    currentPlanetId = null;
    var existingBack = detailPanel.querySelector(".back-btn");
    if (existingBack) existingBack.remove();
    document.getElementById("detail-sources").style.display = "";
    var tb = document.getElementById("terrain-bg");
    if (tb) tb.innerHTML = "";
  }

  /* ===== Keyboard navigation ===== */
  document.addEventListener("keydown", function (e) {
    if (!detailPanel.classList.contains("hidden")) return;
    var ids = SOLAR_SYSTEM.map(function (b) { return b.id; });
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      var activeBtn = document.querySelector(".nav-btn.active");
      var currentIdx = activeBtn ? ids.indexOf(activeBtn.dataset.id) : -1;
      var nextIdx = (currentIdx + 1) % SOLAR_SYSTEM.length;
      openDetail(SOLAR_SYSTEM[nextIdx].id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      var activeBtn2 = document.querySelector(".nav-btn.active");
      var currentIdx2 = activeBtn2 ? ids.indexOf(activeBtn2.dataset.id) : 1;
      var prevIdx = (currentIdx2 - 1 + SOLAR_SYSTEM.length) % SOLAR_SYSTEM.length;
      openDetail(SOLAR_SYSTEM[prevIdx].id);
    }
  });

  /* ===== HUD: Telemetry Clock ===== */
  function updateTelemetry() {
    var now = new Date();
    var dateStr = now.toISOString().slice(0, 10);
    var timeStr = now.toUTCString().slice(17, 25);
    var dateEl = document.getElementById("telem-date");
    var utcEl = document.getElementById("telem-utc");
    if (dateEl) dateEl.textContent = dateStr;
    if (utcEl) utcEl.textContent = timeStr;
  }

  /* ===== HUD: System Stats ===== */
  function updateStats() {
    var totalMoons = 0;
    var totalMissions = 0;
    SOLAR_SYSTEM.forEach(function (body) {
      totalMoons += body.moons.length;
      totalMissions += body.exploration.length;
      body.moons.forEach(function (moon) {
        if (moon.exploration) totalMissions += moon.exploration.length;
      });
    });
    var moonsEl = document.getElementById("stat-moons");
    var missionsEl = document.getElementById("stat-missions");
    if (moonsEl) moonsEl.textContent = totalMoons;
    if (missionsEl) missionsEl.textContent = totalMissions;
  }

  /* ===== Burger Menu ===== */
  var burgerBtn = document.getElementById("burger-btn");
  var burgerMenu = document.getElementById("burger-menu");

  if (burgerBtn && burgerMenu) {
    burgerBtn.addEventListener("click", function () {
      var isOpen = burgerMenu.classList.contains("burger-open");
      if (isOpen) {
        burgerMenu.classList.remove("burger-open");
        burgerMenu.classList.add("burger-closed");
        burgerBtn.classList.remove("open");
      } else {
        burgerMenu.classList.remove("burger-closed");
        burgerMenu.classList.add("burger-open");
        burgerBtn.classList.add("open");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!burgerBtn.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove("burger-open");
        burgerMenu.classList.add("burger-closed");
        burgerBtn.classList.remove("open");
      }
    });
  }

  function closeBurger() {
    if (burgerMenu && burgerBtn) {
      burgerMenu.classList.remove("burger-open");
      burgerMenu.classList.add("burger-closed");
      burgerBtn.classList.remove("open");
    }
  }

  /* ===== Init ===== */
  buildNav();
  buildOrbits();
  animate();
  updateStats();
  updateTelemetry();
  setInterval(updateTelemetry, 1000);
})();
