import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
      profile(profile) {
        return profile;
      },
    }),
  ],

  callbacks: {
    signIn: async ({ account }: { account: any }) => {
      return { ...account };
    },
    jwt: async ({ token, account, user }) => {
      return { ...token, ...account, ...user };
    },
    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        image: token.avatar_url as string,
      };
      return session;
    },
  },
};
export default NextAuth(authOptions);
