import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import RaceSearch from "@/components/RaceSearch";
import RaceCreateForm from "@/components/RaceCreateForm";
import { requireDM } from "@/lib/requireDM";
import { prisma } from "@/lib/prisma";

export default async function RacesPage() {
  const races = await prisma.race.findMany();

  const isDM = await requireDM();

  return (
    <main>
      <Nav />
      <PageHeader title="Races" />
      <p>This page is for the races section of Duneri</p>
      <RaceSearch initialRaces={races}/>
      {(isDM) && <RaceCreateForm />}
    </main>
  );
}
