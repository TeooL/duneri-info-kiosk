"use client";

import { useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";

type Item = { id: string; name: string; type: string; description: string };

export default function ItemSearch({ initialItems }: { initialItems: Item[] }) {
  const [items, setItems] = useState(initialItems);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const res = await fetch(`/api/items?q=${q}`);
      const results = await res.json();
      setItems(results);
    }, 300);
  }

  return (
    <div>
      <input type="text" placeholder="Search races..." onChange={handleChange} />
      <ul>
        {items.map((item) => (
          <ExpandableEntry key={item.id} summary={item.name}>
            <div dangerouslySetInnerHTML={{__html: item.description}}></div>
          </ExpandableEntry>
        ))}
      </ul>
    </div>
  );
}
