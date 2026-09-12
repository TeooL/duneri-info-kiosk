import { put } from "@vercel/blob";
import { requireDM } from "@/lib/requireDM";

export async function POST(request: Request) {
    const permission = await requireDM();
    if (!permission) {
        return new Response("Forbidden", {status: 403})
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename") as string;

    const blob = await put(filename, request.body, {
        access: "public",
        addRandomSuffix: true,
    });

    return Response.json(blob);
}
