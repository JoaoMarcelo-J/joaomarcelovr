"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { StaggerContainer, staggerItem } from "./ui/reveal";

export function Projects() {
  return (
    <section id="projetos" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos em destaque"
          description="Produtos e plataformas que construí e liderei — de gateways de pagamento a aplicações Web3."
        />

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-accent/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-accent/20 to-accent-3/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-gradient-to-r from-accent/20 to-accent-2/20 px-3 py-1 text-[11px] font-semibold text-accent">
                  {project.highlight}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent/80">
                {project.company}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border-soft px-2 py-1 text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
