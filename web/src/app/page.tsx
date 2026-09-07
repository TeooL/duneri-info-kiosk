import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import GlossaryTerm from "@/components/GlossaryTerm";

export default async function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Nav />
      <PageHeader title="Duneri Campaign Wiki" />
      <p className="text-lg text-gray-600">This wiki is for the DND Campaign Duneri</p>
      {<p>Track your <GlossaryTerm definition="Your character's health points, the amount of damage your character can take before being knocked">HP</GlossaryTerm>, roll for <GlossaryTerm definition="Determines your character's turn order, a higher initiative means you get to act first">Initiative</GlossaryTerm>, and use <GlossaryTerm definition="Your character's mana points, the resource used to cast spells.">MP</GlossaryTerm> to cast spells</p>}
    </main>
  );
}
