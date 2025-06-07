import { getUserByEmail } from "@/config/user/user.config";
import { UserRole } from "@/types/common";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.AUTH_GOOGLE_ID as string,
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    // }),
    // GithubProvider({
    //   clientId: process.env.AUTH_GITHUB_ID as string,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    // }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const foundUser = await getUserByEmail(email);

        if (!foundUser) {
          return null;
        }

        const valid = password === foundUser.password;

        if (!valid) {
          return null;
        }

        if (foundUser) {
          return foundUser as any;
        }
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role as UserRole;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    pages: {
      signIn: "/auth/login",
    },

    debug: process.env.NODE_ENV !== "production",
  },
};
