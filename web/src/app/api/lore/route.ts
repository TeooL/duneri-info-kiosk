import { prisma } from "@/lib/prisma"
import { NextRequest } from "next/server"
import { requireDM } from "@/lib/requireDM";
import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = ["p", "strong", "em", "ul", "ol", "li", "br", "blockquote", "code"];

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

export async function POST(request : NextRequest) {
    const permission = await requireDM();
    if (!permission) {
        return new Response("Forbidden", {status : 403})
    }
    const data = await request.json();
    data.body = sanitizeHtml(data.body, {allowedTags : ALLOWED_TAGS, allowedAttributes: {} })
    const lore = await prisma.loreEntry.create({ data });
    return Response.json(lore);
}