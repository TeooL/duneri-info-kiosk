import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import WeaponSearch from "@/components/WeaponSearch";
import WeaponCreateForm from "@/components/WeaponCreateForm";
import { prisma } from "@/lib/prisma";
import { requireDM } from "@/lib/requireDM";

export default async function WeaponPage() {
    const weapons = await prisma.weapon.findMany({include: {tags : true}});
    const isDM = await requireDM();

    return (
        <main>
            <Nav />
            <PageHeader title="Weapons" />
            <p>This page is for the Weapons Section of Duneri</p>
            <WeaponSearch initialWeapons={weapons} isDM={isDM} />
            <div className="h-6" />
            {(isDM) && <WeaponCreateForm />}
        </main>
    )
}