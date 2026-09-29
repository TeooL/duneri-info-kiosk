"use client"

import React, {useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";
import SpellEditForm from "./SpellEditForm";

type Spell = {
  id: string; name: string; school: string; tier: number; icon: string | null;
  castTime: string; castRange: string; targeting: string; components: string;
  manaCost: number; duration: string; relatedEffectDescription: string | null;
  summonStatBlock: string | null; description: string;
};

export default function SpellSearch({initialSpells, isDM} : {initialSpells : Spell[]; isDM : boolean}) {
    const [spells, setSpells] = useState(initialSpells);
    const [q, setQ] = useState("");
    const [school, setSchool] = useState("")
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const schools = Array.from(new Set(initialSpells.map(spell => spell.school)));

    async function fetchSpells(newQ: string, newSchool: string) {
        const res = await fetch(`/api/spells?q=${newQ}&category=${newSchool}`);
        const results = await res.json();
        setSpells(results);
    }

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const newQ = e.target.value;
        setQ(newQ);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => fetchSpells(newQ, school), 300)
    }

    function handleSchoolChange(e : React.ChangeEvent<HTMLSelectElement>) {
        const newSchool = e.target.value;
        setSchool(newSchool);
        fetchSpells(q, newSchool);
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
            <select value={school} onChange={handleSchoolChange}>
                <option value="">All</option>
                {schools.map((school) => (
                    <option key={school} value={school}>
                        {school}
                    </option>
                ))}
            </select>
            <ul>
                {spells.map((spell) => (
                    <ExpandableEntry key={spell.id} summary={`${spell.name} | ${spell.school} tier ${spell.tier}`}>
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