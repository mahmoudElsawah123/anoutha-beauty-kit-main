import { useState } from "react";
import { 
  SectionGuide, 
  SchemaField 
} from "@/lib/guide-data";
import { SectionMockup } from "./SectionMockup";
import { 
  FileCode2, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Tag, 
  Maximize2,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuideSectionCardProps {
  section: SectionGuide;
}

export function GuideSectionCard({ section }: GuideSectionCardProps) {
  const [showAllFields, setShowAllFields] = useState(false);
  const [fieldSearch, setFieldSearch] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filteredFields = section.fields.filter(
    (f) =>
      f.nameAr.toLowerCase().includes(fieldSearch.toLowerCase()) ||
      f.id.toLowerCase().includes(fieldSearch.toLowerCase()) ||
      f.infoAr.toLowerCase().includes(fieldSearch.toLowerCase())
  );

  const displayedFields = showAllFields ? filteredFields : filteredFields.slice(0, 5);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div 
      id={section.id} 
      className="scroll-mt-28 rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-cardsoft transition-all hover:border-primary/40"
    >
      {/* Header Info */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/60 pb-6">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow text-xs font-bold text-primary">
              {section.badge}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              <FileCode2 className="size-3" />
              {section.schemaFile}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {section.titleAr}
          </h3>
          <p className="text-sm font-medium text-muted-foreground">
            {section.taglineAr}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-primary">
            {section.fields.length} إعدادات بالاسكيما
          </span>
        </div>
      </div>

      {/* Visual Live Mockup */}
      <div className="my-6">
        <SectionMockup type={section.mockupType} />
      </div>

      {/* Why Use It & Pro Tip Grid */}
      <div className="grid gap-4 md:grid-cols-2 my-6">
        {/* Why Use It */}
        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-blush/40 to-transparent p-5">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Sparkles className="size-4 text-primary" />
            <span>وش فايدة هالقسم في متجرك؟</span>
          </div>
          <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-foreground/80">
            {section.whyUseItAr}
          </p>
        </div>

        {/* Pro Tip */}
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-cream/40 to-transparent p-5">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <span>💡</span>
            <span>نصيحة ذهبية لمظهر فخم:</span>
          </div>
          <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-foreground/80">
            {section.proTipAr}
          </p>
        </div>
      </div>

      {/* Step by Step Customizer Instructions */}
      <div className="rounded-2xl border border-border bg-muted/20 p-5 my-6">
        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-600" />
          <span>خطوات التخصيص من لوحة زد (خطوة بخطوة):</span>
        </h4>
        <ol className="mt-3 space-y-2 text-xs md:text-sm text-foreground/80">
          {section.stepsAr.map((step, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full surface-brand text-[10px] font-bold text-primary-foreground mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Schema Settings Fields Breakdown Table */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
          <div>
            <h4 className="font-display text-base font-bold text-foreground">
              تفاصيل حقول الاسكيما (Schema Settings Explorer)
            </h4>
            <p className="text-xs text-muted-foreground">
              شرح نوع كل حقل، القيم الافتراضية، ومقاسات الصور الموصى بها
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={fieldSearch}
              onChange={(e) => setFieldSearch(e.target.value)}
              placeholder="ابحث بالحقل أو المفتاح..."
              className="w-full rounded-full border border-border bg-background py-1.5 pe-3 ps-8 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <Search className="absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Fields List Cards */}
        <div className="mt-4 divide-y divide-border/60 rounded-2xl border border-border/80 bg-background overflow-hidden">
          {displayedFields.map((field) => (
            <div key={field.id} className="p-4 transition-colors hover:bg-muted/20">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-sm font-bold text-foreground">
                    {field.nameAr}
                  </span>
                  <button
                    onClick={() => handleCopy(field.id, field.id)}
                    className="inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground hover:text-foreground"
                    title="انسخ مفتاح الحقل"
                  >
                    <span>{field.id}</span>
                    {copiedKey === field.id ? (
                      <Check className="size-3 text-emerald-600" />
                    ) : (
                      <Copy className="size-3 opacity-60" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="rounded-full bg-blush px-2.5 py-0.5 text-[10px] font-bold text-primary">
                    {field.type}
                  </span>
                  {field.required ? (
                    <span className="rounded-full bg-rose/30 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                      إجباري ⚠️
                    </span>
                  ) : (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] text-muted-foreground">
                      اختياري
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-1.5 text-xs text-foreground/80 leading-relaxed">
                {field.infoAr}
              </p>

              {/* Extras: Recommended Size & Default Value */}
              <div className="mt-2.5 flex flex-wrap gap-3 text-[11px]">
                {field.recommendedSize && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 font-semibold text-amber-800 border border-amber-200/60">
                    📐 المقاس الموصى به: {field.recommendedSize}
                  </span>
                )}
                {field.defaultVal !== undefined && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-muted-foreground">
                    القيمة الافتراضية: <strong className="text-foreground">{String(field.defaultVal)}</strong>
                  </span>
                )}
              </div>
            </div>
          ))}

          {filteredFields.length === 0 && (
            <div className="p-8 text-center text-xs text-muted-foreground">
              لا توجد حقول مطابقة لبحثك "{fieldSearch}"
            </div>
          )}
        </div>

        {/* Show More / Show Less Button */}
        {filteredFields.length > 5 && (
          <div className="mt-3 text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAllFields(!showAllFields)}
              className="text-xs font-semibold text-primary hover:bg-blush"
            >
              {showAllFields ? (
                <>
                  <ChevronUp className="size-4 me-1" />
                  إخفاء الحقول الإضافية
                </>
              ) : (
                <>
                  <ChevronDown className="size-4 me-1" />
                  عرض باقي الحقول ({filteredFields.length - 5} حقول إضافية)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
