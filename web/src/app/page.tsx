import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import GlossaryTerm from "@/components/GlossaryTerm";
import styles from "./page.module.css";

export default async function Home() {

  return (
    <main className={styles.page}>
      <Nav />
      <PageHeader title="Duneri Campaign Wiki" />
      <p className={styles.tagline}>This wiki is for the DND Campaign Duneri</p>
      {<p>Track your <GlossaryTerm definition="Your character's health points, the amount of damage your character can take before being knocked">HP</GlossaryTerm>, roll for <GlossaryTerm definition="Determines your character's turn order, a higher initiative means you get to act first">Initiative</GlossaryTerm>, and use <GlossaryTerm definition="Your character's mana points, the resource used to cast spells.">MP</GlossaryTerm> to cast spells</p>}
    </main>
  );
}
