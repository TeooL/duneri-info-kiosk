"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function SpellCreateForm() {
  // TODO(you): declare name/type/description state (strings) same as ItemCreateForm
  const [tier, setTier] = useState(1);

  // TODO(you): write handleSubmit — POST to /api/spells with
  // { name, type, tier, description }, reset all fields, reload

  return (
    <form /* TODO(you): onSubmit={handleSubmit} */>
      {/* TODO(you): name input, type input, RichTextEditor for description
          — mirror ItemCreateForm exactly for these three */}
      <input
        type="number"
        value={tier}
        onChange={(e) => setTier(Number(e.target.value))}
        placeholder="Tier"
      />
      <button type="submit">Create Spell</button>
    </form>
  );
}
