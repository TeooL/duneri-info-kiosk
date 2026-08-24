"use client";

import { useState } from "react";

type Race = { id: string; name: string };

export default function CharacterCreateForm({ races }: { races: Race[] }) {
  const [name, setName] = useState("");
  const [raceId, setRaceId] = useState(races[0]?.id ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, raceId }),
    });
    setName("");
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Character name"
      />
      <select value={raceId} onChange={(e) => setRaceId(e.target.value)}>
        {races.map((race) => (
          <option key={race.id} value={race.id}>
            {race.name}
          </option>
        ))}
      </select>
      <button type="submit">Create Character</button>
    </form>
  );
}
