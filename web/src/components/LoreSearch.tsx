"use client";

import { useRef, useState } from "react";
import LoreEditForm from "./LoreEditForm";

type Lore = { id: string; title: string; body: string };

export default function LoreSearch({
  initialLore,
  isDM,
}: {
  initialLore: Lore[];
  isDM: boolean;
}) {
  const [lore, setLore] = useState(initialLore);
  const [selectedLore, setSelectedLore] = useState<Lore | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

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
      headers: { "Content-Type": "application/json" },
    });
    window.location.reload();
  }

  return (
    <div className="flex gap-6">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search lore entries..."
          onChange={handleChange}
        />
        <ul>
        {lore.map((entry) => (
          <li key={entry.id} onClick={() => setSelectedLore(entry)}>
            {entry.title}
          </li>
        ))}
        </ul>
      </div>
      <div className="w-1/2 border rounded-lg p-4">
        {selectedLore ? (
          <div>
            <div>{selectedLore.title}</div>
            <div dangerouslySetInnerHTML={{ __html: selectedLore.body }}></div>
            {isDM && (
              <div>
                <LoreEditForm key={selectedLore.id} lore={selectedLore} />
                <button onClick={() => handleDelete(selectedLore.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>Select a lore entry to view details</div>
        )}
      </div>
    </div>
  );
}
