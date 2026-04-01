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
      { name: "Lune", desc: "Unique satellite naturel, diametre 3 474 km, distance moy. 384 400 km" }
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
      { name: "Phobos", desc: "Plus grande lune de Mars, 22,4 km, orbite a 6 000 km" },
      { name: "Deimos", desc: "Plus petite lune de Mars, 12,4 km, orbite a 23 460 km" }
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
      { name: "Io", desc: "Corps le plus volcaniquement actif du systeme solaire, 3 643 km" },
      { name: "Europe", desc: "Ocean liquide sous la glace, candidat pour la vie, 3 122 km" },
      { name: "Ganymede", desc: "Plus grande lune du systeme solaire, 5 268 km, champ magnetique propre" },
      { name: "Callisto", desc: "Surface la plus craterisee du systeme solaire, 4 821 km" }
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
      { name: "Titan", desc: "2e plus grande lune du systeme, atmosphere dense, lacs de methane, 5 150 km" },
      { name: "Encelade", desc: "Geysers d'eau, ocean sous la glace, candidat pour la vie, 504 km" },
      { name: "Mimas", desc: "Cratere Herschel geant, ressemble a l'Etoile de la Mort, 396 km" },
      { name: "Rhea", desc: "Deuxieme plus grande lune de Saturne, 1 527 km" },
      { name: "Iapetus", desc: "Deux hemispheres de couleurs tres differentes, 1 470 km" }
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
      { name: "Miranda", desc: "Geologie extreme avec des falaises de 20 km, 472 km" },
      { name: "Ariel", desc: "Surface la plus jeune des grandes lunes d'Uranus, 1 158 km" },
      { name: "Umbriel", desc: "Lune la plus sombre d'Uranus, 1 169 km" },
      { name: "Titania", desc: "Plus grande lune d'Uranus, 1 577 km" },
      { name: "Oberon", desc: "2e plus grande lune, crateres et montagnes, 1 523 km" }
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
      { name: "Triton", desc: "Plus grande lune, orbite retrograde, geysers d'azote, 2 707 km — probablement un objet capture de la ceinture de Kuiper" },
      { name: "Protee", desc: "2e plus grande lune, forme irreguliere, 420 km" },
      { name: "Nereide", desc: "Orbite tres excentrique, 340 km" }
    ],
    sources: [
      { label: "NASA — Neptune", url: "https://solarsystem.nasa.gov/planets/neptune/overview/" },
      { label: "NASA — Neptune Fact Sheet", url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html" }
    ]
  }
];
