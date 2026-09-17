import Link from "next/link";
import {auth, signIn, signOut } from "@/auth";

export default async function Nav() {
  const session = await auth();

  return (
    <nav className="flex items-center gap-4 px-6 py-4 bg-gray-900 text-white">
      <Link href="/">Home</Link>
      <Link href="/items">Items</Link>
      <Link href="/races">Races</Link>
      <Link href="/lore">Lore</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/spells">Spells</Link>
      <Link href="/weapons">Weapons</Link>
      <div className="ml-auto">{session ? (
        <form action={async () => { "use server"; await signOut(); }}>
          <p>Signed in as {session.user?.name} {(session.user as any).role}</p>
          <button type="submit">Sign out</button>
        </form>
      ) : (
        <form action={async () => { "use server"; await signIn("discord"); }}>
          <button type="submit">Sign in with Discord</button>
        </form>
      )}</div>
    </nav>
  );
}
