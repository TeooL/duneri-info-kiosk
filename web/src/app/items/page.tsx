import PageHeader from "@/components/PageHeader";
import Nav from "@/components/Nav";
import ItemSearch from "@/components/ItemSearch";
import ItemCreateForm from "@/components/ItemCreateForm";
import { requireDM } from "@/lib/requireDM";
import { prisma } from "@/lib/prisma";

export default async function ItemsPage() {
  const items = await prisma.item.findMany();

  const isDM = await requireDM();

  return (
    <main>
      <Nav />
      <PageHeader title="Items" />
      <ItemSearch initialItems={items} isDM={isDM} />
      {(isDM) && <ItemCreateForm />}
    </main>
  );
}
