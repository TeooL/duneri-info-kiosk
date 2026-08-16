import Link from "next/link";
import {auth, signIn, signOut } from "@/auth";

export default async function Nav() {
  const session = await auth();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/items">Items</Link>
      <Link href="/races">Races</Link>
      <Link href="/lore">Lore</Link>
      {(session?.user as any)?.role === "DM" && <Link href="/dm">DM Tools</Link>}
      {session ? (
        <form action={async () => { "use server"; await signOut(); }}>
          <p>Signed in as {session.user?.name} {(session.user as any).role}</p>
          <button type="submit">Sign out</button>
        </form>
      ) : (
        <form action={async () => { "use server"; await signIn("discord"); }}>
          <button type="submit">Sign in with Discord</button>
        </form>
      )}
    </nav>
  );
}
