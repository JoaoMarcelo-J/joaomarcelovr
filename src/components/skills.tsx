"use client";

import { motion } from "framer-motion";
import { skillGroups, languages } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { StaggerContainer, staggerItem } from "./ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tecnologias & competências"
          description="Stack moderna e ferramentas que utilizo para entregar produtos robustos do front ao back."
        />

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={staggerItem}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-accent/40"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border-soft bg-background-alt/60 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2">
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              variants={staggerItem}
              className="glass flex items-center justify-between rounded-2xl px-6 py-4"
            >
              <span className="font-medium text-foreground">{lang.name}</span>
              <span className="rounded-full bg-gradient-to-r from-accent/20 to-accent-2/20 px-3 py-1 text-xs font-semibold text-accent">
                {lang.level}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
