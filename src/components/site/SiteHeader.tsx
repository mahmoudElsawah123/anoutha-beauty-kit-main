import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { DEMO_URL, NAV } from "@/lib/site-config";

export function SiteHeader() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="surface-plum text-center text-xs md:text-sm py-2 px-4">
        {t({
          ar: "ثيم أنوثة — جاهز للتركيب على متجرك اليوم، ودعم مباشر ٢٤ ساعة",
          en: "Anotha Theme — install on your store today, with 24/7 direct support",
        })}
      </div>
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-cardsoft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-gradient-brand">أنوثة</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">Anotha Theme</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const url = (item as any).href || `/#${item.id}`;
              const isExternalOrAnchor = url.startsWith("/#") || url.startsWith("#");

              if (isExternalOrAnchor) {
                return (
                  <a
                    key={item.id}
                    href={url}
                    className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-blush hover:text-primary"
                  >
                    {t({ ar: item.ar, en: item.en })}
                  </a>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={url}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-blush hover:text-primary"
                  activeProps={{ className: "bg-blush text-primary font-bold shadow-sm" }}
                >
                  {t({ ar: item.ar, en: item.en })}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:text-primary"
              aria-label={t({ ar: "تغيير اللغة", en: "Switch language" })}
            >
              <Globe className="size-4" />
              {lang === "ar" ? "EN" : "AR"}
            </button>
            <Button asChild className="hidden rounded-full sm:inline-flex">
              <a href={DEMO_URL} target="_blank" rel="noreferrer">
                {t({ ar: "معاينة مباشرة", en: "Live demo" })}
              </a>
            </Button>
            <button
              className="rounded-full border border-border bg-card p-2 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={t({ ar: "القائمة", en: "Menu" })}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background/95 px-4 py-3 lg:hidden">
            <div className="flex flex-col">
              {NAV.map((item) => {
                const url = (item as any).href || `/#${item.id}`;
                const isExternalOrAnchor = url.startsWith("/#") || url.startsWith("#");

                if (isExternalOrAnchor) {
                  return (
                    <a
                      key={item.id}
                      href={url}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-blush"
                    >
                      {t({ ar: item.ar, en: item.en })}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={url}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-blush"
                    activeProps={{ className: "bg-blush text-primary font-bold" }}
                  >
                    {t({ ar: item.ar, en: item.en })}
                  </Link>
                );
              })}
              <Button asChild className="mt-2 rounded-full">
                <a href={DEMO_URL} target="_blank" rel="noreferrer">
                  {t({ ar: "معاينة مباشرة", en: "Live demo" })}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
