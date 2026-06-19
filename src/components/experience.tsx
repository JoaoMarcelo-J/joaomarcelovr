"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Experience() {
  return (
    <section id="experiencia" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência profissional"
          description="Mais de 5 anos liderando e construindo produtos de alta performance em fintechs, Web3 e marketplaces."
        />

        {/* Mobile: timeline à esquerda, cards em coluna */}
        <div className="relative mt-10 md:hidden">
          <div
            aria-hidden
            className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-accent via-accent-3/40 to-transparent"
          />

          <div className="space-y-5">
            {experiences.map((exp) => (
              <Reveal key={exp.company} direction="up">
                <article className="relative pl-11">
                  <span
                    className={`absolute left-0 top-5 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-border-soft bg-background-alt text-accent shadow-sm ${
                      exp.current ? "pulse-ring" : ""
                    }`}
                  >
                    <Briefcase className="h-3.5 w-3.5" />
                  </span>

                  <div className="glass glow-ring rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                          {exp.company}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-accent">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Atual
                          </span>
                        )}
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {exp.description.map((d, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex gap-2.5 rounded-xl border border-accent/20 bg-accent/5 p-3">
                      <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <p className="text-xs leading-relaxed text-foreground/80">
                        {exp.result}
                      </p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-background-alt/60 px-2 py-1 text-[11px] font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Desktop: timeline central alternada */}
        <div className="relative mt-14 hidden md:block">
          <div
            aria-hidden
            className="absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent-3/40 to-transparent"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className={`relative flex items-stretch ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-1/2 top-1.5 z-10 -translate-x-1/2">
                    <span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-background-alt text-accent ${
                        exp.current ? "pulse-ring" : ""
                      }`}
                    >
                      <Briefcase className="h-4 w-4" />
                    </span>
                  </div>

                  <Reveal
                    direction={isLeft ? "right" : "left"}
                    className="w-[calc(50%-2.5rem)]"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass glow-ring h-full rounded-2xl p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {exp.role}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                        {exp.period}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {exp.description.map((d, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex gap-2 rounded-xl border border-accent/20 bg-accent/5 p-3">
                        <TrendingUp className="h-4 w-4 flex-shrink-0 text-accent" />
                        <p className="text-xs leading-relaxed text-foreground/80">
                          {exp.result}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-background-alt/60 px-2 py-1 text-[11px] font-medium text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
