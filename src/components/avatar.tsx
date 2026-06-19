"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export function Avatar({ className = "" }: { className?: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-accent via-accent-2 to-accent-3 ${className}`}
      >
        <span className="font-display text-5xl font-bold text-[#060810] sm:text-6xl">
          {profile.initials}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={profile.photo}
      alt={profile.name}
      onError={() => setErrored(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
