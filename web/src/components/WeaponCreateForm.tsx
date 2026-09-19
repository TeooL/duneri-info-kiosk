"use client"

import React, { useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import Image from "next/image";

type WeaponTag = {id: string; name: string, description: string}

export default function WeaponCreateForm({ weaponTags } : {weaponTags : WeaponTag[]}) {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const [subname, setSubname] = useState("");
    const [icon, setIcon] = useState<string | null>(null);
    const [damageType, setDamageType] = useState("");
    const [specialSkill, setSpecialSkill] = useState("");
    const [proficiencySkill, setProficiencySkill] = useState("");
    const [rarity, setRarity] = useState("");
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

    function handleTagToggle(tagId: string) {
        if (selectedTagIds.includes(tagId)) {
            setSelectedTagIds(selectedTagIds.filter((id) => id !== tagId));
        } else {
            setSelectedTagIds([...selectedTagIds, tagId]);
        }
    }

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();

        const file = inputFileRef.current?.files?.[0];
        if (!file) return;
        const res = await fetch(`/api/upload?filename=${file.name}`, {
            method: "POST",
            body: file,
        })
        const uploadResult = await res.json();
        const iconURL = uploadResult.url
        setIcon(iconURL)
        await fetch("/api/weapons", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ name, subname, icon : iconURL, damageType, tagIds : selectedTagIds, specialSkill, proficiencySkill, rarity, weight, price, description}),
        })
        setName("");
        setSubname("");
        setDamageType("");
        setSelectedTagIds([]);
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
            <input className="border rounded-lg p-2 bg-transparent" type="file" ref={inputFileRef} accept="image/*" required />
            {icon && <Image src={icon} alt="Uploaded image from DM" width={500} height={500} />}
            <input className="border rounded-lg p-2 bg-transparent" value={damageType} onChange={(e) => setDamageType(e.target.value)} placeholder="Damage Type" />
            {weaponTags.map((tag) => (
                <label key={tag.id}>
                    <input type="checkbox" checked={selectedTagIds.includes(tag.id)} onChange={() => handleTagToggle(tag.id)}/>
                    {tag.name}
                </label>
            ))}
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