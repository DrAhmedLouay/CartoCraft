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
const THEMES = [
  {
    "id": "carrara",
    "name": "Carrara",
    "arName": "كارارا الإيطالي",
    "category": "light",
    "description": "White marble — pale stone with soft charcoal veining",
    "arDesc": "رخام أبيض — حجر شاحب ناصع مع تعريقات فحمية رقيقة",
    "ui": {
      "bg": "#F4F1EA",
      "text": "#2E2A26"
    },
    "map": {
      "land": "#F4F1EA",
      "water": "#C7CDD0",
      "parks": "#E6E3D8",
      "buildings": "#E0DACD",
      "roads": "#3A3631"
    },
    "filter": "contrast(1.05) brightness(0.98)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "blush",
    "name": "Blush",
    "arName": "وردي ناعم (Blush)",
    "category": "light",
    "description": "Dusty rose on warm white",
    "arDesc": "درجات الورد الترابي المغبر على خلفية بيضاء دافئة",
    "ui": {
      "bg": "#F9F1F0",
      "text": "#7A4351"
    },
    "map": {
      "land": "#F9F1F0",
      "water": "#E0BFC4",
      "parks": "#EDD6D6",
      "buildings": "#E9CCCE",
      "roads": "#9C5566"
    },
    "filter": "sepia(0.3) hue-rotate(300deg) saturate(1.2)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "sandstone",
    "name": "Sandstone",
    "arName": "حجر رملي (Sandstone)",
    "category": "earth",
    "description": "Warm beige with muted brown lines",
    "arDesc": "بيج رملي دافئ مع خطوط بنية كلاسيكية هادئة",
    "ui": {
      "bg": "#F1E9DB",
      "text": "#6B5436"
    },
    "map": {
      "land": "#F1E9DB",
      "water": "#CDBC9C",
      "parks": "#E0D2B8",
      "buildings": "#DCCBAB",
      "roads": "#8A6E45"
    },
    "filter": "sepia(0.5) saturate(1.1) brightness(0.96)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "heatwave",
    "name": "Heatwave",
    "arName": "موجة حرارية (Heatwave)",
    "category": "dark",
    "description": "Charred dark base with glowing orange roads and sunlit highlights.",
    "arDesc": "قاعدة داكنة متفحمة مع شوارع برتقالية متوهجة",
    "ui": {
      "bg": "#1C0E09",
      "text": "#FFD78A"
    },
    "map": {
      "land": "#1C0E09",
      "water": "#2C140C",
      "parks": "#381A10",
      "buildings": "#D2A55E",
      "roads": "#FF5F1F"
    },
    "filter": "invert(1) hue-rotate(180deg) saturate(2.4) contrast(1.3)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "arName": "ياقوتي ملكي (Ruby)",
    "category": "dark",
    "description": "Garnet-inspired palette with rich reds over deep plum city blocks.",
    "arDesc": "لوحة عقيقية بأحمر غني فوق كتل المدن العنابية",
    "ui": {
      "bg": "#1A070F",
      "text": "#F6D7BC"
    },
    "map": {
      "land": "#1A070F",
      "water": "#2A0D17",
      "parks": "#351021",
      "buildings": "#EE8EA4",
      "roads": "#C0103C"
    },
    "filter": "invert(1) hue-rotate(290deg) saturate(2.2) brightness(0.85)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "sage",
    "name": "Sage",
    "arName": "مرمر نباتي (Sage)",
    "category": "earth",
    "description": "Muted botanical tones with cool green roads and gentle contrast.",
    "arDesc": "نغمات نباتية رقيقة مع طرق خضراء هادئة وتباين ناعم",
    "ui": {
      "bg": "#DDE8DD",
      "text": "#2D4739"
    },
    "map": {
      "land": "#DDE8DD",
      "water": "#C5D4CB",
      "parks": "#D3DFD7",
      "buildings": "#8BAD9B",
      "roads": "#3F624F"
    },
    "filter": "hue-rotate(65deg) saturate(1.2) brightness(0.97)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "rustic",
    "name": "Rustic",
    "arName": "ريفي عتيق (Rustic)",
    "category": "earth",
    "description": "Earthy paper-like base with wood and clay road tones.",
    "arDesc": "قاعدة ورقية أرضية مع ألوان الخشب والطين",
    "ui": {
      "bg": "#DFD5C8",
      "text": "#44362C"
    },
    "map": {
      "land": "#DFD5C8",
      "water": "#C4B8A8",
      "parks": "#D2C6B7",
      "buildings": "#9E7A62",
      "roads": "#563A2A"
    },
    "filter": "sepia(0.4) saturate(0.9) brightness(0.95)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "midnight_blue",
    "name": "Midnight Blue",
    "arName": "أزرق منتصف الليل (Midnight)",
    "category": "dark",
    "description": "Deep navy background with gold/copper roads - luxury atlas aesthetic",
    "arDesc": "أزرق كحلي عميق مع شوارع ذهبية ونحاسية فخمة",
    "ui": {
      "bg": "#0A1628",
      "text": "#D6B352"
    },
    "map": {
      "land": "#0A1628",
      "water": "#061020",
      "parks": "#0F2235",
      "buildings": "#6E5A45",
      "roads": "#C99C37"
    },
    "filter": "invert(1) hue-rotate(195deg) brightness(0.82) contrast(1.28)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "neon",
    "name": "Neon",
    "arName": "سايبر نيون (Neon)",
    "category": "vibrant",
    "description": "Neon-drenched high-contrast palette with magenta and cyan accents.",
    "arDesc": "تباين عالٍ غامر مع لمسات سماوية ووردية متوهجة",
    "ui": {
      "bg": "#0B0F1A",
      "text": "#00F5FF"
    },
    "map": {
      "land": "#0B0F1A",
      "water": "#001433",
      "parks": "#1A0B2A",
      "buildings": "#FF2D95",
      "roads": "#FF2D95"
    },
    "filter": "invert(1) hue-rotate(260deg) saturate(2.8) brightness(1.1)",
    "mix": "screen",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "terracotta",
    "name": "Terracotta",
    "arName": "صلصال متوسطي (Terracotta)",
    "category": "earth",
    "description": "Mediterranean warmth - burnt orange and clay tones on cream",
    "arDesc": "دفء البحر الأبيض المتوسط — برتقالي محروق على قشدي",
    "ui": {
      "bg": "#F5EDE4",
      "text": "#8B4513"
    },
    "map": {
      "land": "#F5EDE4",
      "water": "#A8C4C4",
      "parks": "#E8E0D0",
      "buildings": "#D9A08A",
      "roads": "#A0522D"
    },
    "filter": "sepia(0.6) hue-rotate(-25deg) saturate(1.5) contrast(1.08)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "blueprint",
    "name": "Blueprint",
    "arName": "مخطط هندسي (Blueprint)",
    "category": "vibrant",
    "description": "Classic architectural blueprint - technical drawing aesthetic",
    "arDesc": "مخطط معماري كلاسيكي — جمالية الرسم الهندسي",
    "ui": {
      "bg": "#1A3A5C",
      "text": "#E8F4FF"
    },
    "map": {
      "land": "#1A3A5C",
      "water": "#0E2740",
      "parks": "#1F466F",
      "buildings": "#6EA4CC",
      "roads": "#D8EEFA"
    },
    "filter": "invert(1) hue-rotate(170deg) saturate(2.4) contrast(1.2)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "contrast_zones",
    "name": "Contrast",
    "arName": "أبيض وأسود عالي التباين",
    "category": "light",
    "description": "Strong contrast showing urban density - darker in center, lighter at edges",
    "arDesc": "تباين قوي يبرز الكثافة الحضرية وشبكة الطرق",
    "ui": {
      "bg": "#FFFFFF",
      "text": "#111111"
    },
    "map": {
      "land": "#FFFFFF",
      "water": "#B0B0B0",
      "parks": "#ECECEC",
      "buildings": "#6C6C6C",
      "roads": "#1A1A1A"
    },
    "filter": "grayscale(1) contrast(1.5) brightness(0.98)",
    "mix": "normal",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "copper_patina",
    "name": "Copper Patina",
    "arName": "أكسيد النحاس (Patina)",
    "category": "vibrant",
    "description": "Oxidized copper aesthetic - teal-green patina with copper accents",
    "arDesc": "جمالية النحاس المؤكسد — تركواز بترولي مع نحاس هادئ",
    "ui": {
      "bg": "#E8F0F0",
      "text": "#2A5A5A"
    },
    "map": {
      "land": "#E8F0F0",
      "water": "#C0D8D8",
      "parks": "#D8E8E0",
      "buildings": "#8AB6B6",
      "roads": "#B87333"
    },
    "filter": "hue-rotate(130deg) saturate(1.4) brightness(0.95)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "emerald",
    "name": "Emerald City",
    "arName": "مدينة الزمرد (Emerald City)",
    "category": "dark",
    "description": "Lush dark green aesthetic with mint accents",
    "arDesc": "أخضر زمردي عميق وفاخر مع لمسات نعناعية رقيقة",
    "ui": {
      "bg": "#062C22",
      "text": "#E3F9F1"
    },
    "map": {
      "land": "#062C22",
      "water": "#0D4536",
      "parks": "#0F523E",
      "buildings": "#1A785B",
      "roads": "#4ADEB0"
    },
    "filter": "invert(1) hue-rotate(75deg) saturate(2) brightness(0.8)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "forest",
    "name": "Forest",
    "arName": "غابات عريقة (Forest)",
    "category": "earth",
    "description": "Deep greens and sage tones - organic botanical aesthetic",
    "arDesc": "أخضر غابي عميق ونغمات عشبية نباتية أصيلة",
    "ui": {
      "bg": "#F0F4F0",
      "text": "#2D4A3E"
    },
    "map": {
      "land": "#F0F4F0",
      "water": "#B8D4D4",
      "parks": "#D4E8D4",
      "buildings": "#8AB19A",
      "roads": "#3A5E4D"
    },
    "filter": "hue-rotate(70deg) saturate(1.5) brightness(0.92)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "japanese_ink",
    "name": "Japanese Ink",
    "arName": "حبر ياباني (Japanese Ink)",
    "category": "light",
    "description": "Traditional ink wash inspired - minimalist with subtle red accent",
    "arDesc": "مستوحى من فن الحبر سومي-إي — تبسيطي بلمسة حمراء",
    "ui": {
      "bg": "#FAF8F5",
      "text": "#2C2C2C"
    },
    "map": {
      "land": "#FAF8F5",
      "water": "#E8E4E0",
      "parks": "#F0EDE8",
      "buildings": "#959595",
      "roads": "#8B2500"
    },
    "filter": "grayscale(0.9) contrast(1.2) brightness(1.02)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "noir",
    "name": "Noir",
    "arName": "نوار أسود نقي (Noir)",
    "category": "dark",
    "description": "Pure black background with white/gray roads - modern gallery aesthetic",
    "arDesc": "أسود نقي فاخر مع شوارع بيضاء ورمادية لمعارض الفن",
    "ui": {
      "bg": "#000000",
      "text": "#FFFFFF"
    },
    "map": {
      "land": "#000000",
      "water": "#0B0B0B",
      "parks": "#171717",
      "buildings": "#6F6F6F",
      "roads": "#E8E8E8"
    },
    "filter": "invert(1) brightness(0.72) contrast(1.45)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "ocean",
    "name": "Ocean",
    "arName": "المحيط الأزرق (Ocean)",
    "category": "vibrant",
    "description": "Various blues and teals - perfect for coastal cities",
    "arDesc": "تدرجات زرقاء مائية — مثالية للمدن الساحلية والجزر",
    "ui": {
      "bg": "#F0F8FA",
      "text": "#1A5F7A"
    },
    "map": {
      "land": "#F0F8FA",
      "water": "#B8D8E8",
      "parks": "#D8EAE8",
      "buildings": "#67AED0",
      "roads": "#14536A"
    },
    "filter": "hue-rotate(160deg) saturate(1.5) brightness(0.96)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "pastel_dream",
    "name": "Pastel Dream",
    "arName": "حلم الباستيل (Pastel Dream)",
    "category": "light",
    "description": "Soft muted pastels with dusty blues and mauves - dreamy artistic aesthetic",
    "arDesc": "باستيل ناعم مع أزرق مغبر وبنفسجي حالم",
    "ui": {
      "bg": "#FAF7F2",
      "text": "#5D5A6D"
    },
    "map": {
      "land": "#FAF7F2",
      "water": "#D4E4ED",
      "parks": "#E8EDE4",
      "buildings": "#CEC3CB",
      "roads": "#6870A0"
    },
    "filter": "hue-rotate(240deg) saturate(0.8) brightness(1.05)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "coral",
    "name": "Coral",
    "arName": "شعب مرجانية (Coral)",
    "category": "vibrant",
    "description": "Soft ivory base with warm coral roads and muted pink-blue features.",
    "arDesc": "عاجي ناعم مع طرق مرجانية دافئة ومسطحات وردية",
    "ui": {
      "bg": "#F3E1DA",
      "text": "#6E2F28"
    },
    "map": {
      "land": "#F3E1DA",
      "water": "#DFC0B5",
      "parks": "#EACFC6",
      "buildings": "#E39B89",
      "roads": "#B9473A"
    },
    "filter": "sepia(0.35) hue-rotate(320deg) saturate(1.3) brightness(0.98)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "copper",
    "name": "Copper",
    "arName": "نحاسي معدني (Copper)",
    "category": "earth",
    "description": "Oxidized cream and copper tones with warm metallic road accents.",
    "arDesc": "نغمات كريمة ونحاسية مؤكسدة مع لمسات دافئة",
    "ui": {
      "bg": "#E1D2C6",
      "text": "#4E2F22"
    },
    "map": {
      "land": "#E1D2C6",
      "water": "#CBB5A1",
      "parks": "#D8C6B5",
      "buildings": "#C88B72",
      "roads": "#7C452E"
    },
    "filter": "sepia(0.55) hue-rotate(-15deg) saturate(1.3)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "old_navy",
    "name": "Old Navy",
    "arName": "البحرية الكلاسيكية (Old Navy)",
    "category": "dark",
    "description": "Deep navy map fields with gold-accented typography and roads.",
    "arDesc": "كحلي داكن فاخر مع تايبوجرافي وطرق ذهبية متألقة",
    "ui": {
      "bg": "#061327",
      "text": "#E2B85C"
    },
    "map": {
      "land": "#061327",
      "water": "#0B1E3B",
      "parks": "#0F2240",
      "buildings": "#2A3F5C",
      "roads": "#D4A030"
    },
    "filter": "invert(1) hue-rotate(200deg) brightness(0.75) contrast(1.35)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "gradient_roads",
    "name": "Gradient Roads",
    "arName": "تدرج ناعم (Gradient)",
    "category": "light",
    "description": "Smooth gradient from dark center to light edges with subtle features",
    "arDesc": "تدرج سلس من المركز الداكن نحو الأطراف الفاتحة",
    "ui": {
      "bg": "#FFFFFF",
      "text": "#000000"
    },
    "map": {
      "land": "#FFFFFF",
      "water": "#D0D0D0",
      "parks": "#F0F0F0",
      "buildings": "#505050",
      "roads": "#111111"
    },
    "filter": "grayscale(0.7) contrast(1.3) brightness(1.02)",
    "mix": "normal",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "monochrome_blue",
    "name": "Monochrome Blue",
    "arName": "أزرق أحادي (Mono Blue)",
    "category": "light",
    "description": "Single blue color family with varying saturation - clean and cohesive",
    "arDesc": "عائلة زرقاء متدرجة بنقاء وتناسق بصري استثنائي",
    "ui": {
      "bg": "#F5F8FA",
      "text": "#1A3A5C"
    },
    "map": {
      "land": "#F5F8FA",
      "water": "#C8DCF0",
      "parks": "#DDE8F2",
      "buildings": "#8EB0CC",
      "roads": "#1A3D6C"
    },
    "filter": "hue-rotate(180deg) saturate(1.3) contrast(1.1)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "sunset",
    "name": "Sunset",
    "arName": "غروب ذهبي (Sunset)",
    "category": "vibrant",
    "description": "Warm oranges and pinks on soft peach - dreamy golden hour aesthetic",
    "arDesc": "برتقالي ووردي دافئ على خلفية خوخية لساعة الغروب",
    "ui": {
      "bg": "#FDF5F0",
      "text": "#C45C3E"
    },
    "map": {
      "land": "#FDF5F0",
      "water": "#EDD0C4",
      "parks": "#F8E8E2",
      "buildings": "#EAA898",
      "roads": "#B84830"
    },
    "filter": "sepia(0.4) hue-rotate(330deg) saturate(1.6) brightness(1.05)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "autumn",
    "name": "Autumn",
    "arName": "خريفي ذهبي (Autumn)",
    "category": "earth",
    "description": "Burnt oranges, deep reds, golden yellows - seasonal warmth",
    "arDesc": "برتقالي محروق وأحمر داكن وأصفر خريفي دافئ",
    "ui": {
      "bg": "#FBF7F0",
      "text": "#8B4513"
    },
    "map": {
      "land": "#FBF7F0",
      "water": "#D4C8B4",
      "parks": "#EDE6D8",
      "buildings": "#C8943C",
      "roads": "#8B2500"
    },
    "filter": "sepia(0.65) hue-rotate(-20deg) saturate(1.7) contrast(1.1)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "warm_beige",
    "name": "Warm Beige",
    "arName": "بيج دافئ كلاسيكي (Warm Beige)",
    "category": "earth",
    "description": "Earthy warm neutrals with sepia tones - vintage map aesthetic",
    "arDesc": "ألوان ترابية محايدة بنغمات السيبيا للخرائط القديمة",
    "ui": {
      "bg": "#F5F0E8",
      "text": "#6B5B4F"
    },
    "map": {
      "land": "#F5F0E8",
      "water": "#D8D0C0",
      "parks": "#EAE6DC",
      "buildings": "#BFB09E",
      "roads": "#6B4828"
    },
    "filter": "sepia(0.45) saturate(1.15) brightness(0.97)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "cyberpunk",
    "name": "Cyberpunk 2077",
    "arName": "سايبربانك 2077",
    "category": "vibrant",
    "description": "Neon cyan and electric yellow on pitch cyber dark",
    "arDesc": "أصفر نيون وسيان كهربائي على خلفية سايبر داكنة",
    "ui": { "bg": "#080b11", "text": "#00ffcc" },
    "map": { "land": "#080b11", "water": "#0f172a", "parks": "#13233a", "buildings": "#1e293b", "roads": "#00ffcc" },
    "filter": "invert(1) hue-rotate(140deg) saturate(3) brightness(0.9) contrast(1.4)",
    "mix": "screen",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "nordic_frost",
    "name": "Nordic Frost",
    "arName": "صقيع الشمال",
    "category": "light",
    "description": "Icy arctic blue and pristine white frost aesthetic",
    "arDesc": "أزرق قطبي جليدي وأبيض ناصع بجمالية صقيع الشمال",
    "ui": { "bg": "#eef4f8", "text": "#1b365d" },
    "map": { "land": "#eef4f8", "water": "#b8d0e5", "parks": "#d4e4f2", "buildings": "#c8d9ed", "roads": "#2a4d7a" },
    "filter": "hue-rotate(180deg) saturate(0.8) brightness(1.02)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "desert_gold",
    "name": "Desert Gold",
    "arName": "ذهب الصحراء",
    "category": "earth",
    "description": "Golden sand dunes and warm umber highlights",
    "arDesc": "رمال ذهبية دافئة ولمسات بني عنبري عتيق",
    "ui": { "bg": "#f7f1e3", "text": "#8c6747" },
    "map": { "land": "#f7f1e3", "water": "#d2c2a5", "parks": "#ede4d0", "buildings": "#dfd2bc", "roads": "#6b4f34" },
    "filter": "sepia(0.55) saturate(1.3) brightness(0.98)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "royal_amethyst",
    "name": "Royal Amethyst",
    "arName": "أرجواني ملكي",
    "category": "dark",
    "description": "Deep imperial purple with glowing gold and orchid roads",
    "arDesc": "بنفسجي ملكي عميق مع شوارع متوهجة كالذهب والأوركيد",
    "ui": { "bg": "#1e1124", "text": "#e0b0ff" },
    "map": { "land": "#1e1124", "water": "#2d1a38", "parks": "#382346", "buildings": "#4a2d5c", "roads": "#e0b0ff" },
    "filter": "invert(1) hue-rotate(240deg) saturate(2.5) brightness(0.85) contrast(1.2)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "sunset_velvet",
    "name": "Sunset Velvet",
    "arName": "غسق مخملي",
    "category": "vibrant",
    "description": "Rich crimson and warm magenta sunset gradients",
    "arDesc": "قرمزي غني وتدرجات وردية دافئة لساعة الغسق",
    "ui": { "bg": "#22092c", "text": "#ff758c" },
    "map": { "land": "#22092c", "water": "#3d134c", "parks": "#4d1961", "buildings": "#5e2075", "roads": "#ff758c" },
    "filter": "invert(1) hue-rotate(300deg) saturate(2.8) brightness(0.88)",
    "mix": "screen",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "matte_olive",
    "name": "Matte Olive",
    "arName": "زيتوني مطفي",
    "category": "earth",
    "description": "Earthy military olive and warm cream minimalism",
    "arDesc": "أخضر زيتوني عسكري وقشدي دافئ بتبسيطة راقية",
    "ui": { "bg": "#f0f2ed", "text": "#3f4739" },
    "map": { "land": "#f0f2ed", "water": "#cdd4c8", "parks": "#e2e8de", "buildings": "#d3dacd", "roads": "#2d3328" },
    "filter": "sepia(0.3) hue-rotate(80deg) saturate(0.9) brightness(0.98)",
    "mix": "multiply",
    "isDark": false,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  },
  {
    "id": "tokyo_neon",
    "name": "Tokyo Night Neon",
    "arName": "نيون طوكيو الليلي",
    "category": "vibrant",
    "description": "Tokyo midnight neon blues and vibrant violet lights",
    "arDesc": "أزرق ليلي مع إضاءات نيون طوكيو البنفسجية المتألقة",
    "ui": { "bg": "#1a1b26", "text": "#7aa2f7" },
    "map": { "land": "#1a1b26", "water": "#24283b", "parks": "#292e42", "buildings": "#414868", "roads": "#bb9af7" },
    "filter": "invert(1) hue-rotate(210deg) saturate(2.2) brightness(0.85) contrast(1.3)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/positron"
  },
  {
    "id": "espresso_crema",
    "name": "Espresso Crema",
    "arName": "إسبريسو كريما",
    "category": "earth",
    "description": "Rich espresso brown with warm coffee crema highlights",
    "arDesc": "بني إسبريسو غني مع درجات كريمة القهوة الدافئة",
    "ui": { "bg": "#2c221e", "text": "#d4a373" },
    "map": { "land": "#2c221e", "water": "#3f302b", "parks": "#4d3a34", "buildings": "#5e4740", "roads": "#d4a373" },
    "filter": "sepia(0.8) saturate(1.4) brightness(0.7) contrast(1.2)",
    "mix": "multiply",
    "isDark": true,
    "styleUrl": "https://tiles.openfreemap.org/styles/liberty"
  }
];

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
  showCity: true,
  showCountry: true,
  fontId: "cairo",
  mapFont: "Noto Sans Regular",
  mapLang: "ar",
  letterSpacing: 0.22,
  textTransform: "uppercase",
  titleScale: 1.0,
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

