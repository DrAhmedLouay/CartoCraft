/**
 * CartoCraft Map Poster Creator — Core Application Logic
 * Powered by MapLibre GL JS, OpenFreeMap, and OpenStreetMap
 */

// ==========================================
// 1. Localization & Strings
// ==========================================
const I18N = {
  ar: {
    headerTag: "محرك الخرائط",
    quickExportText: "تحميل الملصق",
    tabLocLabel: "الموقع",
    tabThemeLabel: "المظهر",
    tabTypeLabel: "النصوص",
    tabLayersLabel: "الطبقات",
    tabMarkersLabel: "العلامات",
    tabExportLabel: "المقاس",
    secSearchTitle: "البحث عن موقع",
    lblSearch: "اسم المدينة أو الإحداثيات",
    searchPlaceholder: "مثال: بغداد، باريس، طوكيو أو 33.31, 44.36",
    searchHint: "يمكنك كتابة اسم أي مدينة بالعالم (مثل بغداد) أو إحداثيات دقيقة.",
    btnLocText: "استخدام موقعي الحالي",
    secPresetsTitle: "مدن مميزة مقترحة",
    secThemeTitle: "ثيمات الخريطة الكارتوغرافية",
    lblTheme: "نمط الألوان (الثيم)",
    lblTint: "لون تلوين الخريطة (Tint Color)",
    themeHint: "تنسق الثيمات تباين الطرق والمسطحات المائية لتلائم المعلقات الجدارية.",
    secTypeTitle: "عناوين وتايبوجرافي الملصق",
    lblFont: "نوع الخط الكارتوغرافي",
    lblChkCity: "عرض اسم المدينة",
    lblChkCountry: "عرض اسم الدولة",
    lblCustomTitle: "تعديل اسم المدينة المعروض",
    lblCustomSubtitle: "تعديل اسم الدولة أو النص الثانوي",
    typeHint: "تُعرض النصوص بخطوط عريضة وفواصل أنيقة متناسقة مع الخريطة.",
    lblLetterSpacing: "تباعد الحروف (Letter Spacing)",
    lblTextTransform: "حالة الأحرف (Text Transform)",
    lblTitleSize: "حجم العناوين الرئيسية (Title Size)",
    lblTextPosition: "موضع النص على الملصق (Text Position)",
    optUpper: "أحرف كبيرة (UPPERCASE)",
    optNone: "حالة النص الأصلية (Normal)",
    optCapitalize: "بداية كل كلمة حرف كبير (Capitalize)",
    optPosTop: "أعلى الملصق (Top)",
    optPosBottom: "أسفل الملصق (Bottom)",
    optNotoReg: "Noto Sans (عادي متوازن)",
    optNotoBold: "Noto Sans Bold (عريض وبارز)",
    optNotoItalic: "Noto Sans Italic (مائل كارتوغرافي)",
    optLangAr: "العربية أولاً (Arabic Preferred)",
    optLangEn: "الإنجليزية أولاً (English Preferred)",
    optLangNative: "الاسم المحلي للبلد (Native Language)",
    secMapTypeTitle: "خط ونصوص الخريطة (Map Typography)",
    typeHintMap: "تم تفعيل المحاذاة والتشكيل السليم للحروف العربية لضمان اتصال الكلمات بدون تقطيع.",
    titleSearch: "بحث",
    titleZoomIn: "تكبير",
    titleZoomOut: "تصغير",
    titleRecenter: "توسيط الخريطة",
    titleTilt: "إمالة ثلاثية الأبعاد (3D Tilt)",
    titleFull: "ملء الشاشة",
    pageTitle: "CartoCraft كارتوكرافت | صانع ملصقات الخرائط الكارتوغرافية",
    exportPng: "PNG (صورة شفافة عالية الجودة)",
    exportJpeg: "JPEG (صورة مضغوطة للويب)",
    phCustomTitle: "اسم المدينة المخصص",
    phCustomSubtitle: "اسم الدولة المخصص",
    lblOverlay: "طبقة التظليل فوق الخريطة (Overlay Layer)",
    lblOverlayColor: "لون طبقة التظليل",
    lblOverlayBlend: "نمط مزج الطبقة (Blend Mode)",
    ovNone: "بدون طبقة (None)",
    ovVignette: "تظليل الحواف (Vignette)",
    ovRadial: "إضاءة بؤرية (Radial Spotlight)",
    ovBottomFade: "تعتيم سفلي (Bottom Fade)",
    ovTopFade: "تعتيم علوي (Top Fade)",
    ovDiagonal: "تدرج قطري (Diagonal)",
    ovColorWash: "طبقة لونية موحّدة (Color Wash)",
    blNormal: "عادي (Normal)",
    blMultiply: "ضرب (Multiply)",
    blScreen: "شاشة (Screen)",
    blOverlay: "تراكب (Overlay)",
    blSoftLight: "ضوء ناعم (Soft Light)",
    blColorBurn: "حرق لوني (Color Burn)",
    secLayersTitle: "الطبقات وعناصر الخريطة",
    lblRoads: "شبكة الطرق والشوارع",
    descRoads: "الطرق السريعة، الرئيسية، والفرعية",
    lblWater: "المسطحات المائية",
    descWater: "البحار، البحيرات، الأنهار، والقنوات",
    lblParks: "المساحات الخضراء والحدائق",
    descParks: "الغابات، المحميات، والمنتزهات",
    lblBuildings: "المباني والمجسمات المعمارية",
    descBuildings: "كتل المباني والمجمعات",
    lblRail: "سكك الحديد والقطارات",
    descRail: "الخطوط الحديدية ومحطات القطارات",
    lblAeroway: "المطارات والمسارات الجوية",
    descAeroway: "مدرجات المطارات والملاحة الجوية",
    lblLanduse: "استخدامات الأراضي والمناطق",
    descLanduse: "المناطق العمرانية والصناعية",
    lblWaterway: "الأنهار والمسارات المائية الدقيقة",
    descWaterway: "الجداول، الأنهار والترع المائية",
    secMarkersTitle: "إضافة العلامات التذكارية",
    lblMarkerIcon: "رمز العلامة",
    lblChkMarkersEdit: "تفعيل وضع تعديل العلامات (انقر للإسقاط)",
    btnClearMarkersText: "حذف جميع العلامات",
    markersHint: "انقر على أي نقطة بالخريطة لوضع علامة؛ انقر زر الفأرة الأيمن لإزالتها؛ واسحبها لتغيير موقعها.",
    secExportTitle: "أبعاد الملصق وتصدير الطباعة",
    lblLayout: "مقاس الورق / الملصق",
    lblExportFmt: "صيغة الملف",
    lblHighRes: "دقة طباعة فائقة (Ultra-Res 2×)",
    btnExportText: "تحميل الملصق كصورة عالية الدقة",
    mLocLabel: "الموقع:",
    mCoordsLabel: "الإحداثيات:",
    mThemeLabel: "الثيم:",
    mMarkersLabel: "العلامات:",
    toastFound: "تم الانتقال إلى الموقع المحدد بنجاح",
    toastNotFound: "لم يتم العثور على نتائج للبحث",
    toastLocDenied: "تعذر الحصول على إذن الموقع الجغرافي",
    toastMarkerAdded: "تمت إضافة علامة إلى الخريطة",
    toastMarkerRemoved: "تمت إزالة العلامة",
    toastMarkersCleared: "تم حذف جميع العلامات",
    toastExportStart: "جاري توليد الملصق بدقة عالية...",
    toastExportDone: "تم حفظ وتحميل الملصق بنجاح!",
    toastExportErr: "حدث خطأ أثناء تصدير الصورة",
    attrib: "© OpenStreetMap contributors · صُنع بواسطة CartoCraft كارتوكرافت",
  },
  en: {
    headerTag: "Map Engine",
    quickExportText: "Download Poster",
    tabLocLabel: "Location",
    tabThemeLabel: "Theme",
    tabTypeLabel: "Typography",
    tabLayersLabel: "Layers",
    tabMarkersLabel: "Markers",
    tabExportLabel: "Layout",
    secSearchTitle: "Location Search",
    lblSearch: "City or Coordinates",
    searchPlaceholder: "e.g. Baghdad, Paris, Tokyo or 33.31, 44.36",
    searchHint: "Search any worldwide city like Baghdad or enter exact GPS coordinates.",
    btnLocText: "Use Current Location",
    secPresetsTitle: "Featured Cities",
    secThemeTitle: "Cartographic Themes",
    lblTheme: "Color Palette & Theme",
    lblTint: "Map Color Tint",
    themeHint: "Themes balance roads and water contrast for elegant wall art.",
    secTypeTitle: "Poster Typography",
    lblFont: "Font Family",
    lblChkCity: "Display City Name",
    lblChkCountry: "Display Country Name",
    lblCustomTitle: "Custom City Label",
    lblCustomSubtitle: "Custom Country / Subtitle",
    typeHint: "Spaced letter typography designed for modern minimalist posters.",
    lblLetterSpacing: "Letter Spacing",
    lblTextTransform: "Text Transform",
    lblTitleSize: "Title Size",
    lblTextPosition: "Text Position on Poster",
    optUpper: "UPPERCASE",
    optNone: "Normal (as written)",
    optCapitalize: "Capitalize Each Word",
    optPosTop: "Top of Poster",
    optPosBottom: "Bottom of Poster",
    optNotoReg: "Noto Sans (Regular & Balanced)",
    optNotoBold: "Noto Sans Bold (Bold & Prominent)",
    optNotoItalic: "Noto Sans Italic (Cartographic Italic)",
    optLangAr: "Arabic Preferred",
    optLangEn: "English Preferred",
    optLangNative: "Native Local Name",
    lblMapFont: "Map Text Font",
    lblMapLang: "Map Text Language",
    secMapTypeTitle: "Map Typography",
    typeHintMap: "Proper Arabic alignment and shaping is enabled so words stay connected and never break apart.",
    titleSearch: "Search",
    titleZoomIn: "Zoom in",
    titleZoomOut: "Zoom out",
    titleRecenter: "Recenter map",
    titleTilt: "3D Tilt",
    titleFull: "Full screen",
    pageTitle: "CartoCraft | Cartographic Map Poster Creator",
    exportPng: "PNG (Lossless high quality)",
    exportJpeg: "JPEG (Compressed for web)",
    phCustomTitle: "Custom city name",
    phCustomSubtitle: "Custom country name",
    lblOverlay: "Overlay Layer over the map",
    lblOverlayColor: "Overlay colour",
    lblOverlayBlend: "Blend Mode",
    ovNone: "None",
    ovVignette: "Vignette (edge shading)",
    ovRadial: "Radial Spotlight",
    ovBottomFade: "Bottom Fade",
    ovTopFade: "Top Fade",
    ovDiagonal: "Diagonal Gradient",
    ovColorWash: "Flat Colour Wash",
    blNormal: "Normal",
    blMultiply: "Multiply",
    blScreen: "Screen",
    blOverlay: "Overlay",
    blSoftLight: "Soft Light",
    blColorBurn: "Color Burn",
    secLayersTitle: "Map Elements & Layers",
    lblRoads: "Roads & Highways",
    descRoads: "Highways, primary roads, and local streets",
    lblWater: "Water Bodies",
    descWater: "Oceans, rivers, lakes, and canals",
    lblParks: "Greenery & Parks",
    descParks: "Forests, nature reserves, and urban parks",
    lblBuildings: "Architectural Footprints",
    descBuildings: "Building 3D structures and blocks",
    lblRail: "Railways & Transit",
    descRail: "Railway lines and train stations",
    lblAeroway: "Airports & Aeroways",
    descAeroway: "Runways and aviation paths",
    lblLanduse: "Landuse & Residential",
    descLanduse: "Urban areas and industrial zones",
    lblWaterway: "Rivers & Waterways",
    descWaterway: "Streams, rivers and canals",
    secMarkersTitle: "Map Markers",
    lblMarkerIcon: "Marker Symbol",
    lblChkMarkersEdit: "Enable Marker Drop Mode",
    btnClearMarkersText: "Clear All Markers",
    markersHint: "Click anywhere on the map to drop a pin; right-click to delete; drag to move.",
    secExportTitle: "Poster Size & Print Export",
    lblLayout: "Paper Size / Aspect Ratio",
    lblExportFmt: "File Format",
    lblHighRes: "Ultra-Res Print Quality (2×)",
    btnExportText: "Download High-Res Poster",
    mLocLabel: "Location:",
    mCoordsLabel: "Coordinates:",
    mThemeLabel: "Theme:",
    mMarkersLabel: "Markers:",
    toastFound: "Navigated to location",
    toastNotFound: "No search results found",
    toastLocDenied: "Location permission denied",
    toastMarkerAdded: "Marker dropped on map",
    toastMarkerRemoved: "Marker removed",
    toastMarkersCleared: "All markers cleared",
    toastExportStart: "Rendering high-res poster...",
    toastExportDone: "Poster downloaded successfully!",
    toastExportErr: "Failed to export image",
    attrib: "© OpenStreetMap contributors · Created with CartoCraft",
  }
};

