import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();

  return (
    <main>
      <Nav />
      <PageHeader title="Items" />
      <p>This page is for the items section of Duneri</p>
      <ul>
        {items.map((item: {id : string; name : string}) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
