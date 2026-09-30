export interface SchemaField {
  id: string;
  nameAr: string;
  nameEn: string;
  type: "text" | "textarea" | "image" | "video" | "color" | "checkbox" | "select" | "number" | "list" | "url" | "products" | "product";
  required?: boolean;
  defaultVal?: string | number | boolean;
  recommendedSize?: string;
  infoAr: string;
  options?: { label: string; value: string }[];
}

export interface SectionGuide {
  id: string;
  templateFile: string;
  schemaFile: string;
  icon: string;
  badge: string;
  category: "core" | "hero_sliders" | "interactive" | "products" | "trust" | "modals";
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  whyUseItAr: string;
  proTipAr: string;
  stepsAr: string[];
  mockupType: "header" | "layout" | "slider" | "before_after" | "lookbook" | "testimonials" | "ugc" | "video" | "how_to_use" | "features" | "guarantee" | "products" | "categories" | "promo_modal" | "faq" | "footer";
  previewImages?: string[];
  fields: SchemaField[];
}

export const CATEGORIES = [
  { id: "all", labelAr: "الكل", labelEn: "All" },
  { id: "core", labelAr: "الهيدر والفوتر والتخطيط", labelEn: "Core & Layout" },
  { id: "hero_sliders", labelAr: "السلايدرز والبانرات", labelEn: "Sliders & Banners" },
  { id: "interactive", labelAr: "أقسام تفاعلية (قبل وبعد، لوك بوك)", labelEn: "Interactive Features" },
  { id: "products", labelAr: "المنتجات والتصنيفات", labelEn: "Products & Categories" },
  { id: "trust", labelAr: "الثقة والتقييمات والمميزات", labelEn: "Trust & Reviews" },
  { id: "modals", labelAr: "النوافذ والفيديو والأسئلة", labelEn: "Modals & Media" },
];