// ==========================================
// 2. Curated Official CartoCraft Themes (35 Themes)
// ==========================================
// ==========================================
// 2. Curated Themes — loaded from themes.js (35 themes)
//    Official TerraInk palettes + original CartoCraft additions
// ==========================================
// THEMES is defined in themes.js (loaded before app.js)

// ==========================================
// 3. Layouts & Formats
// ==========================================
const LAYOUTS = [
  { id: "a4p", label: { ar: "A4 عمودي (21×29.7 سم)", en: "A4 Portrait (21×29.7 cm)" }, w: 794, h: 1123 },
  { id: "a4l", label: { ar: "A4 أفقي (29.7×21 سم)", en: "A4 Landscape (29.7×21 cm)" }, w: 1123, h: 794 },
  { id: "a3p", label: { ar: "A3 عمودي (30×42 سم)", en: "A3 Portrait (30×42 cm)" }, w: 1123, h: 1587 },
  { id: "a3l", label: { ar: "A3 أفقي (42×30 سم)", en: "A3 Landscape (42×30 cm)" }, w: 1587, h: 1123 },
  { id: "a2p", label: { ar: "A2 عمودي (42×59.4 سم)", en: "A2 Portrait (42×59.4 cm)" }, w: 1191, h: 1684 },
  { id: "a2l", label: { ar: "A2 أفقي (59.4×42 سم)", en: "A2 Landscape (59.4×42 cm)" }, w: 1684, h: 1191 },
  { id: "us_letter", label: { ar: "US Letter (21.6×27.9 سم)", en: "US Letter (8.5×11 in)" }, w: 816, h: 1056 },
  { id: "tabloid", label: { ar: "US Tabloid / Ledger (27.9×43.2 سم)", en: "US Tabloid / Ledger (11×17 in)" }, w: 1056, h: 1632 },
  { id: "poster_5070", label: { ar: "إطار جداري كلاسيكي (50×70 سم)", en: "Classic Poster Frame (50×70 cm)" }, w: 1000, h: 1400 },
  { id: "poster_70100", label: { ar: "إطار جداري كبير (70×100 سم)", en: "Large Poster Frame (70×100 cm)" }, w: 1190, h: 1700 },
  { id: "square", label: { ar: "مربع (1:1 / إنستغرام)", en: "Square (1:1 / Instagram)" }, w: 1000, h: 1000 },
  { id: "story", label: { ar: "قصة / ستوري (9:16)", en: "Story / TikTok / Reel (9:16)" }, w: 1080, h: 1920 },
  { id: "desktop", label: { ar: "خلفية سطح المكتب (16:9)", en: "Desktop Wallpaper (16:9)" }, w: 1920, h: 1080 }
];

const FONTS = [
  { id: "cairo", label: { ar: "Cairo (كايرو — هندسي حديث وبارز)", en: "Cairo (Modern Geometric)" }, family: '"Cairo", sans-serif' },
  { id: "amiri", label: { ar: "Amiri (أميري — نسخي كلاسيكي فخم)", en: "Amiri (Classical Naskh)" }, family: '"Amiri", serif' },
  { id: "tajawal", label: { ar: "Tajawal (تجوال — معماري أنيق)", en: "Tajawal (Architectural Clean)" }, family: '"Tajawal", sans-serif' },
  { id: "almarai", label: { ar: "Almarai (المراعي — معاصر متزن)", en: "Almarai (Contemporary Balanced)" }, family: '"Almarai", sans-serif' },
  { id: "changa", label: { ar: "Changa (تشانجا — كوفي عريض وقوي)", en: "Changa (Bold Kufi)" }, family: '"Changa", sans-serif' },
  { id: "noto_ar", label: { ar: "Noto Sans Arabic (نو تو سانس عربي أصيل)", en: "Noto Sans Arabic" }, family: '"Noto Sans Arabic", sans-serif' },
  { id: "montserrat", label: { ar: "Montserrat (لاتيني كارتوغرافي عالمي)", en: "Montserrat" }, family: '"Montserrat", sans-serif' },
  { id: "space", label: { ar: "Space Grotesk (تقني حديث)", en: "Space Grotesk" }, family: '"Space Grotesk", sans-serif' },
  { id: "playfair", label: { ar: "Playfair Display (سريف كلاسيكي فاخر)", en: "Playfair Display" }, family: '"Playfair Display", serif' },
  { id: "oswald", label: { ar: "Oswald (عريض ومكثف)", en: "Oswald" }, family: '"Oswald", sans-serif' }
];

const MARKER_ICONS = [
  { id: "pin", label: { ar: "دبوس خريطة", en: "Pin" }, char: "📍" },
  { id: "heart", label: { ar: "قلب ذكريات", en: "Heart" }, char: "❤️" },
  { id: "home", label: { ar: "منزل", en: "Home" }, char: "🏠" },
  { id: "star", label: { ar: "نجمة", en: "Star" }, char: "⭐" },
  { id: "flag", label: { ar: "علم", en: "Flag" }, char: "🚩" },
  { id: "circle", label: { ar: "دائرة زرقاء", en: "Circle" }, char: "🔵" },
  { id: "plus", label: { ar: "تقاطع", en: "Plus" }, char: "✚" }
];

// ==========================================
// 4. Application State
// ==========================================
let state = {
  lang: "ar",
  lat: 33.3152,
  lng: 44.3661,
  zoom: 12.8,
  bearing: 0,
  pitch: 0,
  city: "بغداد",
  country: "العراق",
  customCity: "",
  customCountry: "",
  coordsFormatted: "33.3152° N / 44.3661° E",
  themeId: "midnight_blue",
  tintColor: "#0A1628",
  tintOpacity: 0,
  overlayType: "vignette",
  overlayColor: "#000000",
  overlayOpacity: 0.45,
  overlayBlend: "normal",
  showCity: true,
  showCountry: true,
  fontId: "cairo",
  mapFont: "Noto Sans Regular",
  mapLang: "ar",
  letterSpacing: 0.22,
  textTransform: "uppercase",
  titleScale: 1.0,
  textPosition: "top",
  layers: { roads: true, water: true, parks: true, buildings: true, rail: true, aeroway: true, landuse: true, waterway: true },
  markerIcon: "pin",
  markersEdit: true,
  layoutId: "a4p",
  highRes: true,
  exportFmt: "png",
  markers: [], // { id, lat, lng, char, markerInstance, element }
  map: null,
  isStyleLoaded: false,
  currentLoadedStyleUrl: null
};

// ==========================================
// 5. Utility & Helpers
// ==========================================
function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || key;
}

function lab(opt) {
  return (opt.label && opt.label[state.lang]) || opt.id;
}

function formatCoords(lat, lng) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}° ${latDir} / ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
}

function hasArabic(text) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text || "");
}

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  if (toast._timer) clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.classList.remove("show"), 2600);
}

// ==========================================
// 6. MapLibre GL JS Engine — Vector Styling (TerraInk-accurate)
// ==========================================

