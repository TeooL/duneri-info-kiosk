import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

export default async function Home() {

  return (
    <main className={styles.page}>
      <Nav />
      <PageHeader title="Duneri Campaign Wiki" />
      <p className={styles.tagline}>This wiki is for the DND Campaign Duneri</p>
    </main>
  );
}
