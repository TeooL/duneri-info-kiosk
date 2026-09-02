"use client";

import { useState } from "react";

type ExpandableEntryProps = {
  summary: React.ReactNode;
  children: React.ReactNode;
};

export default function ExpandableEntry({ summary, children }: ExpandableEntryProps) {
  const [open, setOpen] = useState(false)
  return (
    <li style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
      {summary}
      {open && children}
    </li>
  );
}
