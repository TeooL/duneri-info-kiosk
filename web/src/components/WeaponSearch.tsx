"use client";

import React, { useRef, useState } from "react";
import WeaponEditForm from "./WeaponEditForm";
import Image from "next/image";

type WeaponTag = { id: string; name: string; description: string };
type Weapon = {
  id: string;
  name: string;
  subname: string | null;
  icon: string | null;
  damageType: string;
  tags: WeaponTag[];
  specialSkill: string | null;
  proficiencySkill: string | null;
  rarity: string;
  weight: number;
  price: string;
  description: string;
};

export default function WeaponSearch({
  initialWeapons,
  isDM,
  weaponTags,
}: {
  initialWeapons: Weapon[];
  isDM: boolean;
  weaponTags: WeaponTag[];
}) {
  const [weapons, setWeapons] = useState(initialWeapons);
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
  const [q, setQ] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  async function fetchWeapons(newQ: string) {
    const res = await fetch(`/api/weapons?q=${newQ}`);
    const results = await res.json();
    setWeapons(results);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQ = e.target.value;
    setQ(newQ);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fetchWeapons(newQ), 300);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/weapons/${id}`, {
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
          placeholder="Search weapons..."
          onChange={handleChange}
        />
        <ul>
          {weapons.map((weapon) => (
            <li key={weapon.id} onClick={() => setSelectedWeapon(weapon)}>
              {weapon.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 border rounded-lg p-4">
        {selectedWeapon ? (
          <div>
            <div>{selectedWeapon.name}</div>
            {selectedWeapon.subname && <div>{selectedWeapon.subname}</div>}
            {selectedWeapon.icon && (
              <Image
                src={selectedWeapon.icon}
                alt={selectedWeapon.name}
                width={150}
                height={150}
              />
            )}
            <div>Damage Type: {selectedWeapon.damageType}</div>
            <p>Tags: {selectedWeapon.tags.map((tag) => tag.name).join(", ")}</p>
            {selectedWeapon.specialSkill && (
              <div>Special Skill: {selectedWeapon.specialSkill}</div>
            )}
            <div>Proficiency Skill: {selectedWeapon.proficiencySkill}</div>
            <div>Rarity: {selectedWeapon.rarity}</div>
            <div>Weight: {selectedWeapon.weight}</div>
            <div>Price: {selectedWeapon.price}</div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedWeapon.description }}
            ></div>
            {isDM && (
              <div>
                <WeaponEditForm
                  key={selectedWeapon.id}
                  weapon={selectedWeapon}
                  weaponTags={weaponTags}
                />
                <button onClick={() => handleDelete(selectedWeapon.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>Select a weapon to view details</div>
        )}
      </div>
    </div>
  );
}
