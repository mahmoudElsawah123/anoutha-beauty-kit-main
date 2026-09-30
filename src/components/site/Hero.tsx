import { ArrowLeft, Play, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { DEMO_URL, WHATSAPP_URL } from "@/lib/site-config";
import heroImg from "@/assets/hero-beauty.jpg";

const STATS = [
  { value: "٢٤", valueEn: "24", ar: "خط عربي جاهز", en: "Arabic fonts" },
  { value: "١٥+", valueEn: "15+", ar: "سكشن قابل للتخصيص", en: "Custom sections" },
  { value: "١٤", valueEn: "14", ar: "صفحة كاملة", en: "Full pages" },
  { value: "١٠٠٪", valueEn: "100%", ar: "دعم RTL عربي", en: "RTL support" },
];

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden surface-soft pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24">
        <div className="relative z-10">
          <span className="eyebrow">
            <Sparkles className="size-4" />
            {t({ ar: "ثيم متاجر التجميل والعطور", en: "Beauty & fragrance store theme" })}
          </span>

          <h1 className="mt-5 text-4xl leading-[1.15] md:text-6xl">
            {t({ ar: "ثيم ", en: "Turn your beauty store into a " })}
            <span className="text-gradient-brand">{t({ ar: "أنوثة", en: "stunning" })}</span>
            <br />
            {t({
              ar: "يحوّل متجرك لتجربة تجميل فاخرة",
              en: "online experience",
            })}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t({
              ar: "تصميم ناعم وأنيق، عربي أصيل من اليمين لليسار، وأقسام جاهزة للمكياج والعطور والإكسسوارات النسائية. كل شي تتحكم فيه من لوحة التخصيص — الألوان، الخطوط، الأقسام، وطرق الدفع السعودية.",
              en: "A soft, elegant, RTL-native design with ready-made sections for makeup, perfumes and women's accessories. Control everything from the customizer: colors, fonts, sections and Saudi payment methods.",
            })}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-elegant">
              <a href={DEMO_URL} target="_blank" rel="noreferrer">
                <Play className="size-4" />
                {t({ ar: "شاهد المعاينة المباشرة", en: "View live demo" })}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {t({ ar: "اطلب الثيم الآن", en: "Get the theme" })}
                <ArrowLeft className="size-4 rtl:rotate-180" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {t({
                ar: "موثوق من أصحاب متاجر التجميل في السعودية والخليج",
                en: "Trusted by beauty store owners across Saudi & the Gulf",
              })}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-rose/40 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-glowsoft">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
              <span className="size-2.5 rounded-full bg-rose" />
              <span className="size-2.5 rounded-full bg-gold" />
              <span className="size-2.5 rounded-full bg-primary/40" />
              <span className="mx-auto rounded-full bg-card px-3 py-1 text-[10px] text-muted-foreground">
                anotha-store.com
              </span>
            </div>
            <img
              src={heroImg}
              alt={t({
                ar: "نموذج واجهة ثيم أنوثة لمتجر تجميل",
                en: "Anotha theme storefront preview",
              })}
              width={1600}
              height={1104}
              className="h-[320px] w-full object-cover md:h-[430px]"
            />
            <div className="grid grid-cols-3 gap-2 p-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl bg-blush p-3">
                  <div className="h-14 rounded-lg bg-rose/50" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-primary/25" />
                  <div className="mt-1.5 h-2 w-1/2 rounded-full bg-primary/15" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-4 py-8 md:grid-cols-4 md:divide-x md:rtl:divide-x-reverse md:px-8">
          {STATS.map((s) => (
            <div key={s.en} className="px-2 py-3 text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {lang === "ar" ? s.value : s.valueEn}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{t({ ar: s.ar, en: s.en })}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
