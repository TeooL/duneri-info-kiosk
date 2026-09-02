"use client"

import React, {useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";

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
                    <ExpandableEntry key={spell.id} summary={`${spell.name} | ${spell.type} tier ${spell.tier}`}>
                        <div dangerouslySetInnerHTML={{__html:spell.description}}></div>
                    </ExpandableEntry>
                ))}
            </ul>
        </div>
    )
}