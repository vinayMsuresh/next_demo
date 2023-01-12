import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
  },
  jwt: {
    secret: "sjjelakmd",
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   console.log("jwt", token, user);
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return token;
    // },
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
