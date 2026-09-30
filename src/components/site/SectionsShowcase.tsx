import {
  Check,
  Images,
  LayoutTemplate,
  MessageCircleHeart,
  Play,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Shield,
  Megaphone,
  MessageSquare,
  Layers,
  Repeat2,
  ArrowLeftRight,
  Sparkles,
  Clock,
  Smartphone,
  Monitor,
  Palette,
  MousePointerClick,
  Video,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useI18n, type Bi } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import heroImg from "@/assets/hero-beauty.jpg";
import productsImg from "@/assets/products-flatlay.jpg";
import lookbookImg from "@/assets/lookbook.jpg";
import ugcImg from "@/assets/ugc-video.jpg";
import afterImg from "@/assets/after.jpg";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type SchemaField = {
  label: Bi;
  type: string;
  note?: Bi;
};

type Row = {
  id: string;
  icon: typeof Images;
  badge: Bi;
  num: string;
  title: Bi;
  desc: Bi;
  points: { icon: typeof Check; text: Bi }[];
  schema: SchemaField[];
  image: string;
  imageSide?: "left" | "right";
  alt: Bi;
  accent: string;
};

/* ─── Section data (ROWS) ────────────────────────────────────────────────── */

const ROWS: Row[] = [
  /* 01 ── Main Slider */
  {
    id: "slider",
    icon: LayoutTemplate,
    num: "01",
    badge: { ar: "أول ما يشوفه الزائر", en: "First thing visitors see" },
    title: { ar: "السلايدر الرئيسي (Hero Slider)", en: "Main Hero Slider" },
    desc: {
      ar: "الواجهة الأولى للمتجر. بطاقتك البصرية وأقوى أداة بيعية في صفحتك الرئيسية. تحكم كامل في الصور والنصوص والزر وارتفاع الشريط والطبقة اللونية — كل شريحة مستقلة بإعداداتها.",
      en: "The store's front door. Your strongest visual selling tool. Full control over images, text, CTA, height modes and color overlay — every slide is independently configured.",
    },
    points: [
      { icon: Monitor, text: { ar: "صورة ديسكتوب 1920×800 + صورة جوال مستقلة 750×1000", en: "Desktop 1920×800 image + independent mobile 750×1000 image" } },
      { icon: SlidersHorizontal, text: { ar: "3 أنماط للارتفاع: بيكسل ثابت / نسبة أبعاد / ملء الشاشة (fullscreen)", en: "3 height modes: fixed px / aspect ratio / fullscreen viewport" } },
      { icon: MousePointerClick, text: { ar: "تحكم في بؤرة الصورة (أعلى / وسط / أسفل) لمنع القص العشوائي", en: "Image focus point (top / center / bottom) to prevent unwanted cropping" } },
      { icon: Palette, text: { ar: "طبقة تعتيم بلون وشفافية مخصصة (0–100%) + ألوان نصوص حرة لكل شريحة", en: "Custom overlay color & opacity (0–100%) + free text color per slide" } },
      { icon: Clock, text: { ar: "تشغيل تلقائي (3000–7000ms)، أسهم ونقاط بألوان مستقلة، حتى 8 شرائح", en: "Autoplay (3000–7000ms), arrows & dots with custom colors, up to 8 slides" } },
      { icon: Smartphone, text: { ar: "زر CTA مستقل لكل شريحة: نص / رابط / لون خلفية / لون نص", en: "Independent CTA button per slide: text / link / background / text color" } },
    ],
    schema: [
      { label: { ar: "🖥️ صورة الديسكتوب", en: "🖥️ Desktop Image" }, type: "image", note: { ar: "1920×800px مثالي", en: "Ideal 1920×800px" } },
      { label: { ar: "📱 صورة الجوال (اختياري)", en: "📱 Mobile Image (optional)" }, type: "image", note: { ar: "750×1000px عمودية", en: "750×1000px portrait" } },
      { label: { ar: "بؤرة الصورة ديسكتوب / جوال", en: "Image Focus Point desktop / mobile" }, type: "select", note: { ar: "أعلى / وسط / أسفل", en: "top / center / bottom" } },
      { label: { ar: "طريقة الارتفاع ديسكتوب", en: "Height Mode Desktop" }, type: "select", note: { ar: "ثابت / نسبة / ملء الشاشة", en: "fixed / aspect / fullscreen" } },
      { label: { ar: "تفعيل + لون + شفافية التعتيم", en: "Overlay enable + color + opacity" }, type: "checkbox + color + number" },
      { label: { ar: "العنوان + الوصف + حجمهما + لون النص", en: "Title + desc + sizes + text color" }, type: "text + select + color" },
      { label: { ar: "إظهار الزر + نصه + رابطه + ألوانه", en: "Show button + text + link + colors" }, type: "checkbox + text + url + color" },
      { label: { ar: "تشغيل تلقائي + مدة الشريحة (ms)", en: "Autoplay + slide duration (ms)" }, type: "checkbox + number" },
      { label: { ar: "نقاط التنقل + الأسهم + ألوانهما", en: "Dots + arrows + their colors" }, type: "checkbox + color" },
    ],
    image: heroImg,
    alt: { ar: "معاينة السلايدر الرئيسي", en: "Hero slider preview" },
    accent: "bg-rose/40",
  },

  /* 02 ── Products */
  {
    id: "products",
    icon: ShoppingBag,
    num: "02",
    badge: { ar: "عرض المنتجات", en: "Product Display" },
    title: { ar: "المنتجات ومنتجات التصنيف", en: "Products & Category Products" },
    desc: {
      ar: "اعرضي منتجاتك المختارة يدوياً أو كل منتجات تصنيف معيّن في كاروسيل ناعم. البطاقة مصممة لتبيع: تقييم نجوم، السعر الأصلي والمخفوض، زر إضافة للسلة، وعلامة الخصم — كل شيء بضغطة.",
      en: "Show hand-picked products or an entire category in a smooth carousel. The card is built to sell: star rating, original & discounted price, add-to-cart, and discount badge — all at a glance.",
    },
    points: [
      { icon: ShoppingBag, text: { ar: "نوعان: اختيار منتجات يدوي (products) أو تلقائي من التصنيف (category_products)", en: "Two modes: manual product pick or automatic from a category (category_products)" } },
      { icon: Monitor, text: { ar: "عدد بطاقات مستقل للجوال / التابلت / الديسكتوب (مثال: 2 / 3 / 4.5)", en: "Independent card count per mobile / tablet / desktop (e.g., 2 / 3 / 4.5)" } },
      { icon: Star, text: { ar: "بطاقة منتج أنيقة: نجوم تقييم، سعر + خصم، صورة المنتج، إضافة للسلة", en: "Elegant card: star rating, price + discount badge, product image, add to cart" } },
      { icon: LayoutTemplate, text: { ar: "Eyebrow + عنوان + وصف + خط تحت العنوان اختياري + زر «شوف الكل»", en: "Eyebrow + title + subtitle + optional accent line + 'View all' button" } },
      { icon: Palette, text: { ar: "لون خلفية القسم + padding عمودي وأفقي مستقل لكل سكشن", en: "Per-section background color + independent vertical & horizontal padding" } },
    ],
    schema: [
      { label: { ar: "Eyebrow + عنوان + وصف", en: "Eyebrow + title + subtitle" }, type: "text / textarea" },
      { label: { ar: "خط تحت العنوان", en: "Accent line under heading" }, type: "checkbox" },
      { label: { ar: "اختيار المنتجات أو التصنيف", en: "Products / Category picker" }, type: "products / category_products" },
      { label: { ar: "نص وعنوان زر «المزيد»", en: "More button text & link" }, type: "text + url" },
      { label: { ar: "إظهار زر الكل", en: "Show 'View all' button" }, type: "checkbox" },
      { label: { ar: "لون الخلفية", en: "Background color" }, type: "color", note: { ar: "افتراضي #f4f6fa", en: "Default #f4f6fa" } },
      { label: { ar: "بطاقات الديسكتوب / التابلت / الجوال", en: "Desktop / Tablet / Mobile count" }, type: "text (e.g. 4.5 / 3 / 2)" },
      { label: { ar: "Padding عمودي وأفقي (px)", en: "Vertical & horizontal padding (px)" }, type: "text" },
    ],
    image: productsImg,
    imageSide: "right",
    alt: { ar: "معاينة كاروسيل المنتجات", en: "Products carousel preview" },
    accent: "bg-blush",
  },

  /* 03 ── Lookbook */
  {
    id: "lookbook",
    icon: Images,
    num: "03",
    badge: { ar: "معرض قابل للتسوق", en: "Shoppable Gallery" },
    title: { ar: "اللوك بوك (Lookbook Gallery)", en: "Shoppable Lookbook Gallery" },
    desc: {
      ar: "معرض صور وفيديوهات تفاعلي مع نقاط تسوق على كل صورة. كل نقطة تحمل منتجاً حقيقياً من متجرك — الاسم والسعر والصورة والرابط تُجلب تلقائياً. سلاح بيعي بصري لا مثيل له.",
      en: "An interactive photo & video gallery with shoppable pins on every image. Each pin carries a real store product — name, price, image, and link are loaded automatically. An unmatched visual selling weapon.",
    },
    points: [
      { icon: MousePointerClick, text: { ar: "نقاط منتجات بإحداثيات X/Y تحددينها بحرية على الصورة (0–100%)", en: "Product pins with free X/Y coordinates you set on the image (0–100%)" } },
      { icon: ShoppingBag, text: { ar: "تحميل تلقائي لبيانات المنتج: الاسم، السعر، الصورة، الرابط من الـ API", en: "Automatic product data loading: name, price, image, link via API" } },
      { icon: Star, text: { ar: "علامة «الأكثر مبيعاً» قابلة للتفعيل + أيقونة نقطة مخصصة", en: "Best-seller badge toggle + custom pin icon image" } },
      { icon: Play, text: { ar: "دعم الفيديو (MP4 مرفوع أو رابط يوتيوب/فيميو) مع مدة الفيديو ووسم الشريحة", en: "Video support (MP4 upload or YouTube/Vimeo URL) with duration label & slide badge" } },
      { icon: Star, text: { ar: "تقييم إجمالي + عدد العميلات + حتى 3 إحصائيات مخصصة", en: "Overall rating + customer count + up to 3 custom stat badges" } },
    ],
    schema: [
      { label: { ar: "لون الخلفية", en: "Background color" }, type: "color", note: { ar: "افتراضي #ebe1d6", en: "Default #ebe1d6" } },
      { label: { ar: "Eyebrow + عنوان + وصف + زر CTA", en: "Eyebrow + title + desc + CTA" }, type: "text / url" },
      { label: { ar: "إظهار التقييم + قيمته (0–5) + نصه", en: "Show rating + value (0–5) + text" }, type: "checkbox + number + text" },
      { label: { ar: "حتى 3 إحصائيات (رقم + وصف)", en: "Up to 3 stats (value + label)" }, type: "list" },
      { label: { ar: "شرائح المعرض: نوع (صورة / فيديو) + الملف + وسم + مدة", en: "Gallery slides: type (image / video) + file + badge + duration" }, type: "list → select" },
      { label: { ar: "نقاط المنتجات: المنتج + X/Y + بيست سيلر + أيقونة", en: "Product pins: product + X/Y + best seller + icon" }, type: "nested list" },
      { label: { ar: "تعطيل الأنيمشن", en: "Disable animations" }, type: "checkbox" },
    ],
    image: lookbookImg,
    alt: { ar: "معاينة اللوك بوك", en: "Lookbook preview" },
    accent: "bg-mist",
  },

  /* 04 ── Video + UGC */
  {
    id: "video",
    icon: Play,
    num: "04",
    badge: { ar: "فيديو احترافي + UGC", en: "Pro Video + UGC" },
    title: { ar: "الفيديو وفيديوهات العميلات (UGC)", en: "Video & UGC Customer Videos" },
    desc: {
      ar: "سكشنان مدمجان: الأول فيديو احترافي لعلامتك بكامل تحكماتك، والثاني سلايدر داكن بإحساس سينمائي لفيديوهات العميلات من انستقرام وتيك توك وسناب — لبناء الثقة بسرعة.",
      en: "Two integrated sections: a professional brand video with full controls, and a cinematic dark-themed UGC slider for customer videos from Instagram, TikTok & Snapchat — to build trust fast.",
    },
    points: [
      { icon: Video, text: { ar: "رفع MP4 (حتى 10MB) أو رابط يوتيوب / فيميو / MP4 مباشر", en: "Upload MP4 (up to 10MB) or link YouTube / Vimeo / direct MP4 URL" } },
      { icon: Play, text: { ar: "تشغيل تلقائي صامت + تكرار (loop) + إظهار/إخفاء أدوات التحكم", en: "Muted autoplay + loop + optional video controls visibility" } },
      { icon: Monitor, text: { ar: "4 نسب أبعاد: 16:9 / 4:3 / 1:1 / 9:16 (ريلز) + 4 درجات لزوايا مدورة", en: "4 aspect ratios: 16:9 / 4:3 / 1:1 / 9:16 (Reels) + 4 corner radius levels" } },
      { icon: Users, text: { ar: "UGC: بطاقات بمعرف الحساب + تعليق + شعار المنصة (انستا/تيك/سناب/فيسبوك)", en: "UGC cards with handle + caption + platform badge (Instagram/TikTok/Snapchat/FB)" } },
      { icon: Palette, text: { ar: "UGC: خلفية داكنة افتراضية (#1a0a12) للإحساس السينمائي الجمالي", en: "UGC: dark default background (#1a0a12) for a cinematic, premium feel" } },
    ],
    schema: [
      { label: { ar: "رفع الفيديو (MP4) أو رابط خارجي", en: "Upload MP4 or external URL" }, type: "video + text" },
      { label: { ar: "صورة الغلاف قبل التشغيل", en: "Poster / cover image" }, type: "image" },
      { label: { ar: "تشغيل تلقائي + تكرار + أدوات تحكم", en: "Autoplay + loop + controls" }, type: "checkbox ×3" },
      { label: { ar: "نسبة الأبعاد (16:9 / 4:3 / 1:1 / 9:16)", en: "Aspect ratio (16:9 / 4:3 / 1:1 / 9:16)" }, type: "select" },
      { label: { ar: "زوايا الفيديو (حادة ← دائرية)", en: "Corner radius (sharp → rounded)" }, type: "select" },
      { label: { ar: "UGC: قائمة فيديوهات (فيديو + منصة + اسم + معرف + تعليق)", en: "UGC: videos list (video + platform + name + handle + caption)" }, type: "list" },
      { label: { ar: "UGC: عدد بطاقات موبايل (1–3) / ديسكتوب (2–5)", en: "UGC: cards mobile (1–3) / desktop (2–5)" }, type: "range" },
    ],
    image: ugcImg,
    imageSide: "right",
    alt: { ar: "معاينة سكشن الفيديو", en: "Video section preview" },
    accent: "bg-plum/20",
  },

  /* 05 ── Before / After */
  {
    id: "before-after",
    icon: ArrowLeftRight,
    num: "05",
    badge: { ar: "تأثير مبهر", en: "Wow Effect" },
    title: { ar: "قبل وبعد (Before / After)", en: "Before / After Comparison" },
    desc: {
      ar: "سلايدر تفاعلي تسحبينه بإصبعك لتقارني بين صورتين — قبل وبعد الاستخدام. من أكثر الأدوات إقناعاً لإثبات فعالية المنتجات الجمالية وبناء ثقة العميلة قبل الشراء.",
      en: "A drag-to-compare interactive slider that reveals before and after images. One of the most persuasive tools for proving product effectiveness and building customer trust before purchase.",
    },
    points: [
      { icon: SlidersHorizontal, text: { ar: "شريط سحب يسار/يمين لمقارنة صورة «قبل» و«بعد» بحرية", en: "Drag-left/right slider to freely compare before & after images" } },
      { icon: Monitor, text: { ar: "نسب أبعاد: مربع 1:1 / كلاسيك 4:3 / عريض 16:9", en: "Aspect ratios: square 1:1 / classic 4:3 / widescreen 16:9" } },
      { icon: LayoutTemplate, text: { ar: "موضع ابتدائي للشريط قابل للتخصيص (5–95%) لإبراز الجانب المهم", en: "Initial slider position customizable (5–95%) to highlight the key side" } },
      { icon: Check, text: { ar: "بطاقات نص «قبل» و«بعد» مخصصة + Eyebrow + عنوان + وصف كامل", en: "Custom 'Before' & 'After' text labels + eyebrow + title + full subtitle" } },
    ],
    schema: [
      { label: { ar: "صورة قبل + صورة بعد", en: "Before image + After image" }, type: "image ×2" },
      { label: { ar: "نص بطاقة قبل / بعد", en: "Before / After labels" }, type: "text ×2" },
      { label: { ar: "موضع الشريط الابتدائي (5–95)", en: "Initial slider position (5–95)" }, type: "text" },
      { label: { ar: "نسبة الأبعاد (1:1 / 4:3 / 16:9)", en: "Aspect ratio (1:1 / 4:3 / 16:9)" }, type: "select" },
      { label: { ar: "Eyebrow + عنوان + وصف", en: "Eyebrow + title + subtitle" }, type: "text / textarea" },
      { label: { ar: "لون الخلفية + خط العنوان + Padding", en: "BG color + accent line + padding" }, type: "color + checkbox + text" },
    ],
    image: afterImg,
    alt: { ar: "معاينة قبل وبعد", en: "Before/After preview" },
    accent: "bg-cream",
  },
];

