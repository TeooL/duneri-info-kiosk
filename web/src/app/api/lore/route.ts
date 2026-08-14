import { prisma } from "@/lib/prisma"
import { NextRequest } from "next/server"

export async function GET(request : NextRequest) {
    const q = request.nextUrl.searchParams.get("q") ?? "";
    const lore = await prisma.loreEntry.findMany({where: {
        OR: [
            {title: {contains: q, mode:"insensitive"}},
            {body: {contains: q, mode: "insensitive"}}
        ]
    }})
    return Response.json(lore)
}