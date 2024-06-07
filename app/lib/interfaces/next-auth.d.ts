import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    // user?: {
    //   name?: string;
    //   email?: string;
    //   image?: string;
    // } | null;
    expires?: string | null;
  }

  interface User {}
}
