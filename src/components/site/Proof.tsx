import { BadgeCheck, Eye, Quote, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { useI18n, type Bi } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

const FEATURES: { icon: typeof Truck; ar: string; en: string; descAr: string; descEn: string }[] = [
  {
    icon: Truck,
    ar: "شحن سريع",
    en: "Fast shipping",
    descAr: "سكشن المزايا يعرض وعودك: شحن، استبدال، أصلية ١٠٠٪.",
    descEn: "The features section shows your promises: shipping, returns, 100% authentic.",
  },
  {
    icon: ShieldCheck,
    ar: "ضمان الجودة",
    en: "Quality guarantee",
    descAr: "سكشن الضمان بشرائح وأيقونات يطمّن العميلة قبل الشراء.",
    descEn: "The guarantee section reassures shoppers before checkout.",
  },
  {
    icon: Eye,
    ar: "عدّاد الزوار الآن",
    en: "Live visitor count",
    descAr: "«١٩ شخص يشاهدون هذا المنتج الآن» — دليل اجتماعي يزيد الشراء.",
    descEn: '"19 people are viewing this now" — social proof that lifts conversion.',
  },
  {
    icon: BadgeCheck,
    ar: "شعار الأكثر مبيعاً",
    en: "Best-seller badge",
    descAr: "تسمية مخصصة بالعربي والإنجليزي على المنتجات الأعلى مبيعاً.",
    descEn: "Custom Arabic/English label on your top products.",
  },
];

const REVIEWS: { name: Bi; role: Bi; text: Bi }[] = [
  {
    name: { ar: "نورة العتيبي", en: "Noura Al-Otaibi" },
    role: { ar: "متجر مكياج — الرياض", en: "Makeup store — Riyadh" },
    text: {
      ar: "ركّبنا أنوثة وتغيّر شكل المتجر ١٨٠ درجة. سكشن قبل وبعد رفع تفاعل البنات على المنتجات بشكل واضح.",
      en: "We installed Anotha and the store changed completely. The before/after section clearly lifted engagement.",
    },
  },
  {
    name: { ar: "دانة الحربي", en: "Dana Al-Harbi" },
    role: { ar: "عطور نسائية — جدة", en: "Women's perfumes — Jeddah" },
    text: {
      ar: "الخطوط العربية والألوان الناعمة عكست هوية براندي بالضبط، وكل شي عدّلته بنفسي بدون مبرمج.",
      en: "The Arabic fonts and soft colors matched my brand exactly, and I customized everything myself.",
    },
  },
  {
    name: { ar: "أسماء القحطاني", en: "Asma Al-Qahtani" },
    role: { ar: "إكسسوارات وأسوارة — الدمام", en: "Accessories — Dammam" },
    text: {
      ar: "سلة جانبية سريعة وشريط الشحن المجاني خلّى متوسط الطلب يرتفع. والدعم يرد على طول ٢٤ ساعة.",
      en: "The fast mini-cart and free-shipping bar raised our average order value. Support replies around the clock.",
    },
  },
];

export function Proof() {
  const { t } = useI18n();

  return (
    <section id="proof" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={{ ar: "الثقة والدليل الاجتماعي", en: "Trust & social proof" }}
          title={{ ar: "أدوات مصممة تزيد نسبة الشراء", en: "Tools built to raise conversion" }}
          subtitle={{
            ar: "أنوثة يجمع بين الجمال والبيع: شرائح ثقة، تقييمات، ضمانات، وإشعارات تدفع العميلة تكمل الطلب.",
            en: "Anotha blends beauty with selling: trust badges, reviews, guarantees and nudges that close the order.",
          }}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.en} className="rounded-3xl bg-blush p-6">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 text-base">{t({ ar: f.ar, en: f.en })}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blush-foreground/80">
                  {t({ ar: f.descAr, en: f.descEn })}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name.en}
              className="rounded-3xl border border-border bg-card p-6 shadow-cardsoft"
            >
              <Quote className="size-6 text-rose" />
              <blockquote className="mt-3 text-sm leading-relaxed">{t(r.text)}</blockquote>
              <div className="mt-4 flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full surface-brand text-sm font-bold">
                  {t(r.name).charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t(r.name)}</span>
                  <span className="block text-xs text-muted-foreground">{t(r.role)}</span>
                </span>
                <BadgeCheck className="ms-auto size-5 text-primary" />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            { ar: "رضا العميلات ١٠٠٪", en: "100% satisfaction" },
            { ar: "+٥٠٠ منتج معروض", en: "+500 products showcased" },
            { ar: "دعم ٢٤ ساعة", en: "24/7 support" },
            { ar: "تحديثات مجانية", en: "Free updates" },
          ].map((b) => (
            <span
              key={b.en}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-cardsoft"
            >
              <Sparkles className="size-4 text-primary" />
              {t(b)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
