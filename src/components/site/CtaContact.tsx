import { Mail, MessageCircle, Phone, Play, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { DEMO_URL, NAV, WHATSAPP_URL } from "@/lib/site-config";

export function CtaContact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] surface-plum p-8 text-center md:p-14">
          <div className="absolute -end-16 -top-16 size-56 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="relative text-3xl md:text-4xl">
            {t({
              ar: "جاهزة تحوّلين متجرك لتجربة أنوثة؟",
              en: "Ready to turn your store into an Anotha experience?",
            })}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl leading-relaxed opacity-85">
            {t({
              ar: "أنا موجود معك ٢٤ ساعة — أشرح لك كل جزء في الثيم، أركّبه على متجرك، وأعدّل الألوان والخطوط والأقسام على هويتك. اسأليني عن أي تفصيلة قبل الشراء.",
              en: "I'm available 24/7 — I'll walk you through every part of the theme, install it on your store and tune colors, fonts and sections to your brand. Ask me anything before you buy.",
            })}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-7">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                {t({ ar: "تواصل واتساب الآن", en: "Chat on WhatsApp" })}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-plum-foreground/40 bg-transparent px-7 text-plum-foreground hover:bg-plum-foreground/10"
            >
              <a href={DEMO_URL} target="_blank" rel="noreferrer">
                <Play className="size-4" />
                {t({ ar: "معاينة الثيم مباشرة", en: "Open live demo" })}
              </a>
            </Button>
          </div>
          <p className="relative mt-6 text-xs opacity-70">
            {t({
              ar: "تركيب، تخصيص، وتدريب على لوحة التخصيص — كل هذا ضمن الخدمة.",
              en: "Installation, customization and customizer training included.",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export function FloatingContact() {
  const { t } = useI18n();
  const items = [
    { icon: MessageCircle, href: WHATSAPP_URL, label: { ar: "واتساب", en: "WhatsApp" } },
    { icon: Instagram, href: "https://instagram.com", label: { ar: "انستقرام", en: "Instagram" } },
    { icon: Send, href: "https://t.me", label: { ar: "تيليجرام", en: "Telegram" } },
    { icon: Phone, href: "tel:+966500000000", label: { ar: "اتصال", en: "Call" } },
  ];
  return (
    <div className="fixed bottom-5 z-40 flex flex-col gap-2 end-4">
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label.en}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={t(label)}
          aria-label={t(label)}
          className="flex size-11 items-center justify-center rounded-full surface-brand shadow-elegant transition-transform hover:scale-110"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <span className="font-display text-2xl font-bold text-gradient-brand">أنوثة</span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t({
              ar: "ثيم متاجر التجميل والعطور والإكسسوارات النسائية — تصميم ناعم، عربي أصيل، وجاهز للبيع.",
              en: "A theme for beauty, fragrance and women's accessories stores — soft, Arabic-native and built to sell.",
            })}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t({ ar: "روابط سريعة", en: "Quick links" })}</h3>
          <ul className="mt-3 space-y-2">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t({ ar: n.ar, en: n.en })}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t({ ar: "تواصل", en: "Contact" })}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4" /> +201126233913
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" /> hxxcvhh1222@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              {t({ ar: "دعم مباشر ٢٤ ساعة", en: "24/7 live support" })}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t({ ar: "معلومات نظامية", en: "Legal" })}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{t({ ar: "سياسة الاستبدال والإرجاع", en: "Returns policy" })}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        {t({
          ar: "© ٢٠٢٦ ثيم أنوثة. جميع الحقوق محفوظة.",
          en: "© 2026 Anotha Theme. All rights reserved.",
        })}
      </div>
    </footer>
  );
}
