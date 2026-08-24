"use client";

import { useState } from "react";

type GlossaryTermProps = {
  definition: string;
  children: React.ReactNode;
};

export default function GlossaryTerm({ definition, children }: GlossaryTermProps) {
  const [open, setOpen] = useState(false);
  return (
    <span>
      <span
        style={{ textDecoration: "underline dotted", cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        {children}
      </span>
      {open && definition}
    </span>
  );
}