/* ─── Feature cards ──────────────────────────────────────────────────────── */

type Card = {
  icon: typeof Images;
  color: string;
  title: Bi;
  desc: Bi;
  tags: Bi[];
};

const CARDS: Card[] = [
  {
    icon: Sparkles,
    color: "from-pink-400/20 to-rose-300/10",
    title: { ar: "سكشن المزايا (Features)", en: "Store Features Section" },
    desc: {
      ar: "مزايا متجرك بأيقونات إيموجي أو صور مخصصة، بنمطين (بطاقات / بسيط)، شبكة 2–4 أعمدة، ولون مميز لكل ميزة — مثالي للشحن المجاني، الاستبدال، الأصالة.",
      en: "Store perks with emoji or custom icons, 2 layouts (cards / minimal), 2–4 column grid, per-feature accent color — perfect for free shipping, returns, authenticity.",
    },
    tags: [
      { ar: "حتى 8 مزايا", en: "Up to 8 features" },
      { ar: "2–4 أعمدة", en: "2–4 columns" },
      { ar: "لون مميز لكل بطاقة", en: "Per-card accent color" },
    ],
  },
  {
    icon: MessageCircleHeart,
    color: "from-purple-400/20 to-pink-300/10",
    title: { ar: "آراء العميلات (Testimonials)", en: "Customer Testimonials" },
    desc: {
      ar: "تقييمات 1–5 نجوم، صور العميلات، شعار «موثّق»، وإحصائيات ثقة (رضا 100% / +500 منتج / +10K عميلة) في كاروسيل يتحكم فيه عدد البطاقات على كل جهاز.",
      en: "1–5 star reviews, customer avatars, verified badge, trust stats (100% satisfaction / +500 products / +10K customers) in a carousel with per-device card count.",
    },
    tags: [
      { ar: "حتى 20 رأي", en: "Up to 20 reviews" },
      { ar: "شارات ثقة مخصصة", en: "Custom trust badges" },
      { ar: "1–3 بطاقات بالعرض", en: "1–3 cards in view" },
    ],
  },
  {
    icon: Shield,
    color: "from-emerald-400/20 to-teal-300/10",
    title: { ar: "سكشن الضمان (Guarantee)", en: "Guarantee Section" },
    desc: {
      ar: "صورة ضمان مركزية مع بطاقات ضمانات بأيقونات إيموجي وعناوين ووصف وزر CTA — يطمّن العميلة قبل الشراء ويرفع معدل التحويل بشكل مباشر.",
      en: "Central guarantee image with emoji-icon badges (title + description) and a CTA button — reassures the customer before checkout and directly boosts conversion.",
    },
    tags: [
      { ar: "صورة مركزية", en: "Central image" },
      { ar: "بطاقات ضمان مخصصة", en: "Custom guarantee badges" },
      { ar: "زر CTA", en: "CTA button" },
    ],
  },
  {
    icon: Megaphone,
    color: "from-amber-400/20 to-yellow-300/10",
    title: { ar: "شريط الإعلانات (News Bar)", en: "Announcement Bar" },
    desc: {
      ar: "شريط إعلاني أعلى الموقع لعروضك وأخبارك، بنص ورابط ولون خلفية مخصص وزر إغلاق اختياري — أداة لا تُفوَّت للكوبونات والتنبيهات العاجلة.",
      en: "Top announcement bar for offers & news, with custom text, link, background color and optional close button — a must-have tool for coupons & urgent alerts.",
    },
    tags: [
      { ar: "نص + رابط", en: "Text + link" },
      { ar: "لون خلفية مخصص", en: "Custom background color" },
      { ar: "زر إغلاق اختياري", en: "Optional close button" },
    ],
  },
  {
    icon: MessageSquare,
    color: "from-sky-400/20 to-blue-300/10",
    title: { ar: "أزرار التواصل العائمة", en: "Floating Contact Buttons" },
    desc: {
      ar: "واتساب، سناب، انستقرام، تيك توك، فيسبوك، إكس، تيليجرام، جوال وإيميل — 9 قنوات تواصل في زاوية الشاشة، بمكان يمين أو يسار وتلميح (tooltip) لكل زر.",
      en: "WhatsApp, Snapchat, Instagram, TikTok, Facebook, X, Telegram, phone & email — 9 channels in a screen corner, left or right position with a tooltip per button.",
    },
    tags: [
      { ar: "9 منصات تواصل", en: "9 contact platforms" },
      { ar: "يمين أو يسار", en: "Right or left position" },
      { ar: "تلميح لكل زر", en: "Tooltip per button" },
    ],
  },
  {
    icon: Layers,
    color: "from-rose-400/20 to-pink-300/10",
    title: { ar: "صفحة قائمة المنتجات", en: "Products Listing Page" },
    desc: {
      ar: "غلاف بصري كامل لصفحة التصنيف، صورة مصغرة مخصصة لكل قسم، وتحكم مستقل في تخصيص كل تصنيف على حدة من لوحة الإعدادات.",
      en: "Full-cover visual header for the category page, custom thumbnail per section, and independent customization for each category from the settings panel.",
    },
    tags: [
      { ar: "غلاف كامل للصفحة", en: "Full page cover" },
      { ar: "صورة لكل تصنيف", en: "Thumbnail per category" },
      { ar: "تخصيص مستقل", en: "Independent customization" },
    ],
  },
  {
    icon: Repeat2,
    color: "from-violet-400/20 to-purple-300/10",
    title: { ar: "تبويبات التصنيفات (Category Tabs)", en: "Category Tabs Section" },
    desc: {
      ar: "عرض منتجات أكثر من تصنيف في نفس المكان عبر تبويبات قابلة للنقر — بدون ما العميلة تترك الصفحة. مثالي لعرض أكثر من كولكشن في الوقت نفسه.",
      en: "Display products from multiple categories in one place via clickable tabs — without the customer leaving the page. Ideal for showcasing multiple collections simultaneously.",
    },
    tags: [
      { ar: "تبويبات متعددة", en: "Multiple tabs" },
      { ar: "كاروسيل لكل تبويب", en: "Carousel per tab" },
      { ar: "بدون تحميل صفحة", en: "No page reload" },
    ],
  },
  {
    icon: Star,
    color: "from-yellow-400/20 to-amber-300/10",
    title: { ar: "شركاء وعلامات تجارية (Partners)", en: "Partners / Brand Logos" },
    desc: {
      ar: "شريط علامات تجارية أو شركاء يتحرك تلقائياً — يضيف مصداقية فورية لمتجرك. صور تُرفع بسهولة مع دعم التشغيل التلقائي وتحكم في السرعة.",
      en: "Auto-scrolling brand logos or partner strip — adds instant credibility to your store. Easily uploaded images with autoplay support and speed control.",
    },
    tags: [
      { ar: "تمرير تلقائي", en: "Auto-scroll" },
      { ar: "صور مخصصة", en: "Custom logos" },
      { ar: "تحكم في السرعة", en: "Speed control" },
    ],
  },
];

