import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import LoreSearch from "@/components/LoreSearch";
import { requireDM } from "@/lib/requireDM";
import LoreCreateForm from "@/components/LoreCreateForm";
import { prisma } from "@/lib/prisma";

export default async function LorePage() {
    const lore = await prisma.loreEntry.findMany();

    const isDM = await requireDM();

    return (
        <main>
            <Nav />
            <PageHeader title="Lore" />
            <p>This page is for the lore section of Duneri </p>
            <LoreSearch initialLore={lore} />
            {(isDM) && <LoreCreateForm />}
        </main>
    )
}