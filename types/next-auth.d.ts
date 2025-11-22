import { NextAuthConfig } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    empresaId?: string;
  }
  
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      role?: string;
      empresaId?: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    empresaId?: string;
  }
}
