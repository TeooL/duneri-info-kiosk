import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";

export default async function LorePage() {
    const res = await fetch("http://localhost:3000/api/lore");
    const lore = await res.json();

    return (
        <main>
            <Nav />
            <PageHeader title="Lore" />
            <p>This page is for the lore section of Duneri </p>
            <ul>
                {lore.map((entry: {id : string, title: string, body: string}) => (
                    <li key={entry.id}>{entry.title}:{entry.body}</li>
                ))}
            </ul>
        </main>
    )
}