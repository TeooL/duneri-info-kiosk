import { prisma } from "@/lib/prisma";

export async function GET() {
  const races = await prisma.race.findMany();
  return Response.json(races);
}
