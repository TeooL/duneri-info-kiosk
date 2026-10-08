"use client";

import React, { useRef, useState } from "react";
import SpellEditForm from "./SpellEditForm";
import Image from "next/image";

type Spell = {
  id: string;
  name: string;
  school: string;
  tier: number;
  icon: string | null;
  castTime: string;
  castRange: string;
  targeting: string;
  components: string;
  manaCost: number;
  duration: string;
  relatedEffectDescription: string | null;
  summonStatBlock: string | null;
  description: string;
};

export default function SpellSearch({
  initialSpells,
  isDM,
}: {
  initialSpells: Spell[];
  isDM: boolean;
}) {
  const [spells, setSpells] = useState(initialSpells);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [q, setQ] = useState("");
  const [school, setSchool] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const schools = Array.from(
    new Set(initialSpells.map((spell) => spell.school)),
  );

  async function fetchSpells(newQ: string, newSchool: string) {
    const res = await fetch(`/api/spells?q=${newQ}&category=${newSchool}`);
    const results = await res.json();
    setSpells(results);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQ = e.target.value;
    setQ(newQ);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fetchSpells(newQ, school), 300);
  }

  function handleSchoolChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newSchool = e.target.value;
    setSchool(newSchool);
    fetchSpells(q, newSchool);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/spells/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    window.location.reload();
  }

  return (
    <div className="flex gap-6">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search spells..."
          onChange={handleChange}
        />
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
            <li key={spell.id} onClick={() => setSelectedSpell(spell)}>
              {spell.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 border rounded-lg p-4">
        {selectedSpell ? (
          <div>
            <div>{selectedSpell.name}</div>
            {selectedSpell.icon && (
              <Image src={selectedSpell.icon} alt={selectedSpell.name} width={150} height={150} />
            )}
            <div>School: {selectedSpell.school}</div>
            <div>Tier: {selectedSpell.tier}</div>
            <div>Cast Time: {selectedSpell.castTime}</div>
            <div>Cast Range: {selectedSpell.castRange}</div>
            <div>Targeting: {selectedSpell.targeting}</div>
            <div>Components: {selectedSpell.components}</div>
            <div>Mana Cost: {selectedSpell.manaCost}</div>
            <div>Duration: {selectedSpell.duration}</div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedSpell.description }}
            ></div>
            {selectedSpell.relatedEffectDescription && (
              <div>Related Effect: {selectedSpell.relatedEffectDescription}</div>
            )}
            {selectedSpell.summonStatBlock && (
              <div>Summon Stat Block: {selectedSpell.summonStatBlock}</div>
            )}
            {isDM && (
              <div>
                <SpellEditForm key={selectedSpell.id} spell={selectedSpell} />
                <button onClick={() => handleDelete(selectedSpell.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>Select a spell to view details</div>
        )}
      </div>
    </div>
  );
}
