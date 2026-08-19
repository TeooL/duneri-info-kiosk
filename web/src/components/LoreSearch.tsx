"use client"

import { useRef, useState } from "react";

type Lore = {id: string, title: string, body: string};

export default function LoreSearch({initialLore} : {initialLore : Lore[]}) {
    const [lore, setLore] = useState(initialLore);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const res = await fetch(`/api/lore?q=${q}`);
      const results = await res.json();
      setLore(results);
    }, 300);
  }

  return (
    <div>
      <input type="text" placeholder="Search races..." onChange={handleChange} />
      <ul>
        {lore.map((entry) => (
          <li key={entry.id}>{entry.title} : {<div dangerouslySetInnerHTML={{__html: entry.body}} />} </li>
        ))}
      </ul>
    </div>
  );
}