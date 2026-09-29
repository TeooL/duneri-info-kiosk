"use client";

import React, { useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function SpellCreateForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [tier, setTier] = useState(1);
  const [castTime, setCastTime] = useState("");
  const [castRange, setCastRange] = useState("");
  const [targeting, setTargeting] = useState("");
  const [components, setComponents] = useState("");
  const [manaCost, setManaCost] = useState(0);
  const [duration, setDuration] = useState("");
  const [relatedEffectDescription, setRelatedEffectDescription] = useState<string | null>(null);
  const [summonStatBlock, setSummonStatBlock] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const file = inputFileRef.current?.files?.[0];

    let iconURL: string | null = null;
    if (file) {
      const res = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      })
      const uploadResult = await res.json()
      iconURL = uploadResult.url
    }
    
    await fetch("/api/spells", {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({ name, school, icon : iconURL, castTime, castRange, targeting, components, manaCost, duration, description, tier, relatedEffectDescription : relatedEffectDescription || null, summonStatBlock: summonStatBlock || null}),
    })
    setName("");
    setSchool("");
    setDescription("");
    setTier(1);
    setCastTime("");
    setCastRange("");
    setTargeting("");
    setComponents("");
    setManaCost(0);
    setDuration("");
    setRelatedEffectDescription("");
    setSummonStatBlock("");
    window.location.reload();
  }
  return (
    <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit} >
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
      <input className="border rounded-lg p-2 bg-transparent" value={castTime} onChange={(e) => setCastTime(e.target.value)} placeholder="CastTime" />
      <input className="border rounded-lg p-2 bg-transparent" value={castRange} onChange={(e) => setCastRange(e.target.value)} placeholder="CastRange" />
      <input className="border rounded-lg p-2 bg-transparent" value={targeting} onChange={(e) => setTargeting(e.target.value)} placeholder="Targeting" />
      <input className="border rounded-lg p-2 bg-transparent" value={components} onChange={(e) => setComponents(e.target.value)} placeholder="Components" />
      <input className="border rounded-lg p-2 bg-transparent" value={manaCost} onChange={(e) => setManaCost(Number(e.target.value))} placeholder="ManaCost" />
      <input className="border rounded-lg p-2 bg-transparent" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
      <textarea className="border rounded-lg p-2 bg-transparent" value={relatedEffectDescription ?? ""} onChange={(e) => setRelatedEffectDescription(e.target.value)} placeholder="Related Effect Description"></textarea>
      <textarea className="border rounded-lg p-2 bg-transparent" value={summonStatBlock ?? ""} onChange={(e) => setSummonStatBlock(e.target.value)} placeholder="Summon Stat Block"></textarea>
      <RichTextEditor content={description} onChange={setDescription} />
      <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Create Spell</button>
    </form>
  );
}
