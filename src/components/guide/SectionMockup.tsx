import { useState } from "react";
import { 
  Sparkles, 
  ShoppingBag, 
  Search, 
  Menu, 
  Star, 
  CheckCircle2, 
  Play, 
  Heart, 
  ChevronRight, 
  ChevronLeft,
  Truck,
  ShieldCheck,
  CreditCard,
  PhoneCall,
  Clock,
  ExternalLink,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MockupProps {
  type: string;
}

export function SectionMockup({ type }: MockupProps) {
  // State for Before / After slider
  const [sliderPos, setSliderPos] = useState(50);

  // State for Lookbook active pin
  const [activePin, setActivePin] = useState<number | null>(1);

  // State for Main slider index
  const [sliderIndex, setSliderIndex] = useState(0);

  // State for Device View (Desktop vs Mobile)
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-cardsoft">
      {/* Device View Bar */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block size-2.5 rounded-full bg-emerald-500" />
          <span className="font-semibold text-foreground/80">معاينة حية للشكل النهائي في متجرك</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-border bg-background p-0.5">
          <button
            onClick={() => setDeviceView("desktop")}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              deviceView === "desktop" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            🖥️ ديسكتوب
          </button>
          <button
            onClick={() => setDeviceView("mobile")}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              deviceView === "mobile" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            📱 جوال
          </button>
        </div>
      </div>

      {/* Mockup Canvas */}
      <div className={`p-4 transition-all ${deviceView === "mobile" ? "mx-auto max-w-sm" : "w-full"}`}>
        {type === "header" && (
          <div className="space-y-2">
            {/* Top Marquee News Bar */}
            <div className="surface-plum flex items-center justify-between rounded-lg px-3 py-1.5 text-center text-xs font-medium text-plum-foreground">
              <span className="animate-pulse">✨ توصيل مجاني لكافة مدن المملكة للطلبات فوق ١٩٩ ريال 🚚</span>
              <span className="rounded bg-primary/30 px-1.5 py-0.5 text-[10px]">كود: ANOTHA</span>
            </div>

            {/* Header Main Bar */}
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <Menu className="size-5 text-muted-foreground md:hidden" />
                <div className="flex items-center gap-1.5">
                  <div className="flex size-9 items-center justify-center rounded-full surface-brand font-display text-base font-bold text-primary-foreground shadow-sm">
                    أن
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold leading-none text-foreground">أنوثة</div>
                    <div className="text-[10px] text-muted-foreground">ANOTHA STORE</div>
                  </div>
                </div>
              </div>

              {deviceView === "desktop" && (
                <div className="relative flex-1 max-w-xs">
                  <input
                    type="text"
                    disabled
                    placeholder="ابحثي عن العطور، المكياج، السيروم..."
                    className="w-full rounded-full border border-border bg-muted/30 py-1.5 pe-3 ps-8 text-xs placeholder:text-muted-foreground"
                  />
                  <Search className="absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <div className="relative flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground">
                  <Heart className="size-4" />
                  <span className="absolute -end-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                    2
                  </span>
                </div>
                <div className="relative flex size-8 items-center justify-center rounded-full surface-brand text-primary-foreground">
                  <ShoppingBag className="size-4" />
                  <span className="absolute -end-1 -top-1 flex size-4 items-center justify-center rounded-full bg-plum text-[9px] font-bold text-plum-foreground">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "layout" && (
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">🔤 الخطوط العربية والهوية</span>
                <span className="rounded-full bg-blush px-2 py-0.5 text-[10px] font-bold text-primary">24 خط عربي</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="rounded-lg bg-muted/40 p-2.5 font-display text-sm font-bold text-foreground">
                  خط تشانجا (Changa) — فخم وعصري لعناوين متجرك
                </div>
                <div className="rounded-lg bg-muted/40 p-2.5 text-xs text-foreground/80">
                  خط كايرو (Cairo) — مقروء وواضح جداً لأسماء المنتجات والتفاصيل
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[11px] text-muted-foreground">لوحة الألوان الأساسية:</span>
                <div className="flex gap-1.5">
                  <span className="size-4 rounded-full bg-[#eb3986]" title="Primary Rose" />
                  <span className="size-4 rounded-full bg-[#1a0a12]" title="Deep Plum" />
                  <span className="size-4 rounded-full bg-[#fce8f2]" title="Soft Blush" />
                  <span className="size-4 rounded-full bg-[#f4deb3]" title="Champagne Gold" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">🛍️ السلة الجانبية التفاعلية (Mini Cart)</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">شحن مجاني</span>
              </div>
              <div className="mt-3 rounded-lg border border-border bg-blush/30 p-2.5">
                <div className="flex justify-between text-[11px] font-semibold text-foreground">
                  <span>باقي لك ٤٥ ريال وتاخذين شحن مجاني! 🚚</span>
                  <span>75%</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>🔥 عداد زوار مباشر: 42 عميلة تتصفح الآن</span>
                <span className="text-primary font-semibold">تحديث حي</span>
              </div>
            </div>
          </div>
        )}

        {type === "slider" && (
          <div className="relative overflow-hidden rounded-xl bg-plum text-plum-foreground shadow-md">
            <div className="relative min-h-[220px] p-6 flex flex-col justify-center bg-gradient-to-l from-plum via-plum/90 to-transparent">
              <span className="inline-block w-fit rounded-full bg-primary/30 px-3 py-1 text-[11px] font-bold text-primary-foreground backdrop-blur-sm">
                تشكيلة العيد الحصرية ✨
              </span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold leading-tight">
                إطلالة تأسر القلوب بلمسة فاخرة
              </h3>
              <p className="mt-1 max-w-md text-xs text-plum-foreground/80">
                مجموعة متكاملة من أرقى العطور ومستحضرات التجميل المختارة بعناية.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Button size="sm" className="rounded-full surface-brand text-xs font-bold shadow-md">
                  تسوقي التشكيلة الآن
                </Button>
                <span className="text-xs font-medium text-gold">خصم يصل 30%</span>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-2 end-4 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setSliderIndex(i)}
                  className={`size-2 rounded-full transition-all ${sliderIndex === i ? "w-5 bg-primary" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        )}

        {type === "before_after" && (
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-xl border border-border shadow-md select-none">
            <div className="relative h-64 w-full bg-muted">
              {/* After Layer (Full Width background) */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200 text-center p-4">
                <div>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                    بعد الاستخدام ✨
                  </span>
                  <p className="mt-3 font-display text-base font-bold text-foreground">بشرة نضرة ومشرقة خالية من التصبغات</p>
                  <p className="text-xs text-muted-foreground mt-1">ترطيب مضاعف بنسبة 94% بعد أسبوعين</p>
                </div>
              </div>

              {/* Before Layer (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 start-0 overflow-hidden bg-gradient-to-br from-amber-100 to-stone-200 border-e-2 border-white shadow-xl flex items-center justify-center text-center p-4"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="w-64">
                  <span className="rounded-full bg-neutral-800 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                    قبل الاستخدام ⏳
                  </span>
                  <p className="mt-3 font-display text-base font-bold text-neutral-800">بشرة مجهدة وجافة</p>
                  <p className="text-xs text-neutral-600 mt-1">تفاوت واضح في لون البشرة</p>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute inset-y-0 -ms-3.5 flex items-center justify-center cursor-ew-resize z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="flex size-7 items-center justify-center rounded-full bg-white shadow-xl border border-border text-primary text-xs font-bold">
                  ↔
                </div>
              </div>
            </div>

            {/* Slider Range Controller */}
            <div className="bg-background p-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>اسحبي المؤشر لمعاينة الفرق:</span>
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-1/2 accent-primary cursor-pointer"
              />
              <span className="font-bold text-foreground">{sliderPos}%</span>
            </div>
          </div>
        )}

        {type === "lookbook" && (
          <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-stone-900 via-neutral-900 to-stone-800 p-4 text-white shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose">Lookbook 2026</span>
                <h4 className="font-display text-lg font-bold">إطلالة السهرة الملكية</h4>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs text-gold">
                <Star className="size-3.5 fill-gold text-gold" />
                <span>4.9 (350+ تقييم)</span>
              </div>
            </div>

            {/* Interactive Image with Product Pins */}
            <div className="relative mt-3 h-56 rounded-lg bg-gradient-to-br from-rose-950/60 to-purple-950/60 flex items-center justify-center border border-white/10">
              <span className="text-xs text-white/50">صورة الإطلالة الكاملة للمودل</span>

              {/* Pin 1: Lipstick */}
              <div className="absolute top-1/3 start-1/3">
                <button
                  onClick={() => setActivePin(1)}
                  className={`flex size-7 items-center justify-center rounded-full text-xs font-bold shadow-lg transition-transform hover:scale-125 ${
                    activePin === 1 ? "bg-primary text-white ring-4 ring-primary/30" : "bg-white text-foreground"
                  }`}
                >
                  +
                </button>
              </div>

              {/* Pin 2: Serum */}
              <div className="absolute bottom-1/4 end-1/3">
                <button
                  onClick={() => setActivePin(2)}
                  className={`flex size-7 items-center justify-center rounded-full text-xs font-bold shadow-lg transition-transform hover:scale-125 ${
                    activePin === 2 ? "bg-primary text-white ring-4 ring-primary/30" : "bg-white text-foreground"
                  }`}
                >
                  +
                </button>
              </div>

              {/* Popover Product Card */}
              {activePin === 1 && (
                <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between rounded-lg bg-white/95 p-2.5 text-foreground backdrop-blur-md shadow-xl animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-2">
                    <div className="size-9 rounded-md bg-blush flex items-center justify-center text-base">💄</div>
                    <div>
                      <div className="text-xs font-bold">روج مات مخملي - كرزي فاخر</div>
                      <div className="text-[11px] font-semibold text-primary">٨٩ ر.س <span className="text-[9px] text-muted-foreground line-through">١٢٠ ر.س</span></div>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-full surface-brand text-xs font-bold h-7 px-3">
                    إضافة للسلة
                  </Button>
                </div>
              )}

              {activePin === 2 && (
                <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between rounded-lg bg-white/95 p-2.5 text-foreground backdrop-blur-md shadow-xl animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-2">
                    <div className="size-9 rounded-md bg-blush flex items-center justify-center text-base">✨</div>
                    <div>
                      <div className="text-xs font-bold">سيروم النضارة الفورية بحمض الهيالورونيك</div>
                      <div className="text-[11px] font-semibold text-primary">١٤٥ ر.س</div>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-full surface-brand text-xs font-bold h-7 px-3">
                    إضافة للسلة
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {type === "testimonials" && (
          <div className="space-y-3">
            {/* 3 Trust Badges */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-border bg-blush/40 p-2 text-center">
                <span className="text-base">⭐</span>
                <div className="text-xs font-bold text-foreground">١٠٠٪ أصلي</div>
                <div className="text-[9px] text-muted-foreground">ضمان الوكيل</div>
              </div>
              <div className="rounded-xl border border-border bg-blush/40 p-2 text-center">
                <span className="text-base">💄</span>
                <div className="text-xs font-bold text-foreground">+٥٠٠ منتج</div>
                <div className="text-[9px] text-muted-foreground">ماركات عالمية</div>
              </div>
              <div className="rounded-xl border border-border bg-blush/40 p-2 text-center">
                <span className="text-base">🌸</span>
                <div className="text-xs font-bold text-foreground">+١٠,٠٠٠</div>
                <div className="text-[9px] text-muted-foreground">عميلة سعيدة</div>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="grid gap-2 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-blush text-xs font-bold text-primary">
                      س
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-foreground">سارة العتيبي</span>
                        <CheckCircle2 className="size-3 text-emerald-500" />
                      </div>
                      <div className="text-[9px] text-muted-foreground">الرياض · مشترية موثقة</div>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-[11px]">★★★★★</div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  "التغليف يفتح النفس والتوصيل أسرع مما توقعت بيومين! المنتجات أصلية ١٠٠٪ وريحة البكج خياال."
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-3 shadow-sm hidden md:block">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-blush text-xs font-bold text-primary">
                      ن
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-foreground">نورة القحطاني</span>
                        <CheckCircle2 className="size-3 text-emerald-500" />
                      </div>
                      <div className="text-[9px] text-muted-foreground">جدة · مشترية موثقة</div>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-[11px]">★★★★★</div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  "السيروم فرق معي من أول أسبوع نضارة ولمعة طبيعية، أكيد مو آخر طلب من المتجر بإذن الله."
                </p>
              </div>
            </div>
          </div>
        )}

        {type === "ugc" && (
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {[
              { user: "@noura_beauty", tag: "توتوريال ميكب", views: "24.5K" },
              { user: "@reem_style", tag: "ريفيو العطر", views: "18.2K" },
              { user: "@sara_care", tag: "روتين العناية", views: "31.0K" },
              { user: "@maha_glow", tag: "أنبوكسينق الفخامة", views: "15.7K" },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-neutral-900 text-white aspect-[9/14] flex flex-col justify-between p-2.5 shadow-sm">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="rounded bg-black/50 px-1.5 py-0.5 backdrop-blur-sm">🎵 TikTok</span>
                  <span className="text-white/80">{item.views}</span>
                </div>
                <div className="flex size-8 mx-auto items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition-transform">
                  <Play className="size-4 fill-white text-white ms-0.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold truncate">{item.user}</div>
                  <div className="text-[9px] text-rose truncate">{item.tag}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "how_to_use" && (
          <div className="grid gap-3 md:grid-cols-3 relative">
            <div className="rounded-xl border border-border bg-card p-3.5 text-center relative shadow-sm">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-blush font-display text-sm font-bold text-primary mb-2">
                1
              </span>
              <h5 className="font-display text-xs font-bold text-foreground">الخطوة الأولى: التنظيف العميق</h5>
              <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                اغسلي بشرتك بالغسول اللطيف بحركات دائرية لمدة دقيقة لإزالة الشوائب.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-3.5 text-center relative shadow-sm">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-blush font-display text-sm font-bold text-primary mb-2">
                2
              </span>
              <h5 className="font-display text-xs font-bold text-foreground">الخطوة الثانية: تطبيق السيروم</h5>
              <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                ضعي ٣-٤ قطرات من السيروم وطبطبي برفق على الوجه والرقبة حتى الامتصاص.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-3.5 text-center relative shadow-sm">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-blush font-display text-sm font-bold text-primary mb-2">
                3
              </span>
              <h5 className="font-display text-xs font-bold text-foreground">الخطوة الثالثة: الترطيب والقفل</h5>
              <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                اختمي روتينك بكريم الترطيب الغني لحبس النضارة طوال اليوم.
              </p>
            </div>
          </div>
        )}

        {type === "features" && (
          <div className="grid gap-2.5 grid-cols-2 md:grid-cols-4">
            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blush text-primary">
                <Truck className="size-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">شحن سريع ومجاني</div>
                <div className="text-[10px] text-muted-foreground">فوق ١٩٩ ر.س لجميع المدن</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blush text-primary">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">منتجات أصلية ١٠٠٪</div>
                <div className="text-[10px] text-muted-foreground">مضمونة ومصرحة رسمياً</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blush text-primary">
                <CreditCard className="size-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">دفع ميسر بالتقسيط</div>
                <div className="text-[10px] text-muted-foreground">عبر تمارا وتابي بدون فوائد</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blush text-primary">
                <PhoneCall className="size-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">خدمة عميلات ٢٤ ساعة</div>
                <div className="text-[10px] text-muted-foreground">دعم مباشر عبر واتساب</div>
              </div>
            </div>
          </div>
        )}

        {type === "guarantee" && (
          <div className="rounded-xl surface-plum p-4 text-plum-foreground text-center relative overflow-hidden shadow-md">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold mb-2">
              🏆 الضمان الذهبي لمتجر أنوثة
            </div>
            <h4 className="font-display text-base md:text-lg font-bold">جمالك ورضاك التام هو وعدنا الأول</h4>
            <p className="mt-1 max-w-md mx-auto text-xs opacity-85 leading-relaxed">
              إذا ما ناسبك المنتج أو ما شفتي النتيجة اللي ترضيك خلال ١٤ يوم، نرجّع لك كامل المبلغ فوراً وبدون أي تعقيد.
            </p>
          </div>
        )}

        {type === "footer" && (
          <div className="rounded-xl border border-border bg-[#1a0a12] p-4 text-white space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-primary font-bold text-xs">أن</div>
                <span className="font-display text-sm font-bold">أنوثة — Anotha Theme</span>
              </div>
              <div className="text-[11px] text-white/70">
                الرقم الضريبي: <span className="font-mono text-rose">٣٠٠٠٠٠٠٠٠٠٠٠٠٠٣</span> · السجل التجاري: <span className="font-mono text-rose">١٠١٠٠٠٠٠٠٠</span>
              </div>
            </div>

            {/* Payment Gateways */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-white/80">
              <span>وسائل الدفع الآمنة المعتمدة بالمملكة:</span>
              <div className="flex flex-wrap gap-1.5 font-bold text-[10px]">
                <span className="rounded bg-white/10 px-2 py-1">مدى MADA</span>
                <span className="rounded bg-emerald-600/80 px-2 py-1">تمارا Tamara</span>
                <span className="rounded bg-emerald-500/80 px-2 py-1">تابي Tabby</span>
                <span className="rounded bg-white/20 px-2 py-1">Apple Pay </span>
                <span className="rounded bg-purple-600/80 px-2 py-1">STC Pay</span>
                <span className="rounded bg-blue-600/80 px-2 py-1">VISA / Master</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
