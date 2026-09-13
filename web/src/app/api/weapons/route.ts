import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { requireDM } from "@/lib/requireDM";
import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = ["p", "strong", "em", "ul", "ol", "li", "br", "blockquote", "code"];

export async function GET(request : NextRequest) {
    const q = request.nextUrl.searchParams.get("q") ?? "";
    const weapons = await prisma.weapon.findMany({where: {
        OR: [
            {name: {contains: q, mode: "insensitive"}},
            {description: {contains: q, mode: "insensitive"}},
        ]},
        include: {
            tags: true
        }})
    return Response.json(weapons);
}

export async function POST(request: NextRequest) {
    const permission = await requireDM();
    if (!permission) {
        return new Response("Forbidden", {status: 403})
    }

    const data = await request.json();
    data.description = sanitizeHtml(data.description, { allowedTags: ALLOWED_TAGS, allowedAttributes: {} });

    const { tagIds, ...weaponFields } = data;

    const weapon = await prisma.weapon.create({
        data: {
            ...weaponFields,
            tags: {
                connect: tagIds.map((id: string) => ({ id })),
            },
        },
        include: {
            tags: true
        }
    });

    return Response.json(weapon);
}