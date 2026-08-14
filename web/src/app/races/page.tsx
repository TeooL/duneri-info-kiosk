import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import RaceSearch from "@/components/RaceSearch";

export default async function RacesPage() {
  const res = await fetch("http://localhost:3000/api/races");
  const races = await res.json();

  return (
    <main>
      <Nav />
      <PageHeader title="Races" />
      <p>This page is for the races section of Duneri</p>
      <RaceSearch initialRaces={races}/>
    </main>
  );
}
