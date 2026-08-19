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
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <RichTextEditor content={body} onChange={setBody} />
            <button type="submit">Create Lore Entry</button>
        </form>
    )
}