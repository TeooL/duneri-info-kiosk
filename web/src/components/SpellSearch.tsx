"use client"

import React, {useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";
import SpellEditForm from "./SpellEditForm";

type Spell = {id: string, name: string, type: string, tier: number, description: string };

export default function SpellSearch({initialSpells, isDM} : {initialSpells : Spell[]; isDM : boolean}) {
    const [spells, setSpells] = useState(initialSpells);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const q = e.target.value;
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(async () => {
            const res = await fetch(`/api/spells?q=${q}`);
            const results = await res.json();
            setSpells(results);
        }, 300)
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