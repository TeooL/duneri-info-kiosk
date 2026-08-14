import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import LoreSearch from "@/components/LoreSearch";

export default async function LorePage() {
    const res = await fetch("http://localhost:3000/api/lore");
    const lore = await res.json();

    return (
        <main>
            <Nav />
            <PageHeader title="Lore" />
            <p>This page is for the lore section of Duneri </p>
            <LoreSearch initialLore={lore} />
        </main>
    )
}