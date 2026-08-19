"use client";

import { useRef, useState } from "react";

type Item = { id: string; name: string };

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
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
