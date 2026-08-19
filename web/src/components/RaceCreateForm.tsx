"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function RaceCreateForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await fetch("/api/races", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
        });
        setName("");
        setDescription("");
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <RichTextEditor content={description} onChange={setDescription} />
            <button type="submit">Create Race</button>
        </form>
    );
}