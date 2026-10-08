"use client";

import React, { useRef, useState } from "react";
import ItemEditForm from "./ItemEditForm";

type Item = { id: string; name: string; type: string; description: string };

export default function ItemSearch({
  initialItems,
  isDM,
}: {
  initialItems: Item[];
  isDM: boolean;
}) {
  const [items, setItems] = useState(initialItems);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const categories = Array.from(new Set(initialItems.map((item) => item.type)));

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
    const category = e.target.value;
    setCategory(category);
    fetchItems(q, category);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    window.location.reload();
  }

  return (
    <div className="flex gap-6">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search items..."
          onChange={handleChange}
        />
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
            <li key={item.id} onClick={() => setSelectedItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 border rounded-lg p-4">
        {selectedItem ? (
          <div>
            <div>{selectedItem.name}</div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedItem.description }}
            ></div>
            {isDM && (
              <div>
                <ItemEditForm key={selectedItem.id} item={selectedItem} />
                <button onClick={() => handleDelete(selectedItem.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>Select an item to view details</div>
        )}
      </div>
    </div>
  );
}
