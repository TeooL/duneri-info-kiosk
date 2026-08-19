import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import ItemSearch from "@/components/ItemSearch";
import ItemCreateForm from "@/components/ItemCreateForm";
import { requireDM } from "@/lib/requireDM";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();

  const isDM = await requireDM();

  return (
    <main>
      <Nav />
      <PageHeader title="Items" />
      <ItemSearch initialItems={items} />
      {(isDM) && <ItemCreateForm />}
    </main>
  );
}