export const THEME_SECTIONS_GUIDE: SectionGuide[] = [
  {
    id: "header",
    templateFile: "header.jinja",
    schemaFile: "header.schema.json",
    icon: "Crown",
    badge: "رأس الصفحة والشريط المتحرك",
    category: "core",
    titleAr: "رأس الصفحة وشريط الأخبار (Header & Marquee)",
    titleEn: "Header & Marquee News Bar",
    taglineAr: "واجهة متجرك الأولى — شعارك بوضوح، شريط بحث سلس، وشريط إعلانات متحرك يجذب الانتباه فوراً.",
    whyUseItAr: "الهيدر هو أول ما تطيح عليه عين الزبونة. شريط الأخبار المتحرك فوق يعطيك مساحة ذهبية للإعلان عن كود خصم اليوم، أو توصيل مجاني فوق ٢٠٠ ريال، ويزيد نسبة الشراء فورياً بدون إزعاج.",
    proTipAr: "💡 ارفع الشعار بخلفية شفافة (PNG) ومقاس 750×750 بكسل عشان يطلع حاد ونظيف في كل الشاشات. وإذا كان شعارك عريض، فعّل خيار شعار الجوال المخصص بمقاس 322×750 بكسل.",
    stepsAr: [
      "ادخل لوحة تحكم زد > تخصيص الثيم > رأس الصفحة (Header).",
      "ارفع الشعار الأساسي وشعار الجوال بخلفية شفافة PNG.",
      "فعّل خيار 'رأس ثابت مع التمرير (Sticky)' عشان تظل السلة والقائمة ظاهرة للعميل وهو يتصفح.",
      "اضبط ألوان القائمة وشريط البحث وشارة عداد السلة بما يناسب ألوان هويتك.",
      "في قسم شريط الأخبار: اكتب نصوصك التسويقية (مثلاً: 'توصيل مجاني لجميع مناطق المملكة 🚚') وحدد سرعة الحركة المناسبة (المثالي 15 ثانية)."
    ],
    mockupType: "header",
    fields: [
      {
        id: "logo",
        nameAr: "الشعار الأساسي",
        nameEn: "Main Logo",
        type: "image",
        required: true,
        recommendedSize: "750 × 750 px (PNG شفاف)",
        infoAr: "الشعار الرئيسي اللي يظهر في أعلى المتجر لسطح المكتب والأجهزة اللوحية."
      },
      {
        id: "logo_mobile",
        nameAr: "الشعار للجوال (اختياري)",
        nameEn: "Mobile Logo",
        type: "image",
        required: false,
        recommendedSize: "322 × 750 px",
        infoAr: "شعار مخصص لشاشات الجوال الصغيرة في حال رغبت بنسخة أصغر أو أفقية."
      },
      {
        id: "search_placeholder",
        nameAr: "تلميح شريط البحث",
        nameEn: "Search Placeholder",
        type: "text",
        required: false,
        defaultVal: "ابحثي عن منتجك المفضل...",
        infoAr: "النص التوضيحي داخل مربع البحث لإرشاد العميل بالبحث عن المنتجات."
      },
      {
        id: "sticky",
        nameAr: "رأس ثابت مع التمرير (Sticky)",
        nameEn: "Sticky Header",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "يثبت الهيدر بأعلى الشاشة أثناء نزول الزائر لسهولة الوصول للسلة والمنيو."
      },
      {
        id: "background_color",
        nameAr: "لون خلفية رأس الصفحة",
        nameEn: "Header Background Color",
        type: "color",
        required: false,
        defaultVal: "#ffffff",
        infoAr: "اللون الأساسي لشريط الهيدر. يمكنك تركه أبيض أو بلون ناعم يتناسب مع الهوية."
      },
      {
        id: "news_bar.display",
        nameAr: "إظهار شريط الأخبار المتحرك",
        nameEn: "Show News Bar",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "تفعيل الشريط الإعلاني المتحرك بأعلى قمة المتجر."
      },
      {
        id: "news_bar.texts",
        nameAr: "النصوص المتحركة (حتى 5 نصوص)",
        nameEn: "Marquee Texts List",
        type: "list",
        required: true,
        infoAr: "قائمة العبارات الترويجية المتتابعة (شحن مجاني، عروض حصرية، أكواد خصم)."
      },
      {
        id: "news_bar.animation_speed",
        nameAr: "سرعة التحريك (بالثواني)",
        nameEn: "Animation Speed",
        type: "number",
        required: false,
        defaultVal: 15,
        infoAr: "كل ما زاد الرقم صارت الحركة أهدأ وأسهل للقراءة (الموصى به بين 12 إلى 18 ثانية)."
      }
    ]
  },
  {
    id: "layout",
    templateFile: "layout.jinja",
    schemaFile: "layout.schema.json",
    icon: "Palette",
    badge: "الهوية، الخطوط، والألوان العامة",
    category: "core",
    titleAr: "التخطيط العام والهوية البصرية (Layout & Identity)",
    titleEn: "Layout & Design System",
    taglineAr: "التحكم الشامل بـ ٢٤ خط عربي، ألوان المتجر، سلة الشراء الذكية، وإعدادات صفحة المنتج.",
    whyUseItAr: "هنا قلب الثيم النابض. تقدر بضغطة زر تغيّر الخط العام لمتجرك من بين 24 خط عربي راقي (مثل تشانجا أو كايرو أو تجوال)، وتضبط ألوان درجات الوردي والبلش، وتتحكم بالسلة الجانبية وشريط الشحن المجاني التفاعلي.",
    proTipAr: "💡 فعّل خيار 'عداد زوار المنتج التفاعلي' (Live Visitor Count) في صفحة المنتج، وحط الحد الأدنى 15 والأقصى 85. هذا الخيار يعطي إحساس فوري بالطلب العالي ويحفز الزبونة تقرر وتطلب بسرعة!",
    stepsAr: [
      "ادخل إعدادات التخطيط (Layout Settings) في لوحة تخصيص زد.",
      "اختر خط الموقع العربي المفضل لديك من القائمة المنسدلة (تشانجا، كايرو، تجوال، الأميري وغيرها).",
      "حدد ألوانك العامة: لون الخلفية الأساسي واللونين الأساسي (Primary) والثانوي (Secondary).",
      "اضبط ألوان السلة الجانبية (Mini Cart) وشريط الشحن المجاني التفاعلي.",
      "في إعدادات صفحة المنتج: اختر طريقة عرض الصور (Contain للحفاظ على كامل الصورة أو Cover للملء)، وضع روابط حساباتك الاجتماعية وواتساب.",
      "اضبط 'خريطة ألوان المتغيرات' (Color Map) عشان لو عندك روج أو فاونديشن بألوان متعددة، تطلع دوائر الألوان بشكل فخم ودقيق."
    ],
    mockupType: "layout",
    fields: [
      {
        id: "fonts.name",
        nameAr: "خط الموقع العربي (24 خط متوفر)",
        nameEn: "Site Arabic Font",
        type: "select",
        required: true,
        defaultVal: "Changa",
        infoAr: "اختر الخط المناسب لهوية متجرك: Changa, Cairo, Tajawal, Almarai, Amiri, El Messiri وغيرها الكثير."
      },
      {
        id: "general.primary",
        nameAr: "اللون الرئيسي (Primary)",
        nameEn: "Primary Color",
        type: "color",
        required: true,
        defaultVal: "#eb3986",
        infoAr: "اللون المستخدم في الأزرار الأساسية (إضافة للسلة، إتمام الطلب، الروابط الهامة)."
      },
      {
        id: "general.body_bg",
        nameAr: "لون خلفية المتجر",
        nameEn: "Page Background",
        type: "color",
        required: false,
        defaultVal: "#ffffff",
        infoAr: "اللون العام لخلفية كامل الموقع."
      },
      {
        id: "mini_cart.brand",
        nameAr: "اللون الرئيسي للسلة الجانبية",
        nameEn: "Cart Brand Color",
        type: "color",
        required: false,
        defaultVal: "#eb3986",
        infoAr: "يستخدم في أزرار السلة التفاعلية وشريط الشحن المجاني."
      },
      {
        id: "product_page.gallery_image_fit",
        nameAr: "طريقة عرض صور المنتج",
        nameEn: "Gallery Image Fit",
        type: "select",
        required: true,
        defaultVal: "contain",
        infoAr: "Contain: يعرض الصورة كاملة بدون أي قص — Cover: يملأ الإطار بالكامل."
      },
      {
        id: "product_page.show_visitor_count",
        nameAr: "إظهار عدد الزوار المباشر للمنتج",
        nameEn: "Show Live Visitor Count",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "يُظهر رقماً عشوائياً ذكياً لتشجيع العميل على الشراء الفوري (Social Proof)."
      },
      {
        id: "product_page.color_map",
        nameAr: "خريطة ألوان المتغيرات (Color Map)",
        nameEn: "Variant Color Map",
        type: "list",
        required: false,
        infoAr: "قائمة لربط أسماء الألوان (مثل وردي، عنابي، بيج) بأكواد ألوان دقيقة أو صور مصغرة."
      }
    ]
  },
  {
    id: "main-slider",
    templateFile: "sections/main-slider.jinja",
    schemaFile: "sections/main-slider.schema.json",
    icon: "Sliders",
    badge: "سلايدر العروض الترويجية",
    category: "hero_sliders",
    titleAr: "شرائح الصور الرئيسية (Main Slider)",
    titleEn: "Main Hero Slider",
    taglineAr: "البوابة التسويقية لمتجرك — بانرات سينمائية عريضة، صور مخصصة للجوال، وأزرار شراء مباشرة.",
    whyUseItAr: "السلايدر الرئيسي هو الواجهة التسويقية الأولى لعرض أقوى الخصومات، المجموعات الموسمية الجديدة، وباقات العناية. يدعم تخصيص صور منفصلة للجوال تماماً عشان ما يصير قص بالصور نهائياً.",
    proTipAr: "💡 صمم صورة الديسكتوب بمقاس 1920×800 بكسل عريضة، وصورة الجوال بمقاس 750×1000 بكسل عمودية. واختر بؤرة الصورة (Center) عشان تضمن تمركز المنتج بالوسط دائماً.",
    stepsAr: [
      "في أقسام الصفحة الرئيسية، أضف قسم 'شرائح الصور الرئيسية'.",
      "أضف شريحة جديدة وارفع صورة الديسكتوب وصورة الجوال.",
      "اختر وضع الارتفاع للديسكتوب (مثلاً: نسبة أبعاد 16:9 أو ثابت 600px).",
      "اختر وضع الارتفاع للجوال (موصى به: نسبة أبعاد 4:5 عمودية).",
      "اكتب العنوان الرئيسي، الوصف، ونص الزر مثل 'تسوقي التشكيلة' وضع رابط التصنيف أو العرض.",
      "فعّل طبقة التعتيم (Overlay) بنسبة 25-35% إذا كانت الصورة فاتحة عشان تبرز النصوص بوضوح تام."
    ],
    mockupType: "slider",
    fields: [
      {
        id: "slider[].image",
        nameAr: "صورة الديسكتوب",
        nameEn: "Desktop Image",
        type: "image",
        required: true,
        recommendedSize: "1920 × 800 px (أفقية عريضة)",
        infoAr: "تُعرض على الشاشات الكبيرة واللابتوب. احرص تكون عالية الدقة."
      },
      {
        id: "slider[].image_mobile",
        nameAr: "صورة الجوال (اختياري)",
        nameEn: "Mobile Image",
        type: "image",
        required: false,
        recommendedSize: "750 × 1000 px (عمودية)",
        infoAr: "تُعرض على شاشات الهواتف لمنع قص أطراف البانر وتوفير أفضل مظهر."
      },
      {
        id: "slider[].image_focus_desktop",
        nameAr: "بؤرة الصورة (ديسكتوب)",
        nameEn: "Focus Point Desktop",
        type: "select",
        required: false,
        defaultVal: "center",
        infoAr: "تحدد نقطة التركيز عند تكيف الشاشة (أعلى، منتصف، أسفل)."
      },
      {
        id: "slider[].overlay_enable",
        nameAr: "تفعيل طبقة التعتيم",
        nameEn: "Enable Overlay",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "تضع طبقة شفافة فوق الصورة لزيادة وضوح وقراءة النصوص والأزرار."
      },
      {
        id: "slider[].overlay_opacity",
        nameAr: "شدة التعتيم (0-100)",
        nameEn: "Overlay Opacity",
        type: "number",
        required: false,
        defaultVal: 35,
        infoAr: "القيمة المثالية بين 25 إلى 40% لإبراز النصوص بدون إخفاء تفاصيل الصورة."
      },
      {
        id: "slider[].title",
        nameAr: "العنوان الرئيسي للشريحة",
        nameEn: "Slide Title",
        type: "text",
        required: false,
        infoAr: "عنوان العرض الترويجي أو اسم المجموعة."
      },
      {
        id: "slider[].button_text",
        nameAr: "نص زر الإجراء (CTA)",
        nameEn: "Button Text",
        type: "text",
        required: false,
        defaultVal: "تسوقي الآن",
        infoAr: "الزر التفاعلي الذي يوجه الزائرة للمنتجات مباشرة."
      },
      {
        id: "desktop_height_type",
        nameAr: "طريقة تحديد الارتفاع (ديسكتوب)",
        nameEn: "Desktop Height Mode",
        type: "select",
        required: true,
        defaultVal: "fixed",
        infoAr: "ثابت (Fixed px) أو نسبة أبعاد (Aspect Ratio) أو ملء الشاشة (Full Screen)."
      },
      {
        id: "mobile_height_type",
        nameAr: "طريقة تحديد الارتفاع (جوال)",
        nameEn: "Mobile Height Mode",
        type: "select",
        required: true,
        defaultVal: "aspect",
        infoAr: "الموصى به للجوال: نسبة أبعاد (Aspect) 4:5 لظهور جذاب وملائم للهواتف."
      },
      {
        id: "autoplay",
        nameAr: "التشغيل التلقائي للسلايدر",
        nameEn: "Autoplay",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "تقليب الشرائح تلقائياً كل بضع ثوانٍ."
      }
    ]
  },
  {
    id: "before-after",
    templateFile: "sections/before-after.jinja",
    schemaFile: "sections/before-after.schema.json",
    icon: "Sparkles",
    badge: "مقارنة قبل وبعد التفاعلية",
    category: "interactive",
    titleAr: "قسم قبل وبعد التفاعلي (Before / After Slider)",
    titleEn: "Before & After Split Comparison",
    taglineAr: "أقوى قسم لإثبات النتائج — مقارنة تفاعلية حية تسحب فيها العميلة الخط لرؤية الفرق المذهل.",
    whyUseItAr: "الزبونة في منتجات العناية بالبشرة والمكياج والشعر تحتاج تشوف نتيجة واقعية وملموسة. هذا القسم يتيح لها سحب المقارنة يمين ويسار والتأكد بنفسها من فاعلية منتجك، وهو أكثر سكشن يرفع معدل الثقة والشراء الفوري.",
    proTipAr: "💡 استخدم صورتين متطابقتين في الإضاءة وزاوية التصوير (مثلاً: قبل استخدام السيروم وبعد أسبوعين، أو قبل وبعد المكياج). وضع الموضع المبدئي على 50% لفضول أكبر للتفاعل.",
    stepsAr: [
      "أضف قسم 'قبل وبعد' من أقسام الصفحة الرئيسية.",
      "ارفع صورة (قبل) بدقة واضحة ثم ارفع صورة (بعد) بنفس الأبعاد والزاوية.",
      "اكتب النصوص التوضيحية لبطاقة قبل (مثال: 'قبل الاستخدام') وبطاقة بعد (مثال: 'بعد أسبوعين ✨').",
      "اختر نسبة الأبعاد (مربع 1:1 أو كلاسيك 4:3) المناسبة لنوع صورك.",
      "اختر لون خلفية ناعم متناسق مع متجرك."
    ],
    mockupType: "before_after",
    fields: [
      {
        id: "eyebrow_text",
        nameAr: "النص العلوي (Eyebrow)",
        nameEn: "Eyebrow Text",
        type: "text",
        required: false,
        defaultVal: "نتائج حقيقية مثبتة",
        infoAr: "وسم صغير يظهر بأعلى عنوان القسم لإبراز المصداقية."
      },
      {
        id: "title",
        nameAr: "العنوان الرئيسي للقسم",
        nameEn: "Main Title",
        type: "text",
        required: true,
        defaultVal: "شاهدي الفرق بنفسك قبل وبعد",
        infoAr: "العنوان الرئيسي البارز للقسم."
      },
      {
        id: "image_before",
        nameAr: "صورة (قبل)",
        nameEn: "Before Image",
        type: "image",
        required: true,
        recommendedSize: "1000 × 750 px (نسبة 4:3 أو 1:1)",
        infoAr: "الصورة التي تظهر في الجانب الأيمن / الأيسر كحالة سابقة."
      },
      {
        id: "image_after",
        nameAr: "صورة (بعد)",
        nameEn: "After Image",
        type: "image",
        required: true,
        recommendedSize: "1000 × 750 px (نفس مقاس صورة قبل تماماً)",
        infoAr: "الصورة الناتجة بعد استخدام المنتج."
      },
      {
        id: "initial_position",
        nameAr: "موضع الشريط المبدئي (5-95)",
        nameEn: "Initial Slider Position",
        type: "text",
        required: false,
        defaultVal: "50",
        infoAr: "مكان خط المقارنة عند فتح الصفحة (50 = بالمنتصف بالضبط)."
      },
      {
        id: "before_label",
        nameAr: "نص بطاقة (قبل)",
        nameEn: "Before Label Text",
        type: "text",
        required: false,
        defaultVal: "قبل",
        infoAr: "الشارة الصغيرة المثبتة على صورة قبل."
      },
      {
        id: "after_label",
        nameAr: "نص بطاقة (بعد)",
        nameEn: "After Label Text",
        type: "text",
        required: false,
        defaultVal: "بعد",
        infoAr: "الشارة الصغيرة المثبتة على صورة بعد."
      },
      {
        id: "aspect_ratio",
        nameAr: "نسبة الأبعاد",
        nameEn: "Aspect Ratio",
        type: "select",
        required: true,
        defaultVal: "4/3",
        infoAr: "مربع (1:1)، كلاسيك (4:3)، أو عريض (16:9)."
      }
    ]
  },
  {
    id: "lookbook",
    templateFile: "sections/lookbook.jinja",
    schemaFile: "sections/lookbook.schema.json",
    icon: "Eye",
    badge: "معرض الإطلالات ونقاط التسوق",
    category: "interactive",
    titleAr: "معرض الإطلالات التفاعلي (Lookbook With Product Pins)",
    titleEn: "Shoppable Lookbook Gallery",
    taglineAr: "تسوقي الإطلالة كاملة — صور وفيديوهات إطلالات حقيقية مع نقاط تفاعلية فوق كل منتج للشراء الفوري.",
    whyUseItAr: "بدل ما تعرضين المنتج لحاله، اعرضي الإطلالة كاملة (لوك ميكب، بكج عطور، روتين عناية) وحطي نقاط تسوق (+) على كل منتج بالصورة. لما تضغط الزبونة على النقطة يظهر كارت المنتج بسعره وزر شرائه فوراً!",
    proTipAr: "💡 في كل شريحة، حددي موضع النقطة بدقة عبر إحداثيات Pin X و Pin Y بالنسبة المئوية. مثلاً لو الروج بالوسط حطي X: 50 و Y: 60.",
    stepsAr: [
      "أضف قسم 'معرض الإطلالات (Lookbook)' لصفحتك.",
      "أضف شريحة واختر نوعها (صورة أو فيديو MP4).",
      "أضف نقاط المنتجات (Product Pins): اختر المنتج من متجرك في زد.",
      "حدد موقع النقطة على الصورة (Pin X % و Pin Y %).",
      "فعّل شارة 'الأكثر مبيعاً' على المنتجات المميزة داخل الإطلالة.",
      "أضف إحصائيات الثقة أعلى المعرض (مثل: تقييم 4.9 نجوم، +300 عميلة سعيدة)."
    ],
    mockupType: "lookbook",
    fields: [
      {
        id: "title",
        nameAr: "عنوان المعرض الرئيسي",
        nameEn: "Main Title",
        type: "text",
        required: true,
        defaultVal: "شوفي إطلالتك بعيوننا",
        infoAr: "العنوان الرئيسي الجذاب لقسم اللوك بوك."
      },
      {
        id: "slides[].category",
        nameAr: "نوع الشريحة (صورة أو فيديو)",
        nameEn: "Slide Type",
        type: "select",
        required: true,
        defaultVal: "image",
        infoAr: "اختر ما إذا كانت الشريحة صورة فوتوغرافية أو مقطع فيديو."
      },
      {
        id: "slides[].image",
        nameAr: "صورة الإطلالة",
        nameEn: "Look Image",
        type: "image",
        required: false,
        recommendedSize: "1200 × 1200 px (مربعة أو عمودية بدقة عالية)",
        infoAr: "صورة المودل أو اللوك المستخدم فيه المنتجات."
      },
      {
        id: "slides[].products[].product_id",
        nameAr: "اختيار المنتج المرتبط",
        nameEn: "Linked Product",
        type: "product",
        required: true,
        infoAr: "يتم جلب اسم المنتج وسعره وصورته ورابطه تلقائياً من كتالوج متجرك في زد."
      },
      {
        id: "slides[].products[].pin_x",
        nameAr: "موضع النقطة أفقيًا (0-100%)",
        nameEn: "Pin X Position (%)",
        type: "number",
        required: true,
        defaultVal: 50,
        infoAr: "مكان النقطة من اليسار إلى اليمين كنسبة مئوية."
      },
      {
        id: "slides[].products[].pin_y",
        nameAr: "موضع النقطة رأسيًا (0-100%)",
        nameEn: "Pin Y Position (%)",
        type: "number",
        required: true,
        defaultVal: 50,
        infoAr: "مكان النقطة من الأعلى إلى الأسفل كنسبة مئوية."
      },
      {
        id: "show_rating",
        nameAr: "إظهار تقييم المعرض والإحصائيات",
        nameEn: "Show Rating & Stats",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "عرض شارة التقييم بالنجوم وعدّادات العملاء أعلى المعرض."
      }
    ]
  },
  {
    id: "testimonials",
    templateFile: "sections/testimonials.jinja",
    schemaFile: "sections/testimonials.schema.json",
    icon: "Star",
    badge: "آراء العميلات وشارات الثقة",
    category: "trust",
    titleAr: "آراء العميلات وشارات الثقة (Customer Testimonials)",
    titleEn: "Customer Love & Trust Badges",
    taglineAr: "دليل اجتماعي قوي — كروت تقييمات لطيفة، صور رمزية، شارة عميلة موثقة، وشارات أرقام تثبت نجاحك.",
    whyUseItAr: "العميلات يبحثون دائماً عن تجارب غيرهم قبل الدفع. هذا القسم يوفر كروت أنيقة ومرتبة مع تقييم النجوم وشارة 'عميلة موثقة'، بالإضافة لشارات إحصائية بأعلى السكشن (مثل: 100% أصلي، +500 منتج فاخر، +10K طلب مكتمل).",
    proTipAr: "💡 حط آراء حقيقية بأسماء لطيفة ولهجة طبيعية، وفعّل خيار 'عميلة موثقة'. هذا يعطي أمان عالي جداً للزائرة الجديدة.",
    stepsAr: [
      "أضف قسم 'آراء العملاء' في الصفحة الرئيسية.",
      "اضبط إحصائيات الثقة الثلاثة (مثال: ⭐ 100% رضا، 💄 +500 عميلة، 🌸 +10K طلب).",
      "أضف آراء العميلات مع الأسماء، التقييم بالنجوم (5 نجوم)، ونص التجربة.",
      "فعّل خيار التشغيل التلقائي (Autoplay) وحدد وقت التأخير 4000 مللي ثانية (4 ثواني)."
    ],
    mockupType: "testimonials",
    fields: [
      {
        id: "title",
        nameAr: "العنوان الرئيسي للقسم",
        nameEn: "Section Title",
        type: "text",
        required: true,
        defaultVal: "وش قالوا جميلاتنا عنا؟",
        infoAr: "عنوان قسم الآراء والتقييمات."
      },
      {
        id: "show_trust_badges",
        nameAr: "عرض شارات الثقة والإحصائيات",
        nameEn: "Show Trust Badges",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "عرض الـ 3 كروت الإحصائية العلوية المطعمة بالإيموجي."
      },
      {
        id: "testimonials[].name",
        nameAr: "اسم العميلة",
        nameEn: "Customer Name",
        type: "text",
        required: true,
        defaultVal: "سارة العتيبي",
        infoAr: "اسم صاحبة الرأي."
      },
      {
        id: "testimonials[].rating",
        nameAr: "التقييم بالنجوم",
        nameEn: "Rating Stars",
        type: "select",
        required: true,
        defaultVal: "5",
        infoAr: "من 1 إلى 5 نجوم."
      },
      {
        id: "testimonials[].text",
        nameAr: "نص الرأي والتجربة",
        nameEn: "Review Text",
        type: "textarea",
        required: true,
        infoAr: "كلام العميلة وتجربتها مع سرعة التوصيل وجودة التغليف والمنتج."
      },
      {
        id: "testimonials[].verified",
        nameAr: "شارة عميلة موثقة",
        nameEn: "Verified Customer Badge",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "يضع علامة توثيق خضراء بجانب اسم العميلة لزيادة الثقة."
      }
    ]
  },
  {
    id: "ugc-videos",
    templateFile: "sections/ugc-videos.jinja",
    schemaFile: "sections/ugc-videos.schema.json",
    icon: "Video",
    badge: "فيديوهات وريلز العميلات",
    category: "interactive",
    titleAr: "فيديوهات وريلز العميلات (UGC Video Reels)",
    titleEn: "Customer UGC Reels & Stories",
    taglineAr: "تجربة تيك توك وسناب شات داخل متجرك — استعراض فيديوهات ريلز عمودية واقعية للمنتجات.",
    whyUseItAr: "فيديوهات الريلز القصيرة من العميلات أو المؤثرات تحقق أعلى تفاعل ممكن. الزبونة تشوف شكل الروج على الشفاه أو تجربة العطر في الحياة اليومية بضغطة زر.",
    proTipAr: "💡 ارفع فيديوهات عمودية بصيغة MP4 خفيفة أو حط رابط مباشر، مع صورة غلاف (Poster) جذابة ليظهر المعرض بتناسق وسرعة تحميل خارقة.",
    stepsAr: [
      "أضف قسم 'فيديوهات وتجارب العميلات' لمتجرك.",
      "أضف مقاطع الفيديو، منصة التواصل (تيك توك، انستقرام، سناب شات)، ومعرّف الحساب (@username).",
      "حدد عدد البطاقات في سطح المكتب (المثالي 4) وفي الجوال (المثالي 2).",
      "اربط كل فيديو بالمنتج الخاص فيه لتسهيل الطلب أثناء المشاهدة."
    ],
    mockupType: "ugc",
    fields: [
      {
        id: "title",
        nameAr: "عنوان قسم الريلز",
        nameEn: "UGC Section Title",
        type: "text",
        required: true,
        defaultVal: "تجارب لايف من عميلاتنا",
        infoAr: "العنوان الرئيسي لمعرض الفيديوهات."
      },
      {
        id: "ugc_videos[].video",
        nameAr: "رفع ملف الفيديو (MP4)",
        nameEn: "Upload Video",
        type: "video",
        required: false,
        infoAr: "ملف فيديو MP4 عمودي 9:16 بحجم أقصى 10MB."
      },
      {
        id: "ugc_videos[].video_url",
        nameAr: "أو رابط الفيديو الخارجي",
        nameEn: "Video URL",
        type: "text",
        required: false,
        infoAr: "رابط فيديو مباشر يتجاوز حدود الحجم المرفوع."
      },
      {
        id: "ugc_videos[].platform",
        nameAr: "منصة التواصل",
        nameEn: "Social Platform",
        type: "select",
        required: false,
        defaultVal: "tiktok",
        infoAr: "تيك توك، انستغرام، سناب شات، فيسبوك."
      }
    ]
  },
  {
    id: "how-to-use",
    templateFile: "sections/how-to-use.jinja",
    schemaFile: "sections/how-to-use.schema.json",
    icon: "ListOrdered",
    badge: "خطوات وروتين الاستخدام",
    category: "trust",
    titleAr: "طريقة الاستخدام وروتين العناية (How-To-Use Steps)",
    titleEn: "Step-by-Step Guide & Routine",
    taglineAr: "دليل الخطوات التوضيحي — اشرحي للزبونة كيف تستخدم مجموعتك خطوة بخطوة بكل سهولة.",
    whyUseItAr: "كثير زبونات يترددون بالشراء لأنهم ما يعرفون طريقة الاستخدام الصحيحة أو ترتيب الخطوات في روتين العناية. هذا القسم يرتب الخطوات (خطوة ١، خطوة ٢، خطوة ٣) مع أيقونات أو صور وخط توصيل جمالي.",
    proTipAr: "💡 استخدم نمط العرض الأفقي (Horizontal) مع 3 أو 4 خطوات واضحة (مثلاً: 1. تنظيف البشرة 2. وضع السيروم 3. الترطيب والحماية).",
    stepsAr: [
      "أضف قسم 'كيفية الاستخدام' في الصفحة الرئيسية أو صفحة المنتج.",
      "اختر نمط العرض (أفقي مع خط توصيل خطوات، أو عمودي كقائمة).",
      "أضف خطواتك: العنوان، الوصف، الإيموجي أو الصورة التوضيحية.",
      "فعّل خيار 'عرض خط التوصيل بين الخطوات' لمظهر انسيابي متصل."
    ],
    mockupType: "how_to_use",
    fields: [
      {
        id: "title",
        nameAr: "عنوان القسم الرئيسي",
        nameEn: "Section Title",
        type: "text",
        required: true,
        defaultVal: "روتينك اليومي في ٣ خطوات بسيطة",
        infoAr: "عنوان خطوات الاستخدام."
      },
      {
        id: "layout",
        nameAr: "شكل العرض",
        nameEn: "Layout Style",
        type: "select",
        required: true,
        defaultVal: "horizontal",
        infoAr: "أفقي (خطوات موصولة) أو عمودي (قائمة بطاقات)."
      },
      {
        id: "steps[].title",
        nameAr: "عنوان الخطوة",
        nameEn: "Step Title",
        type: "text",
        required: true,
        infoAr: "مثال: الخطوة الأولى: تنظيف البشرة بالغسول اللطيف."
      },
      {
        id: "steps[].description",
        nameAr: "شرح وتفاصيل الخطوة",
        nameEn: "Step Description",
        type: "textarea",
        required: true,
        infoAr: "نصائح وإرشادات التطبيق."
      }
    ]
  },
  {
    id: "features-section",
    templateFile: "sections/features-section.jinja",
    schemaFile: "sections/features-section.schema.json",
    icon: "ShieldCheck",
    badge: "مميزات المتجر وبطاقات الثقة",
    category: "trust",
    titleAr: "مميزات المتجر وبطاقات الثقة (Store Features)",
    titleEn: "Store Features & Value Props",
    taglineAr: "لماذا تشتري منك؟ — بطاقات أنيقة توضح الشحن السريع، الدفع الآمن، والمنتجات الأصلية 100%.",
    whyUseItAr: "يطمئن الزبونة فوراً بأن متجرك يقدم شحن آمن وسريع لكافة مدن المملكة، وسائل دفع بالتقسيط (تمارا وتابي)، وضمان أصالة المنتجات.",
    proTipAr: "💡 اختر تخطيط البطاقات (Cards) مع 3 أو 4 أعمدة، واستخدم إيموجيز مميزة أو أيقونات ناعمة بألوان وردية وذهبية متناسقة.",
    stepsAr: [
      "أضف قسم 'مميزات المتجر' أسفل السلايدر الرئيسي أو قبل الفوتر.",
      "اختر عدد الأعمدة في سطح المكتب (الموصى به 3 أو 4 أعمدة).",
      "أضف المميزات الأساسية (شحن سريع ومجاني، دفع آمن وميسر، خدمة عملاء 24/7، منتجات أصلية 100%)."
    ],
    mockupType: "features",
    fields: [
      {
        id: "title",
        nameAr: "عنوان القسم",
        nameEn: "Section Title",
        type: "text",
        required: false,
        defaultVal: "ليش تتسوقين من أنوثة؟",
        infoAr: "العنوان الرئيسي لمميزات المتجر."
      },
      {
        id: "layout",
        nameAr: "طريقة عرض المميزات",
        nameEn: "Display Layout",
        type: "select",
        required: true,
        defaultVal: "cards",
        infoAr: "بطاقات منفصلة (Cards) أو شريط أيقوني بسيط (Minimal)."
      },
      {
        id: "columns",
        nameAr: "عدد الأعمدة في الديسكتوب",
        nameEn: "Columns Desktop",
        type: "select",
        required: true,
        defaultVal: "3",
        infoAr: "2، 3، أو 4 أعمدة في الشاشات الكبيرة."
      },
      {
        id: "store_features[].title",
        nameAr: "عنوان الميزة",
        nameEn: "Feature Title",
        type: "text",
        required: true,
        infoAr: "مثال: شحن سريع لكافة مناطق المملكة."
      }
    ]
  },
  {
    id: "guarantee",
    templateFile: "sections/guarantee.jinja",
    schemaFile: "sections/guarantee.schema.json",
    icon: "Award",
    badge: "الضمان الذهبي وجودة المنتج",
    category: "trust",
    titleAr: "الضمان الذهبي ووعد الجودة (Golden Guarantee)",
    titleEn: "Golden Guarantee & Quality Promise",
    taglineAr: "ثقة لا متناهية — كارت فاخر يعرض الضمان الذهبي مع شارة الختم الذهبي وتفاصيل الاسترجاع.",
    whyUseItAr: "يزيل أي تردد أو خوف عند الزبونة المترددة. يوضح التزامك الكامل بالأصالة والضمان وسهولة الاسترجاع إن لم يناسبها المنتج.",
    proTipAr: "💡 استخدم خلفية وردية فاتحة (#fff0f7) أو درجات الكريمة، واكتب نص الضمان بوضوح وصراحة.",
    stepsAr: [
      "أضف قسم 'الضمان' في الصفحة الرئيسية أو صفحة تفاصيل المنتج.",
      "اكتب عنوان الضمان الذهبي وشروطه البسيطة وشارة الختم.",
      "ضع رقم الواتساب أو وسيلة التواصل المباشرة لتسهيل الدعم."
    ],
    mockupType: "guarantee",
    fields: [
      {
        id: "title",
        nameAr: "عنوان الضمان",
        nameEn: "Guarantee Title",
        type: "text",
        required: true,
        defaultVal: "الضمان الذهبي — جمالك أولويتنا",
        infoAr: "العنوان الرئيسي لكارت الضمان."
      },
      {
        id: "subtitle",
        nameAr: "نص وتفاصيل الضمان",
        nameEn: "Guarantee Subtitle",
        type: "textarea",
        required: true,
        infoAr: "الشرح المفصل للضمان وسياسة الاستبدال السريعة."
      }
    ]
  },
  {
    id: "footer",
    templateFile: "footer.jinja",
    schemaFile: "footer.schema.json",
    icon: "Layers",
    badge: "الفوتر وبوابات الدفع الرسمية",
    category: "core",
    titleAr: "أسفل الصفحة وبوابات الدفع (Footer & Payments)",
    titleEn: "Footer & Saudi Payment Gateways",
    taglineAr: "خاتمة المتجر النظامية — جميع وسائل الدفع السعودية (مدى، تمارا، تابي، Apple Pay)، الأرقام الضريبية، وروابط التواصل.",
    whyUseItAr: "الفوتر يثبت مصداقية متجرك وامتثاله للأنظمة السعودية (الرقم الضريبي VAT والسجل التجاري CR)، ويوفر للعميل روابط سريعة لحسابات التواصل وموقع المتجر وأوقات العمل.",
    proTipAr: "💡 فعّل جميع وسائل الدفع المتاحة في متجرك (مدى، Apple Pay، تمارا، تابي، STC Pay) وضع رقم السجل التجاري والضريبي لتكتمل جاهزية متجرك للتراخيص وإعلانات المشاهير.",
    stepsAr: [
      "ادخل إعدادات 'أسفل الصفحة (Footer)' في لوحة تخصيص زد.",
      "أدخل نص حقوق الملكية، الرقم الضريبي (VAT)، ورقم السجل التجاري (CR).",
      "فعّل أيقونات وسائل الدفع المعتمدة في متجرك.",
      "أضف أعمدة الروابط السريعة (روابط المتجر، سياسات الخصوصية، الاسترجاع).",
      "ضع روابط حسابات التواصل الاجتماعي (انستقرام، تيك توك، سناب شات، واتساب)."
    ],
    mockupType: "footer",
    fields: [
      {
        id: "copyright_text",
        nameAr: "نص حقوق الملكية",
        nameEn: "Copyright Text",
        type: "text",
        required: false,
        defaultVal: "جميع الحقوق محفوظة لمتجر أنوثة",
        infoAr: "النص الظاهر بأسفل الفوتر."
      },
      {
        id: "show_payment_methods",
        nameAr: "إظهار وسائل الدفع",
        nameEn: "Show Payment Methods",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "عرض شارات مدى، فيزا، ماستركارد، تمارا، تابي، أبل باي."
      },
      {
        id: "vat_number",
        nameAr: "الرقم الضريبي (VAT Number)",
        nameEn: "VAT Number",
        type: "text",
        required: false,
        infoAr: "الرقم الضريبي الرسمي للمنشأة للامتثال النظامي."
      },
      {
        id: "cr_number",
        nameAr: "رقم السجل التجاري (CR Number)",
        nameEn: "Commercial Registration Number",
        type: "text",
        required: false,
        infoAr: "رقم السجل التجاري لتوثيق المتجر رسمياً."
      },
      {
        id: "payment_methods.mada",
        nameAr: "تفعيل شارة مدى (Mada)",
        nameEn: "Mada",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "إظهار أيقونة بطاقة مدى."
      },
      {
        id: "payment_methods.tamara",
        nameAr: "تفعيل شارة تمارا (Tamara)",
        nameEn: "Tamara",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "إظهار أيقونة الدفع بالتقسيط مع تمارا."
      },
      {
        id: "payment_methods.tabby",
        nameAr: "تفعيل شارة تابي (Tabby)",
        nameEn: "Tabby",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "إظهار أيقونة الدفع بالتقسيط مع تابي."
      },
      {
        id: "payment_methods.apple",
        nameAr: "تفعيل شارة Apple Pay",
        nameEn: "Apple Pay",
        type: "checkbox",
        required: false,
        defaultVal: true,
        infoAr: "إظهار أيقونة الدفع السريع عبر أبل باي."
      }
    ]
  },
  {
    id: "promo-modal",
    templateFile: "sections/promo-modal.jinja",
    schemaFile: "sections/promo-modal.schema.json",
    icon: "Gift",
    badge: "نافذة الهدية والخصم المنبثقة",
    category: "modals",
    titleAr: "نافذة الهدية والخصم التفاعلية (Promo Modal Envelope)",
    titleEn: "Promo Gift Modal & Countdown",
    taglineAr: "هدية ترحيبية تزيد المبيعات — ظرف تفاعلي مختوم بالشمع ينفتح للعميلة مع كود خصم وعداد تنازلي.",
    whyUseItAr: "أول ما تدخل الزبونة متجرك، يظهر لها ظرف هدايا ناعم ومختوم بختم شمعي كلاسيكي مكتوب عليه 'وصلتك هدية - افتحيها وشوفي وش فيها 🤍'. أول ما تضغط على الختم، ينفتح الظرف وتطلع قسيمة الخصم مع زر نسخ الكود وعداد تنازلي يحفزها تطلب فوراً.",
    proTipAr: "💡 خلي كود الخصم بسيط وسهل التذكر (مثل ANOTHA10 أو HEY20) واضبط العداد التنازلي على 6 أو 10 دقائق لخلق حافز فوري دون إزعاج.",
    stepsAr: [
      "أضف قسم 'مودال ترويجي' من قائمة الأقسام في الصفحة الرئيسية.",
      "حدد وقت التأخير قبل ظهور المودال (الموصى به: 2000 مللي ثانية = ثانيتان).",
      "فعّل خيار 'عرض مرة واحدة لكل جلسة' عشان ما يتكرر ويزعج الزبونة بكل صفحة.",
      "اختر شكل الختم الشمعي (ورقة شجر Leaf، هدية Gift، نجمة Star، أو قلب Heart).",
      "اكتب كود الخصم (Promo Code) وحدد دقائق العداد التنازلي (مثلاً: 6 دقائق)."
    ],
    mockupType: "promo_modal",
    fields: [
      {
        id: "promo_code",
        nameAr: "كود الخصم",
        nameEn: "Promo Code",
        type: "text",
        required: true,
        defaultVal: "WELCOME20",
        infoAr: "كوبون الخصم اللي راح يتم نسخه تلقائياً لخانة الدفع عند ضغط الزبونة."
      },
      {
        id: "envelope_title",
        nameAr: "عنوان الظرف (المرحلة المغلقة)",
        nameEn: "Envelope Title",
        type: "text",
        required: true,
        defaultVal: "وصلتك هدية 🎁",
        infoAr: "النص المشوّق على واجهة الظرف قبل الفتح."
      },
      {
        id: "seal_icon",
        nameAr: "شكل الختم الشمعي",
        nameEn: "Wax Seal Icon",
        type: "select",
        required: true,
        defaultVal: "leaf",
        infoAr: "ورقة شجر، هدية، نجمة، أو قلب."
      },
      {
        id: "countdown_minutes",
        nameAr: "مدة العداد التنازلي (دقائق)",
        nameEn: "Countdown Minutes",
        type: "text",
        required: false,
        defaultVal: "6",
        infoAr: "عدد الدقائق المتبقية على انتهاء العرض الترحيبي."
      }
    ]
  },
  {
    id: "video",
    templateFile: "sections/video.jinja",
    schemaFile: "sections/video.schema.json",
    icon: "Video",
    badge: "فيديو تعريفي وترويجي",
    category: "modals",
    titleAr: "قسم الفيديو الترويجي (Video Showcase)",
    titleEn: "Brand Video Showcase",
    taglineAr: "عرض بصري سينمائي — ارفعي فيديو تعريفي أو حطي رابط يوتيوب/فيميو مع تحكم كامل بنسبة الأبعاد وزوايا الإطار.",
    whyUseItAr: "الفيديو ينقل قصة علامتك التجارية وفخامة التغليف بطريقة لا تقدر عليها الصور الثابتة. تقدرين ترفعين ملف MP4 مباشر أو تضعين رابط من يوتيوب، مع صورة غلاف فاخرة (Poster Image).",
    proTipAr: "💡 اختاري زوايا ناعمة جداً (2xl أو 3xl) ونسبة أبعاد 16:9 عريضة ليعطي شكل مشغل سينمائي عصري ومنسجم مع باقي أقسام المتجر.",
    stepsAr: [
      "أضف قسم 'قسم الفيديو' لصفحتك الرئيسية أو صفحة الهبوط.",
      "ارفع مقطع MP4 (حتى 10MB) أو ضع رابط فيديو مباشر من يوتيوب/فيميو لتجاوز حدود الحجم.",
      "ارفع صورة غلاف (Poster) تظهر قبل الضغط على زر التشغيل.",
      "اختر نسبة الأبعاد (16:9 عريض، 4:3 كلاسيك، 1:1 مربع، أو 9:16 ريلز عمودي)."
    ],
    mockupType: "video",
    fields: [
      {
        id: "video_url",
        nameAr: "رابط الفيديو (يوتيوب أو MP4)",
        nameEn: "Video URL",
        type: "text",
        required: false,
        infoAr: "رابط فيديو خارجي من يوتيوب أو فيميو أو رابط مباشر."
      },
      {
        id: "poster_image",
        nameAr: "صورة الغلاف قبل التشغيل (Poster)",
        nameEn: "Poster Cover Image",
        type: "image",
        required: false,
        recommendedSize: "1920 × 1080 px",
        infoAr: "الصورة التي تظهر للزائر قبل النقر على زر التشغيل."
      },
      {
        id: "aspect_ratio",
        nameAr: "نسبة أبعاد الفيديو",
        nameEn: "Aspect Ratio",
        type: "select",
        required: true,
        defaultVal: "16/9",
        infoAr: "16:9 (عريض)، 4:3 (كلاسيك)، 1:1 (مربع)، أو 9:16 (ريلز عمودي)."
      },
      {
        id: "rounded",
        nameAr: "شكل زوايا الفيديو",
        nameEn: "Corner Radius",
        type: "select",
        required: true,
        defaultVal: "2xl",
        infoAr: "ناعمة جداً (2xl)، دائرية (3xl)، ناعمة (xl)، أو حادة (none)."
      }
    ]
  },
  {
    id: "faq",
    templateFile: "sections/faq.jinja",
    schemaFile: "sections/faq.schema.json",
    icon: "HelpCircle",
    badge: "الأسئلة الشائعة والأكورديون",
    category: "trust",
    titleAr: "الأسئلة الشائعة (FAQ Accordion)",
    titleEn: "Frequently Asked Questions",
    taglineAr: "إجابات فورية تطمئن العميل — أكورديون تفاعلي أنيق يجاوب على أسئلة الشحن، الاسترجاع، وطرق الدفع.",
    whyUseItAr: "يقلل أسئلة الدعم الفني ويسرّع اتخاذ قرار الشراء عند الزبونة المترددة بالإجابة السريعة على مدة التوصيل، سياسة التبديل، وسلامة المكونات.",
    proTipAr: "💡 رتبي الأسئلة الـ 4 الأكثر تكراراً عند عميلاتك (كم يوم التوصيل؟ هل المنتجات أصلية؟ كيف أسترجع؟) واختاري شكل العرض بعمود واحد (Single) لسهولة القراءة بالجوال.",
    stepsAr: [
      "أضف قسم 'الأسئلة الشائعة (FAQ)' في الصفحة الرئيسية أو صفحة المنتج.",
      "أضف الأسئلة والأجوبة بأسلوب ودود ولطيف.",
      "اختر شكل العرض (عمود واحد Single أو عمودان Two Columns).",
      "حددي خيار السماح بفتح أكثر من سؤال بنفس الوقت إن رغبت."
    ],
    mockupType: "faq",
    fields: [
      {
        id: "title",
        nameAr: "العنوان الرئيسي للقسم",
        nameEn: "Section Title",
        type: "text",
        required: true,
        defaultVal: "الأسئلة الأكثر تكراراً 💬",
        infoAr: "عنوان قسم الأسئلة الشائعة."
      },
      {
        id: "faqs[].question",
        nameAr: "السؤال",
        nameEn: "Question",
        type: "text",
        required: true,
        infoAr: "نص السؤال."
      },
      {
        id: "faqs[].answer",
        nameAr: "الجواب والتوضيح",
        nameEn: "Answer",
        type: "textarea",
        required: true,
        infoAr: "الإجابة التوضيحية الوافية."
      },
      {
        id: "layout",
        nameAr: "شكل العرض",
        nameEn: "Layout",
        type: "select",
        required: true,
        defaultVal: "single",
        infoAr: "عمود واحد أو عمودان."
      }
    ]
  }
];