function lineClassFilter(classes) {
  return ["all", ["==", "$type", "LineString"], ["match", ["get", "class"], classes, true, false]];
}

function polygonClassFilter(classes) {
  return ["all", ["==", "$type", "Polygon"], ["match", ["get", "class"], classes, true, false]];
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
        filter: ["==", "$type", "Polygon"],
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
        filter: ["==", "$type", "LineString"],
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
        filter: polygonClassFilter(["park", "wood", "grass", "scrub", "wetland", "nature_reserve", "golf_course"]),
        paint: { "fill-color": t.parks, "fill-opacity": 0.9 },
      },
      {
        id: "landuse_park",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landuse",
        filter: polygonClassFilter(["park", "nature_reserve", "golf_course"]),
        paint: { "fill-color": t.parks, "fill-opacity": 0.9 },
      },

      // Landuse areas
      {
        id: "landuse_residential",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landuse",
        filter: polygonClassFilter(["residential", "commercial", "industrial", "institutional"]),
        paint: { "fill-color": t.landcover || t.land, "fill-opacity": 0.6 },
      },

      // Aeroway
      {
        id: "aeroway",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "aeroway",
        filter: ["==", "$type", "Polygon"],
        paint: { "fill-color": t.aeroway || t.land, "fill-opacity": 0.8 },
      },

      // Rail
      {
        id: "rail",
        type: "line",
        source: SOURCE_ID,
        "source-layer": "transportation",
        filter: lineClassFilter(["rail", "transit"]),
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
        filter: ["==", "$type", "LineString"],
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
        filter: lineClassFilter(LAYER_CLASSES.roads.major),
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
        filter: lineClassFilter(LAYER_CLASSES.roads.minor_high),
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
        filter: lineClassFilter(LAYER_CLASSES.roads.minor_mid),
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
        filter: lineClassFilter(LAYER_CLASSES.roads.minor_low),
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
        filter: lineClassFilter(LAYER_CLASSES.roads.path),
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
        filter: lineClassFilter(LAYER_CLASSES.roads.major),
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
        filter: ["==", "$type", "Polygon"],
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
        filter: ["==", "$type", "Polygon"],
        paint: { "fill-color": t.buildings, "fill-opacity": 0.8 },
        maxzoom: 14,
      },

      // Landcover (grass, wood, etc.) - low zoom fallback
      {
        id: "landcover_wood",
        type: "fill",
        source: SOURCE_ID,
        "source-layer": "landcover",
        filter: polygonClassFilter(["wood", "forest"]),
        paint: { "fill-color": t.landcover || t.parks, "fill-opacity": 0.7 },
      },
    ],
  };
}

