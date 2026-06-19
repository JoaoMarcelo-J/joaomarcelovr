import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignment}`}>
        <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          <span className="relative h-1.5 w-1.5 rounded-full bg-accent-2 pulse-ring" />
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p className={`max-w-2xl text-base leading-relaxed text-muted ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
