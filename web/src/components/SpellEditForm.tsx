"use client";

import { useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import Image from "next/image";

type Spell = {
  id: string; name: string; school: string; tier: number; icon: string | null;
  castTime: string; castRange: string; targeting: string; components: string;
  manaCost: number; duration: string; relatedEffectDescription: string | null;
  summonStatBlock: string | null; description: string;
};

export default function SpellEditForm({ spell }: { spell: Spell }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState(spell.name);
  const [school, setSchool] = useState(spell.school);
  const [tier, setTier] = useState(spell.tier);
  const [icon, setIcon] = useState(spell.icon)
  const [castTime, setCastTime] = useState(spell.castTime);
  const [castRange, setCastRange] = useState(spell.castRange);
  const [targeting, setTargeting] = useState(spell.targeting);
  const [components, setComponents] = useState(spell.components);
  const [manaCost, setManaCost] = useState(spell.manaCost);
  const [duration, setDuration] = useState(spell.duration);
  const [relatedEffectDescription, setRelatedEffectDescription] = useState<string | null>(spell.relatedEffectDescription);
  const [summonStatBlock, setSummonStatBlock] = useState<string | null>(spell.summonStatBlock);
  const [description, setDescription] = useState(spell.description);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const file = inputFileRef.current?.files?.[0];

    let iconURL = icon;
    if (file) {
      const res = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      })
      const uploadResult = await res.json()
      iconURL = uploadResult.url
    }
    await fetch(`/api/spells/${spell.id}`, {
      method: "PUT",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ name, school, icon : iconURL, castTime, castRange, targeting, components, manaCost, duration, description, tier, relatedEffectDescription : relatedEffectDescription || null, summonStatBlock: summonStatBlock || null}),
    })
    window.location.reload();
  }

  return (
    <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit}>
      <input className="border rounded-lg p-2 bg-transparent" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input className="border rounded-lg p-2 bg-transparent" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School" />
      <input
        className="border rounded-lg p-2 bg-transparent"
        type="number"
        value={tier}
        onChange={(e) => setTier(Number(e.target.value))}
        placeholder="Tier"
      />
      <input className="border rounded-lg p-2 bg-transparent" type="file" ref={inputFileRef} accept="image/*" />
      {icon && <Image src={icon} alt="Current spell icon" width={200} height={200} />}
      <input className="border rounded-lg p-2 bg-transparent" value={castTime} onChange={(e) => setCastTime(e.target.value)} placeholder="Cast Time" />
      <input className="border rounded-lg p-2 bg-transparent" value={castRange} onChange={(e) => setCastRange(e.target.value)} placeholder="Cast Range" />
      <input className="border rounded-lg p-2 bg-transparent" value={targeting} onChange={(e) => setTargeting(e.target.value)} placeholder="Targeting" />
      <input className="border rounded-lg p-2 bg-transparent" value={components} onChange={(e) => setComponents(e.target.value)} placeholder="Components" />
      <input
        className="border rounded-lg p-2 bg-transparent"
        type="number"
        value={manaCost}
        onChange={(e) => setManaCost(Number(e.target.value))}
        placeholder="Mana Cost"
      />
      <input className="border rounded-lg p-2 bg-transparent" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
      <textarea className="border rounded-lg p-2 bg-transparent" value={relatedEffectDescription ?? ""} onChange={(e) => setRelatedEffectDescription(e.target.value)} placeholder="Related Effect Description"></textarea>
      <textarea className="border rounded-lg p-2 bg-transparent" value={summonStatBlock ?? ""} onChange={(e) => setSummonStatBlock(e.target.value)} placeholder="Summon Stat Block"></textarea>
      <RichTextEditor content={description} onChange={setDescription} />
      <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Save</button>
    </form>
  );
}