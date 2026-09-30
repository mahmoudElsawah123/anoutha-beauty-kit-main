import {
  BadgeCheck,
  CreditCard,
  FileQuestion,
  Heart,
  Layers,
  Newspaper,
  Package,
  Search,
  ShoppingCart,
  Store,
  Truck,
  User,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n, type Bi } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

const PAGES: { icon: typeof Store; title: Bi; desc: Bi }[] = [
  {
    icon: Package,
    title: { ar: "صفحة المنتج (٣٤ عنصر)", en: "Product page (34 components)" },
    desc: {
      ar: "معرض صور بتكبير، اختيار الألوان والمقاسات، عدّاد الكمية، إضافة للسلة، المفضلة، مشاركة على ٧ منصات، التقييمات، الأسئلة والأجوبة، منتجات مشابهة، فيديوهات العميلات، عدّاد الزوار الآن، وشعار الأكثر مبيعاً.",
      en: "Zoomable gallery, variant selection, quantity, add to cart, wishlist, sharing on 7 platforms, reviews, Q&A, related products, customer videos, live visitor count and best-seller badge.",
    },
  },
  {
    icon: ShoppingCart,
    title: { ar: "السلة والسلة الجانبية", en: "Cart & mini-cart" },
    desc: {
      ar: "سلة جانبية تنزلق بحركة ناعمة، تعديل الكمية، كود الخصم، شريط تقدم للشحن المجاني، المجموع، ومتابعة الشراء بأمان.",
      en: "Slide-in drawer, quantity edit, coupon code, free-shipping progress bar, totals and secure checkout.",
    },
  },
  {
    icon: User,
    title: { ar: "صفحات الحساب", en: "Account pages" },
    desc: {
      ar: "الملف الشخصي، الطلبات وتتبعها، العناوين، والمفضلة — كلها بتصميم موحّد مع الثيم.",
      en: "Profile, orders & tracking, addresses and wishlist — all styled with the theme.",
    },
  },
  {
    icon: Layers,
    title: { ar: "صفحة التصنيف", en: "Category page" },
    desc: {
      ar: "غلاف للتصنيف، فلترة وترتيب، تبديل بين الشبكة والقائمة، عدد المنتجات، مسار التنقل، والتصنيفات الفرعية.",
      en: "Category hero, filtering & sorting, grid/list toggle, product count, breadcrumbs and subcategories.",
    },
  },
  {
    icon: Search,
    title: { ar: "صفحة البحث", en: "Search page" },
    desc: {
      ar: "نتائج البحث مع فلاتر جانبية وخيارات ترتيب، وحالة «لا نتائج» بتصميم لطيف، والبحث الأخير.",
      en: "Results with filter sidebar, sort options, a friendly empty state and recent searches.",
    },
  },
  {
    icon: Newspaper,
    title: { ar: "المدونة والمقالات", en: "Blog & posts" },
    desc: {
      ar: "قائمة مقالات مع مقال مميز، صفحة تفاصيل، معلومات الكاتبة، مقالات ذات صلة، ومشاركة اجتماعية.",
      en: "Post listing with featured post, detail view, author info, related posts and social sharing.",
    },
  },
  {
    icon: FileQuestion,
    title: { ar: "الأسئلة الشائعة", en: "FAQ page" },
    desc: {
      ar: "أسئلة بأسلوب الأكورديون، مقسّمة على تصنيفات، مع بحث داخلي.",
      en: "Accordion-style items organized by category with search.",
    },
  },
  {
    icon: Truck,
    title: { ar: "الشحن والدفع", en: "Shipping & payment" },
    desc: {
      ar: "خيارات الشحن، طرق الدفع، مدة التوصيل، وسياسة الاستبدال والإرجاع.",
      en: "Shipping options, payment methods, delivery estimates and return policy.",
    },
  },
  {
    icon: Store,
    title: { ar: "صفحة ٤٠٤", en: "404 page" },
    desc: {
      ar: "صفحة خطأ بتصميم خاص مع زر رجوع للرئيسية وبحث سريع.",
      en: "Custom error page with a home button and quick search.",
    },
  },
  {
    icon: Heart,
    title: { ar: "الهيدر والقائمة", en: "Header & navigation" },
    desc: {
      ar: "شعار للجوال والديسكتوب، قوائم منسدلة، بحث باقتراحات، حساب العميلة، المفضلة والسلة بعدّاد، ومبدّل اللغة والعملة، وهيدر ثابت أو شفاف.",
      en: "Desktop/mobile logos, dropdown menus, autocomplete search, account, wishlist & cart counters, language and currency switchers, sticky or transparent header.",
    },
  },
];

