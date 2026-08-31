"use client";

import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function SpellCreateForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [tier, setTier] = useState(1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/spells", {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({ name, type, description, tier }),
    })
    setName("");
    setType("");
    setDescription("");
    setTier(1);
    window.location.reload();
  }
  return (
    <form onSubmit={handleSubmit} >
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
      <input
        type="number"
        value={tier}
        onChange={(e) => setTier(Number(e.target.value))}
        placeholder="Tier"
      />
      <RichTextEditor content={description} onChange={setDescription} />
      <button type="submit">Create Spell</button>
    </form>
  );
}
