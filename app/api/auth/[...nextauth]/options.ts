import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
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
    signIn: async ({
      account,
    }: {
      account: any;
      profile?: any;
      token?: any;
    }) => {
      return { ...account };
    },
    jwt: async ({ token, account, user }: any) => {
      return { ...token, ...account, ...user };
    },
    session: async ({ session, token }: { token: any; session: any }) => {
      session.user = {
        ...session.user,
        image: token.avatar_url,
      };
      return session;
    },
  },
};
export default NextAuth(authOptions);
