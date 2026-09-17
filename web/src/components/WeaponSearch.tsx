"use client"

import React, { useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";

type WeaponTag = {id: string, name : string, description: string}
type Weapon = {id: string, name : string, subname : string | null, icon : string | null, damageType : string, tags: WeaponTag[], specialSkill : string | null, proficiencySkill : string | null, rarity: string, weight: number, price: string, description: string}

export default function WeaponSearch({initialWeapons, isDM} : {initialWeapons : Weapon[]; isDM: boolean}) {
    const [weapons, setWeapons] = useState(initialWeapons);
    const [q, setQ] = useState("");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    async function fetchWeapons(newQ: string) {
        const res = await fetch(`/api/weapons?q=${newQ}`);
        const results = await res.json();
        setWeapons(results);
    }

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const newQ = e.target.value;
        setQ(newQ);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => fetchWeapons(newQ), 300)
    }

    async function handleDelete(id: string) {
        await fetch(`/api/weapons/${id}`, {
            method: "DELETE",
            headers: { "Content-Type" : "application/json"},
        })
        window.location.reload();
    }

    return(
        <div>
            <input type="text" placeholder="Search weapons..." onChange={handleChange} />
            <ul>
                {weapons.map((weapon) => (
                    <ExpandableEntry key={weapon.id} summary={`${weapon.name} `}>
                        <div dangerouslySetInnerHTML={{__html:weapon.description}}></div>
                        <p>Tags: {weapon.tags.map((tag) => tag.name).join(", ")}</p>
                        {isDM &&
                        <>
                            <button onClick={() => handleDelete(weapon.id)}>Delete</button>
                        </>}
                    </ExpandableEntry>
                ))}
            </ul>
        </div>
    )
}   