const SETTINGS: { title: Bi; items: Bi[] }[] = [
  {
    title: { ar: "الإعدادات العامة للتخصيص", en: "General customizer settings" },
    items: [
      { ar: "اختيار الخط من ٢٤ خط عربي + الوزن والحجم", en: "Pick from 24 Arabic fonts + weight and size" },
      { ar: "اللون الأساسي والثانوي وألواح السلة (براند، بلاش، روز، ميست)", en: "Primary/secondary colors and mini-cart palettes (brand, blush, rose, mist)" },
      { ar: "ألوان النصوص والحدود والخلفيات ونجوم التقييم", en: "Text, border, background and star colors" },
      { ar: "تشغيل/إيقاف الحركات لتحسين السرعة", en: "Toggle animations for performance" },
      { ar: "دعم CSS مخصص لأي لمسة إضافية", en: "Custom CSS support for extra touches" },
    ],
  },
  {
    title: { ar: "إعدادات الفوتر", en: "Footer settings" },
    items: [
      { ar: "شعار خاص بالفوتر ونص حقوق النشر", en: "Footer logo and copyright text" },
      { ar: "الرقم الضريبي والسجل التجاري", en: "VAT number and commercial registration" },
      { ar: "وصف المتجر + ٣ أعمدة روابط قابلة للتخصيص", en: "About store + 3 custom link columns" },
      { ar: "بيانات الموقع: العنوان، الجوال، الإيميل، ساعات العمل", en: "Location: address, phone, email, working hours" },
      { ar: "٨ منصات تواصل اجتماعي + ألوان خلفية ونصوص مخصصة", en: "8 social platforms + custom background and text colors" },
    ],
  },
  {
    title: { ar: "الأداء والتقنية", en: "Performance & tech" },
    items: [
      { ar: "مبني على Tailwind CSS بمعمارية حديثة وسريعة", en: "Built on modern, fast Tailwind CSS architecture" },
      { ar: "تحميل مسبق للصور المهمة وتحميل ذكي للباقي", en: "Preloading for critical images, lazy loading for the rest" },
      { ar: "دعم RTL كامل وبنية HTML دلالية", en: "Full RTL support and semantic HTML" },
      { ar: "تنقل بلوحة المفاتيح وتوافق مع قارئات الشاشة", en: "Keyboard navigation and screen-reader friendly" },
      { ar: "قوالب Jinja2 وسكيمات واضحة للمطورين", en: "Jinja2 templates and clear schemas for developers" },
    ],
  },
];

const PAYMENTS = [
  "مدى",
  "Visa",
  "Mastercard",
  "STC Pay",
  "تمارا",
  "تابي",
  "Apple Pay",
  "PayPal",
  "Amex",
  "الدفع عند الاستلام",
];

export function PagesAndSettings() {
  const { t } = useI18n();

  return (
    <section id="pages" className="section-pad surface-soft">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={{ ar: "نظام صفحات كامل", en: "Complete page system" }}
          title={{ ar: "متجر كامل من أول صفحة لآخر تفصيلة", en: "A complete store, end to end" }}
          subtitle={{
            ar: "أنوثة ما هو مجرد صفحة رئيسية حلوة — كل صفحة في متجرك مصممة ومجهزة للبيع.",
            en: "Anotha isn't just a pretty homepage — every page in your store is designed to sell.",
          }}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAGES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title.en}
                className="rounded-3xl border border-border bg-card p-6 shadow-cardsoft"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-blush text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base">{t(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.desc)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-cardsoft md:p-8">
            <h3 className="text-xl">{t({ ar: "الإعدادات العامة", en: "General settings" })}</h3>
            <Accordion type="single" collapsible defaultValue="item-0" className="mt-4">
              {SETTINGS.map((s, i) => (
                <AccordionItem key={s.title.en} value={`item-${i}`}>
                  <AccordionTrigger className="text-start text-sm font-semibold">
                    {t(s.title)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item.en} className="text-sm text-muted-foreground">
                          • {t(item)}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-cardsoft md:p-8">
            <span className="eyebrow">
              <CreditCard className="size-4" />
              {t({ ar: "طرق دفع سعودية وخليجية", en: "Saudi & Gulf payments" })}
            </span>
            <div className="mt-6 flex flex-wrap gap-2">
              {PAYMENTS.map((p) => (
                <span
                  key={p}
                  className="rounded-xl border border-border bg-muted px-3 py-2 text-xs font-semibold"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-blush p-4">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-blush-foreground">
                {t({
                  ar: "شعارات الدفع تظهر في الفوتر وصفحة السلة، مع الرقم الضريبي والسجل التجاري — يعني ثقة أعلى ومبيعات أكثر.",
                  en: "Payment badges appear in the footer and cart alongside VAT and registration numbers — more trust, more sales.",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
