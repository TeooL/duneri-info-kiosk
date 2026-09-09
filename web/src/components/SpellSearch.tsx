"use client"

import React, {useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";
import SpellEditForm from "./SpellEditForm";

type Spell = {id: string, name: string, type: string, tier: number, description: string };

export default function SpellSearch({initialSpells, isDM} : {initialSpells : Spell[]; isDM : boolean}) {
    const [spells, setSpells] = useState(initialSpells);
    const [q, setQ] = useState("");
    const [type, setType] = useState("")
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    
    const types = Array.from(new Set(initialSpells.map(spell => spell.type)));

    async function fetchSpells(newQ: string, newType: string) {
        const res = await fetch(`/api/spells?q=${newQ}&category=${newType}`);
        const results = await res.json();
        setSpells(results);
    }

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const newQ = e.target.value;
        setQ(newQ);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => fetchSpells(newQ, type), 300)
    }

    function handleTypeChange(e : React.ChangeEvent<HTMLSelectElement>) {
        const type = e.target.value;
        setType(type);
        fetchSpells(q, type);
    }

    async function handleDelete(id: string) {
    await fetch(`/api/spells/${id}`, {
      method: "DELETE",
      headers: { "Content-Type" : "application/json"},
    })
    window.location.reload()
    }

    return (
        <div>
            <input type="text" placeholder="Search spells..." onChange={handleChange} />
            <select value={type} onChange={handleTypeChange}>
                <option value="">All</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <ul>
                {spells.map((spell) => (
                    <ExpandableEntry key={spell.id} summary={`${spell.name} | ${spell.type} tier ${spell.tier}`}>
                        <div dangerouslySetInnerHTML={{__html:spell.description}}></div>
                        {isDM &&
                        <>
                            <SpellEditForm spell={spell} />
                            <button onClick={() => handleDelete(spell.id)}>Delete</button>
                        </>}
                    </ExpandableEntry>
                ))}
            </ul>
        </div>
    )
}