/**
 * Solar System data — sourced from NASA Planetary Fact Sheets,
 * NASA Solar System Exploration, ESA Science & Exploration.
 *
 * Refs:
 *  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/
 *  - https://solarsystem.nasa.gov/
 *  - https://www.esa.int/Science_Exploration/Space_Science
 */

const SOLAR_SYSTEM = [
  /* ============ SOLEIL ============ */
  {
    id: "soleil",
    name: "Soleil",
    type: "Etoile (naine jaune, type G2V)",
    color: "#FFB300",
    gradient: "radial-gradient(circle at 35% 35%,#fff8e1,#ffb300,#e65100)",
    terrain: ["#ff6f00","#e65100","#bf360c","#d84315","#ff8f00","#e64a19"],
    orbitIndex: 0,
    overview: `Le Soleil est l'etoile au centre de notre systeme solaire. C'est une sphere quasi parfaite de plasma chaud, qui genere de l'energie par fusion nucleaire d'hydrogene en helium dans son noyau. Il represente 99,86 % de la masse totale du systeme solaire. Sa lumiere met environ 8 minutes et 20 secondes pour atteindre la Terre.`,
    physical: {
      "Diametre": { value: "1 392 700", unit: "km" },
      "Masse": { value: "1,989 x 10^30", unit: "kg" },
      "Temperature de surface": { value: "5 500", unit: "°C" },
      "Temperature du noyau": { value: "~15 000 000", unit: "°C" },
      "Age": { value: "~4,6", unit: "milliards d'annees" },
      "Type spectral": { value: "G2V", unit: "" },
      "Luminosite": { value: "3,828 x 10^26", unit: "W" },
      "Composition": { value: "73 % H, 25 % He", unit: "" }
    },
    orbit: {
      "Position dans la galaxie": { value: "Bras d'Orion", unit: "" },
      "Distance au centre galactique": { value: "~26 000", unit: "annees-lumiere" },
      "Periode orbitale galactique": { value: "~225-250", unit: "millions d'annees" },
      "Vitesse orbitale": { value: "~220", unit: "km/s" }
    },
    exploration: [
      { year: "1990", name: "Ulysses", agency: "nasa", desc: "Mission conjointe NASA/ESA pour etudier les poles du Soleil" },
      { year: "1995", name: "SOHO", agency: "esa", desc: "Observatoire solaire et heliospherique, toujours actif" },
      { year: "2006", name: "STEREO", agency: "nasa", desc: "Deux sondes pour observer le Soleil en stereoscopie" },
      { year: "2010", name: "SDO", agency: "nasa", desc: "Solar Dynamics Observatory — imagerie haute resolution" },
      { year: "2018", name: "Parker Solar Probe", agency: "nasa", desc: "Sonde la plus proche du Soleil jamais lancee, etude de la couronne" },
      { year: "2020", name: "Solar Orbiter", agency: "esa", desc: "Etude des poles solaires et du vent solaire" }
    ],
    moons: [],
    sources: [
      { label: "NASA — Sun Overview", url: "https://solarsystem.nasa.gov/solar-system/sun/overview/" },
      { label: "NASA — Sun Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html" },
      { label: "ESA — Solar Orbiter", url: "https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter" }
    ]
  },

  /* ============ MERCURE ============ */
  {
    id: "mercure",
    name: "Mercure",
    type: "Planete tellurique",
    color: "#9e9e9e",
    gradient: "radial-gradient(circle at 35% 35%,#cfd8dc,#9e9e9e,#616161)",
    terrain: ["#424242","#616161","#757575","#545454","#4e4e4e","#6b6b6b"],
    orbitIndex: 1,
    overview: `Mercure est la planete la plus proche du Soleil et la plus petite du systeme solaire. Elle ne possede quasiment pas d'atmosphere. Sa surface est couverte de crateres, rappelant la Lune. Les temperatures varient entre -180 °C la nuit et 430 °C le jour. Une annee sur Mercure dure seulement 88 jours terrestres.`,
    physical: {
      "Diametre": { value: "4 879,4", unit: "km" },
      "Masse": { value: "3,301 x 10^23", unit: "kg" },
      "Gravite de surface": { value: "3,7", unit: "m/s²" },
      "Temperature moyenne": { value: "167", unit: "°C" },
      "Temperature min / max": { value: "-180 / 430", unit: "°C" },
      "Densite": { value: "5,427", unit: "g/cm³" },
      "Inclinaison axiale": { value: "0,034", unit: "°" },
      "Champ magnetique": { value: "Oui (faible)", unit: "" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "57,9", unit: "millions km" },
      "Perihelie": { value: "46,0", unit: "millions km" },
      "Aphelie": { value: "69,8", unit: "millions km" },
      "Periode orbitale": { value: "87,97", unit: "jours" },
      "Periode de rotation": { value: "58,65", unit: "jours" },
      "Vitesse orbitale moy.": { value: "47,36", unit: "km/s" },
      "Excentricite": { value: "0,2056", unit: "" }
    },
    exploration: [
      { year: "1974", name: "Mariner 10", agency: "nasa", desc: "Premier survol de Mercure, cartographie de 45 % de la surface" },
      { year: "2011", name: "MESSENGER", agency: "nasa", desc: "Premiere sonde en orbite autour de Mercure, decouverte de glace aux poles" },
      { year: "2018", name: "BepiColombo", agency: "esa", desc: "Mission conjointe ESA/JAXA, arrivee prevue en 2025" }
    ],
    moons: [],
    sources: [
      { label: "NASA — Mercury", url: "https://solarsystem.nasa.gov/planets/mercury/overview/" },
      { label: "NASA — Mercury Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html" },
      { label: "ESA — BepiColombo", url: "https://www.esa.int/Science_Exploration/Space_Science/BepiColombo" }
    ]
  },

  /* ============ VENUS ============ */
  {
    id: "venus",
    name: "Venus",
    type: "Planete tellurique",
    color: "#e6a83e",
    gradient: "radial-gradient(circle at 35% 35%,#fff3e0,#e6a83e,#bf6900)",
    terrain: ["#bf8040","#a66b2e","#cc9350","#8d5e26","#c47a30","#9e6b38"],
    orbitIndex: 2,
    overview: `Venus est souvent appelee la «soeur jumelle» de la Terre en raison de leur taille similaire. C'est la planete la plus chaude du systeme solaire a cause d'un effet de serre extreme. Son atmosphere est composee a 96 % de CO₂. Venus tourne sur elle-meme dans le sens inverse de la plupart des autres planetes (rotation retrograde).`,
    physical: {
      "Diametre": { value: "12 104", unit: "km" },
      "Masse": { value: "4,867 x 10^24", unit: "kg" },
      "Gravite de surface": { value: "8,87", unit: "m/s²" },
      "Temperature de surface": { value: "~464", unit: "°C" },
      "Pression atmospherique": { value: "~92", unit: "bar" },
      "Densite": { value: "5,243", unit: "g/cm³" },
      "Atmosphere": { value: "96 % CO₂, 3,5 % N₂", unit: "" },
      "Champ magnetique": { value: "Non (negligeable)", unit: "" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "108,2", unit: "millions km" },
      "Perihelie": { value: "107,5", unit: "millions km" },
      "Aphelie": { value: "108,9", unit: "millions km" },
      "Periode orbitale": { value: "224,7", unit: "jours" },
      "Periode de rotation": { value: "243,02", unit: "jours (retrograde)" },
      "Vitesse orbitale moy.": { value: "35,02", unit: "km/s" },
      "Excentricite": { value: "0,0068", unit: "" }
    },
    exploration: [
      { year: "1970", name: "Venera 7", agency: "other", desc: "Premiere sonde a transmettre depuis la surface (URSS)" },
      { year: "1990", name: "Magellan", agency: "nasa", desc: "Cartographie radar de 98 % de la surface" },
      { year: "2006", name: "Venus Express", agency: "esa", desc: "Etude de l'atmosphere et du climat vénusien" },
      { year: "2010", name: "Akatsuki", agency: "other", desc: "Orbiteur japonais (JAXA), etude de l'atmosphere" },
      { year: "2031", name: "VERITAS (prevue)", agency: "nasa", desc: "Cartographie de surface haute resolution" },
      { year: "2031", name: "EnVision (prevue)", agency: "esa", desc: "Etude geologique et atmospherique" }
    ],
    moons: [],
    sources: [
      { label: "NASA — Venus", url: "https://solarsystem.nasa.gov/planets/venus/overview/" },
      { label: "NASA — Venus Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html" },
      { label: "ESA — Venus Express", url: "https://www.esa.int/Science_Exploration/Space_Science/Venus_Express" }
    ]
  },

  /* ============ TERRE ============ */
  {
    id: "terre",
    name: "Terre",
    type: "Planete tellurique",
    color: "#4fc3f7",
    gradient: "radial-gradient(circle at 35% 35%,#e1f5fe,#4fc3f7,#0277bd)",
    terrain: ["#2a7aaa","#2a9070","#40a878","#1e80b0","#30b080","#2890b0"],
    orbitIndex: 3,
    overview: `La Terre est la troisieme planete du systeme solaire et la seule connue pour abriter la vie. 71 % de sa surface est recouverte d'eau liquide. Elle possede une atmosphere riche en azote (78 %) et en oxygene (21 %) ainsi qu'un champ magnetique protecteur genere par son noyau de fer en fusion.`,
    physical: {
      "Diametre": { value: "12 742", unit: "km" },
      "Masse": { value: "5,972 x 10^24", unit: "kg" },
      "Gravite de surface": { value: "9,81", unit: "m/s²" },
      "Temperature moyenne": { value: "15", unit: "°C" },
      "Densite": { value: "5,514", unit: "g/cm³" },
      "Atmosphere": { value: "78 % N₂, 21 % O₂", unit: "" },
      "Inclinaison axiale": { value: "23,44", unit: "°" },
      "Champ magnetique": { value: "Oui", unit: "" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "149,6", unit: "millions km (1 UA)" },
      "Perihelie": { value: "147,1", unit: "millions km" },
      "Aphelie": { value: "152,1", unit: "millions km" },
      "Periode orbitale": { value: "365,25", unit: "jours" },
      "Periode de rotation": { value: "23 h 56 min", unit: "" },
      "Vitesse orbitale moy.": { value: "29,78", unit: "km/s" },
      "Excentricite": { value: "0,0167", unit: "" }
    },
    exploration: [
      { year: "1957", name: "Spoutnik 1", agency: "other", desc: "Premier satellite artificiel en orbite terrestre (URSS)" },
      { year: "1961", name: "Vostok 1", agency: "other", desc: "Premier vol spatial humain — Youri Gagarine (URSS)" },
      { year: "1998", name: "ISS", agency: "nasa", desc: "Station spatiale internationale, collaboration multinational" },
      { year: "1999", name: "Terra", agency: "nasa", desc: "Satellite d'observation de la Terre" },
      { year: "2002", name: "Envisat", agency: "esa", desc: "Plus grand satellite d'observation terrestre europeen" },
      { year: "2023", name: "EarthCARE", agency: "esa", desc: "Etude des nuages, aerosols et bilan radiatif" }
    ],
    moons: [
      {
        name: "Lune",
        type: "Satellite naturel",
        terrain: ["#5a5a5a","#6e6e6e","#4a4a4a","#787878","#3e3e3e","#626262"],
        desc: "Unique satellite naturel, diametre 3 474 km, distance moy. 384 400 km",
        overview: `La Lune est l'unique satellite naturel de la Terre et le cinquieme plus grand satellite du systeme solaire. Elle est le seul corps celeste autre que la Terre ou des humains ont pose le pied. Sa face visible est marquee de mers basaltiques sombres et de crateres d'impact. Elle influence les marees terrestres et stabilise l'inclinaison axiale de la Terre.`,
        physical: {
          "Diametre": { value: "3 474,8", unit: "km" },
          "Masse": { value: "7,342 x 10^22", unit: "kg" },
          "Gravite de surface": { value: "1,62", unit: "m/s²" },
          "Temperature de surface": { value: "-173 / +127", unit: "°C" },
          "Densite": { value: "3,344", unit: "g/cm³" },
          "Atmosphere": { value: "Quasi inexistante", unit: "" },
          "Albedo": { value: "0,136", unit: "" },
          "Vitesse de liberation": { value: "2,38", unit: "km/s" }
        },
        orbit: {
          "Distance a la Terre (moy.)": { value: "384 400", unit: "km" },
          "Perigee": { value: "363 300", unit: "km" },
          "Apogee": { value: "405 500", unit: "km" },
          "Periode orbitale": { value: "27,32", unit: "jours" },
          "Periode de rotation": { value: "27,32", unit: "jours (synchrone)" },
          "Vitesse orbitale moy.": { value: "1,022", unit: "km/s" },
          "Inclinaison orbitale": { value: "5,145", unit: "°" }
        },
        exploration: [
          { year: "1959", name: "Luna 2", agency: "other", desc: "Premier objet humain a atteindre la Lune (URSS)" },
          { year: "1969", name: "Apollo 11", agency: "nasa", desc: "Premier alunissage humain — Neil Armstrong et Buzz Aldrin" },
          { year: "1972", name: "Apollo 17", agency: "nasa", desc: "Derniere mission habitee sur la Lune" },
          { year: "2009", name: "LRO", agency: "nasa", desc: "Lunar Reconnaissance Orbiter, cartographie haute resolution" },
          { year: "2022", name: "Artemis I", agency: "nasa", desc: "Premier vol non habite du SLS et d'Orion autour de la Lune, 25 jours en mission" },
          { year: "2026", name: "Artemis II", agency: "nasa", desc: "Premier vol habite d'Orion autour de la Lune depuis Apollo 17 (1972). Equipage : Wiseman, Glover, Koch (NASA) et Hansen (CSA). Lancement le 1er avril 2026" },
          { year: "2027", name: "Artemis III (prevue)", agency: "nasa", desc: "Mission en orbite terrestre basse pour tester les operations integrees entre Orion et les atterrisseurs commerciaux SpaceX/Blue Origin" },
          { year: "2028", name: "Artemis IV (prevue)", agency: "nasa", desc: "Premier alunissage habite du programme Artemis, pole sud lunaire" }
        ]
      }
    ],
    sources: [
      { label: "NASA — Earth", url: "https://solarsystem.nasa.gov/planets/earth/overview/" },
      { label: "NASA — Earth Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html" },
      { label: "ESA — Observing the Earth", url: "https://www.esa.int/Applications/Observing_the_Earth" }
    ]
  },

  /* ============ MARS ============ */
  {
    id: "mars",
    name: "Mars",
    type: "Planete tellurique",
    color: "#e53935",
    gradient: "radial-gradient(circle at 35% 35%,#ffcdd2,#e53935,#8b1a1a)",
    terrain: ["#b53a18","#c44828","#9a3015","#d45838","#8a2510","#cc5030"],
    orbitIndex: 4,
    overview: `Mars, la «planete rouge», doit sa couleur a l'oxyde de fer present a sa surface. Elle possede la plus haute montagne du systeme solaire (Olympus Mons, 21,9 km) et un immense canyon (Valles Marineris, 4 000 km de long). Des preuves suggerent que de l'eau liquide a coule a sa surface dans le passe.`,
    physical: {
      "Diametre": { value: "6 779", unit: "km" },
      "Masse": { value: "6,417 x 10^23", unit: "kg" },
      "Gravite de surface": { value: "3,72", unit: "m/s²" },
      "Temperature moyenne": { value: "-65", unit: "°C" },
      "Densite": { value: "3,934", unit: "g/cm³" },
      "Atmosphere": { value: "95 % CO₂, 2,7 % N₂", unit: "" },
      "Pression atm. (surface)": { value: "~0,006", unit: "bar" },
      "Champ magnetique": { value: "Non (residuel)", unit: "" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "227,9", unit: "millions km" },
      "Perihelie": { value: "206,7", unit: "millions km" },
      "Aphelie": { value: "249,2", unit: "millions km" },
      "Periode orbitale": { value: "687", unit: "jours" },
      "Periode de rotation": { value: "24 h 37 min", unit: "" },
      "Vitesse orbitale moy.": { value: "24,07", unit: "km/s" },
      "Excentricite": { value: "0,0934", unit: "" }
    },
    exploration: [
      { year: "1971", name: "Mariner 9", agency: "nasa", desc: "Premier orbiteur martien, decouverte de Valles Marineris" },
      { year: "1997", name: "Mars Pathfinder", agency: "nasa", desc: "Premier rover (Sojourner) a la surface de Mars" },
      { year: "2004", name: "Spirit & Opportunity", agency: "nasa", desc: "Rovers jumeaux, Opportunity a roule 45 km en 15 ans" },
      { year: "2004", name: "Mars Express", agency: "esa", desc: "Orbiteur toujours actif, detection de glace souterraine" },
      { year: "2012", name: "Curiosity", agency: "nasa", desc: "Rover du MSL, analyse geochimique dans le cratere Gale" },
      { year: "2016", name: "ExoMars TGO", agency: "esa", desc: "Orbiteur d'etude des gaz traces atmospheriques" },
      { year: "2021", name: "Perseverance", agency: "nasa", desc: "Rover + helicoptere Ingenuity, collecte d'echantillons" }
    ],
    moons: [
      {
        name: "Phobos",
        type: "Satellite naturel (irregulier)",
        terrain: ["#5a4030","#6b4a38","#4d3525","#7a5540","#3e2a1a","#604035"],
        desc: "Plus grande lune de Mars, 22,4 km, orbite a 6 000 km",
        overview: `Phobos est la plus grande et la plus proche des deux lunes de Mars. De forme irreguliere, elle est probablement un asteroide capture. Le cratere Stickney, de 9 km de diametre, domine sa surface. Phobos se rapproche lentement de Mars et sera detruite dans environ 50 millions d'annees.`,
        physical: {
          "Dimensions": { value: "27 x 22 x 18", unit: "km" },
          "Masse": { value: "1,066 x 10^16", unit: "kg" },
          "Gravite de surface": { value: "0,0057", unit: "m/s²" },
          "Densite": { value: "1,876", unit: "g/cm³" },
          "Temperature de surface": { value: "-40 / -4", unit: "°C" },
          "Albedo": { value: "0,071", unit: "" }
        },
        orbit: {
          "Distance a Mars (moy.)": { value: "9 376", unit: "km" },
          "Periode orbitale": { value: "7 h 39 min", unit: "" },
          "Vitesse orbitale": { value: "2,138", unit: "km/s" },
          "Excentricite": { value: "0,0151", unit: "" }
        },
        exploration: [
          { year: "1971", name: "Mariner 9", agency: "nasa", desc: "Premieres images rapprochees de Phobos" },
          { year: "2004", name: "Mars Express", agency: "esa", desc: "Survols rapproches, etude de la composition" }
        ]
      },
      {
        name: "Deimos",
        type: "Satellite naturel (irregulier)",
        terrain: ["#5a4030","#6b4a38","#4d3525","#7a5540","#3e2a1a","#604035"],
        desc: "Plus petite lune de Mars, 12,4 km, orbite a 23 460 km",
        overview: `Deimos est la plus petite et la plus eloignee des deux lunes de Mars. Sa surface est plus lisse que celle de Phobos, recouverte d'une couche de regolithe. Comme Phobos, elle est probablement un asteroide capture. Contrairement a Phobos, Deimos s'eloigne lentement de Mars.`,
        physical: {
          "Dimensions": { value: "15 x 12 x 11", unit: "km" },
          "Masse": { value: "1,476 x 10^15", unit: "kg" },
          "Gravite de surface": { value: "0,003", unit: "m/s²" },
          "Densite": { value: "1,471", unit: "g/cm³" },
          "Temperature de surface": { value: "~-40", unit: "°C" },
          "Albedo": { value: "0,068", unit: "" }
        },
        orbit: {
          "Distance a Mars (moy.)": { value: "23 458", unit: "km" },
          "Periode orbitale": { value: "30 h 18 min", unit: "" },
          "Vitesse orbitale": { value: "1,351", unit: "km/s" },
          "Excentricite": { value: "0,0002", unit: "" }
        },
        exploration: [
          { year: "1977", name: "Viking 2", agency: "nasa", desc: "Premieres images detaillees de Deimos" }
        ]
      }
    ],
    sources: [
      { label: "NASA — Mars", url: "https://solarsystem.nasa.gov/planets/mars/overview/" },
      { label: "NASA — Mars Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html" },
      { label: "ESA — Mars Express", url: "https://www.esa.int/Science_Exploration/Space_Science/Mars_Express" }
    ]
  },

  /* ============ JUPITER ============ */
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Geante gazeuse",
    color: "#d4a373",
    gradient: "radial-gradient(circle at 35% 35%,#ffe0b2,#d4a373,#8d6e63)",
    terrain: ["#8d6e4a","#a07850","#6e5535","#c49060","#7a6040","#b38558"],
    orbitIndex: 5,
    overview: `Jupiter est la plus grande planete du systeme solaire — plus de 1 300 Terres pourraient tenir a l'interieur. C'est une geante gazeuse composee principalement d'hydrogene et d'helium. Sa Grande Tache Rouge est une tempete anticyclonique geante active depuis au moins 350 ans. Jupiter possede un puissant champ magnetique et un systeme d'anneaux tenu.`,
    physical: {
      "Diametre": { value: "139 820", unit: "km" },
      "Masse": { value: "1,898 x 10^27", unit: "kg" },
      "Gravite de surface": { value: "24,79", unit: "m/s²" },
      "Temperature (sommet nuages)": { value: "-110", unit: "°C" },
      "Densite": { value: "1,326", unit: "g/cm³" },
      "Composition": { value: "~90 % H₂, ~10 % He", unit: "" },
      "Nombre de lunes connues": { value: "95", unit: "(2024)" },
      "Champ magnetique": { value: "Oui (le plus intense)", unit: "" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "778,5", unit: "millions km" },
      "Perihelie": { value: "740,6", unit: "millions km" },
      "Aphelie": { value: "816,4", unit: "millions km" },
      "Periode orbitale": { value: "11,86", unit: "annees" },
      "Periode de rotation": { value: "9 h 56 min", unit: "" },
      "Vitesse orbitale moy.": { value: "13,07", unit: "km/s" },
      "Excentricite": { value: "0,0489", unit: "" }
    },
    exploration: [
      { year: "1973", name: "Pioneer 10", agency: "nasa", desc: "Premier survol de Jupiter" },
      { year: "1979", name: "Voyager 1 & 2", agency: "nasa", desc: "Decouverte des anneaux et de volcans sur Io" },
      { year: "1995", name: "Galileo", agency: "nasa", desc: "Premier orbiteur de Jupiter, sonde atmospherique" },
      { year: "2016", name: "Juno", agency: "nasa", desc: "Etude de l'interieur, champ magnetique et atmosphere" },
      { year: "2023", name: "JUICE", agency: "esa", desc: "Mission vers les lunes glacees, arrivee prevue 2031" }
    ],
    moons: [
      {
        name: "Io",
        type: "Satellite galileen",
        terrain: ["#c8a020","#d4a828","#b09018","#e0b830","#a08010","#cca025"],
        desc: "Corps le plus volcaniquement actif du systeme solaire, 3 643 km",
        overview: `Io est le corps le plus volcaniquement actif du systeme solaire avec plus de 400 volcans actifs. Ce volcanisme intense est cause par les forces de maree exercees par Jupiter, Europe et Ganymede. Sa surface est constamment renouvelee par des coulees de lave et des depots de soufre, lui donnant des couleurs jaunes, oranges et rouges.`,
        physical: {
          "Diametre": { value: "3 643,2", unit: "km" },
          "Masse": { value: "8,932 x 10^22", unit: "kg" },
          "Gravite de surface": { value: "1,796", unit: "m/s²" },
          "Temperature de surface": { value: "-143 / +1 700", unit: "°C (volcans)" },
          "Densite": { value: "3,528", unit: "g/cm³" },
          "Atmosphere": { value: "SO₂ (tres tenue)", unit: "" },
          "Volcans actifs": { value: ">400", unit: "" },
          "Albedo": { value: "0,63", unit: "" }
        },
        orbit: {
          "Distance a Jupiter (moy.)": { value: "421 700", unit: "km" },
          "Periode orbitale": { value: "1,769", unit: "jours" },
          "Vitesse orbitale": { value: "17,334", unit: "km/s" },
          "Resonance": { value: "1:2:4", unit: "avec Europe et Ganymede" }
        },
        exploration: [
          { year: "1979", name: "Voyager 1", agency: "nasa", desc: "Decouverte du volcanisme actif sur Io" },
          { year: "1995", name: "Galileo", agency: "nasa", desc: "Survols rapproches, etude detaillee des volcans" },
          { year: "2024", name: "Juno", agency: "nasa", desc: "Survols rapproches a 1 500 km" }
        ]
      },
      {
        name: "Europe",
        type: "Satellite galileen",
        terrain: ["#8aaab0","#9ab8be","#7a9aa0","#a8c8ce","#6a8a90","#90b0b8"],
        desc: "Ocean liquide sous la glace, candidat pour la vie, 3 122 km",
        overview: `Europe possede un vaste ocean d'eau liquide sous une croute de glace de 15 a 25 km d'epaisseur. Cet ocean contient environ deux fois plus d'eau que tous les oceans terrestres reunis. Les lineae (fractures) a sa surface temoignent d'une activite tectonique. Europe est consideree comme l'un des meilleurs candidats pour abriter la vie extraterrestre.`,
        physical: {
          "Diametre": { value: "3 121,6", unit: "km" },
          "Masse": { value: "4,800 x 10^22", unit: "kg" },
          "Gravite de surface": { value: "1,314", unit: "m/s²" },
          "Temperature de surface": { value: "-160 / -220", unit: "°C" },
          "Densite": { value: "3,013", unit: "g/cm³" },
          "Epaisseur de glace": { value: "15-25", unit: "km" },
          "Profondeur ocean": { value: "60-150", unit: "km" },
          "Albedo": { value: "0,67", unit: "" }
        },
        orbit: {
          "Distance a Jupiter (moy.)": { value: "671 100", unit: "km" },
          "Periode orbitale": { value: "3,551", unit: "jours" },
          "Vitesse orbitale": { value: "13,740", unit: "km/s" },
          "Resonance": { value: "1:2:4", unit: "avec Io et Ganymede" }
        },
        exploration: [
          { year: "1979", name: "Voyager 2", agency: "nasa", desc: "Premieres images detaillees de la surface glacee" },
          { year: "1995", name: "Galileo", agency: "nasa", desc: "Preuves d'un ocean sous la glace" },
          { year: "2024", name: "Europa Clipper", agency: "nasa", desc: "Mission dediee a l'etude de l'habitabilite" },
          { year: "2031", name: "JUICE", agency: "esa", desc: "Survols prevus d'Europe" }
        ]
      },
      {
        name: "Ganymede",
        type: "Satellite galileen",
        terrain: ["#5a5a62","#6a6a72","#4a4a52","#7a7a82","#3e3e46","#606068"],
        desc: "Plus grande lune du systeme solaire, 5 268 km, champ magnetique propre",
        overview: `Ganymede est la plus grande lune du systeme solaire — plus grande que Mercure. C'est le seul satellite connu possedant son propre champ magnetique. Elle possede un ocean d'eau salee sous sa surface glacee, pris en sandwich entre des couches de glace. Sa surface presente des regions sombres anciennes et des terrains stries plus jeunes.`,
        physical: {
          "Diametre": { value: "5 268,2", unit: "km" },
          "Masse": { value: "1,482 x 10^23", unit: "kg" },
          "Gravite de surface": { value: "1,428", unit: "m/s²" },
          "Temperature de surface": { value: "-203 / -121", unit: "°C" },
          "Densite": { value: "1,936", unit: "g/cm³" },
          "Champ magnetique": { value: "Oui (propre)", unit: "" },
          "Composition": { value: "Glace + silicates", unit: "" },
          "Albedo": { value: "0,43", unit: "" }
        },
        orbit: {
          "Distance a Jupiter (moy.)": { value: "1 070 400", unit: "km" },
          "Periode orbitale": { value: "7,155", unit: "jours" },
          "Vitesse orbitale": { value: "10,880", unit: "km/s" },
          "Resonance": { value: "1:2:4", unit: "avec Io et Europe" }
        },
        exploration: [
          { year: "1979", name: "Voyager 1 & 2", agency: "nasa", desc: "Premieres images detaillees" },
          { year: "1996", name: "Galileo", agency: "nasa", desc: "Decouverte du champ magnetique et de l'ocean interne" },
          { year: "2031", name: "JUICE", agency: "esa", desc: "Mission principale — mise en orbite autour de Ganymede prevue 2034" }
        ]
      },
      {
        name: "Callisto",
        type: "Satellite galileen",
        terrain: ["#3a3a40","#4a4a50","#2e2e34","#5a5a60","#222228","#404048"],
        desc: "Surface la plus craterisee du systeme solaire, 4 821 km",
        overview: `Callisto possede la surface la plus craterisee du systeme solaire, indiquant une tres faible activite geologique depuis des milliards d'annees. Malgre cela, des donnees suggerent la presence d'un ocean liquide sous sa surface. Callisto est consideree comme un site potentiel pour une future base spatiale humaine en raison de sa distance relative aux ceintures de radiations de Jupiter.`,
        physical: {
          "Diametre": { value: "4 820,6", unit: "km" },
          "Masse": { value: "1,076 x 10^23", unit: "kg" },
          "Gravite de surface": { value: "1,235", unit: "m/s²" },
          "Temperature de surface": { value: "-139 / -193", unit: "°C" },
          "Densite": { value: "1,834", unit: "g/cm³" },
          "Composition": { value: "Glace + roche (50/50)", unit: "" },
          "Age de la surface": { value: "~4", unit: "milliards d'annees" },
          "Albedo": { value: "0,22", unit: "" }
        },
        orbit: {
          "Distance a Jupiter (moy.)": { value: "1 882 700", unit: "km" },
          "Periode orbitale": { value: "16,689", unit: "jours" },
          "Vitesse orbitale": { value: "8,204", unit: "km/s" },
          "Inclinaison": { value: "0,192", unit: "°" }
        },
        exploration: [
          { year: "1979", name: "Voyager 1 & 2", agency: "nasa", desc: "Premieres images, decouverte de Valhalla" },
          { year: "1996", name: "Galileo", agency: "nasa", desc: "8 survols, indices d'un ocean souterrain" },
          { year: "2031", name: "JUICE", agency: "esa", desc: "Survols prevus de Callisto" }
        ]
      }
    ],
    sources: [
      { label: "NASA — Jupiter", url: "https://solarsystem.nasa.gov/planets/jupiter/overview/" },
      { label: "NASA — Jupiter Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html" },
      { label: "ESA — JUICE", url: "https://www.esa.int/Science_Exploration/Space_Science/Juice" }
    ]
  },

  /* ============ SATURNE ============ */
  {
    id: "saturne",
    name: "Saturne",
    type: "Geante gazeuse",
    color: "#f0c27a",
    gradient: "radial-gradient(circle at 35% 35%,#fff8e1,#f0c27a,#a1887f)",
    terrain: ["#c9a858","#b89848","#a88838","#d4b868","#9a7a30","#c0a050"],
    orbitIndex: 6,
    overview: `Saturne est celebre pour son spectaculaire systeme d'anneaux, composes principalement de particules de glace et de roche. C'est la deuxieme plus grande planete et la moins dense — elle flotterait sur l'eau. Ses anneaux s'etendent sur 282 000 km mais font moins de 100 m d'epaisseur par endroits.`,
    physical: {
      "Diametre": { value: "116 460", unit: "km" },
      "Masse": { value: "5,683 x 10^26", unit: "kg" },
      "Gravite de surface": { value: "10,44", unit: "m/s²" },
      "Temperature (sommet nuages)": { value: "-140", unit: "°C" },
      "Densite": { value: "0,687", unit: "g/cm³" },
      "Composition": { value: "~96 % H₂, ~3 % He", unit: "" },
      "Nombre de lunes connues": { value: "146", unit: "(2024)" },
      "Systeme d'anneaux": { value: "7 anneaux principaux", unit: "" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "1 434", unit: "millions km" },
      "Perihelie": { value: "1 353", unit: "millions km" },
      "Aphelie": { value: "1 515", unit: "millions km" },
      "Periode orbitale": { value: "29,46", unit: "annees" },
      "Periode de rotation": { value: "10 h 42 min", unit: "" },
      "Vitesse orbitale moy.": { value: "9,68", unit: "km/s" },
      "Excentricite": { value: "0,0565", unit: "" }
    },
    exploration: [
      { year: "1979", name: "Pioneer 11", agency: "nasa", desc: "Premier survol de Saturne" },
      { year: "1981", name: "Voyager 1 & 2", agency: "nasa", desc: "Etude detaillee des anneaux et lunes" },
      { year: "2004", name: "Cassini-Huygens", agency: "nasa", desc: "13 ans en orbite, atterrissage sur Titan (sonde Huygens, ESA)" }
    ],
    moons: [
      {
        name: "Titan",
        type: "Satellite majeur",
        terrain: ["#8a6a30","#9a7a40","#7a5a20","#a88a50","#6a4a18","#907038"],
        desc: "2e plus grande lune du systeme, atmosphere dense, lacs de methane, 5 150 km",
        overview: `Titan est la seule lune du systeme solaire possedant une atmosphere dense (1,5 fois la pression terrestre). C'est aussi le seul corps connu, hormis la Terre, a posseder des lacs et mers de liquide stable en surface — composes de methane et d'ethane. Sous sa croute de glace se trouve un ocean d'eau liquide.`,
        physical: {
          "Diametre": { value: "5 149,5", unit: "km" },
          "Masse": { value: "1,345 x 10^23", unit: "kg" },
          "Gravite de surface": { value: "1,352", unit: "m/s²" },
          "Temperature de surface": { value: "-179", unit: "°C" },
          "Pression atm.": { value: "1,47", unit: "bar" },
          "Atmosphere": { value: "95 % N₂, 5 % CH₄", unit: "" },
          "Densite": { value: "1,881", unit: "g/cm³" },
          "Lacs de methane": { value: "Oui (Kraken Mare)", unit: "" }
        },
        orbit: {
          "Distance a Saturne (moy.)": { value: "1 221 870", unit: "km" },
          "Periode orbitale": { value: "15,945", unit: "jours" },
          "Vitesse orbitale": { value: "5,57", unit: "km/s" },
          "Excentricite": { value: "0,0288", unit: "" }
        },
        exploration: [
          { year: "1980", name: "Voyager 1", agency: "nasa", desc: "Premier survol rapproche, atmosphere opaque detectee" },
          { year: "2005", name: "Huygens", agency: "esa", desc: "Premier atterrissage sur Titan, images de la surface" },
          { year: "2004", name: "Cassini", agency: "nasa", desc: "127 survols, decouverte des lacs de methane par radar" },
          { year: "2034", name: "Dragonfly (prevue)", agency: "nasa", desc: "Drone helicoptere pour explorer la surface" }
        ]
      },
      {
        name: "Encelade",
        type: "Satellite majeur",
        terrain: ["#c8d0d8","#d8e0e8","#b8c0c8","#e0e8f0","#a8b0b8","#ccd4dc"],
        desc: "Geysers d'eau, ocean sous la glace, candidat pour la vie, 504 km",
        overview: `Encelade est une petite lune glacee dont le pole sud projette des geysers spectaculaires d'eau, de glace et de composes organiques dans l'espace. Ces jets alimentent l'anneau E de Saturne. Un ocean global d'eau liquide existe sous sa croute de glace, avec une activite hydrothermale au fond — conditions potentiellement favorables a la vie.`,
        physical: {
          "Diametre": { value: "504,2", unit: "km" },
          "Masse": { value: "1,080 x 10^20", unit: "kg" },
          "Gravite de surface": { value: "0,113", unit: "m/s²" },
          "Temperature de surface": { value: "-198 / -128", unit: "°C (geysers)" },
          "Densite": { value: "1,609", unit: "g/cm³" },
          "Albedo": { value: "0,99", unit: "(le plus eleve du systeme)" },
          "Epaisseur de glace": { value: "5-30", unit: "km" },
          "Composes organiques": { value: "Oui", unit: "" }
        },
        orbit: {
          "Distance a Saturne (moy.)": { value: "237 948", unit: "km" },
          "Periode orbitale": { value: "1,370", unit: "jours" },
          "Vitesse orbitale": { value: "12,63", unit: "km/s" },
          "Excentricite": { value: "0,0047", unit: "" }
        },
        exploration: [
          { year: "1981", name: "Voyager 2", agency: "nasa", desc: "Premiers cliches, surface lisse detectee" },
          { year: "2005", name: "Cassini", agency: "nasa", desc: "Decouverte des geysers et de l'ocean interne, 23 survols" }
        ]
      },
      {
        name: "Mimas",
        type: "Satellite majeur",
        terrain: ["#a0a0a8","#b0b0b8","#909098","#c0c0c8","#808088","#a8a8b0"],
        desc: "Cratere Herschel geant, ressemble a l'Etoile de la Mort, 396 km",
        overview: `Mimas est surnommee « l'Etoile de la Mort » en raison de son enorme cratere Herschel de 130 km de diametre — un tiers du diametre de Mimas. L'impact qui l'a forme a failli detruire la lune. Des donnees recentes de Cassini suggerent la presence surprenante d'un ocean interne sous sa surface glacee.`,
        physical: {
          "Diametre": { value: "396,4", unit: "km" },
          "Masse": { value: "3,749 x 10^19", unit: "kg" },
          "Gravite de surface": { value: "0,064", unit: "m/s²" },
          "Temperature de surface": { value: "-209 / -196", unit: "°C" },
          "Densite": { value: "1,148", unit: "g/cm³" },
          "Cratere Herschel": { value: "130", unit: "km de diametre" }
        },
        orbit: {
          "Distance a Saturne (moy.)": { value: "185 539", unit: "km" },
          "Periode orbitale": { value: "0,942", unit: "jours" },
          "Vitesse orbitale": { value: "14,28", unit: "km/s" },
          "Excentricite": { value: "0,0196", unit: "" }
        },
        exploration: [
          { year: "1980", name: "Voyager 1", agency: "nasa", desc: "Decouverte du cratere Herschel" },
          { year: "2005", name: "Cassini", agency: "nasa", desc: "Survols rapproches, indices d'un ocean interne" }
        ]
      },
      {
        name: "Rhea",
        type: "Satellite majeur",
        terrain: ["#8a8a90","#9a9aa0","#7a7a80","#aaaaaf","#6a6a70","#909098"],
        desc: "Deuxieme plus grande lune de Saturne, 1 527 km",
        overview: `Rhea est la deuxieme plus grande lune de Saturne. Sa surface est lourdement craterisee et composee principalement de glace d'eau. Cassini a detecte une tres fine atmosphere d'oxygene et de dioxyde de carbone autour de Rhea, ce qui en fait l'une des rares lunes avec une exosphere detectee.`,
        physical: {
          "Diametre": { value: "1 527,6", unit: "km" },
          "Masse": { value: "2,307 x 10^21", unit: "kg" },
          "Gravite de surface": { value: "0,264", unit: "m/s²" },
          "Temperature de surface": { value: "-220 / -174", unit: "°C" },
          "Densite": { value: "1,236", unit: "g/cm³" },
          "Composition": { value: "~75 % glace, ~25 % roche", unit: "" }
        },
        orbit: {
          "Distance a Saturne (moy.)": { value: "527 108", unit: "km" },
          "Periode orbitale": { value: "4,518", unit: "jours" },
          "Vitesse orbitale": { value: "8,48", unit: "km/s" },
          "Excentricite": { value: "0,0013", unit: "" }
        },
        exploration: [
          { year: "1980", name: "Voyager 1", agency: "nasa", desc: "Premieres images detaillees" },
          { year: "2005", name: "Cassini", agency: "nasa", desc: "Detection d'une fine exosphere d'oxygene" }
        ]
      },
      {
        name: "Iapetus",
        type: "Satellite majeur",
        terrain: ["#2a2018","#c8c0b0","#3a3028","#b8b0a0","#1a1008","#a8a098"],
        desc: "Deux hemispheres de couleurs tres differentes, 1 470 km",
        overview: `Iapetus est celebre pour son apparence bicolore frappante : un hemisphere tres sombre (Cassini Regio) et un hemisphere tres brillant. Elle possede aussi une crete equatoriale unique atteignant 20 km de hauteur — l'une des plus hautes montagnes du systeme solaire. Sa forme legerement aplatie suggere une rotation autrefois plus rapide.`,
        physical: {
          "Diametre": { value: "1 468,6", unit: "km" },
          "Masse": { value: "1,806 x 10^21", unit: "kg" },
          "Gravite de surface": { value: "0,223", unit: "m/s²" },
          "Temperature de surface": { value: "-173 / -143", unit: "°C" },
          "Densite": { value: "1,088", unit: "g/cm³" },
          "Crete equatoriale": { value: "~20", unit: "km de haut" },
          "Albedo (clair/sombre)": { value: "0,05 / 0,5", unit: "" }
        },
        orbit: {
          "Distance a Saturne (moy.)": { value: "3 560 820", unit: "km" },
          "Periode orbitale": { value: "79,32", unit: "jours" },
          "Vitesse orbitale": { value: "3,26", unit: "km/s" },
          "Inclinaison": { value: "15,47", unit: "°" }
        },
        exploration: [
          { year: "1981", name: "Voyager 2", agency: "nasa", desc: "Images confirmant la dichotomie de couleurs" },
          { year: "2007", name: "Cassini", agency: "nasa", desc: "Survol rapproche, decouverte de la crete equatoriale" }
        ]
      }
    ],
    sources: [
      { label: "NASA — Saturn", url: "https://solarsystem.nasa.gov/planets/saturn/overview/" },
      { label: "NASA — Saturn Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturnfact.html" },
      { label: "ESA — Cassini-Huygens", url: "https://www.esa.int/Science_Exploration/Space_Science/Cassini-Huygens" }
    ]
  },

  /* ============ URANUS ============ */
  {
    id: "uranus",
    name: "Uranus",
    type: "Geante de glaces",
    color: "#80deea",
    gradient: "radial-gradient(circle at 35% 35%,#e0f7fa,#80deea,#00838f)",
    terrain: ["#4a7a7a","#5a8a8a","#3a6a6a","#6a9a9a","#2a5a5a","#508080"],
    orbitIndex: 7,
    overview: `Uranus est une geante de glaces qui tourne «couchee» sur le cote avec une inclinaison axiale de 97,8°, probablement causee par une collision ancienne. Sa couleur bleu-vert provient du methane present dans son atmosphere. Uranus possede 13 anneaux connus et 28 lunes.`,
    physical: {
      "Diametre": { value: "50 724", unit: "km" },
      "Masse": { value: "8,681 x 10^25", unit: "kg" },
      "Gravite de surface": { value: "8,87", unit: "m/s²" },
      "Temperature (sommet nuages)": { value: "-224", unit: "°C" },
      "Densite": { value: "1,270", unit: "g/cm³" },
      "Composition atm.": { value: "83 % H₂, 15 % He, 2 % CH₄", unit: "" },
      "Nombre de lunes connues": { value: "28", unit: "(2024)" },
      "Inclinaison axiale": { value: "97,77", unit: "°" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "2 871", unit: "millions km" },
      "Perihelie": { value: "2 749", unit: "millions km" },
      "Aphelie": { value: "3 004", unit: "millions km" },
      "Periode orbitale": { value: "84,01", unit: "annees" },
      "Periode de rotation": { value: "17 h 14 min", unit: "(retrograde)" },
      "Vitesse orbitale moy.": { value: "6,80", unit: "km/s" },
      "Excentricite": { value: "0,0457", unit: "" }
    },
    exploration: [
      { year: "1986", name: "Voyager 2", agency: "nasa", desc: "Seul survol d'Uranus, decouverte de 10 lunes et 2 anneaux" },
      { year: "2030s", name: "Uranus Orbiter (proposee)", agency: "nasa", desc: "Mission prioritaire recommandee par le Decadal Survey 2023" }
    ],
    moons: [
      {
        name: "Miranda",
        type: "Satellite majeur",
        terrain: ["#707880","#808890","#606870","#909aa0","#505860","#687078"],
        desc: "Geologie extreme avec des falaises de 20 km, 472 km",
        overview: `Miranda possede l'une des surfaces les plus geologiquement variees et chaotiques du systeme solaire, avec des canyons de 20 km de profondeur — 12 fois plus profonds que le Grand Canyon. Ses « coronae » sont de vastes structures ovales uniques. Sa geologie extreme pourrait resulter d'une destruction et reassemblage suite a un impact cataclysmique.`,
        physical: {
          "Diametre": { value: "471,6", unit: "km" },
          "Masse": { value: "6,59 x 10^19", unit: "kg" },
          "Gravite de surface": { value: "0,079", unit: "m/s²" },
          "Temperature de surface": { value: "~-213", unit: "°C" },
          "Densite": { value: "1,20", unit: "g/cm³" },
          "Falaise Verona Rupes": { value: "~20", unit: "km de haut" }
        },
        orbit: {
          "Distance a Uranus (moy.)": { value: "129 390", unit: "km" },
          "Periode orbitale": { value: "1,413", unit: "jours" },
          "Vitesse orbitale": { value: "6,66", unit: "km/s" },
          "Inclinaison": { value: "4,232", unit: "°" }
        },
        exploration: [
          { year: "1986", name: "Voyager 2", agency: "nasa", desc: "Seul survol, images detaillees des coronae et falaises" }
        ]
      },
      {
        name: "Ariel",
        type: "Satellite majeur",
        terrain: ["#808890","#909aa0","#707880","#a0a8b0","#606870","#889098"],
        desc: "Surface la plus jeune des grandes lunes d'Uranus, 1 158 km",
        overview: `Ariel possede la surface la plus jeune et la plus brillante des grandes lunes d'Uranus, avec des vallees de rift et des plaines lisses qui suggerent une activite geologique passee. Des flux cryovolcaniques semblent avoir resurface certaines regions. Ariel est composee d'un melange a parts egales de glace et de roche silicatee.`,
        physical: {
          "Diametre": { value: "1 157,8", unit: "km" },
          "Masse": { value: "1,353 x 10^21", unit: "kg" },
          "Gravite de surface": { value: "0,269", unit: "m/s²" },
          "Temperature de surface": { value: "~-213", unit: "°C" },
          "Densite": { value: "1,592", unit: "g/cm³" },
          "Albedo": { value: "0,39", unit: "" }
        },
        orbit: {
          "Distance a Uranus (moy.)": { value: "190 900", unit: "km" },
          "Periode orbitale": { value: "2,520", unit: "jours" },
          "Vitesse orbitale": { value: "5,51", unit: "km/s" },
          "Excentricite": { value: "0,0012", unit: "" }
        },
        exploration: [
          { year: "1986", name: "Voyager 2", agency: "nasa", desc: "Seul survol, images des vallees et plaines cryovolcaniques" }
        ]
      },
      {
        name: "Umbriel",
        type: "Satellite majeur",
        terrain: ["#3a3e42","#4a4e52","#2e3236","#5a5e62","#22262a","#424648"],
        desc: "Lune la plus sombre d'Uranus, 1 169 km",
        overview: `Umbriel est la plus sombre des grandes lunes d'Uranus avec un albedo de seulement 0,26. Sa surface ancienne est uniformement craterisee, suggerant tres peu d'activite geologique. Le cratere Wunda, au fond anormalement brillant, constitue l'un de ses rares traits distinctifs.`,
        physical: {
          "Diametre": { value: "1 169,4", unit: "km" },
          "Masse": { value: "1,172 x 10^21", unit: "kg" },
          "Gravite de surface": { value: "0,234", unit: "m/s²" },
          "Temperature de surface": { value: "~-208", unit: "°C" },
          "Densite": { value: "1,390", unit: "g/cm³" },
          "Albedo": { value: "0,26", unit: "(la plus sombre)" }
        },
        orbit: {
          "Distance a Uranus (moy.)": { value: "266 300", unit: "km" },
          "Periode orbitale": { value: "4,144", unit: "jours" },
          "Vitesse orbitale": { value: "4,67", unit: "km/s" },
          "Excentricite": { value: "0,0039", unit: "" }
        },
        exploration: [
          { year: "1986", name: "Voyager 2", agency: "nasa", desc: "Seul survol, images de la surface sombre et du cratere Wunda" }
        ]
      },
      {
        name: "Titania",
        type: "Satellite majeur",
        terrain: ["#6a7078","#7a8088","#5a6068","#8a9098","#4a5058","#727880"],
        desc: "Plus grande lune d'Uranus, 1 577 km",
        overview: `Titania est la plus grande lune d'Uranus et la huitieme plus grande du systeme solaire. Sa surface montre un melange de crateres d'impact et de vastes systemes de canyons, temoignant d'une expansion interne passee. Titania pourrait posseder un ocean interne a l'interface roche-glace.`,
        physical: {
          "Diametre": { value: "1 576,8", unit: "km" },
          "Masse": { value: "3,527 x 10^21", unit: "kg" },
          "Gravite de surface": { value: "0,379", unit: "m/s²" },
          "Temperature de surface": { value: "~-203", unit: "°C" },
          "Densite": { value: "1,711", unit: "g/cm³" },
          "Composition": { value: "~50 % glace, ~50 % roche", unit: "" }
        },
        orbit: {
          "Distance a Uranus (moy.)": { value: "435 910", unit: "km" },
          "Periode orbitale": { value: "8,706", unit: "jours" },
          "Vitesse orbitale": { value: "3,64", unit: "km/s" },
          "Excentricite": { value: "0,0011", unit: "" }
        },
        exploration: [
          { year: "1986", name: "Voyager 2", agency: "nasa", desc: "Seul survol, decouverte des canyons et failles tectoniques" }
        ]
      },
      {
        name: "Oberon",
        type: "Satellite majeur",
        terrain: ["#5a5e62","#6a6e72","#4a4e52","#7a7e82","#3e4246","#606468"],
        desc: "2e plus grande lune, crateres et montagnes, 1 523 km",
        overview: `Oberon est la deuxieme plus grande lune d'Uranus et la plus eloignee des cinq majeures. Sa surface est la plus ancienne et la plus lourdement craterisee du systeme uranien. Certains crateres montrent des depots sombres sur leur plancher, probablement de la glace d'eau melee a du materiau carbonne.`,
        physical: {
          "Diametre": { value: "1 522,8", unit: "km" },
          "Masse": { value: "3,014 x 10^21", unit: "kg" },
          "Gravite de surface": { value: "0,346", unit: "m/s²" },
          "Temperature de surface": { value: "~-203", unit: "°C" },
          "Densite": { value: "1,630", unit: "g/cm³" },
          "Montagne la plus haute": { value: "~11", unit: "km" }
        },
        orbit: {
          "Distance a Uranus (moy.)": { value: "583 520", unit: "km" },
          "Periode orbitale": { value: "13,463", unit: "jours" },
          "Vitesse orbitale": { value: "3,15", unit: "km/s" },
          "Excentricite": { value: "0,0014", unit: "" }
        },
        exploration: [
          { year: "1986", name: "Voyager 2", agency: "nasa", desc: "Seul survol, images des crateres et montagne de 11 km" }
        ]
      }
    ],
    sources: [
      { label: "NASA — Uranus", url: "https://solarsystem.nasa.gov/planets/uranus/overview/" },
      { label: "NASA — Uranus Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/uranusfact.html" }
    ]
  },

  /* ============ NEPTUNE ============ */
  {
    id: "neptune",
    name: "Neptune",
    type: "Geante de glaces",
    color: "#5c6bc0",
    gradient: "radial-gradient(circle at 35% 35%,#c5cae9,#5c6bc0,#283593)",
    terrain: ["#3040b0","#4050c0","#3548b8","#5060d0","#2838a0","#4555c5"],
    orbitIndex: 8,
    overview: `Neptune est la planete la plus eloignee du Soleil. Elle possede les vents les plus rapides du systeme solaire, atteignant 2 100 km/h. Sa couleur bleue intense est due au methane atmospherique. Neptune a ete decouverte en 1846 grace a des predictions mathematiques basees sur les perturbations de l'orbite d'Uranus.`,
    physical: {
      "Diametre": { value: "49 528", unit: "km" },
      "Masse": { value: "1,024 x 10^26", unit: "kg" },
      "Gravite de surface": { value: "11,15", unit: "m/s²" },
      "Temperature (sommet nuages)": { value: "-214", unit: "°C" },
      "Densite": { value: "1,638", unit: "g/cm³" },
      "Composition atm.": { value: "80 % H₂, 19 % He, 1,5 % CH₄", unit: "" },
      "Nombre de lunes connues": { value: "16", unit: "(2024)" },
      "Vents maximaux": { value: "~2 100", unit: "km/h" }
    },
    orbit: {
      "Distance au Soleil (moy.)": { value: "4 495", unit: "millions km" },
      "Perihelie": { value: "4 460", unit: "millions km" },
      "Aphelie": { value: "4 540", unit: "millions km" },
      "Periode orbitale": { value: "164,8", unit: "annees" },
      "Periode de rotation": { value: "16 h 6 min", unit: "" },
      "Vitesse orbitale moy.": { value: "5,43", unit: "km/s" },
      "Excentricite": { value: "0,0113", unit: "" }
    },
    exploration: [
      { year: "1989", name: "Voyager 2", agency: "nasa", desc: "Seul survol de Neptune, decouverte de 6 lunes et anneaux" }
    ],
    moons: [
      {
        name: "Triton",
        type: "Satellite majeur (capture)",
        terrain: ["#b0a8a0","#c0b8b0","#a09890","#d0c8c0","#908880","#b8b0a8"],
        desc: "Plus grande lune, orbite retrograde, geysers d'azote, 2 707 km",
        overview: `Triton est la plus grande lune de Neptune et le seul grand satellite du systeme solaire en orbite retrograde, suggerant qu'il a ete capture depuis la ceinture de Kuiper. Sa surface est l'une des plus jeunes du systeme solaire avec des geysers d'azote actifs. Triton possede une fine atmosphere d'azote et est l'un des corps les plus froids connus.`,
        physical: {
          "Diametre": { value: "2 706,8", unit: "km" },
          "Masse": { value: "2,140 x 10^22", unit: "kg" },
          "Gravite de surface": { value: "0,779", unit: "m/s²" },
          "Temperature de surface": { value: "-235", unit: "°C" },
          "Densite": { value: "2,061", unit: "g/cm³" },
          "Atmosphere": { value: "N₂ (tres tenue)", unit: "" },
          "Geysers": { value: "Oui (azote)", unit: "" },
          "Albedo": { value: "0,76", unit: "" }
        },
        orbit: {
          "Distance a Neptune (moy.)": { value: "354 759", unit: "km" },
          "Periode orbitale": { value: "5,877", unit: "jours (retrograde)" },
          "Vitesse orbitale": { value: "4,39", unit: "km/s" },
          "Inclinaison": { value: "156,865", unit: "° (retrograde)" }
        },
        exploration: [
          { year: "1989", name: "Voyager 2", agency: "nasa", desc: "Seul survol, decouverte des geysers d'azote et du terrain 'peau de cantaloup'" }
        ]
      },
      {
        name: "Protee",
        type: "Satellite irregulier",
        terrain: ["#2a2a30","#3a3a40","#1e1e24","#4a4a50","#141418","#323238"],
        desc: "2e plus grande lune, forme irreguliere, 420 km",
        overview: `Protee est la deuxieme plus grande lune de Neptune et l'un des corps les plus sombres du systeme solaire. De forme irreguliere, elle est proche de la taille limite a partir de laquelle la gravite imposerait une forme spherique. Sa surface est lourdement craterisee avec le cratere Pharos de 230 km dominant un hemisphere.`,
        physical: {
          "Dimensions": { value: "436 x 416 x 402", unit: "km" },
          "Masse": { value: "4,4 x 10^19", unit: "kg" },
          "Gravite de surface": { value: "0,07", unit: "m/s²" },
          "Temperature de surface": { value: "~-222", unit: "°C" },
          "Densite": { value: "1,3", unit: "g/cm³" },
          "Albedo": { value: "0,096", unit: "" }
        },
        orbit: {
          "Distance a Neptune (moy.)": { value: "117 647", unit: "km" },
          "Periode orbitale": { value: "1,122", unit: "jours" },
          "Vitesse orbitale": { value: "7,623", unit: "km/s" },
          "Excentricite": { value: "0,0005", unit: "" }
        },
        exploration: [
          { year: "1989", name: "Voyager 2", agency: "nasa", desc: "Decouverte et premieres images" }
        ]
      },
      {
        name: "Nereide",
        type: "Satellite irregulier",
        terrain: ["#3a3a42","#4a4a52","#2e2e36","#5a5a62","#222228","#424248"],
        desc: "Orbite tres excentrique, 340 km",
        overview: `Nereide possede l'une des orbites les plus excentriques de tous les satellites connus du systeme solaire (e = 0,7512). Sa distance a Neptune varie de 1,4 a 9,7 millions de km. Cette orbite extreme pourrait indiquer que Nereide est un ancien satellite regulier dont l'orbite a ete perturbee par la capture de Triton.`,
        physical: {
          "Diametre": { value: "340", unit: "km" },
          "Masse": { value: "3,1 x 10^19", unit: "kg" },
          "Gravite de surface": { value: "~0,07", unit: "m/s²" },
          "Temperature de surface": { value: "~-223", unit: "°C" },
          "Densite": { value: "~1,5", unit: "g/cm³" },
          "Albedo": { value: "0,155", unit: "" }
        },
        orbit: {
          "Distance a Neptune (moy.)": { value: "5 513 400", unit: "km" },
          "Periapsis": { value: "1 372 000", unit: "km" },
          "Apoapsis": { value: "9 655 000", unit: "km" },
          "Periode orbitale": { value: "360,14", unit: "jours" },
          "Excentricite": { value: "0,7512", unit: "(extreme)" }
        },
        exploration: [
          { year: "1989", name: "Voyager 2", agency: "nasa", desc: "Images lointaines lors du survol de Neptune" }
        ]
      }
    ],
    sources: [
      { label: "NASA — Neptune", url: "https://solarsystem.nasa.gov/planets/neptune/overview/" },
      { label: "NASA — Neptune Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html" }
    ]
  },

  /* ============ VOIE LACTEE ============ */
  {
    id: "voie-lactee",
    name: "Voie Lactee",
    type: "Galaxie spirale barree (type SBbc)",
    color: "#7986cb",
    gradient: "radial-gradient(circle at 35% 35%,#e8eaf6,#7986cb,#283593)",
    terrain: ["#0a0a2e","#1a1a4e","#0d0d3b","#15153d","#0b0b28","#1e1e52"],
    orbitIndex: -1,
    overview: `La Voie Lactee est la galaxie spirale barree dans laquelle se trouve notre systeme solaire. Elle contient entre 100 et 400 milliards d'etoiles, dont le Soleil. Son diametre est estime a environ 100 000 annees-lumiere et son epaisseur a environ 1 000 annees-lumiere dans le disque. Le Soleil se trouve a environ 26 000 annees-lumiere du centre galactique, dans le bras d'Orion. La Voie Lactee est en rotation : le Soleil met environ 225 a 250 millions d'annees pour effectuer un tour complet (annee galactique). Au centre se trouve un trou noir supermassif, Sagittarius A*, d'une masse d'environ 4 millions de masses solaires. La Voie Lactee fait partie du Groupe Local, un amas de plus de 80 galaxies, et elle est en trajectoire de collision avec la galaxie d'Andromede, une fusion prevue dans environ 4,5 milliards d'annees.`,
    physical: {
      "Diametre": { value: "~100 000", unit: "annees-lumiere" },
      "Epaisseur (disque)": { value: "~1 000", unit: "annees-lumiere" },
      "Masse totale": { value: "~1,5 x 10^12", unit: "masses solaires" },
      "Nombre d'etoiles": { value: "100 a 400", unit: "milliards" },
      "Age": { value: "~13,6", unit: "milliards d'annees" },
      "Type": { value: "SBbc", unit: "(spirale barree)" },
      "Trou noir central": { value: "Sagittarius A*", unit: "~4 M☉" },
      "Vitesse de rotation (Soleil)": { value: "~220", unit: "km/s" }
    },
    orbit: {
      "Distance Soleil - centre": { value: "~26 000", unit: "annees-lumiere" },
      "Bras spiral": { value: "Bras d'Orion", unit: "(mineur)" },
      "Annee galactique": { value: "225-250", unit: "millions d'annees" },
      "Groupe": { value: "Groupe Local", unit: "(80+ galaxies)" },
      "Vitesse / CMB": { value: "~600", unit: "km/s" },
      "Galaxie la plus proche": { value: "Naine du Grand Chien", unit: "~25 000 al" },
      "Collision prevue": { value: "Andromede (M31)", unit: "dans ~4,5 Ga" }
    },
    exploration: [
      { year: "1610", name: "Galilee", agency: "other", desc: "Premiere observation telescopique : la Voie Lactee est composee d'innombrables etoiles individuelles" },
      { year: "1785", name: "William Herschel", agency: "other", desc: "Premiere tentative de cartographie de la forme de la galaxie par comptage d'etoiles" },
      { year: "1920", name: "Grand Debat", agency: "other", desc: "Debat Shapley-Curtis sur la nature des nebuleuses spirales : galaxies externes ou partie de la Voie Lactee ?" },
      { year: "1990", name: "COBE", agency: "nasa", desc: "Premiere cartographie complete du fond diffus cosmologique, confirmant la structure a grande echelle de l'univers" },
      { year: "2001", name: "WMAP", agency: "nasa", desc: "Cartographie precise du rayonnement cosmique, affinant l'age et la composition de l'univers" },
      { year: "2013", name: "Gaia", agency: "esa", desc: "Cartographie 3D de plus de 1,8 milliard d'etoiles de la Voie Lactee avec une precision sans precedent" },
      { year: "2022", name: "Event Horizon Telescope", agency: "other", desc: "Premiere image du trou noir Sagittarius A* au centre de la Voie Lactee" }
    ],
    moons: [],
    sources: [
      { label: "NASA — Milky Way", url: "https://science.nasa.gov/resource/the-milky-way-galaxy/" },
      { label: "ESA — Gaia Mission", url: "https://www.esa.int/Science_Exploration/Space_Science/Gaia" },
      { label: "NASA — Sagittarius A*", url: "https://www.nasa.gov/mission/chandra-x-ray-observatory/nasas-chandra-identifies-an-underachieving-black-hole/" }
    ]
  }
];
