import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import ItemSearch from "@/components/ItemSearch";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();

  return (
    <main>
      <Nav />
      <PageHeader title="Items" />
      <ItemSearch initialItems={items} />
    </main>
  );
}
