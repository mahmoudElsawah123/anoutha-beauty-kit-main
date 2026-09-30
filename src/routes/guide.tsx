import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, FloatingContact } from "@/components/site/CtaContact";
import { THEME_SECTIONS_GUIDE, CATEGORIES } from "@/lib/guide-data";
import { GuideSectionCard } from "@/components/guide/GuideSectionCard";
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  Layers, 
  Eye, 
  Palette, 
  MessageCircle,
  ArrowUp,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_URL, WHATSAPP_URL } from "@/lib/site-config";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "دليل التخصيص والاستخدام الشامل | ثيم أنوثة" },
      {
        name: "description",
        content:
          "شرح تفصيلي خطوة بخطوة لكل إعدادات وثيم أنوثة على منصة زد: الهيدر، السلايدر، قبل وبعد، اللوك بوك، بوابات الدفع، وإعدادات الاسكيما.",
      },
      { property: "og:title", content: "دليل التخصيص والاستخدام الشامل | ثيم أنوثة" },
      {
        property: "og:description",
        content:
          "مرجعك الكامل لضبط متجرك خطوة بخطوة مع المقاسات الموصى بها وشرح الاسكيما بالكامل.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    return THEME_SECTIONS_GUIDE.filter((section) => {
      const matchCategory =
        selectedCategory === "all" || section.category === selectedCategory;
      const matchSearch =
        section.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.taglineAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.whyUseItAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.fields.some(
          (f) =>
            f.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.id.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <I18nProvider>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 pb-20">
        {/* Luxury Hero Banner */}
        <section className="relative overflow-hidden border-b border-border surface-soft py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8 text-center relative z-10">
            <span className="eyebrow mx-auto mb-4 text-xs font-bold text-primary shadow-sm">
              <BookOpen className="size-3.5" />
              دليل التخصيص وضبط المتجر — خطوة بخطوة
            </span>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              مرجعك الشامل لتخصيص <span className="text-gradient-brand">ثيم أنوثة</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
              يا هلا والله! هذا الدليل مفصّل خصيصاً عشان يشرح لك كل زر وخانة في لوحة تخصيص متجرك على منصة زد. خطوة بخطوة وبالمقاسات الموصى بها، عشان تطلعين بمتجر فخم يجذب الزبائن من أول نظرة.
            </p>

            {/* Quick Stats Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold">
              <div className="rounded-full border border-border bg-card px-4 py-2 text-foreground shadow-sm">
                ✨ <strong>١٦+ سكشن</strong> تفاعلي جاهز
              </div>
              <div className="rounded-full border border-border bg-card px-4 py-2 text-foreground shadow-sm">
                🔤 <strong>٢٤ خط عربي</strong> مدمج
              </div>
              <div className="rounded-full border border-border bg-card px-4 py-2 text-foreground shadow-sm">
                🛍️ <strong>دعم كامل</strong> لسلة وتطبيقات زد
              </div>
            </div>

            {/* Global Search Input */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحثي عن أي سكشن أو إعداد (مثال: قبل وبعد، الشعار، السلايدر، تمارا)..."
                  className="w-full rounded-2xl border border-border/80 bg-card py-3.5 pe-4 ps-11 text-sm shadow-cardsoft placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Search className="absolute start-3.5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
                  >
                    مسح
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sidebar Jump Links */}
        <div className="mx-auto max-w-7xl px-4 md:px-8 pt-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-border/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm scale-105"
                    : "border border-border bg-card text-foreground/80 hover:bg-blush hover:text-primary"
                }`}
              >
                {cat.labelAr}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Quick Jump Sidebar (Sticky on Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 rounded-3xl border border-border bg-card p-5 shadow-cardsoft">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-display text-sm font-bold text-foreground">
                    فهرس الأقسام السريع
                  </span>
                  <span className="rounded-full bg-blush px-2 py-0.5 text-[10px] font-bold text-primary">
                    {filteredSections.length} قسم
                  </span>
                </div>

                <nav className="mt-3 max-h-[calc(100vh-200px)] overflow-y-auto space-y-1 pe-1">
                  {filteredSections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-blush hover:text-primary"
                    >
                      {sec.titleAr}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-border pt-4">
                  <Button asChild size="sm" variant="outline" className="w-full rounded-full text-xs">
                    <a href={DEMO_URL} target="_blank" rel="noreferrer">
                      <ExternalLink className="size-3.5 me-1.5" />
                      معاينة المتجر المباشرة
                    </a>
                  </Button>
                </div>
              </div>
            </aside>

            {/* Sections Guide Cards List */}
            <div className="lg:col-span-9 space-y-12">
              {filteredSections.map((section) => (
                <GuideSectionCard key={section.id} section={section} />
              ))}

              {filteredSections.length === 0 && (
                <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blush text-primary">
                    <Search className="size-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    ما لقينا أي إعداد يطابق بحثك "{searchQuery}"
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    جربي تبحثين بكلمة ثانية مثل: الشعار، الخطوط، اللوك بوك، أو قبل وبعد.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    variant="outline"
                    className="mt-4 rounded-full text-xs"
                  >
                    إعادة ضبط الفلاتر
                  </Button>
                </div>
              )}

              {/* Need help footer banner */}
              <div className="rounded-3xl surface-plum p-8 text-center text-plum-foreground relative overflow-hidden shadow-elegant">
                <h3 className="font-display text-2xl font-bold">
                  عطلتي في أي خطوة أو ودك نساعدك بالتخصيص؟
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-xs md:text-sm opacity-85 leading-relaxed">
                  فريقنا معك خطوة بخطوة — نساعدك في تركيب الثيم، ضبط الألوان والصور، وتجهيز متجرك بالكامل ليصير جاهز للبيع بأعلى جاهزية.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg" variant="secondary" className="rounded-full px-6 text-xs font-bold">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4 me-1.5" />
                      تواصل معنا عبر واتساب مباشرة
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-plum-foreground/30 text-plum-foreground hover:bg-plum-foreground/10 px-6 text-xs font-bold">
                    <a href={DEMO_URL} target="_blank" rel="noreferrer">
                      معاينة الثيم الحي على زد
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingContact />
    </I18nProvider>
  );
}
