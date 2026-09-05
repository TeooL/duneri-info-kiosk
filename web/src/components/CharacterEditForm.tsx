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
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Character name" />
        <select value={raceId} onChange={(e) => setRaceId(e.target.value)}>
          {races.map((race) => (
            <option key={race.id} value={race.id}>
              {race.name}
            </option>
          ))}
        </select>
        <button type="submit">Save</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
