"use client";

import { ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border-soft px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-3 text-[13px] font-bold text-[#060810]">
            {profile.initials}
          </span>
          <div>
            <p className="font-display text-sm font-bold text-foreground">
              {profile.shortName}
            </p>
            <p className="text-xs text-muted">{profile.title}</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          aria-label="Voltar ao topo"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-card text-muted transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
