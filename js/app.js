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
  const ORBIT_BASE = 55;   // px — first orbit radius
  const ORBIT_STEP = 30;   // px — spacing between orbits
  const PLANET_SIZES = {
    mercure: 8, venus: 12, terre: 12, mars: 10,
    jupiter: 26, saturne: 22, uranus: 18, neptune: 17
  };

  /* ===== Animation state ===== */
  const orbitAngles = {};   // id → current angle (radians)
  const orbitSpeeds = {     // relative speeds (faster = closer to sun)
    mercure: 0.008, venus: 0.006, terre: 0.005, mars: 0.004,
    jupiter: 0.002, saturne: 0.0015, uranus: 0.001, neptune: 0.0008
  };
  let animationId = null;

  /* ===== Build Navigation ===== */
  function buildNav() {
    SOLAR_SYSTEM.forEach(function (body) {
      const btn = document.createElement("button");
      btn.className = "nav-btn";
      btn.textContent = body.name;
      btn.dataset.id = body.id;
      btn.addEventListener("click", function () {
        openDetail(body.id);
      });
      nav.appendChild(btn);
    });
  }

  /* ===== Build Orbits & Planets ===== */
  function buildOrbits() {
    const planets = SOLAR_SYSTEM.filter(function (b) { return b.orbitIndex > 0; });

    planets.forEach(function (planet) {
      const radius = ORBIT_BASE + (planet.orbitIndex - 1) * ORBIT_STEP;
      const size = radius * 2;

      // Orbit ring
      const ring = document.createElement("div");
      ring.className = "orbit-ring";
      ring.style.width = size + "px";
      ring.style.height = size + "px";
      orbitsContainer.appendChild(ring);

      // Planet dot
      const dot = document.createElement("div");
      dot.className = "planet-dot";
      dot.dataset.id = planet.id;
      const pSize = PLANET_SIZES[planet.id] || 12;
      dot.style.width = pSize + "px";
      dot.style.height = pSize + "px";
      dot.style.background = planet.gradient;

      const label = document.createElement("span");
      label.className = "body-label";
      label.textContent = planet.name;
      dot.appendChild(label);

      dot.addEventListener("click", function () {
        openDetail(planet.id);
      });

      solarView.appendChild(dot);

      // Init angle — spread planets around so they're not all stacked
      orbitAngles[planet.id] = (planet.orbitIndex / 9) * Math.PI * 2;
    });
  }

  /* ===== Animate Orbits ===== */
  function animate() {
    const centerX = solarView.offsetWidth / 2;
    const centerY = solarView.offsetHeight / 2;

    const planets = SOLAR_SYSTEM.filter(function (b) { return b.orbitIndex > 0; });

    planets.forEach(function (planet) {
      const radius = ORBIT_BASE + (planet.orbitIndex - 1) * ORBIT_STEP;
      const speed = orbitSpeeds[planet.id] || 0.003;
      orbitAngles[planet.id] += speed;

      const angle = orbitAngles[planet.id];
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const dot = solarView.querySelector('.planet-dot[data-id="' + planet.id + '"]');
      if (dot) {
        const pSize = PLANET_SIZES[planet.id] || 12;
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

    // Highlight nav
    document.querySelectorAll(".nav-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.id === id);
    });

    // Header
    var sphere = document.getElementById("detail-sphere-container");
    sphere.innerHTML = '<div class="body-sphere" style="background:' + body.gradient + '"></div>';
    document.getElementById("detail-name").textContent = body.name;
    document.getElementById("detail-type").textContent = body.type;

    // Reset tabs
    document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
    document.querySelector('.tab[data-tab="overview"]').classList.add("active");
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
    document.body.style.overflow = "hidden";

    // Tab listeners (re-bind)
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.onclick = function () {
        document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        renderTab(tab.dataset.tab, body);
      };
    });
  }

  function renderTab(tab, body) {
    var content = document.getElementById("detail-content");
    var html = "";

    switch (tab) {
      case "overview":
        html = '<p style="font-size:1.05rem;line-height:1.8;margin-top:1rem">' + body.overview + '</p>';
        break;

      case "physical":
        html = '<div class="info-grid">';
        Object.keys(body.physical).forEach(function (key) {
          var item = body.physical[key];
          html += '<div class="info-card">' +
            '<div class="label">' + key + '</div>' +
            '<div class="value">' + item.value +
            (item.unit ? '<span class="unit">' + item.unit + '</span>' : '') +
            '</div></div>';
        });
        html += '</div>';
        break;

      case "orbit":
        html = '<div class="info-grid">';
        Object.keys(body.orbit).forEach(function (key) {
          var item = body.orbit[key];
          html += '<div class="info-card">' +
            '<div class="label">' + key + '</div>' +
            '<div class="value">' + item.value +
            (item.unit ? '<span class="unit">' + item.unit + '</span>' : '') +
            '</div></div>';
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
            html += '<div class="mission-item">' +
              '<div class="mission-year">' + m.year + '</div>' +
              '<div class="mission-info">' +
              '<h4>' + m.name + '<span class="mission-badge ' + badgeClass + '">' + agencyLabel + '</span></h4>' +
              '<p>' + m.desc + '</p>' +
              '</div></div>';
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
          body.moons.forEach(function (moon) {
            html += '<div class="moon-card">' +
              '<h4>' + moon.name + '</h4>' +
              '<p>' + moon.desc + '</p></div>';
          });
          html += '</div>';
        }
        break;
    }

    content.innerHTML = html;
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
  }

  /* ===== Keyboard navigation ===== */
  document.addEventListener("keydown", function (e) {
    if (!detailPanel.classList.contains("hidden")) return; // detail open, skip
    var planets = SOLAR_SYSTEM.filter(function (b) { return b.orbitIndex > 0; });
    var ids = planets.map(function (p) { return p.id; });
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      var activeBtn = document.querySelector(".nav-btn.active");
      var currentIdx = activeBtn ? ids.indexOf(activeBtn.dataset.id) : -1;
      var nextIdx = (currentIdx + 1) % SOLAR_SYSTEM.length;
      openDetail(SOLAR_SYSTEM[nextIdx].id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      var activeBtn2 = document.querySelector(".nav-btn.active");
      var currentIdx2 = activeBtn2 ? SOLAR_SYSTEM.findIndex(function (b) { return b.id === activeBtn2.dataset.id; }) : 1;
      var prevIdx = (currentIdx2 - 1 + SOLAR_SYSTEM.length) % SOLAR_SYSTEM.length;
      openDetail(SOLAR_SYSTEM[prevIdx].id);
    }
  });

  /* ===== Init ===== */
  buildNav();
  buildOrbits();
  animate();
})();