function applyTheme(theme) {
  if (!state.map) return;
  
  const newStyle = generateMapStyle(theme);
  
  try {
    state.map.setStyle(newStyle);
    state.currentLoadedStyleUrl = "generated";
    state.isStyleLoaded = false;
    
    state.map.once("style.load", () => {
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

  if (posterEl) {
    posterEl.style.backgroundColor = theme.ui.bg;
  }

  if (posterText) {
    posterText.style.color = theme.ui.text;
    if (theme.isDark) {
      posterText.classList.remove("theme-light");
      posterText.style.filter = "drop-shadow(0 2px 10px rgba(0,0,0,0.9))";
    } else {
      posterText.classList.add("theme-light");
      posterText.style.filter = "drop-shadow(0 1px 4px rgba(255,255,255,0.8))";
    }
  }

  if (tintEl) {
    tintEl.style.backgroundColor = state.tintColor || theme.ui.bg;
    tintEl.style.mixBlendMode = theme.mix || "multiply";
    tintEl.style.opacity = theme.id === "carrara" ? "0.08" : "0.32";
  }

  document.querySelectorAll(".theme-card").forEach((c) => {
    c.classList.toggle("active", c.dataset.themeId === state.themeId);
  });
}

function initMapEngine() {
  // Register Mapbox GL RTL Text plugin for proper Arabic text shaping on the map
  if (typeof maplibregl !== "undefined" && maplibregl.setRTLTextPlugin) {
    try {
      const rtlStatus = maplibregl.getRTLTextPluginStatus();
      if (rtlStatus === "unavailable") {
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

    // Water
    if (id === "water" || id === "waterway") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.water ? "visible" : "none"); } catch (e) {}
    }

    // Parks / Landcover
    if (id === "parks" || id === "landuse_park" || id === "landuse_residential" || id === "landcover_wood") {
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
    if (id === "landuse_residential") {
      try { state.map.setLayoutProperty(id, "visibility", state.layers.landuse ? "visible" : "none"); } catch (e) {}
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
    if (
      l.layout &&
      l.layout["text-field"] &&
      (l["source-layer"] === "place" || l["source-layer"] === "poi" || l.id.includes("label"))
    ) {
      try {
        state.map.setLayoutProperty(l.id, "text-field", expr);
      } catch (e) {}
    }
  });
}

function applyThemeVisuals() {
  const theme = THEMES.find((th) => th.id === state.themeId) || THEMES[0];
  const mapCanvas = document.getElementById("map");
  const tintEl = document.getElementById("mapTint");
  const posterEl = document.getElementById("poster");
  const posterText = document.getElementById("posterText");

  if (mapCanvas) {
    mapCanvas.style.filter = theme.filter;
  }

  if (tintEl) {
    tintEl.style.backgroundColor = state.tintColor || theme.ui.bg;
    tintEl.style.mixBlendMode = theme.mix || "multiply";
    tintEl.style.opacity = theme.id === "carrara" ? "0.08" : "0.32";
  }

  if (posterEl) {
    posterEl.style.backgroundColor = theme.ui.bg;
  }

  if (posterText) {
    posterText.style.color = theme.ui.text;
    if (theme.isDark) {
      posterText.classList.remove("theme-light");
      posterText.style.filter = "drop-shadow(0 2px 10px rgba(0,0,0,0.9))";
    } else {
      posterText.classList.add("theme-light");
      posterText.style.filter = "drop-shadow(0 1px 4px rgba(255,255,255,0.8))";
    }
  }

  // Update visual card active selection
  document.querySelectorAll(".theme-card").forEach((c) => {
    c.classList.toggle("active", c.dataset.themeId === state.themeId);
  });
}

function switchTheme(themeId) {
  state.themeId = themeId;
  const theme = THEMES.find((th) => th.id === themeId) || THEMES[0];
  state.tintColor = theme.ui.bg;

  const inpTint = document.getElementById("inpTint");
  const lblTintVal = document.getElementById("lblTintVal");
  if (inpTint) inpTint.value = theme.ui.bg;
  if (lblTintVal) lblTintVal.textContent = theme.ui.bg;

  applyTheme(theme);
  updateMetaDisplay();
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

  grid.innerHTML = filtered
    .map((th) => {
      const isActive = th.id === state.themeId;
      const land = th.map?.land || th.ui.bg;
      const water = th.map?.water || "#a8c4c4";
      const roads = th.map?.roads || th.ui.text;
      const textCol = th.ui.text;

      return `
        <div class="theme-card ${isActive ? "active" : ""}" data-theme-id="${th.id}">
          <div class="theme-active-badge">✓</div>
          <div class="theme-swatch-bar">
            <div class="theme-swatch-seg" style="background:${land};" title="Land: ${land}"></div>
            <div class="theme-swatch-seg" style="background:${water};" title="Water: ${water}"></div>
            <div class="theme-swatch-seg" style="background:${roads};" title="Roads: ${roads}"></div>
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
      <option value="png">PNG (Portable Network Graphics)</option>
      <option value="jpeg">JPEG (High Quality)</option>
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

  const selMapFont = document.getElementById("selMapFont");
  if (selMapFont) selMapFont.value = state.mapFont;

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
  updateText("themeCountPill", state.lang === "ar" ? "27 ثيم أصلي" : "27 Original Themes");
  updateText("catAll", state.lang === "ar" ? "الكل (27)" : "All (27)");
  updateText("catDark", state.lang === "ar" ? "داكن وفخم" : "Dark & Luxury");
  updateText("catEarth", state.lang === "ar" ? "طبيعي وترابي" : "Earth & Nature");
  updateText("catLight", state.lang === "ar" ? "كلاسيكي وفاتح" : "Classic & Light");
  updateText("catVibrant", state.lang === "ar" ? "فني ونيون" : "Artistic & Neon");
  updateText("lblTint", t("lblTint"));
  updateText("themeHint", t("themeHint"));

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

  // Theme Tint Color
  document.getElementById("inpTint")?.addEventListener("input", (e) => {
    state.tintColor = e.target.value;
    const tintEl = document.getElementById("mapTint");
    const lblTintVal = document.getElementById("lblTintVal");
    if (tintEl) tintEl.style.backgroundColor = state.tintColor;
    if (lblTintVal) lblTintVal.textContent = state.tintColor;
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
function initApp() {
  setLanguage("ar");
  applyLayout(state.layoutId);
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
