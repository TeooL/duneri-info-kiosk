import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Discord],
  callbacks: {
    async signIn({ account }) {
      if (!account) return false;

      const existing = await prisma.user.findUnique({
        where: { authProviderId: account.providerAccountId },
      });

      if (!existing) {
        await prisma.user.create({
          data: {
            authProviderId: account.providerAccountId,
            displayName: "New Player",
            role: "PLAYER",
          },
        });
      }

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        const dbUser = await prisma.user.findUnique({
          where: { authProviderId: account.providerAccountId },
        });
        if (dbUser) {
          (token as any).role = dbUser.role;
          (token as any).id = dbUser.id;

        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = (token as any).role;
        (session.user as any).id = (token as any).id;
      }
      return session;
    },
  },
});
