import type { ReactNode } from "react";
import { useI18n, type Bi } from "@/lib/i18n";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: Bi;
  title: Bi;
  subtitle?: Bi;
  align?: "center" | "start";
}) {
  const { t } = useI18n();
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{t(eyebrow)}</span>}
      <h2 className="mt-4 text-3xl md:text-4xl">{t(title)}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(subtitle)}</p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full surface-brand ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}

export function ImageNote({ children }: { children?: ReactNode }) {
  const { t } = useI18n();
  return (
    <p className="mt-2 text-center text-[11px] text-muted-foreground">
      {children ??
        t({
          ar: "صورة توضيحية — تنفع تستبدلينها بسكرين شوت من الثيم لاحقاً",
          en: "Illustrative image — replace with a real theme screenshot later",
        })}
    </p>
  );
}