const OPENFREEMAP_SOURCE = "https://tiles.openfreemap.org/planet";
const SOURCE_ID = "openfreemap";
const SOURCE_MAX_ZOOM = 14;

const LAYER_CLASSES = {
  roads: {
    major: ["motorway"],
    minor_high: ["primary", "primary_link", "secondary", "secondary_link", "motorway_link", "trunk", "trunk_link"],
    minor_mid: ["tertiary", "tertiary_link", "minor"],
    minor_low: ["residential", "living_street", "unclassified", "road", "street", "street_limited", "service"],
    path: ["path", "pedestrian", "cycleway", "track"],
  },
  rail: ["rail", "transit"],
  aeroway: ["aeroway"],
  water: ["water"],
  waterway: ["waterway"],
  parks: ["park", "landcover_wood", "landcover_grass", "landcover_scrub", "landuse_park", "landuse_nature_reserve"],
  landuse: ["landuse_residential", "landuse_commercial", "landuse_industrial", "landuse_institutional"],
  buildings: ["building"],
  aeroway_areas: ["aeroway_area"],
  landcover: ["landcover"],
};

const ROAD_WIDTH_STOPS = {
  major: [[0, 0.36], [3, 0.52], [9, 1.1], [14, 2.05], [18, 3.3]],
  minor_high: [[0, 0.18], [4, 0.3], [8, 0.48], [11, 0.7], [14, 1.1], [18, 2.0]],
  minor_mid: [[6, 0.34], [10, 0.62], [14, 1.2], [18, 2.35]],
  minor_low: [[6, 0.24], [10, 0.44], [14, 0.84], [18, 1.65]],
  path: [[5, 0.06], [8, 0.1], [11, 0.2], [14, 0.3], [18, 0.5]],
};

const OVERZOOM_LINE_WIDTH_SCALE = Math.pow(1.2, 0.8);

function widthExpr(stops, scale = 1) {
  const scaled = stops.map(([z, w]) => [z, w * scale * OVERZOOM_LINE_WIDTH_SCALE]);
  const flat = scaled.flatMap(([z, w]) => [z, w]);
  return ["interpolate", ["linear"], ["zoom"], ...flat];
}

function opacityExpr(stops) {
  const flat = stops.flatMap(([z, o]) => [z, o]);
  return ["interpolate", ["linear"], ["zoom"], ...flat];
}

// MapLibre 3.x parses a top-level "all" filter as a LEGACY filter, where
// nested expressions are rejected. Class filtering therefore has to be the
// top-level expression itself: ["in", ["get","class"], ["literal", [...]]].
function classFilter(classes) {
  return ["in", ["get", "class"], ["literal", classes]];
}

function generateMapStyle(theme) {
  const t = theme.map;
  const ui = theme.ui;

  return {
    version: 8,
    name: theme.name,
    metadata: { "mapbox:autocomposite": true },
    sources: {
      [SOURCE_ID]: {
        type: "vector",
        url: OPENFREEMAP_SOURCE,
        maxzoom: SOURCE_MAX_ZOOM,
        attribution: "© OpenStreetMap contributors · Tiles via OpenFreeMap",
      },
    },
    glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
    layers: [
      // Background
      {
        id: "background",
        type: "background",
        paint: { "background-color": t.land },
      },

      // Water
      {
        id: "water",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "water",
        paint: {
          "fill-color": t.water,
          "fill-opacity": 1,
        },
      },

      // Waterway lines
      {
        id: "waterway",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "waterway",
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.waterway,
          "line-width": widthExpr([[0, 0.2], [6, 0.34], [12, 0.8], [18, 2.4]]),
          "line-opacity": 0.8,
        },
      },

      // Parks / Landcover
      {
        id: "parks",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landcover",
        filter: classFilter(["park", "wood", "grass", "scrub", "wetland", "nature_reserve", "golf_course"]),
        paint: { "fill-color": t.parks, "fill-opacity": 0.9 },
      },
      {
        id: "landuse_park",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landuse",
        filter: classFilter(["park", "nature_reserve", "golf_course"]),
        paint: { "fill-color": t.parks, "fill-opacity": 0.9 },
      },

      // Landuse areas
      {
        id: "landuse_zones",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landuse",
        filter: classFilter(["residential", "commercial", "industrial", "institutional"]),
        paint: { "fill-color": t.landcover || t.land, "fill-opacity": 0.6 },
      },

      // Administrative boundaries
      {
        id: "boundary_admin",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "boundary",
        filter: ["<=", ["get", "admin_level"], 4],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": ui.text,
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.4, 10, 0.8, 14, 1.4],
          "line-opacity": 0.35,
          "line-dasharray": [3, 2],
        },
      },

      // Aeroway
      {
        id: "aeroway",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "aeroway",
        paint: { "fill-color": t.aeroway || t.land, "fill-opacity": 0.8 },
      },

      // Rail
      {
        id: "rail",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(["rail", "transit"]),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.rail,
          "line-width": widthExpr([[3, 0.4], [6, 0.7], [10, 1], [18, 1.5]]),
          "line-opacity": 0.7,
        },
      },

      // Aeroway lines
      {
        id: "aeroway_lines",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "aeroway",
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.aeroway || t.rail,
          "line-width": widthExpr([[3, 0.3], [6, 0.5], [10, 0.8], [18, 1.2]]),
          "line-opacity": 0.6,
        },
      },

      // Roads - Major (motorway)
      {
        id: "road_major",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(LAYER_CLASSES.roads.major),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.roads.major,
          "line-width": widthExpr(ROAD_WIDTH_STOPS.major),
        },
      },

      // Roads - Minor High (primary, secondary, trunk)
      {
        id: "road_minor_high",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(LAYER_CLASSES.roads.minor_high),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.roads.minor_high,
          "line-width": widthExpr(ROAD_WIDTH_STOPS.minor_high),
        },
      },

      // Roads - Minor Mid (tertiary)
      {
        id: "road_minor_mid",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(LAYER_CLASSES.roads.minor_mid),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.roads.minor_mid,
          "line-width": widthExpr(ROAD_WIDTH_STOPS.minor_mid),
        },
      },

      // Roads - Minor Low (residential, service)
      {
        id: "road_minor_low",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(LAYER_CLASSES.roads.minor_low),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.roads.minor_low,
          "line-width": widthExpr(ROAD_WIDTH_STOPS.minor_low),
        },
      },

      // Roads - Paths
      {
        id: "road_path",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(LAYER_CLASSES.roads.path),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.roads.path,
          "line-width": widthExpr(ROAD_WIDTH_STOPS.path),
          "line-opacity": 0.7,
        },
      },

      // Road outlines (casing) for major roads
      {
        id: "road_major_casing",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: classFilter(LAYER_CLASSES.roads.major),
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": t.roads.outline || t.land,
          "line-width": widthExpr(ROAD_WIDTH_STOPS.major, 1.45),
        },
      },

      // Buildings
      {
        id: "building",
        type: "fill-extrusion",
        source: SOURCE_ID,
        "source-layer": "building",
        paint: {
          "fill-extrusion-color": t.buildings,
          "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 14, 0, 15.5, ["*", ["get", "height"], 0.5], 16, ["get", "height"]],
          "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 14, 0, 15.5, ["*", ["get", "min_height"], 0.5], 16, ["get", "min_height"]],
          "fill-extrusion-opacity": 0.9,
        },
        minzoom: 14,
      },

      // Building footprints (low zoom)
      {
        id: "building_footprint",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "building",
        paint: { "fill-color": t.buildings, "fill-opacity": 0.8 },
        maxzoom: 14,
      },

      // Landcover (grass, wood, etc.) - low zoom fallback
      {
        id: "landcover_wood",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landcover",
        filter: classFilter(["wood", "forest"]),
        paint: { "fill-color": t.landcover || t.parks, "fill-opacity": 0.7 },
      },

      // ==========================================
      // LABEL LAYERS (Symbol) — place & feature names
      // ==========================================
      {
        id: "place_country",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "place",
        filter: ["==", ["get", "class"], "country"],
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 3, 10, 6, 13, 9, 18],
          "text-transform": "uppercase",
          "text-letter-spacing": 0.2,
          "text-max-width": 8,
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.4 },
        maxzoom: 9,
      },
      {
        id: "place_state",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "place",
        filter: ["in", ["get", "class"], ["literal", ["state", "province"]]],
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 5, 10, 9, 13],
          "text-transform": "uppercase",
          "text-letter-spacing": 0.15,
          "text-max-width": 7,
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.4 },
        maxzoom: 11,
      },
      {
        id: "place_city",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "place",
        filter: ["in", ["get", "class"], ["literal", ["city", "town"]]],
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Bold"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 8, 11, 12, 15, 17, 18],
          "text-transform": "uppercase",
          "text-letter-spacing": 0.12,
          "text-max-width": 8,
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.6 },
      },
      {
        id: "place_village",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "place",
        filter: ["in", ["get", "class"], ["literal", ["village", "suburb", "neighbourhood", "hamlet"]]],
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 15, 13],
          "text-max-width": 8,
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.4 },
      },
      {
        id: "water_name",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "water_name",
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Italic"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 9, 10, 15, 14],
        },
        paint: { "text-color": t.water, "text-halo-color": t.land, "text-halo-width": 1.2 },
      },
      {
        id: "park_name",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "park",
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Italic"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 11, 10, 15, 13],
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.2 },
      },
      {
        id: "road_name",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "transportation_name",
        filter: ["in", ["get", "class"], ["literal", ["motorway", "trunk", "primary", "secondary"]]],
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 12, 9, 16, 12],
          "symbol-placement": "line",
          "symbol-spacing": 250,
        },
        paint: { "text-color": t.roads.major, "text-halo-color": t.land, "text-halo-width": 1.6 },
      },
      {
        id: "poi_name",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "poi",
        filter: ["in", ["get", "class"], ["literal", ["airport", "railway", "hospital", "school", "university", "park", "attraction", "museum"]]],
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 13, 9, 16, 12],
          "text-max-width": 8,
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.4 },
      },
      {
        id: "aerodrome_label",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "aerodrome_label",
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 14, 13],
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.4 },
      },
      {
        id: "mountain_peak_label",
        type: "symbol",
        source: SOURCE_ID,
        "source-layer": "mountain_peak",
        layout: {
          "text-field": ["coalesce", ["get", "name:ar"], ["get", "name"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 11, 9, 15, 12],
        },
        paint: { "text-color": ui.text, "text-halo-color": t.land, "text-halo-width": 1.2 },
      },
    ],
  };
}

