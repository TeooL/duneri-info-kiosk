"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

type Item = { id: string; name: string; type: string; description: string };

export default function ItemEditForm({ item }: { item: Item }) {
  const [name, setName] = useState(item.name);
  const [type, setType] = useState(item.type);
  const [description, setDescription] = useState(item.description)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/items/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ name, type, description}),
    })
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
      <RichTextEditor content={description} onChange={setDescription} />
      <button type="submit">Save</button>
    </form>
  );
}
