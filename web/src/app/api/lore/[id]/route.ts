import { prisma } from "@/lib/prisma"
import { NextRequest } from "next/server";
import { requireDM } from "@/lib/requireDM";
import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = ["p", "strong", "em", "ul", "ol", "li", "br", "blockquote", "code"];

export async function PUT(request: NextRequest, { params } : {params : Promise<{id: string}>}) {
    const permission = await requireDM();
    const {id} = await params;
    if (!permission) {
        return new Response("Forbidden", {status: 403})
    }
    const data = await request.json();
    data.body = sanitizeHtml(data.body, {allowedTags: ALLOWED_TAGS, allowedAttributes: {} });
    const lore = await prisma.loreEntry.update({ where: { id }, data })
    return Response.json(lore);
}

export async function DELETE(request: NextRequest, { params } : {params : Promise<{id: string}>} ) {
    const permission = await requireDM();
    const {id} = await params;
    if(!permission) {
        return new Response("Forbidden", {status: 403})
    }
    const lore = await prisma.loreEntry.delete({ where: {id }});
    return Response.json(lore);
}