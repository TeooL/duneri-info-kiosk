"use client"

import React, {useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function LoreCreateForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await fetch("/api/lore", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ title, body }),
        });
        setTitle("");
        setBody("");
        window.location.reload();
    }

    return (
        <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit}>
            <input className="border rounded-lg p-2 bg-transparent" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <RichTextEditor content={body} onChange={setBody} />
            <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Create Lore Entry</button>
        </form>
    )
}