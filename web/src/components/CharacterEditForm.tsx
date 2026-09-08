"use client";

import { useState } from "react";

type Race = { id: string; name: string };
type Character = { id: string; name: string; raceId: string };

export default function CharacterEditForm({ character, races }: { character: Character; races: Race[] }) {
    const [name, setName] = useState(character.name);
    const [raceId, setRaceId] = useState(character.raceId);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/characters/${character.id}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name, raceId }),
    })
    window.location.reload();
  }

  async function handleDelete() {
    await fetch(`/api/characters/${character.id}`, {
      method: "DELETE",
      headers: { "Content-Type" : "application/json"},
    })
    window.location.reload()
  }

  return (
    <div>
      <form className="flex flex-col gap-3 mt-6 border rounded-lg p-4 bg-gray-900" onSubmit={handleSubmit}>
        <input className="border rounded-lg p-2 bg-transparent" value={name} onChange={(e) => setName(e.target.value)} placeholder="Character name" />
        <select className="border rounded-lg p-2 bg-transparent" value={raceId} onChange={(e) => setRaceId(e.target.value)}>
          {races.map((race) => (
            <option key={race.id} value={race.id}>
              {race.name}
            </option>
          ))}
        </select>
        <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" type="submit">Save</button>
      </form>
      <button className="border rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-fit" onClick={handleDelete}>Delete</button>
    </div>
  );
}
