import { Monitor, Palette, Smartphone, Type } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

const FONTS = [
  { name: "Changa", family: "Changa, sans-serif", ar: "أنوثة تبدأ من هنا" },
  { name: "Cairo", family: "Cairo, sans-serif", ar: "جمالك يستحق متجر أنيق" },
  { name: "Tajawal", family: "Tajawal, sans-serif", ar: "عطور ومكياج بلمسة خليجية" },
  { name: "Amiri", family: "Amiri, serif", ar: "أناقة عربية أصيلة" },
];

const PALETTES = [
  {
    ar: "براند (Brand)",
    en: "Brand",
    colors: ["oklch(0.62 0.22 355)", "oklch(0.72 0.16 20)", "oklch(0.19 0.055 350)"],
  },
  {
    ar: "بلاش (Blush)",
    en: "Blush",
    colors: ["oklch(0.955 0.03 350)", "oklch(0.9 0.05 350)", "oklch(0.82 0.09 350)"],
  },
  {
    ar: "روز (Rose)",
    en: "Rose",
    colors: ["oklch(0.86 0.075 350)", "oklch(0.74 0.13 355)", "oklch(0.6 0.17 355)"],
  },
  {
    ar: "ميست (Mist)",
    en: "Mist",
    colors: ["oklch(0.955 0.018 300)", "oklch(0.9 0.03 300)", "oklch(0.8 0.04 300)"],
  },
];

const CONTROLS = [
  {
    ar: "لون أساسي وثانوي لكل المتجر",
    en: "Primary and secondary colors store-wide",
  },
  { ar: "ألوان النصوص والحدود والخلفيات", en: "Text, border and background colors" },
  { ar: "لون نجوم التقييم", en: "Star rating color" },
  { ar: "لون خلفية مستقل لكل سكشن", en: "Per-section background color" },
  { ar: "ألوان الهيدر والفوتر", en: "Header and footer colors" },
  { ar: "مفتاح إيقاف الحركات لسرعة أعلى", en: "Global animation toggle for speed" },
];

export function DesignSystem() {
  const { t } = useI18n();

  return (
    <section id="design" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={{ ar: "الهوية والتخصيص", en: "Identity & customization" }}
          title={{ ar: "هويتك أنتِ، مو هوية الثيم", en: "Your brand, not the theme's" }}
          subtitle={{
            ar: "٢٤ خط عربي، أنظمة ألوان كاملة، وتحكم بكل تفصيلة — كل شي من لوحة التخصيص وبمعاينة فورية.",
            en: "24 Arabic fonts, complete color systems and control over every detail — all from the customizer with instant preview.",
          }}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-cardsoft md:p-8">
            <span className="eyebrow">
              <Type className="size-4" />
              {t({ ar: "٢٤ خط عربي مختار بعناية", en: "24 curated Arabic fonts" })}
            </span>
            <div className="mt-6 space-y-4">
              {FONTS.map((f) => (
                <div
                  key={f.name}
                  className="flex items-baseline justify-between gap-4 rounded-2xl bg-blush px-5 py-4"
                >
                  <span className="text-xl md:text-2xl" style={{ fontFamily: f.family }}>
                    {f.ar}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                    {f.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "تحكم كامل في وزن الخط وحجمه، وتنسيق مضبوط للكتابة العربية من اليمين لليسار.",
                en: "Full control over font weight and size, with typography tuned for right-to-left Arabic.",
              })}
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-cardsoft md:p-8">
              <span className="eyebrow">
                <Palette className="size-4" />
                {t({ ar: "أنظمة ألوان جاهزة", en: "Ready color systems" })}
              </span>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {PALETTES.map((p) => (
                  <div key={p.en} className="rounded-2xl border border-border p-4">
                    <div className="flex gap-2">
                      {p.colors.map((c) => (
                        <span
                          key={c}
                          className="size-8 rounded-lg border border-border"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-sm font-semibold">{t({ ar: p.ar, en: p.en })}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {CONTROLS.map((c) => (
                  <li key={c.en} className="text-sm text-muted-foreground">
                    • {t({ ar: c.ar, en: c.en })}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl surface-plum p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Monitor className="size-5" />
                <Smartphone className="size-5" />
                <span className="text-sm font-semibold">
                  {t({ ar: "تصميم يبدأ من الجوال", en: "Mobile-first design" })}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed opacity-85">
                {t({
                  ar: "أكثر من ٨٠٪ من مشتريات التجميل تجي من الجوال، ولذلك كل سكشن في أنوثة له إعدادات مستقلة للجوال والتابلت والديسكتوب: صور مختلفة، عدد بطاقات مختلف، ومقاسات نصوص مختلفة.",
                  en: "Over 80% of beauty purchases come from mobile, so every Anotha section has separate settings for mobile, tablet and desktop: different images, card counts and text sizes.",
                })}
              </p>
              <div className="mt-6 flex items-end gap-4">
                <div className="h-24 flex-1 rounded-xl bg-plum-foreground/15 p-2">
                  <div className="h-3 w-1/2 rounded-full bg-plum-foreground/40" />
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-12 rounded-lg bg-plum-foreground/25" />
                    ))}
                  </div>
                </div>
                <div className="h-32 w-16 rounded-xl bg-plum-foreground/15 p-2">
                  <div className="h-2 w-2/3 rounded-full bg-plum-foreground/40" />
                  <div className="mt-2 space-y-1.5">
                    {[0, 1].map((i) => (
                      <div key={i} className="h-9 rounded-lg bg-plum-foreground/25" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
