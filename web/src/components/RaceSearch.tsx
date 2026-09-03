"use client"

import { useRef, useState } from "react";
import ExpandableEntry from "./ExpandableEntry";
import RaceEditForm from "./RaceEditForm";

type Race = {id : string; name: string; description: string}

export default function RaceSearch({initialRaces, isDM} : {initialRaces: Race[], isDM: boolean}) {
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
    async function handleDelete(id: string) {
      await fetch(`/api/races/${id}`, {
        method: "DELETE",
        headers: { "Content-Type" : "application/json"},
      })
      window.location.reload()
    }

  return (
    <div>
      <input type="text" placeholder="Search items..." onChange={handleChange} />
      <ul>
        {races.map((race) => (
          <ExpandableEntry key={race.id} summary={race.name}>
            <div dangerouslySetInnerHTML={{__html: race.description}}></div>
            {isDM && 
            <><RaceEditForm race={race}/>
              <button onClick={() => handleDelete(race.id)}>Delete</button>
            </>}
          </ExpandableEntry>
        ))}
      </ul>
    </div>
  );
}