// MapLibre does NOT emit "style.load" when setStyle() is called with a style
// object (only "styledata" / "sourcedata" / "idle" fire). Waiting for "idle"
// is therefore the reliable way to know the freshly applied style is ready.
function onStyleReady(cb) {
  if (!state.map) return;
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    try { cb(); } catch (e) { console.warn("onStyleReady:", e); }
  };
  state.map.once("idle", run);
  setTimeout(run, 5000);
}

function applyTheme(theme) {
  if (!state.map) return;

  const newStyle = generateMapStyle(theme);

  try {
    state.map.setStyle(newStyle);
    state.currentLoadedStyleUrl = "generated";
    state.isStyleLoaded = false;

    onStyleReady(() => {
      state.isStyleLoaded = true;
      applyVectorLayers();
      applyMapFont(state.mapFont);
      applyMapLanguage(state.mapLang);
      applyThemeVisuals();
    });
  } catch (err) {
    console.error("Style switch failed:", err);
  }
}

function applyThemeVisuals() {
  const theme = THEMES.find((th) => th.id === state.themeId) || THEMES[0];
  const mapCanvas = document.getElementById("map");
  const tintEl = document.getElementById("mapTint");
  const posterEl = document.getElementById("poster");
  const posterText = document.getElementById("posterText");

  // Apply custom colors from color editor if enabled
  const customBgColor = document.getElementById("inpBgColor")?.value;
  const customRoadMajor = document.getElementById("inpRoadMajor")?.value;
  const customRoadMinor = document.getElementById("inpRoadMinor")?.value;
  const customWaterColor = document.getElementById("inpWaterColor")?.value;
  const customTextColor = document.getElementById("inpTextColor")?.value;

  // Override theme colors with custom values
  const customBg = customBgColor || theme.ui.bg;
  const customRoadMaj = customRoadMajor || theme.map.roads.major;
  const customRoadMin = customRoadMinor || theme.map.roads.minor_low;
  const customWater = customWaterColor || theme.map.water;
  const customText = customTextColor || theme.ui.text;

  // IMPORTANT: no CSS filter on the map — vector styling already applies the
  // exact theme palette. A filter here would distort the official colors.
  if (mapCanvas) {
    mapCanvas.style.filter = "none";
  }

  if (tintEl) {
    tintEl.style.backgroundColor = customBg;
    tintEl.style.mixBlendMode = "multiply";
    tintEl.style.opacity = String(state.tintOpacity);
  }

  if (posterEl) {
    posterEl.style.backgroundColor = customBg;
  }

  if (posterText) {
    posterText.style.color = customText;
    if (theme.isDark) {
      posterText.classList.remove("theme-light");
      posterText.style.filter = "drop-shadow(0 2px 10px rgba(0,0,0,0.9))";
    } else {
      posterText.classList.add("theme-light");
      posterText.style.filter = "drop-shadow(0 1px 4px rgba(255,255,255,0.8))";
    }
  }

  // Apply custom road colors to map layers
  // This will be applied through the theme system
  // We'll store the custom colors in state for later use
  state.customBgColor = customBgColor;
  state.customRoadMajor = customRoadMajor;
  state.customRoadMinor = customRoadMinor;
  state.customWaterColor = customWaterColor;
  state.customTextColor = customTextColor;

  document.querySelectorAll(".theme-card").forEach((c) => {
    c.classList.toggle("active", c.dataset.themeId === state.themeId);
  });
}

function initMapEngine() {
  // Register RTL text plugin through MapLibre's own loader.
  // NOTE: the plugin must NOT be added as a standalone <script> tag — it calls
  // self.registerRTLTextPlugin() which only exists inside a MapLibre worker.
  if (typeof maplibregl !== "undefined" && typeof maplibregl.setRTLTextPlugin === "function") {
    try {
      const status = typeof maplibregl.getRTLTextPluginStatus === "function"
        ? maplibregl.getRTLTextPluginStatus()
        : "unavailable";
      if (status === "unavailable" || status === "deferred" || status === "loading") {
        maplibregl.setRTLTextPlugin(
          "https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js",
          (err) => { if (err) console.warn("RTL text plugin notice:", err); },
          true
        );
      }
    } catch (e) { console.warn("RTL text plugin check:", e); }
  }

  const initialTheme = THEMES.find((th) => th.id === state.themeId) || THEMES[0];
  const initialStyle = generateMapStyle(initialTheme);

  try {
    state.map = new maplibregl.Map({
      container: "map",
      style: initialStyle,
      center: [state.lng, state.lat],
      zoom: state.zoom,
      bearing: state.bearing,
      pitch: state.pitch,
      preserveDrawingBuffer: true,
      attributionControl: false,
    });

    state.map.on("load", () => {
      const loading = document.getElementById("mapLoading");
      if (loading) loading.classList.add("hidden");
      state.isStyleLoaded = true;
      applyVectorLayers();
      applyMapFont(state.mapFont);
      applyMapLanguage(state.mapLang);
      applyThemeVisuals();
      renderPosterText();
      updateMetaDisplay();
      state.map.resize();
    });

    state.map.on("style.load", () => {
      state.isStyleLoaded = true;
      applyVectorLayers();
      applyMapFont(state.mapFont);
      applyMapLanguage(state.mapLang);
      applyThemeVisuals();
    });
    state.map.on("click", (e) => {
      if (!state.markersEdit) return;
      dropMarkerAt(e.lngLat.lat, e.lngLat.lng);
    });

    state.map.on("moveend", () => {
      const center = state.map.getCenter();
      state.lat = center.lat;
      state.lng = center.lng;
      state.zoom = state.map.getZoom();
      state.bearing = state.map.getBearing();
      state.pitch = state.map.getPitch();
      state.coordsFormatted = formatCoords(state.lat, state.lng);
      updateMetaDisplay();
      renderPosterText();
    });

  } catch (err) {
    console.warn("Falling back to raster OSM style due to WebGL or style error:", err);
    initRasterFallback();
  }
}

function initRasterFallback() {
  state.map = new maplibregl.Map({
    container: "map",
    style: {
      version: 8,
      sources: {
        "osm-raster": {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          maxzoom: 19,
          attribution: "© OpenStreetMap contributors"
        }
      },
      layers: [{ id: "osm-raster-layer", type: "raster", source: "osm-raster" }]
    },
    center: [state.lng, state.lat],
    zoom: state.zoom,
    preserveDrawingBuffer: true
  });
  state.isStyleLoaded = true;
}

function applyVectorLayers() {
  if (!state.map || !state.isStyleLoaded) return;
  const style = state.map.getStyle();
  if (!style || !style.layers) return;

  style.layers.forEach((l) => {
    const id = l.id;

    // Roads
    if (id === "road_major" || id === "road_minor_high" || id === "road_minor_mid" || id === "road_minor_low" || id === "road_path" || id === "road_major_casing") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.roads ? "visible" : "none"); } catch (e) {}
    }

    // Water bodies
    if (id === "water") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.water ? "visible" : "none"); } catch (e) {}
    }

    // Parks / Landcover
    if (id === "parks" || id === "landuse_park" || id === "landcover_wood") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.parks ? "visible" : "none"); } catch (e) {}
    }

    // Buildings
    if (id === "building" || id === "building_footprint") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.buildings ? "visible" : "none"); } catch (e) {}
    }

    // Railways
    if (id === "rail") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.rail ? "visible" : "none"); } catch (e) {}
    }

    // Aeroways
    if (id === "aeroway" || id === "aeroway_lines") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.aeroway ? "visible" : "none"); } catch (e) {}
    }

    // Landuse
    if (id === "landuse_zones") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.landuse ? "visible" : "none"); } catch (e) {}
    }

    // Waterway (separate from water bodies)
    if (id === "waterway") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.waterway ? "visible" : "none"); } catch (e) {}
    }
  });
}

function applyMapFont(fontName) {
  state.mapFont = fontName || "Noto Sans Regular";
  if (!state.map || !state.isStyleLoaded) return;
  const style = state.map.getStyle();
  if (!style || !style.layers) return;

  style.layers.forEach((l) => {
    if (l.layout && l.layout["text-field"]) {
      try {
        state.map.setLayoutProperty(l.id, "text-font", [state.mapFont]);
      } catch (e) {}
    }
  });
}

function applyMapLanguage(langMode) {
  state.mapLang = langMode || "ar";
  if (!state.map || !state.isStyleLoaded) return;
  const style = state.map.getStyle();
  if (!style || !style.layers) return;

  let expr;
  if (state.mapLang === "ar") {
    expr = ["coalesce", ["get", "name:ar"], ["get", "name"]];
  } else if (state.mapLang === "en") {
    expr = ["coalesce", ["get", "name:en"], ["get", "name"]];
  } else {
    expr = ["get", "name"];
  }

  style.layers.forEach((l) => {
    if (l.layout && l.layout["text-field"]) {
      try {
        state.map.setLayoutProperty(l.id, "text-field", expr);
      } catch (e) {}
    }
  });
}

function switchTheme(themeId) {
  state.themeId = themeId;
  const theme = THEMES.find((th) => th.id === themeId) || THEMES[0];
  state.tintColor = theme.ui.bg;

  // Add transition class for smooth color transition
  const mapCanvas = document.getElementById("map");
  if (mapCanvas) {
    mapCanvas.style.transition = "background-color 0.8s ease, filter 0.8s ease";
  }

  const inpTint = document.getElementById("inpTint");
  const lblTintVal = document.getElementById("lblTintVal");
  if (inpTint) inpTint.value = theme.ui.bg;
  if (lblTintVal) lblTintVal.textContent = theme.ui.bg;

  applyTheme(theme);
  updateMetaDisplay();

  // Remove transition after animation completes (allows next transition)
  setTimeout(() => {
    if (mapCanvas) {
      mapCanvas.style.transition = "";
    }
  }, 900);

  // Update theme card active state
  renderThemeCards();
}

