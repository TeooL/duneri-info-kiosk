"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function ItemCreateForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type, description }),
    });
    setName("");
    setType("");
    setDescription("");
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
      <RichTextEditor content={description} onChange={setDescription} />
      <button type="submit">Create Item</button>
    </form>
  );
}
