import { prisma } from "@/lib/prisma"

export async function GET() {
    const lore = await prisma.loreEntry.findMany()
    return Response.json(lore)
}