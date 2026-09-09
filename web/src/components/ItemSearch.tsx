"use client";

import React, { useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";
import ItemEditForm from "./ItemEditForm";


type Item = { id: string; name: string; type: string; description: string };

export default function ItemSearch({ initialItems, isDM }: { initialItems: Item[]; isDM: boolean}) {
  const [items, setItems] = useState(initialItems);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const categories = Array.from(new Set(initialItems.map(item => item.type)));

  async function fetchItems(newQ: string, newCategory: string) {
    const res = await fetch(`/api/items?q=${newQ}&category=${newCategory}`);
    const results = await res.json();
    setItems(results);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQ = e.target.value;
    setQ(newQ);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fetchItems(newQ, category), 300);
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const category = e.target.value
    setCategory(category)
    fetchItems(q, category)
  }

  async function handleDelete(id: string) {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
      headers: { "Content-Type" : "application/json"},
    })
    window.location.reload()
  }

  return (
    <div>
      <input type="text" placeholder="Search races..." onChange={handleChange} />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {items.map((item) => (
          <ExpandableEntry key={item.id} summary={item.name}>
            <div dangerouslySetInnerHTML={{__html: item.description}}></div>
            {isDM && 
            <><ItemEditForm item={item} />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>}
          </ExpandableEntry>
        ))}
      </ul>
    </div>
  );
}
