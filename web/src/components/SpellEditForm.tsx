"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

type Spell = { id: string, name: string, type: string, tier: number, description: string };

export default function SpellEditForm({ spell }: { spell: Spell }) {
  const [name, setName] = useState(spell.name);
  const [type, setType] = useState(spell.type);
  const [tier, setTier] = useState(spell.tier)
  const [description, setDescription] = useState(spell.description)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/spells/${spell.id}`, {
      method: "PUT",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ name, type, tier, description}),
    })
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
      <input
        type="number"
        value={tier}
        onChange={(e) => setTier(Number(e.target.value))}
        placeholder="Tier"
      />
      <RichTextEditor content={description} onChange={setDescription} />
      <button type="submit">Save</button>
    </form>
  );
}