import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/items">Items</Link>
      <Link href="/races">Races</Link>
    </nav>
  );
}
