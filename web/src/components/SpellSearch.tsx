"use client"

import React, {useRef, useState } from "react";

type Spell = {id: string, name: string, type: string, tier: number, description: string };

export default function SpellSearch({initialSpells} : {initialSpells : Spell[]}) {
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

    return (
        <div>
            <input type="text" placeholder="Search spells..." onChange={handleChange} />
            <ul>
                {spells.map((spell) => (
                    <li key={spell.id}>{spell.name} | {spell.type} {spell.tier} {<div dangerouslySetInnerHTML={{__html: spell.description}} />} </li>
                ))}
            </ul>
        </div>
    )
}