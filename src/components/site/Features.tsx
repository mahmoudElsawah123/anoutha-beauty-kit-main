import {
  Languages,
  LayoutGrid,
  MousePointerClick,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react";
import { useI18n, type Bi } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

const ITEMS: { icon: typeof Zap; title: Bi; desc: Bi }[] = [
  {
    icon: Languages,
    title: { ar: "عربي أول، RTL أصلي", en: "Arabic-first, native RTL" },
    desc: {
      ar: "الثيم مبني من الأساس لليمين لليسار، مع ٢٤ خط عربي مختار، وترجمة إنجليزية جاهزة لعميلاتك خارج الخليج.",
      en: "Built right-to-left from the ground up, with 24 curated Arabic fonts and ready English translation.",
    },
  },
  {
    icon: Palette,
    title: { ar: "تخصيص بلا كود", en: "No-code customization" },
    desc: {
      ar: "ألوان، خطوط، ترتيب الأقسام، الهيدر والفوتر — كل شي من لوحة التخصيص بمعاينة فورية.",
      en: "Colors, fonts, section order, header and footer — all from the customizer with instant preview.",
    },
  },
  {
    icon: LayoutGrid,
    title: { ar: "١٥+ سكشن جاهز", en: "15+ ready sections" },
    desc: {
      ar: "سلايدر، منتجات، لوك بوك، قبل وبعد، فيديو، UGC، آراء، ضمانات، مزايا — رتبيهم كيف ما تحبين.",
      en: "Slider, products, lookbook, before/after, video, UGC, reviews, guarantees, features — arrange freely.",
    },
  },
  {
    icon: Smartphone,
    title: { ar: "مثالي على الجوال", en: "Perfect on mobile" },
    desc: {
      ar: "صور وإعدادات مستقلة للجوال، ولمسات تفاعلية مريحة للأصابع، وسرعة تحميل عالية.",
      en: "Separate mobile images and settings, touch-friendly interactions and fast loading.",
    },
  },
  {
    icon: MousePointerClick,
    title: { ar: "مصمم للبيع", en: "Designed to convert" },
    desc: {
      ar: "عدّاد الزوار، شعار الأكثر مبيعاً، شريط الشحن المجاني، وسلة جانبية سريعة تقلل التخلي عن الطلب.",
      en: "Live visitor count, best-seller badges, free-shipping bar and a fast mini-cart that cuts abandonment.",
    },
  },
  {
    icon: Zap,
    title: { ar: "أداء Tailwind الحديث", en: "Modern Tailwind performance" },
    desc: {
      ar: "معمارية Tailwind CSS خفيفة، تحميل ذكي للصور، وإمكانية إيقاف الحركات لأقصى سرعة.",
      en: "Lightweight Tailwind CSS architecture, smart image loading and an option to disable animations.",
    },
  },
];

export function Features() {
  const { t } = useI18n();
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={{ ar: "ليش أنوثة؟", en: "Why Anotha?" }}
          title={{ ar: "كل اللي يحتاجه متجر تجميل ناجح", en: "Everything a beauty store needs" }}
          subtitle={{
            ar: "ثيم واحد يجمع الجمال والسرعة والبيع، ومصمم خصيصاً للسوق السعودي والخليجي.",
            en: "One theme combining beauty, speed and selling — made for the Saudi and Gulf market.",
          }}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.title.en}
                className="group rounded-3xl border border-border bg-card p-7 shadow-cardsoft transition-all hover:-translate-y-1 hover:shadow-glowsoft"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-blush text-primary transition-colors group-hover:surface-brand">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg">{t(i.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(i.desc)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
