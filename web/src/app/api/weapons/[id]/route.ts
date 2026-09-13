import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { requireDM } from "@/lib/requireDM";
import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = ["p", "strong", "em", "ul", "ol", "li", "br", "blockquote", "code"];

export async function PUT(request : NextRequest, { params } : {params : Promise<{id : string}>}) {
    const permission = await requireDM();
    const {id} = await params;
    if (!permission) {
        return new Response("Forbidden", {status : 403})
    }
    const data = await request.json();
    data.description = sanitizeHtml(data.description, {allowedTags: ALLOWED_TAGS, allowedAttributes: {}});

    const { tagIds, ...weaponFields} = data
    const weapon = await prisma.weapon.update({where : { id }, data : {
        ...weaponFields,
        tags: {
            set: tagIds.map((id: string) => ({ id })),
        },
    },
    include: {tags : true}
});
    return Response.json(weapon);
}

export async function DELETE(request: NextRequest, { params } : {params : Promise<{id : string }>}) {
    const permission = await requireDM();
    const {id} = await params;
    if(!permission) {
        return new Response("Forbidden", {status: 403})
    }
    const weapon = await prisma.weapon.delete({where: { id }});
    return Response.json(weapon);
}