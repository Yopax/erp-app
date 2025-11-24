import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import clientPromise from "./db/mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const client = await clientPromise;
          const db = client.db();
          
          const trabajador = await db.collection("trabajadores").findOne({
            email: credentials.email as string
          });

          if (!trabajador) {
            console.log('Usuario no encontrado:', credentials.email);
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password as string,
            trabajador.passwordHash
          );

          if (!passwordMatch) {
            console.log('Contraseña incorrecta para:', credentials.email);
            return null;
          }

          console.log('Usuario autenticado exitosamente:', trabajador.email);

          return {
            id: trabajador._id.toString(),
            email: trabajador.email,
            name: `${trabajador.nombres} ${trabajador.apellidos}`,
            role: trabajador.roles[0],
            empresaId: trabajador.empresaId,
          };
        } catch (error) {
          console.error('Error en authorize:', error);
          return null;
        }
      }
    })
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.empresaId = user.empresaId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.empresaId = token.empresaId as string;
      }
      return session;
    }
  },
  
  pages: {
    signIn: '/login',
  },
  
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60,
  },
  
  secret: process.env.AUTH_SECRET,
});
