import { useRef, useState } from "react";
import { MoveHorizontal, ShoppingBag, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, ImageNote } from "./SectionHeading";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import lookbookImg from "@/assets/lookbook.jpg";

const PINS = [
  { x: 34, y: 30, ar: "أحمر شفاه مخملي", en: "Velvet lipstick", price: "١٢٩" },
  { x: 62, y: 55, ar: "بلاشر فلورال", en: "Floral blush", price: "٩٩" },
  { x: 26, y: 72, ar: "عطر أنوثة", en: "Anotha perfume", price: "٢٤٩" },
];

function BeforeAfter() {
  const { t } = useI18n();
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(95, Math.max(5, raw)));
  };

  return (
    <div>
      <div
        ref={ref}
        dir="ltr"
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[1.75rem] border border-border shadow-cardsoft"
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onMouseDown={(e) => move(e.clientX)}
        onTouchMove={(e) => e.touches[0] && move(e.touches[0].clientX)}
      >
        <img
          src={afterImg}
          alt={t({ ar: "بعد المكياج", en: "After makeup" })}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={beforeImg}
            alt={t({ ar: "قبل المكياج", en: "Before makeup" })}
            loading="lazy"
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
            style={{ width: `${(100 / pos) * 100}%` }}
          />
        </div>


        <div
          className="absolute inset-y-0 w-0.5 bg-primary-foreground/90"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full surface-brand p-2 shadow-elegant">
            <MoveHorizontal className="size-4" />
          </span>
        </div>
        <span className="absolute bottom-3 left-3 rounded-full bg-plum/80 px-3 py-1 text-xs text-plum-foreground">
          {t({ ar: "قبل", en: "Before" })}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-plum/80 px-3 py-1 text-xs text-plum-foreground">
          {t({ ar: "بعد", en: "After" })}
        </span>
      </div>
      <ImageNote />
    </div>
  );
}

function LookbookPins() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(1);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-cardsoft">
        <img
          src={lookbookImg}
          alt={t({ ar: "لوك بوك قابل للشراء", en: "Shoppable lookbook" })}
          loading="lazy"
          className="size-full object-cover"
        />
        {PINS.map((pin, i) => (
          <button
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            aria-label={t({ ar: pin.ar, en: pin.en })}
          >
            <span className="flex size-8 items-center justify-center rounded-full surface-brand shadow-elegant ring-4 ring-primary-foreground/50">
              <ShoppingBag className="size-4" />
            </span>
            {active === i && (
              <span className="absolute left-1/2 top-10 w-40 -translate-x-1/2 rounded-2xl bg-card p-3 text-start shadow-cardsoft">
                <span className="block text-xs font-semibold">{t({ ar: pin.ar, en: pin.en })}</span>
                <span className="mt-1 block text-xs text-primary">
                  {pin.price} {t({ ar: "ر.س", en: "SAR" })}
                </span>
                <span className="mt-1 flex text-gold">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="size-3 fill-current" />
                  ))}
                </span>
              </span>
            )}
          </button>
        ))}
      </div>
      <ImageNote />
    </div>
  );
}

export function InteractiveDemos() {
  const { t } = useI18n();
  return (
    <section className="section-pad surface-soft">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={{ ar: "جربيها بنفسك", en: "Try it yourself" }}
          title={{ ar: "أقسام تفاعلية تخلي العميلة تشتري", en: "Interactive sections that convert" }}
          subtitle={{
            ar: "سكشن «قبل وبعد» وسكشن «اللوك بوك» شغالين تحت — اسحبي الفاصل واضغطي على النقاط.",
            en: "The Before/After and Lookbook sections below are live — drag the handle and tap the pins.",
          }}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl">{t({ ar: "قبل وبعد (Before / After)", en: "Before / After" })}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "فاصل قابل للسحب، تحددين موضعه الابتدائي من ٥٪ إلى ٩٥٪، ونسب أبعاد مربعة أو كلاسيكية أو عريضة، مع تسميات مخصصة — مثالي لتحولات المكياج.",
                en: "Draggable comparison slider with an initial position from 5% to 95%, square/classic/widescreen ratios and custom labels — perfect for makeup transformations.",
              })}
            </p>
            <div className="mt-5">
              <BeforeAfter />
            </div>
          </div>
          <div>
            <h3 className="text-xl">{t({ ar: "لوك بوك بنقاط شراء", en: "Shoppable lookbook" })}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "حددي المنتج على الصورة بنقطة، وبيانات المنتج تجي تلقائياً: الاسم والسعر والتقييم وشعار الأكثر مبيعاً.",
                en: "Place a pin on the image and product data loads automatically: name, price, rating and best-seller badge.",
              })}
            </p>
            <div className="mt-5">
              <LookbookPins />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
