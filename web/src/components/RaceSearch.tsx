"use client"

import { useRef, useState } from "react";

type Race = {id : string, name: string}

export default function RaceSearch({initialRaces} : {initialRaces: Race[]}) {
    const [races, setRaces] = useState(initialRaces);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const res = await fetch(`/api/races?q=${q}`);
      const results = await res.json();
      setRaces(results);
    }, 300);
  }

  return (
    <div>
      <input type="text" placeholder="Search items..." onChange={handleChange} />
      <ul>
        {races.map((race) => (
          <li key={race.id}>{race.name}</li>
        ))}
      </ul>
    </div>
  );
}