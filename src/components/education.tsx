"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { StaggerContainer, staggerItem } from "./ui/reveal";

export function Education() {
  const degrees = education.filter((e) => e.type === "degree");
  const courses = education.filter((e) => e.type === "course");

  return (
    <section id="formacao" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Formação"
          title="Educação & certificações"
          description="Base acadêmica sólida combinada com aprendizado contínuo nas tecnologias mais modernas."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                Formação acadêmica
              </h3>
            </div>
            <StaggerContainer className="space-y-4">
              {degrees.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="glass rounded-2xl p-5 transition-colors hover:border-accent/40"
                >
                  <p className="font-display font-semibold text-foreground">
                    {item.title}
                  </p>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-accent">{item.institution}</span>
                    <span className="text-muted">{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-3/15 text-accent-3">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                Cursos & certificações
              </h3>
            </div>
            <StaggerContainer className="space-y-4">
              {courses.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="glass flex items-center justify-between rounded-2xl p-5 transition-colors hover:border-accent-3/40"
                >
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <span className="text-sm text-accent-3">
                      {item.institution}
                    </span>
                  </div>
                  <span className="text-sm text-muted">{item.date}</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
