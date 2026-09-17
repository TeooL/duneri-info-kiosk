"use client"

import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function WeaponCreateForm() {
    const [name, setName] = useState("");
    const [subname, setSubname] = useState("");
    const [icon, setIcon] = useState("");
    const [damageType, setDamageType] = useState("");
    const [specialSkill, setSpecialSkill] = useState("");
    const [proficiencySkill, setProficiencySkill] = useState("");
    const [rarity, setRarity] = useState("");
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        await fetch("/api/weapons", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ name, subname, icon, damageType, tagIds : [], specialSkill, proficiencySkill, rarity, weight, price, description}),
        })
        setName("");
        setSubname("");
        setIcon("");
        setDamageType("");
        setSpecialSkill("");
        setProficiencySkill("");
        setRarity("");
        setWeight(0);
        setPrice("")
        setDescription("")
        window.location.reload();

    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="border rounded-lg p-2 bg-transparent" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input className="border rounded-lg p-2 bg-transparent" value={subname} onChange={(e) => setSubname(e.target.value)} placeholder="Subname" />
            <input className="border rounded-lg p-2 bg-transparent" value={icon} onChange={(e) => setIcon(e.target.value)} placeholder="Icon" />
            <input className="border rounded-lg p-2 bg-transparent" value={damageType} onChange={(e) => setDamageType(e.target.value)} placeholder="Damage Type" />
            <input className="border rounded-lg p-2 bg-transparent" value={specialSkill} onChange={(e) => setSpecialSkill(e.target.value)} placeholder="Special Skill" />
            <input className="border rounded-lg p-2 bg-transparent" value={proficiencySkill} onChange={(e) => setProficiencySkill(e.target.value)} placeholder="Proficiency Skill" />
            <input className="border rounded-lg p-2 bg-transparent" value={rarity} onChange={(e) => setRarity(e.target.value)} placeholder="Rarity" />
            <input className="border rounded-lg p-2 bg-transparent" value={weight} onChange={(e) => setWeight(Number(e.target.value))} placeholder="Weight" />
            <input className="border rounded-lg p-2 bg-transparent" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <RichTextEditor content={description} onChange={setDescription} />
            <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Create Weapon</button>
        </form>
    )
}