let currentThemeCat = "all";
let currentThemeSearch = "";

function renderThemeCards(filterCat = currentThemeCat, searchQuery = currentThemeSearch) {
  currentThemeCat = filterCat;
  currentThemeSearch = searchQuery;
  const grid = document.getElementById("themesGrid");
  if (!grid) return;

  const q = searchQuery.toLowerCase().trim();

  const filtered = THEMES.filter((th) => {
    const matchesCat = filterCat === "all" || th.category === filterCat;
    const matchesSearch =
      !q ||
      th.name.toLowerCase().includes(q) ||
      th.arName.toLowerCase().includes(q) ||
      (th.description && th.description.toLowerCase().includes(q)) ||
      (th.arDesc && th.arDesc.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: span 2; text-align: center; color: var(--color-text-muted); font-size: 0.8rem; padding: 28px;">${
      state.lang === "ar" ? "لا توجد ثيمات مطابقة للبحث" : "No matching themes found"
    }</div>`;
    return;
  }

  // Staggered entrance animation
  grid.innerHTML = filtered
    .map((th, index) => {
      const isActive = th.id === state.themeId;
      const land = th.map?.land || th.ui.bg;
      const water = th.map?.water || "#a8c4c4";
      const parks = th.map?.parks || land;
      const roadMajor = th.map?.roads?.major || th.ui.text;
      const roadMinor = th.map?.roads?.minor_low || roadMajor;
      const textCol = th.ui.text;

      // Calculate delay based on index for staggered entrance
      const delay = index * 80;
      const style = `animation: themeCardIn 0.5s ease ${delay}ms forwards`;

      return `
        <div class="theme-card ${isActive ? "active" : ""}" data-theme-id="${th.id}" style="${style}">
          <div class="theme-active-badge">✓</div>
          <div class="theme-swatch-bar">
            <div class="theme-swatch-seg" style="background:${land};" title="Land: ${land}"></div>
            <div class="theme-swatch-seg" style="background:${water};" title="Water: ${water}"></div>
            <div class="theme-swatch-seg" style="background:${parks};" title="Parks: ${parks}"></div>
            <div class="theme-swatch-seg" style="background:${roadMajor};" title="Roads: ${roadMajor}"></div>
            <div class="theme-swatch-seg" style="background:${roadMinor};" title="Roads: ${roadMinor}"></div>
            <div class="theme-swatch-seg" style="background:${textCol};" title="Text: ${textCol}"></div>
          </div>
          <div class="theme-card-info">
            <span class="theme-card-name">${state.lang === "ar" ? th.arName : th.name}</span>
            <span class="theme-card-sub">${th.name}</span>
            <span class="theme-card-desc">${state.lang === "ar" ? th.arDesc : th.description}</span>
          </div>
        </div>
      `;
    })
    .join("");

  // Add keyframes only once (check if already exists)
  if (!document.getElementById('theme-card-keyframes')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'theme-card-keyframes';
    styleSheet.textContent = `
      @keyframes themeCardIn {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  grid.querySelectorAll(".theme-card").forEach((card) => {
    card.addEventListener("click", () => {
      const themeId = card.dataset.themeId;
      switchTheme(themeId);
    });
  });
}

// ==========================================
// 8. Markers System
// ==========================================
function dropMarkerAt(lat, lng) {
  const iconOpt = MARKER_ICONS.find((m) => m.id === state.markerIcon) || MARKER_ICONS[0];
  const markerEl = document.createElement("div");
  markerEl.className = "custom-marker";
  markerEl.innerHTML = `<div class="marker-pin-inner"><span>${iconOpt.char}</span></div>`;

  const markerInstance = new maplibregl.Marker({
    element: markerEl,
    draggable: state.markersEdit
  })
    .setLngLat([lng, lat])
    .addTo(state.map);

  const markerId = "mk_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
  const entry = { id: markerId, lat, lng, char: iconOpt.char, markerInstance, element: markerEl };

  markerInstance.on("dragend", () => {
    const pos = markerInstance.getLngLat();
    entry.lat = pos.lat;
    entry.lng = pos.lng;
  });

  markerEl.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    removeMarkerById(markerId);
  });

  state.markers.push(entry);
  updateMetaDisplay();
  toast(t("toastMarkerAdded"));
}

function removeMarkerById(markerId) {
  const idx = state.markers.findIndex((m) => m.id === markerId);
  if (idx === -1) return;
  state.markers[idx].markerInstance.remove();
  state.markers.splice(idx, 1);
  updateMetaDisplay();
  toast(t("toastMarkerRemoved"));
}

function clearAllMarkers() {
  state.markers.forEach((m) => m.markerInstance.remove());
  state.markers = [];
  updateMetaDisplay();
  toast(t("toastMarkersCleared"));
}

function updateMarkersEditability() {
  state.markers.forEach((m) => {
    m.markerInstance.setDraggable(state.markersEdit);
    m.element.style.cursor = state.markersEdit ? "grab" : "default";
  });
}

// ==========================================
// 9. Geocoding & Search
// ==========================================
async function performSearch(query) {
  const q = (query || "").trim();
  if (!q) return;

  const coordsRegex = /^(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)$/;
  const match = q.match(coordsRegex);
  if (match) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[3]);
    if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      navigateTo(lat, lng, 13);
      await reverseGeocode(lat, lng);
      return;
    }
  }

  try {
    const endpoint = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=1&addressdetails=1`;
    const res = await fetch(endpoint, {
      headers: { "Accept-Language": state.lang === "ar" ? "ar,en" : "en,ar" }
    });
    if (!res.ok) throw new Error("Search request failed");
    const results = await res.json();

    if (!results || results.length === 0) {
      toast(t("toastNotFound"));
      return;
    }

    const item = results[0];
    const lat = parseFloat(item.lat);
    const lng = parseFloat(item.lon);

    extractLocationNames(item);
    navigateTo(lat, lng, 13);
    toast(t("toastFound"));

  } catch (err) {
    console.error("Geocoding error:", err);
    toast(t("toastNotFound"));
  }
}

function extractLocationNames(item) {
  const addr = item.address || {};
  state.city = addr.city || addr.town || addr.village || addr.municipality || addr.state || item.display_name.split(",")[0] || "";
  state.country = addr.country || "";
  state.coordsFormatted = formatCoords(parseFloat(item.lat), parseFloat(item.lon));

  const headerLoc = document.getElementById("headerLocText");
  if (headerLoc) {
    headerLoc.textContent = (state.city ? state.city + "، " : "") + state.country;
  }

  const inpCustomTitle = document.getElementById("inpCustomTitle");
  const inpCustomSubtitle = document.getElementById("inpCustomSubtitle");
  if (inpCustomTitle && !state.customCity) inpCustomTitle.value = state.city;
  if (inpCustomSubtitle && !state.customCountry) inpCustomSubtitle.value = state.country;

  renderPosterText();
  updateMetaDisplay();
}

async function reverseGeocode(lat, lng) {
  try {
    const endpoint = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;
    const res = await fetch(endpoint, {
      headers: { "Accept-Language": state.lang === "ar" ? "ar,en" : "en,ar" }
    });
    if (!res.ok) return;
    const data = await res.json();
    extractLocationNames(data);
  } catch (e) {
    console.warn("Reverse geocode failed:", e);
  }
}

function navigateTo(lat, lng, zoom = 13) {
  state.lat = lat;
  state.lng = lng;
  state.zoom = zoom;
  state.coordsFormatted = formatCoords(lat, lng);

  if (state.map) {
    state.map.flyTo({
      center: [lng, lat],
      zoom: zoom,
      essential: true,
      duration: 1600
    });
  }

  renderPosterText();
  updateMetaDisplay();
}

// ==========================================
// 10. Poster Typography & Layout
// ==========================================
function renderPosterText() {
  const container = document.getElementById("posterText");
  if (!container) return;

  const font = FONTS.find((f) => f.id === state.fontId) || FONTS[0];
  container.style.fontFamily = font.family;
  container.style.setProperty("--custom-letter-spacing", hasArabic(state.customCity || state.city) ? "0em" : (state.letterSpacing + "em"));
  container.style.setProperty("--custom-text-transform", hasArabic(state.customCity || state.city) ? "none" : state.textTransform);
  container.style.setProperty("--custom-title-scale", state.titleScale);

  const displayCity = state.customCity || state.city;
  const displayCountry = state.customCountry || state.country;

  const cityIsAr = hasArabic(displayCity);
  const countryIsAr = hasArabic(displayCountry);

  let html = "";
  if (state.showCity && displayCity) {
    html += `<span class="poster-title ${cityIsAr ? "is-arabic" : ""}">${displayCity}</span>`;
  }
  if (state.showCountry && displayCountry) {
    html += `<span class="poster-subtitle ${countryIsAr ? "is-arabic" : ""}">${displayCountry}</span>`;
  }
  if ((state.showCity && displayCity) || (state.showCountry && displayCountry)) {
    html += `<div class="poster-divider"></div>`;
    html += `<span class="poster-coords">${state.coordsFormatted}</span>`;
  }

  container.innerHTML = html;
  applyTextPosition();
}

// Anchor the poster headline either to the top or the bottom of the poster.
function applyTextPosition() {
  const overlay = document.getElementById("posterOverlay");
  if (!overlay) return;
  overlay.classList.toggle("text-bottom", state.textPosition === "bottom");
  overlay.classList.toggle("text-top", state.textPosition !== "bottom");
}

// Apply the artistic overlay layer on top of the map.
function applyOverlayLayer() {
  const el = document.getElementById("mapOverlay");
  if (!el) return;

  el.className = "map-overlay";
  if (state.overlayType && state.overlayType !== "none") {
    el.classList.add("ov-" + state.overlayType);
  } else {
    el.classList.add("ov-none");
  }

  el.style.setProperty("--ov-color", state.overlayColor || "#000000");
  el.style.setProperty("--ov-opacity", String(state.overlayOpacity));
  el.style.mixBlendMode = state.overlayBlend || "normal";
}

function applyLayout(layoutId) {
  state.layoutId = layoutId;
  const lay = LAYOUTS.find((l) => l.id === layoutId) || LAYOUTS[0];
  const posterEl = document.getElementById("poster");
  if (!posterEl) return;

  // Clear inline pixel dimensions so CSS responsive max-height/aspect-ratio works
  posterEl.style.width = "";
  posterEl.style.height = "";
  posterEl.style.setProperty("--poster-ratio", (lay.w / lay.h).toString());

  if (state.map) {
    setTimeout(() => state.map.resize(), 60);
  }
}

function updateMetaDisplay() {
  const elLoc = document.getElementById("metaLoc");
  const elCoords = document.getElementById("metaCoords");
  const elTheme = document.getElementById("metaTheme");
  const elMarkers = document.getElementById("metaMarkers");

  const displayLoc = (state.customCity || state.city) ? (state.customCity || state.city) + "، " + (state.customCountry || state.country) : "—";
  if (elLoc) elLoc.textContent = displayLoc;
  if (elCoords) elCoords.textContent = `${state.lat.toFixed(4)}, ${state.lng.toFixed(4)}`;
  if (elTheme) {
    const curTheme = THEMES.find((th) => th.id === state.themeId);
    elTheme.textContent = curTheme ? (state.lang === "ar" ? curTheme.arName : curTheme.name) : "—";
  }
  if (elMarkers) elMarkers.textContent = state.markers.length;
}

// ==========================================
// 11. High-Resolution Poster Export
// ==========================================
async function exportPosterImage() {
  const posterEl = document.getElementById("poster");
  if (!posterEl) return;

  toast(t("toastExportStart"));
  const btn = document.getElementById("btnExport");
  const quickBtn = document.getElementById("btnQuickExport");
  if (btn) btn.disabled = true;
  if (quickBtn) quickBtn.disabled = true;

  try {
    const exportScale = state.highRes ? 2 : 1.5;

    const canvas = await html2canvas(posterEl, {
      scale: exportScale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    });

    const cleanCity = (state.customCity || state.city || "map").replace(/\s+/g, "_");
    const fileName = `terraink_${cleanCity}_${state.layoutId}_${Date.now()}.png`;

    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();

    toast(t("toastExportDone"));
  } catch (err) {
    console.error("Export failure:", err);
    toast(t("toastExportErr"));
  } finally {
    if (btn) btn.disabled = false;
    if (quickBtn) quickBtn.disabled = false;
  }
}

// ==========================================
// 12. UI Synchronization & Language
// ==========================================
function populateUI() {
  // Render Distinctive Theme Cards Showcase
  renderThemeCards(currentThemeCat, currentThemeSearch);

  // Layout Select
  const selLayout = document.getElementById("selLayout");
  if (selLayout) {
    selLayout.innerHTML = LAYOUTS.map((l) => `<option value="${l.id}" ${l.id === state.layoutId ? "selected" : ""}>${lab(l)}</option>`).join("");
  }

  // Font Select
  const selFont = document.getElementById("selFont");
  if (selFont) {
    selFont.innerHTML = FONTS.map((f) => `<option value="${f.id}" ${f.id === state.fontId ? "selected" : ""}>${lab(f)}</option>`).join("");
  }

  // Marker Icon Select
  const selMarker = document.getElementById("selMarker");
  if (selMarker) {
    selMarker.innerHTML = MARKER_ICONS.map((m) => `<option value="${m.id}" ${m.id === state.markerIcon ? "selected" : ""}>${m.char} ${lab(m)}</option>`).join("");
  }

  // Export Format Select
  const selExport = document.getElementById("selExport");
  if (selExport) {
    selExport.innerHTML = `
      <option value="png">${t("exportPng")}</option>
      <option value="jpeg">${t("exportJpeg")}</option>
    `;
  }

  // Checkboxes
  const chkCity = document.getElementById("chkCity");
  if (chkCity) chkCity.checked = state.showCity;

  const chkCountry = document.getElementById("chkCountry");
  if (chkCountry) chkCountry.checked = state.showCountry;

  const chkRoads = document.getElementById("chkRoads");
  if (chkRoads) chkRoads.checked = state.layers.roads;

  const chkWater = document.getElementById("chkWater");
  if (chkWater) chkWater.checked = state.layers.water;

  const chkParks = document.getElementById("chkParks");
  if (chkParks) chkParks.checked = state.layers.parks;

  const chkBuildings = document.getElementById("chkBuildings");
  if (chkBuildings) chkBuildings.checked = state.layers.buildings;

  const chkRail = document.getElementById("chkRail");
  if (chkRail) chkRail.checked = state.layers.rail;

  const chkAeroway = document.getElementById("chkAeroway");
  if (chkAeroway) chkAeroway.checked = state.layers.aeroway;

  const chkLanduse = document.getElementById("chkLanduse");
  if (chkLanduse) chkLanduse.checked = state.layers.landuse;

  const chkWaterway = document.getElementById("chkWaterway");
  if (chkWaterway) chkWaterway.checked = state.layers.waterway;

  const chkMarkersEdit = document.getElementById("chkMarkersEdit");
  if (chkMarkersEdit) chkMarkersEdit.checked = state.markersEdit;

  const chkHighRes = document.getElementById("chkHighRes");
  if (chkHighRes) chkHighRes.checked = state.highRes;

  const inpTint = document.getElementById("inpTint");
  if (inpTint) inpTint.value = state.tintColor;

  const rngTintOpacity = document.getElementById("rngTintOpacity");
  if (rngTintOpacity) rngTintOpacity.value = Math.round(state.tintOpacity * 100);

  const lblTintOpacityVal = document.getElementById("lblTintOpacityVal");
  if (lblTintOpacityVal) lblTintOpacityVal.textContent = Math.round(state.tintOpacity * 100) + "%";

  const selOverlay = document.getElementById("selOverlay");
  if (selOverlay) selOverlay.value = state.overlayType;

  const inpOverlayColor = document.getElementById("inpOverlayColor");
  if (inpOverlayColor) inpOverlayColor.value = state.overlayColor;

  const lblOverlayColorVal = document.getElementById("lblOverlayColorVal");
  if (lblOverlayColorVal) lblOverlayColorVal.textContent = state.overlayColor;

  const rngOverlayOpacity = document.getElementById("rngOverlayOpacity");
  if (rngOverlayOpacity) rngOverlayOpacity.value = Math.round(state.overlayOpacity * 100);

  const lblOverlayOpacityVal = document.getElementById("lblOverlayOpacityVal");
  if (lblOverlayOpacityVal) lblOverlayOpacityVal.textContent = Math.round(state.overlayOpacity * 100) + "%";

  const selOverlayBlend = document.getElementById("selOverlayBlend");
  if (selOverlayBlend) selOverlayBlend.value = state.overlayBlend;

  const selMapFont = document.getElementById("selMapFont");
  if (selMapFont) selMapFont.value = state.mapFont;

  const rngLetterSpacing = document.getElementById("rngLetterSpacing");
  if (rngLetterSpacing) rngLetterSpacing.value = state.letterSpacing;

  const lblLetterSpacingVal = document.getElementById("lblLetterSpacingVal");
  if (lblLetterSpacingVal) lblLetterSpacingVal.textContent = state.letterSpacing + "em";

  const selTextTransform = document.getElementById("selTextTransform");
  if (selTextTransform) selTextTransform.value = state.textTransform;

  const rngTitleSize = document.getElementById("rngTitleSize");
  if (rngTitleSize) rngTitleSize.value = String(state.titleScale);

  const lblTitleSizeVal = document.getElementById("lblTitleSizeVal");
  if (lblTitleSizeVal) lblTitleSizeVal.textContent = Math.round(state.titleScale * 100) + "%";

  const selTextPosition = document.getElementById("selTextPosition");
  if (selTextPosition) selTextPosition.value = state.textPosition;

  const selMapLang = document.getElementById("selMapLang");
  if (selMapLang) selMapLang.value = state.mapLang;

  const btnLang = document.getElementById("btnLang");
  if (btnLang) btnLang.textContent = state.lang === "ar" ? "EN" : "عربي";

  // Dynamic Text Updates
  const updateText = (id, str) => {
    const el = document.getElementById(id);
    if (el) el.textContent = str;
  };

  updateText("headerTag", t("headerTag"));
  updateText("quickExportText", t("quickExportText"));
  updateText("tabLocLabel", t("tabLocLabel"));
  updateText("tabThemeLabel", t("tabThemeLabel"));
  updateText("tabTypeLabel", t("tabTypeLabel"));
  updateText("tabLayersLabel", t("tabLayersLabel"));
  updateText("tabMarkersLabel", t("tabMarkersLabel"));
  updateText("tabExportLabel", t("tabExportLabel"));

  updateText("secSearchTitle", t("secSearchTitle"));
  updateText("lblSearch", t("lblSearch"));
  updateText("searchHint", t("searchHint"));
  updateText("btnLocText", t("btnLocText"));
  updateText("secPresetsTitle", t("secPresetsTitle"));

  updateText("secThemeTitle", t("secThemeTitle"));
  updateText("themeCountPill", state.lang === "ar" ? "35 ثيم أصلي" : "35 Original Themes");
  updateText("catAll", state.lang === "ar" ? "الكل (35)" : "All (35)");
  updateText("catDark", state.lang === "ar" ? "داكن وفخم" : "Dark & Luxury");
  updateText("catEarth", state.lang === "ar" ? "طبيعي وترابي" : "Earth & Nature");
  updateText("catLight", state.lang === "ar" ? "كلاسيكي وفاتح" : "Classic & Light");
  updateText("catVibrant", state.lang === "ar" ? "فني ونيون" : "Artistic & Neon");
  updateText("lblTint", t("lblTint"));
  updateText("themeHint", t("themeHint"));
  updateText("lblOverlay", t("lblOverlay"));
  updateText("lblOverlayColor", t("lblOverlayColor"));
  updateText("lblOverlayBlend", t("lblOverlayBlend"));
  updateText("ovNone", t("ovNone"));
  updateText("ovVignette", t("ovVignette"));
  updateText("ovRadial", t("ovRadial"));
  updateText("ovBottomFade", t("ovBottomFade"));
  updateText("ovTopFade", t("ovTopFade"));
  updateText("ovDiagonal", t("ovDiagonal"));
  updateText("ovColorWash", t("ovColorWash"));
  updateText("blNormal", t("blNormal"));
  updateText("blMultiply", t("blMultiply"));
  updateText("blScreen", t("blScreen"));
  updateText("blOverlay", t("blOverlay"));
  updateText("blSoftLight", t("blSoftLight"));
  updateText("blColorBurn", t("blColorBurn"));

  const inpThemeSearch = document.getElementById("inpThemeSearch");
  if (inpThemeSearch) {
    inpThemeSearch.placeholder = state.lang === "ar" ? "ابحث عن ثيم بالاسم أو اللون..." : "Search theme by name or palette...";
  }

  updateText("secTypeTitle", t("secTypeTitle"));
  updateText("lblFont", t("lblFont"));
  updateText("lblChkCity", t("lblChkCity"));
  updateText("lblChkCountry", t("lblChkCountry"));
  updateText("lblCustomTitle", t("lblCustomTitle"));
  updateText("lblCustomSubtitle", t("lblCustomSubtitle"));
  updateText("typeHint", t("typeHint"));
  updateText("lblLetterSpacing", t("lblLetterSpacing"));
  updateText("lblTextTransform", t("lblTextTransform"));
  updateText("lblTitleSize", t("lblTitleSize"));
  updateText("lblTextPosition", t("lblTextPosition"));
  updateText("optUpper", t("optUpper"));
  updateText("optNone", t("optNone"));
  updateText("optCapitalize", t("optCapitalize"));
  updateText("optPosTop", t("optPosTop"));
  updateText("optPosBottom", t("optPosBottom"));
  updateText("secMapTypeTitle", t("secMapTypeTitle"));
  updateText("lblMapFont", t("lblMapFont"));
  updateText("lblMapLang", t("lblMapLang"));
  updateText("optNotoReg", t("optNotoReg"));
  updateText("optNotoBold", t("optNotoBold"));
  updateText("optNotoItalic", t("optNotoItalic"));
  updateText("optLangAr", t("optLangAr"));
  updateText("optLangEn", t("optLangEn"));
  updateText("optLangNative", t("optLangNative"));
  updateText("typeHintMap", t("typeHintMap"));

  // Tooltip titles
  const setTitle = (id, str) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("title", str);
  };
  setTitle("btnSearch", t("titleSearch"));
  setTitle("btnZoomIn", t("titleZoomIn"));
  setTitle("btnZoomOut", t("titleZoomOut"));
  setTitle("btnRecenter", t("titleRecenter"));
  setTitle("btnTilt", t("titleTilt"));
  setTitle("btnFull", t("titleFull"));

  // Page title
  document.title = t("pageTitle");

  // Featured city chips (bilingual)
  document.querySelectorAll(".preset-chip").forEach((chip) => {
    const label = state.lang === "ar" ? chip.dataset.ar : chip.dataset.en;
    if (label) chip.textContent = label;
  });

  updateText("secLayersTitle", t("secLayersTitle"));
  updateText("lblRoads", t("lblRoads"));
  updateText("descRoads", t("descRoads"));
  updateText("lblWater", t("lblWater"));
  updateText("descWater", t("descWater"));
  updateText("lblParks", t("lblParks"));
  updateText("descParks", t("descParks"));
  updateText("lblBuildings", t("lblBuildings"));
  updateText("descBuildings", t("descBuildings"));
  updateText("lblRail", t("lblRail"));
  updateText("descRail", t("descRail"));
  updateText("lblAeroway", t("lblAeroway"));
  updateText("descAeroway", t("descAeroway"));
  updateText("lblLanduse", t("lblLanduse"));
  updateText("descLanduse", t("descLanduse"));
  updateText("lblWaterway", t("lblWaterway"));
  updateText("descWaterway", t("descWaterway"));

  updateText("secMarkersTitle", t("secMarkersTitle"));
  updateText("lblMarkerIcon", t("lblMarkerIcon"));
  updateText("lblChkMarkersEdit", t("lblChkMarkersEdit"));
  updateText("btnClearMarkersText", t("btnClearMarkersText"));
  updateText("markersHint", t("markersHint"));

  updateText("secExportTitle", t("secExportTitle"));
  updateText("lblLayout", t("lblLayout"));
  updateText("lblExportFmt", t("lblExportFmt"));
  updateText("lblHighRes", t("lblHighRes"));
  updateText("btnExportText", t("btnExportText"));

  updateText("mLocLabel", t("mLocLabel"));
  updateText("mCoordsLabel", t("mCoordsLabel"));
  updateText("mThemeLabel", t("mThemeLabel"));
  updateText("mMarkersLabel", t("mMarkersLabel"));

  updateText("posterAttrib", t("attrib"));

  const inpSearch = document.getElementById("inpSearch");
  if (inpSearch) inpSearch.placeholder = t("searchPlaceholder");

  const inpCustomTitle = document.getElementById("inpCustomTitle");
  if (inpCustomTitle) inpCustomTitle.placeholder = t("phCustomTitle");

  const inpCustomSubtitle = document.getElementById("inpCustomSubtitle");
  if (inpCustomSubtitle) inpCustomSubtitle.placeholder = t("phCustomSubtitle");
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  populateUI();
  renderPosterText();
  updateMetaDisplay();
}

function toggleLanguage() {
  setLanguage(state.lang === "ar" ? "en" : "ar");
}

// ==========================================
// 13. Event Listeners Wiring
// ==========================================
function wireEventListeners() {
  // Tabs Navigation
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const targetPanel = document.getElementById(`panel-${tabId}`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  // Featured City Preset Chips
  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.query;
      const inp = document.getElementById("inpSearch");
      if (inp) inp.value = q;
      performSearch(q);
    });
  });

  // Language Toggle
  document.getElementById("btnLang")?.addEventListener("click", toggleLanguage);

  // Quick Export in Header
  document.getElementById("btnQuickExport")?.addEventListener("click", exportPosterImage);

  // Search input & button
  document.getElementById("btnSearch")?.addEventListener("click", () => {
    const inp = document.getElementById("inpSearch");
    if (inp) performSearch(inp.value);
  });

  document.getElementById("inpSearch")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch(e.target.value);
    }
  });

  // Current Geolocation
  document.getElementById("btnLoc")?.addEventListener("click", () => {
    if (!navigator.geolocation) {
      toast(t("toastLocDenied"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        navigateTo(pos.coords.latitude, pos.coords.longitude, 14);
        await reverseGeocode(pos.coords.latitude, pos.coords.longitude);
      },
      () => toast(t("toastLocDenied"))
    );
  });

  // Theme Category Filter Buttons
  document.querySelectorAll(".theme-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".theme-cat-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderThemeCards(btn.dataset.cat, currentThemeSearch);
    });
  });

  // Instant Theme Search Input
  document.getElementById("inpThemeSearch")?.addEventListener("input", (e) => {
    renderThemeCards(currentThemeCat, e.target.value);
  });

  // Theme Tint Color (optional overlay, off by default)
  document.getElementById("inpTint")?.addEventListener("input", (e) => {
    state.tintColor = e.target.value;
    const tintEl = document.getElementById("mapTint");
    const lblTintVal = document.getElementById("lblTintVal");
    if (tintEl) tintEl.style.backgroundColor = state.tintColor;
    if (lblTintVal) lblTintVal.textContent = state.tintColor;
  });

  document.getElementById("rngTintOpacity")?.addEventListener("input", (e) => {
    state.tintOpacity = parseInt(e.target.value, 10) / 100;
    const tintEl = document.getElementById("mapTint");
    const lbl = document.getElementById("lblTintOpacityVal");
    if (tintEl) tintEl.style.opacity = String(state.tintOpacity);
    if (lbl) lbl.textContent = e.target.value + "%";
  });

  // Overlay Layer Controls
  document.getElementById("selOverlay")?.addEventListener("change", (e) => {
    state.overlayType = e.target.value;
    applyOverlayLayer();
  });
  document.getElementById("inpOverlayColor")?.addEventListener("input", (e) => {
    state.overlayColor = e.target.value;
    const lbl = document.getElementById("lblOverlayColorVal");
    if (lbl) lbl.textContent = state.overlayColor;
    applyOverlayLayer();
  });
  document.getElementById("rngOverlayOpacity")?.addEventListener("input", (e) => {
    state.overlayOpacity = parseInt(e.target.value, 10) / 100;
    const lbl = document.getElementById("lblOverlayOpacityVal");
    if (lbl) lbl.textContent = e.target.value + "%";
    applyOverlayLayer();
  });
  document.getElementById("selOverlayBlend")?.addEventListener("change", (e) => {
    state.overlayBlend = e.target.value;
    applyOverlayLayer();
  });

  // Color Editor Controls
  document.getElementById("inpBgColor")?.addEventListener("input", (e) => {
    applyThemeVisuals();
    const val = document.getElementById("color-bg-value");
    if (val) val.textContent = e.target.value;
  });
  document.getElementById("inpRoadMajor")?.addEventListener("input", (e) => {
    applyThemeVisuals();
    const val = document.getElementById("color-road-major-value");
    if (val) val.textContent = e.target.value;
  });
  document.getElementById("inpRoadMinor")?.addEventListener("input", (e) => {
    applyThemeVisuals();
    const val = document.getElementById("color-road-minor-value");
    if (val) val.textContent = e.target.value;
  });
  document.getElementById("inpWaterColor")?.addEventListener("input", (e) => {
    applyThemeVisuals();
    const val = document.getElementById("color-water-value");
    if (val) val.textContent = e.target.value;
  });
  document.getElementById("inpTextColor")?.addEventListener("input", (e) => {
    applyThemeVisuals();
    const val = document.getElementById("color-text-value");
    if (val) val.textContent = e.target.value;
  });

  // Typography Controls
  document.getElementById("chkCity")?.addEventListener("change", (e) => {
    state.showCity = e.target.checked;
    renderPosterText();
  });
  document.getElementById("chkCountry")?.addEventListener("change", (e) => {
    state.showCountry = e.target.checked;
    renderPosterText();
  });
  document.getElementById("selFont")?.addEventListener("change", (e) => {
    state.fontId = e.target.value;
    renderPosterText();
  });
  document.getElementById("rngLetterSpacing")?.addEventListener("input", (e) => {
    state.letterSpacing = parseFloat(e.target.value);
    const lbl = document.getElementById("lblLetterSpacingVal");
    if (lbl) lbl.textContent = state.letterSpacing + "em";
    renderPosterText();
  });
  document.getElementById("selTextTransform")?.addEventListener("change", (e) => {
    state.textTransform = e.target.value;
    renderPosterText();
  });
  document.getElementById("rngTitleSize")?.addEventListener("input", (e) => {
    state.titleScale = parseFloat(e.target.value);
    const lbl = document.getElementById("lblTitleSizeVal");
    if (lbl) lbl.textContent = Math.round(state.titleScale * 100) + "%";
    renderPosterText();
  });
  document.getElementById("selTextPosition")?.addEventListener("change", (e) => {
    state.textPosition = e.target.value;
    applyTextPosition();
  });
  document.getElementById("selMapFont")?.addEventListener("change", (e) => {
    applyMapFont(e.target.value);
  });
  document.getElementById("selMapLang")?.addEventListener("change", (e) => {
    applyMapLanguage(e.target.value);
  });
  document.getElementById("inpCustomTitle")?.addEventListener("input", (e) => {
    state.customCity = e.target.value.trim();
    renderPosterText();
    updateMetaDisplay();
  });
  document.getElementById("inpCustomSubtitle")?.addEventListener("input", (e) => {
    state.customCountry = e.target.value.trim();
    renderPosterText();
    updateMetaDisplay();
  });

  // Layer Toggles
  document.getElementById("chkRoads")?.addEventListener("change", (e) => {
    state.layers.roads = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkWater")?.addEventListener("change", (e) => {
    state.layers.water = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkParks")?.addEventListener("change", (e) => {
    state.layers.parks = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkBuildings")?.addEventListener("change", (e) => {
    state.layers.buildings = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkRail")?.addEventListener("change", (e) => {
    state.layers.rail = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkAeroway")?.addEventListener("change", (e) => {
    state.layers.aeroway = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkLanduse")?.addEventListener("change", (e) => {
    state.layers.landuse = e.target.checked;
    applyVectorLayers();
  });
  document.getElementById("chkWaterway")?.addEventListener("change", (e) => {
    state.layers.waterway = e.target.checked;
    applyVectorLayers();
  });

  // Marker Controls
  document.getElementById("selMarker")?.addEventListener("change", (e) => {
    state.markerIcon = e.target.value;
  });
  document.getElementById("chkMarkersEdit")?.addEventListener("change", (e) => {
    state.markersEdit = e.target.checked;
    updateMarkersEditability();
  });
  document.getElementById("btnClearMarkers")?.addEventListener("click", clearAllMarkers);

  // Layout & Resolution
  document.getElementById("selLayout")?.addEventListener("change", (e) => applyLayout(e.target.value));
  document.getElementById("chkHighRes")?.addEventListener("change", (e) => {
    state.highRes = e.target.checked;
  });
  document.getElementById("selExport")?.addEventListener("change", (e) => {
    state.exportFmt = e.target.value;
  });

  // Export Button in Sidebar
  document.getElementById("btnExport")?.addEventListener("click", exportPosterImage);

  // Floating Map Toolbar Buttons
  document.getElementById("btnZoomIn")?.addEventListener("click", () => {
    if (state.map) state.map.zoomIn();
  });
  document.getElementById("btnZoomOut")?.addEventListener("click", () => {
    if (state.map) state.map.zoomOut();
  });
  document.getElementById("btnRecenter")?.addEventListener("click", () => {
    if (state.map) {
      state.map.flyTo({ center: [state.lng, state.lat], zoom: state.zoom, bearing: 0, pitch: 0 });
    }
  });
  document.getElementById("btnTilt")?.addEventListener("click", () => {
    if (state.map) {
      const curPitch = state.map.getPitch();
      state.map.easeTo({ pitch: curPitch > 10 ? 0 : 50, duration: 800 });
    }
  });
  document.getElementById("btnFull")?.addEventListener("click", () => {
    const poster = document.getElementById("poster");
    if (!poster) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (poster.requestFullscreen) {
      poster.requestFullscreen();
    }
  });

  // Resize Window Listener: keep MapLibre crisp & perfectly fitted
  window.addEventListener("resize", () => {
    if (state.map) state.map.resize();
  });
}

// ==========================================
// 14. Application Initialization
// ==========================================

  // ==========================================
  // Enhanced Interactive Animations
  // ==========================================
  
  // 1. Cursor Trail Effect - REMOVED for performance
  // (was causing high CPU usage with requestAnimationFrame)
  
  // 2. Scroll Reveal for Sections - OPTIMIZED
  // Using CSS animation-delay instead of IntersectionObserver for better performance
  // Section titles already have staggered animation-delay in CSS
  // No IntersectionObserver needed - CSS handles it efficiently
  
  // 3. Button Ripple Effect Enhancement
  document.querySelectorAll('.btn, .tool-btn, .tab-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out forwards;
        pointer-events: none;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add ripple keyframes only once
  if (!document.getElementById('ripple-keyframes')) {
    const rippleStyle = document.createElement('style');
    rippleStyle.id = 'ripple-keyframes';
    rippleStyle.textContent = `
      @keyframes rippleEffect {
        to {
          transform: scale(2.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(rippleStyle);
  }
  
  // 4. Parallax Effect - DISABLED for performance (was causing map lag)
  // const mapWrap = document.getElementById('posterMapWrap');
  // if (mapWrap) { ... }
  
  // 5. Keyboard Navigation Enhancement
  document.addEventListener('keydown', (e) => {
    // Escape to close modals/dropdowns
    if (e.key === 'Escape') {
      document.querySelectorAll('.tab-panel.active').forEach(p => {
        // Could close dropdowns here
      });
    }
    
    // Arrow keys for theme navigation
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const activeCard = document.querySelector('.theme-card.active');
      if (activeCard) {
        const cards = Array.from(document.querySelectorAll('.theme-card:not([style*="display: none"])'));
        const currentIndex = cards.indexOf(activeCard);
        let nextIndex = currentIndex + (e.key === 'ArrowRight' ? 1 : -1);
        if (nextIndex >= 0 && nextIndex < cards.length) {
          cards[nextIndex].click();
          cards[nextIndex].focus();
        }
      }
    }
  });
  
  // 6. Theme Card Focus Ring Enhancement
  document.addEventListener('focusin', (e) => {
    if (e.target.classList.contains('theme-card')) {
      e.target.style.boxShadow = '0 0 0 3px var(--color-accent), 0 8px 25px rgba(79, 70, 229, 0.3)';
    }
  });
  
  document.addEventListener('focusout', (e) => {
    if (e.target.classList.contains('theme-card')) {
      if (!e.target.classList.contains('active')) {
        e.target.style.boxShadow = '';
      }
    }
  });
  
  // 7. Color Picker Live Preview Enhancement
  document.querySelectorAll('input[type="color"]').forEach(picker => {
    picker.addEventListener('input', function() {
      // Add pulse animation on change
      this.style.animation = 'colorPulse 0.3s ease';
      setTimeout(() => this.style.animation = '', 300);
    });
  });
  
  // Add color pulse keyframes only once
  if (!document.getElementById('color-pulse-keyframes')) {
    const colorPulseStyle = document.createElement('style');
    colorPulseStyle.id = 'color-pulse-keyframes';
    colorPulseStyle.textContent = `
      @keyframes colorPulse {
        0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.6); }
        50% { box-shadow: 0 0 0 8px rgba(79, 70, 229, 0); }
        100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
      }
    `;
    document.head.appendChild(colorPulseStyle);
  }
  
  // 8. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  );
  
  // 9. Window Resize Handler for Map
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (state.map) {
        state.map.resize();
      }
    }, 250);
  );
  
  // 10. Theme Change Celebration Effect
  const originalSwitchTheme = switchTheme;
  switchTheme = function(themeId) {
    // Add celebration effect
    const cards = document.querySelectorAll('.theme-card');
    cards.forEach((card, i) => {
      if (card.dataset.themeId === themeId) {
        card.style.animation = 'themeSelectCelebrate 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        setTimeout(() => card.style.animation = '', 600);
      }
    });
    
    return originalSwitchTheme.apply(this, arguments);
  };
  
  // Add celebration keyframes only once
  if (!document.getElementById('celebrate-keyframes')) {
    const celebrateStyle = document.createElement('style');
    celebrateStyle.id = 'celebrate-keyframes';
    celebrateStyle.textContent = `
      @keyframes themeSelectCelebrate {
        0% { transform: scale(1); box-shadow: 0 0 0 0 var(--color-accent); }
        25% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(79, 70, 229, 0.5); }
        50% { transform: scale(0.98); box-shadow: 0 0 0 5px var(--color-accent); }
        100% { transform: scale(1); box-shadow: 0 0 0 3px var(--color-accent); }
      }
    `;
    document.head.appendChild(celebrateStyle);
  }


function initApp() {
  setLanguage("ar");
  applyLayout(state.layoutId);
  applyOverlayLayer();
  initMapEngine();
  wireEventListeners();

  const toolbar = document.getElementById("toolbar");
  if (toolbar) toolbar.style.display = "flex";

  // Initial geocode lookup
  reverseGeocode(state.lat, state.lng);
}

// Launch on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
