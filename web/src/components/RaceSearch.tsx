"use client";

import { useRef, useState } from "react";
import RaceEditForm from "./RaceEditForm";

type Race = { id: string; name: string; description: string };

export default function RaceSearch({
  initialRaces,
  isDM,
}: {
  initialRaces: Race[];
  isDM: boolean;
}) {
  const [races, setRaces] = useState(initialRaces);
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const res = await fetch(`/api/races?q=${q}`);
      const results = await res.json();
      setRaces(results);
    }, 300);
  }
  async function handleDelete(id: string) {
    await fetch(`/api/races/${id}`, {
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
          placeholder="Search races..."
          onChange={handleChange}
        />
        <ul>
          {races.map((race) => (
            <li key={race.id} onClick={() => setSelectedRace(race)}>
              {race.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 border rounded-lg p-4">
        {selectedRace ? (
          <div>
            <div>{selectedRace.name}</div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedRace.description }}
            ></div>
            {isDM && (
              <div>
                <RaceEditForm key={selectedRace.id} race={selectedRace} />
                <button onClick={() => handleDelete(selectedRace.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>Select a race to view details</div>
        )}
      </div>
    </div>
  );
}
