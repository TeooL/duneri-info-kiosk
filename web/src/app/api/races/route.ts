import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") ?? "";
  const races = await prisma.race.findMany({where: {
    OR: [
      {name: {contains: q, mode: "insensitive"}},
      {description: {contains: q, mode: "insensitive"}}
    ]
  }});
  return Response.json(races);
}
