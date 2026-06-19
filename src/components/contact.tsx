"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { Reveal } from "./ui/reveal";
import { socialIconMap } from "./social-icons";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Telefone", value: profile.phone, href: `tel:+5583987486259` },
];

export function Contact() {
  return (
    <section id="contato" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass glow-ring relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-60 w-60 rounded-full bg-accent-3/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  <span className="relative h-1.5 w-1.5 rounded-full bg-accent-2 pulse-ring" />
                  Contato
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                  Vamos construir algo{" "}
                  <span className="gradient-text">incrível</span> juntos?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  Quer conversar sobre um projeto, oportunidade ou apenas trocar
                  ideias sobre tecnologia? Me mande uma mensagem — respondo
                  assim que possível.
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-[#060810] transition-transform hover:scale-[1.03]"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Enviar mensagem
                </a>
              </div>

              <div className="flex flex-col gap-3">
                {contactItems.map((item) => {
                  const content = (
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 rounded-2xl border border-border-soft bg-background-alt/50 p-4 transition-colors hover:border-accent/40"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-3/20 text-accent">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-muted">
                          {item.label}
                        </p>
                        <p className="truncate text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}

                <div className="mt-2 flex gap-2.5">
                  {socials.map((social) => {
                    const Icon = socialIconMap[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-background-alt/50 text-muted transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
