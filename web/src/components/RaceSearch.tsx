"use client"

import { useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";

type Race = {id : string; name: string; description: string}

export default function RaceSearch({initialRaces} : {initialRaces: Race[]}) {
    const [races, setRaces] = useState(initialRaces);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

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
          <ExpandableEntry key={race.id} summary={race.name}>
            <div dangerouslySetInnerHTML={{__html: race.description}}></div>
          </ExpandableEntry>
        ))}
      </ul>
    </div>
  );
}