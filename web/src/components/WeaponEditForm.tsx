"use client";

import { useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import Image from "next/image";

type WeaponTag = { id: string; name: string; description: string };
type Weapon = {
    id: string; name: string; subname: string | null; icon: string | null; damageType: string;
    tags: WeaponTag[]; specialSkill: string | null; proficiencySkill: string | null;
    rarity: string; weight: number; price: string; description: string;
};

export default function WeaponEditForm({ weapon, weaponTags }: { weapon: Weapon; weaponTags: WeaponTag[] }) {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState(weapon.name);
    const [subname, setSubname] = useState(weapon.subname);
    const [icon, setIcon] = useState<string | null>(weapon.icon);
    const [damageType, setDamageType] = useState(weapon.damageType);
    const [specialSkill, setSpecialSkill] = useState(weapon.specialSkill);
    const [proficiencySkill, setProficiencySkill] = useState(weapon.proficiencySkill);
    const [rarity, setRarity] = useState(weapon.rarity);
    const [weight, setWeight] = useState(weapon.weight);
    const [price, setPrice] = useState(weapon.price);
    const [description, setDescription] = useState(weapon.description)
    const [selectedTagIds, setSelectedTagIds] = useState<string[]>(weapon.tags.map((tag) => (tag.id)));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        let iconURL = icon;
        const file = inputFileRef.current?.files?.[0];
        if (file) {
            const res = await fetch(`/api/upload?filename=${file.name}`, {
                method: "POST",
                body: file,
            });
            iconURL = (await res.json()).url;
        }
        
        await fetch(`/api/weapons/${weapon.id}`, {
            method : "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ name, subname, icon : iconURL, damageType, tagIds : selectedTagIds, specialSkill, proficiencySkill, rarity, weight, price, description}),
        })
        window.location.reload();
    }

    function handleTagToggle(tagId: string) {
        if (selectedTagIds.includes(tagId)) {
            setSelectedTagIds(selectedTagIds.filter((id) => id !== tagId));
        } else {
            setSelectedTagIds([...selectedTagIds, tagId]);
        }
    }

    return (
        <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit}>
            <input className="border rounded-lg p-2 bg-transparent" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input className="border rounded-lg p-2 bg-transparent" value={subname ?? ""} onChange={(e) => setSubname(e.target.value)} placeholder="Subname" />
            <input className="border rounded-lg p-2 bg-transparent" type="file" ref={inputFileRef} accept="image/*" />
            {icon && <Image src={icon} alt="Current weapon icon" width={200} height={200} />}
            <input className="border rounded-lg p-2 bg-transparent" value={damageType} onChange={(e) => setDamageType(e.target.value)} placeholder="Damage Type" />
            {weaponTags.map((tag) => (
                <label key={tag.id}>
                    <input type="checkbox" checked={selectedTagIds.includes(tag.id)} onChange={() => handleTagToggle(tag.id)} />
                    {tag.name}
                </label>
            ))}
            <input className="border rounded-lg p-2 bg-transparent" value={specialSkill ?? ""} onChange={(e) => setSpecialSkill(e.target.value)} placeholder="Special Skill" />
            <input className="border rounded-lg p-2 bg-transparent" value={proficiencySkill ?? ""} onChange={(e) => setProficiencySkill(e.target.value)} placeholder="Proficiency Skill" />
            <input className="border rounded-lg p-2 bg-transparent" value={rarity} onChange={(e) => setRarity(e.target.value)} placeholder="Rarity" />
            <input className="border rounded-lg p-2 bg-transparent" value={weight} onChange={(e) => setWeight(Number(e.target.value))} placeholder="Weight" />
            <input className="border rounded-lg p-2 bg-transparent" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <RichTextEditor content={description} onChange={setDescription} />
            <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Save</button>
        </form>
    );
}
