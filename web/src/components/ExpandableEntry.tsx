"use client";

import { useState } from "react";

type ExpandableEntryProps = {
  summary: React.ReactNode;
  children: React.ReactNode;
};

export default function ExpandableEntry({ summary, children }: ExpandableEntryProps) {
  const [open, setOpen] = useState(false)
  return (
    <li className="cursor-pointer border rounded-lg p-4 mb-3 hover:bg-gray-800 transition-colors" onClick={() => setOpen(!open)}>
      {summary}
      <div onClick={(e) => e.stopPropagation()}>{open && children}</div>
    </li>
  );
}
