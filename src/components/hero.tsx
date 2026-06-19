"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile, socials, stats } from "@/lib/data";
import { socialIconMap } from "./social-icons";
import { Avatar } from "./avatar";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="gradient-text font-semibold"
      >
        {profile.roles[index]}
      </motion.span>
    </span>
  );
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-32 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative h-2 w-2 rounded-full bg-emerald-400 pulse-ring" />
            Disponível para novos desafios
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Olá, eu sou
            <br />
            <span className="gradient-text animate-shimmer">
              João Marcelo
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg font-medium text-foreground/90"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted"
          >
            Transformo ideias complexas em produtos escaláveis. Lidero squads
            ágeis e construo APIs, microsserviços e aplicações de alta
            performance com{" "}
            <span className="font-medium text-foreground">GoLang</span>,{" "}
            <span className="font-medium text-foreground">Node.js</span> e{" "}
            <span className="font-medium text-foreground">TypeScript</span>.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-[#060810] transition-transform hover:scale-[1.03]"
            >
              <Sparkles className="h-4 w-4" />
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Entrar em contato
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-card text-muted transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Photo + stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-accent-2/20 to-accent-3/30 blur-2xl" />
          <div className="glass glow-ring relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Avatar className="h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060810]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#060810]/60 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {profile.shortName}
                  </p>
                  <p className="text-xs text-white/70">{profile.title}</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 grid grid-cols-2 gap-3"
          >
            {stats.slice(0, 2).map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-4 py-3 text-center"
              >
                <p className="gradient-text font-display text-2xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}
