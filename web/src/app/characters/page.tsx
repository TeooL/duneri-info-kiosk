import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import CharacterCreateForm from "@/components/CharacterCreateForm";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function CharactersPage() {
  const session = await auth();

  const races = await prisma.race.findMany();

  const characters = session?.user
    ? await prisma.character.findMany({
        where: { ownerId: session.user.id },
        include: { race: true },
      })
    : [];

  return (
    <main>
      <Nav />
      <PageHeader title="Characters" />
      {session ? (
        <>
          <CharacterCreateForm races={races} />
          <ul>
            {characters.map((character) => (
              <li key={character.id}>{character.name} : {character.race.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Log in to create a character.</p>
      )}
    </main>
  );
}