/* ─── Schema Badge ───────────────────────────────────────────────────────── */

function SchemaBadge({ field, lang }: { field: SchemaField; lang: "ar" | "en" }) {
  const typeColors: Record<string, string> = {
    image: "bg-sky-50 text-sky-700 border-sky-200",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    checkbox: "bg-emerald-50 text-emerald-700 border-emerald-200",
    select: "bg-violet-50 text-violet-700 border-violet-200",
    text: "bg-amber-50 text-amber-700 border-amber-200",
    number: "bg-orange-50 text-orange-700 border-orange-200",
    list: "bg-pink-50 text-pink-700 border-pink-200",
    range: "bg-teal-50 text-teal-700 border-teal-200",
    default: "bg-gray-50 text-gray-600 border-gray-200",
  };
  const typeKey = Object.keys(typeColors).find((k) => field.type.includes(k)) ?? "default";
  const colorClass = typeColors[typeKey];

  return (
    <div className="flex items-start gap-2 rounded-xl border border-border bg-card p-3">
      <span className={`mt-0.5 shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${colorClass}`}>
        {field.type.split(" ")[0]}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug">{field.label[lang]}</p>
        {field.note && (
          <p className="mt-0.5 text-[11px] text-muted-foreground">{field.note[lang]}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export function SectionsShowcase() {
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<string>("slider");
  const [showSchema, setShowSchema] = useState<Record<string, boolean>>({});

  const activeRow = (ROWS.find((r) => r.id === activeTab) ?? ROWS[0])!;

  function toggleSchema(id: string) {
    setShowSchema((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section id="sections" className="section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <SectionHeading
          eyebrow={{ ar: "الصفحة الرئيسية", en: "Homepage sections" }}
          title={{ ar: "كل سكشن في أنوثة له هدف بيعي", en: "Every Anotha section sells" }}
          subtitle={{
            ar: "الصفحة الرئيسية مبنية من لوكات تُرتبينها وتخصصينها بالكامل من لوحة التخصيص، بدون كود ولا مبرمج. كل سكشن موثق بإعداداته وخياراته الكاملة.",
            en: "The homepage is built from blocks you reorder and fully customize from the theme panel — no code needed. Every section is documented with all its settings and options.",
          }}
        />

        {/* Tab navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {ROWS.map((row) => {
            const Icon = row.icon;
            const isActive = activeTab === row.id;
            return (
              <button
                key={row.id}
                onClick={() => setActiveTab(row.id)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "surface-brand border-transparent shadow-elegant scale-105"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{t({ ar: `السكشن ${row.num}`, en: `Section ${row.num}` })}</span>
              </button>
            );
          })}
        </div>

        {/* Active section detail */}
        <div className="mt-8 rounded-[2rem] border border-border bg-card p-6 shadow-cardsoft md:p-10">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">

            {/* Image side */}
            <div className={activeRow.imageSide === "right" ? "md:order-2" : ""}>
              <div className="relative">
                <div className={`absolute -inset-5 -z-10 rounded-[2.5rem] ${activeRow.accent} blur-sm`} />
                <img
                  src={activeRow.image}
                  alt={t(activeRow.alt)}
                  loading="lazy"
                  className="h-[260px] w-full rounded-[1.75rem] border border-border object-cover shadow-cardsoft md:h-[380px]"
                />
                <div className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center rounded-2xl surface-brand shadow-elegant text-base font-black">
                  {activeRow.num}
                </div>
              </div>

              {/* Schema toggle */}
              <button
                onClick={() => toggleSchema(activeRow.id)}
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/30 bg-blush/50 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-blush transition-colors"
              >
                <SlidersHorizontal className="size-4" />
                {showSchema[activeRow.id]
                  ? t({ ar: "إخفاء إعدادات الـ Schema", en: "Hide schema settings" })
                  : t({ ar: "عرض كل إعدادات لوحة التخصيص ↓", en: "Show all panel settings ↓" })}
              </button>

              {showSchema[activeRow.id] && (
                <div className="mt-3 grid gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    {t({ ar: "⚙️ الحقول المتاحة في لوحة التخصيص", en: "⚙️ Available fields in theme panel" })}
                  </p>
                  {activeRow.schema.map((field, i) => (
                    <SchemaBadge key={i} field={field} lang={lang} />
                  ))}
                </div>
              )}
            </div>

            {/* Content side */}
            <div>
              <span className="eyebrow">
                <activeRow.icon className="size-4" />
                {t(activeRow.badge)}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl">{t(activeRow.title)}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t(activeRow.desc)}</p>
              <ul className="mt-6 space-y-3">
                {activeRow.points.map((p, i) => {
                  const PIcon = p.icon;
                  return (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                        <PIcon className="size-3.5" />
                      </span>
                      <span>{t(p.text)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-5 flex justify-center gap-2">
          {ROWS.map((row) => (
            <button
              key={row.id}
              onClick={() => setActiveTab(row.id)}
              aria-label={t(row.title)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === row.id ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        {/* More sections grid */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="eyebrow">
              <Sparkles className="size-4" />
              {t({ ar: "المزيد من السكشنات", en: "More sections" })}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              {t({ ar: "كل ما تحتاجينه، جاهز ومخصص", en: "Everything you need, ready to customize" })}
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
              {t({
                ar: "إلى جانب السكشنات الرئيسية، يأتي الثيم بأقسام إضافية لتكمّلي بناء صفحتك الرئيسية المثالية.",
                en: "Beyond the main sections, the theme ships additional blocks to complete your perfect homepage.",
              })}
            </p>
            <div className="mt-6 h-1 w-16 rounded-full surface-brand mx-auto" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title.en}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-cardsoft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glowsoft"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-60 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="relative">
                    <span className="flex size-11 items-center justify-center rounded-2xl surface-brand">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold leading-tight">{t(c.title)}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t(c.desc)}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                        >
                          {t(tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
