import { auth } from "@/auth";

export async function requireDM() {
  const session = await auth();
  const role = (session?.user as { role?: string } | undefined)?.role;
  return role === "DM";
}
