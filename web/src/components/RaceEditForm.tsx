"use client";

import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

type Race = { id: string; name: string; description: string };

export default function RaceEditForm({ race } : {race: Race}) {
    const [name, setName] = useState(race.name);
    const [description, setDescription] = useState(race.description);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await fetch(`/api/races/${race.id}`, {
            method: "PUT",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({ name, description}),
        })
        window.location.reload();
    }

    return (
        <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit}>
            <input className="border rounded-lg p-2 bg-transparent" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <RichTextEditor content={description} onChange={setDescription} />
            <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Save</button>
        </form>
    )
}