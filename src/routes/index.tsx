import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { SectionsShowcase } from "@/components/site/SectionsShowcase";
import { InteractiveDemos } from "@/components/site/InteractiveDemos";
import { DesignSystem } from "@/components/site/DesignSystem";
import { PagesAndSettings } from "@/components/site/PagesAndSettings";
import { Proof } from "@/components/site/Proof";
import { CtaContact, FloatingContact, SiteFooter } from "@/components/site/CtaContact";
import { Features } from "@/components/site/Features";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ثيم أنوثة | ثيم متاجر المكياج والعطور بتصميم عربي فاخر" },
      {
        name: "description",
        content:
          "ثيم أنوثة لمتاجر المكياج والعطور والإكسسوارات النسائية: ٢٤ خط عربي، دعم RTL كامل، أقسام قابلة للتخصيص، وطرق دفع سعودية.",
      },
      { property: "og:title", content: "ثيم أنوثة | ثيم متاجر المكياج والعطور" },
      {
        property: "og:description",
        content:
          "تصميم ناعم وأنيق لمتاجر التجميل: سلايدر، لوك بوك، قبل وبعد، فيديوهات العميلات، وصفحات متجر كاملة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <I18nProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <SectionsShowcase />
        <InteractiveDemos />
        <DesignSystem />
        <PagesAndSettings />
        <Proof />
        <CtaContact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </I18nProvider>
  );
}
