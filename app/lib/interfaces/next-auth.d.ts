import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    expires?: string | null;
  }

  interface User {}
}
