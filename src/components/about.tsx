"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Users } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal, StaggerContainer, staggerItem } from "./ui/reveal";
import { TechMarquee } from "./tech-marquee";

const pillars = [
  {
    icon: Code2,
    title: "Código limpo & escalável",
    text: "Clean code, design systems e arquiteturas resilientes pensadas para crescer.",
  },
  {
    icon: Users,
    title: "Liderança técnica",
    text: "Conduzo squads ágeis, code reviews e decisões de arquitetura no dia a dia.",
  },
  {
    icon: Rocket,
    title: "Alta performance",
    text: "Refatorações e migrações que entregaram +30% de velocidade em produção.",
  },
  {
    icon: ShieldCheck,
    title: "Cultura DevOps",
    text: "Testes automatizados, CI/CD e versionamento como parte do fluxo de entrega.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Construindo produtos que escalam"
          description="Engenheiro de software fullstack com foco em performance, arquitetura moderna e liderança de times de alto desempenho."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal direction="right" className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <div className="glass glow-ring rounded-2xl p-5">
              <p className="text-sm leading-relaxed text-muted">
                <span className="mr-2 font-semibold text-accent">Hobby</span>
                {profile.hobby}
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="glass group rounded-2xl p-5 transition-colors hover:border-accent/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-3/20 text-accent transition-transform group-hover:scale-110">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        <StaggerContainer className="mt-10 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="gradient-text font-display text-3xl font-bold">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <div className="mt-12">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
