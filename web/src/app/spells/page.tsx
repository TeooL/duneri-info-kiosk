import SpellSearch from "@/components/SpellSearch";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import { prisma } from "@/lib/prisma";
import { requireDM } from "@/lib/requireDM";

export default async function SpellPage() {
    const spells = await prisma.spell.findMany();

    const isDM = await requireDM();

    return (
        <main>
            <Nav />
            <PageHeader title="Spells" />
            <p>This page is for the Spells Section of Duneri</p>
            <SpellSearch initialSpells={spells} />
            {/*{(isDM) && <SpellCreateForm />} */}
        </main>
    )
}