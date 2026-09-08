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
    <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit}>
        <input className="border rounded-lg p-2 bg-transparent" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <RichTextEditor content={body} onChange={setBody} />
        <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Save</button>
    </form>
  )
}