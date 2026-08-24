import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId = session.user.id;

  const characters = await prisma.character.findMany({ where: { ownerId: userId }, include: {race: true}});
  return Response.json(characters);
}

export async function POST(request: Request) {
    const session = await auth();
    if(!session?.user) {
        return new Response("Unauthorized", {status: 401});
    }
    const data = await request.json();
    data.ownerId = session.user.id;
    const character = await prisma.character.create({ data });
    return Response.json(character);
}
