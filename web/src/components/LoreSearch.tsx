"use client"

import { useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";
import LoreEditForm from "./LoreEditForm";

type Lore = {id: string, title: string, body: string};

export default function LoreSearch({initialLore, isDM} : {initialLore : Lore[]; isDM: boolean}) {
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
    async function handleDelete(id: string) {
      await fetch(`/api/lore/${id}`, {
        method: "DELETE",
        headers: { "Content-Type" : "application/json"},
      })
      window.location.reload()
    }

  return (
    <div>
      <input type="text" placeholder="Search races..." onChange={handleChange} />
      <ul>
        {lore.map((entry) => (
          <ExpandableEntry key={entry.id} summary={entry.title}>
            <div dangerouslySetInnerHTML={{__html: entry.body}}></div>
            {isDM &&
            <>
              <LoreEditForm lore={entry} />
              <button onClick={() => handleDelete(entry.id)}>Delete</button>
            </>
            }
          </ExpandableEntry>
        ))}
      </ul>
    </div>
  );
}