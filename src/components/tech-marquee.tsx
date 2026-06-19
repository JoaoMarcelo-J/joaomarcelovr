import { techStrip } from "@/lib/data";

export function TechMarquee() {
  const items = [...techStrip, ...techStrip];
  return (
    <div className="marquee-mask relative w-full overflow-hidden py-2">
      <div className="animate-marquee flex w-max items-center gap-4">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border-soft bg-card px-5 py-2 text-sm font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
