import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { id } = await params;

  const existing = await prisma.character.findUnique({ where: { id } });
  if (!existing || existing.ownerId !== session.user.id) {
    return new Response("Forbidden", { status: 403 });
  }

  const data = await request.json();
  data.ownerId = session.user.id; // don't let them reassign ownership to someone else
  const character = await prisma.character.update({ where: { id }, data });
  return Response.json(character);
}

export async function DELETE(request: Request, { params }: {params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session?.user) {
        return new Response("Unauthorized", {status: 401});
    }
    const { id } = await params;

    const existing = await prisma.character.findUnique({ where: { id } });
    if (!existing || existing.ownerId !== session.user.id) {
        return new Response("Forbidden", {status: 403});
    }
    const character = await prisma.character.delete({ where: { id } });
    return Response.json(character);
}
