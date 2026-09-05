"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

type Lore = {id : string; title: string; body: string};

export default function LoreEditForm({ lore } : { lore: Lore }) {
    const [title, setTitle] = useState(lore.title);
    const [body, setBody] = useState(lore.body);

    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/lore/${lore.id}`, {
      method: "PUT",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ title, body}),
    })
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <RichTextEditor content={body} onChange={setBody} />
        <button type="submit">Save</button>
    </form>
  )
}