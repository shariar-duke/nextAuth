import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"; // eta k import kora holo
import mongoClientPromise from "../lib/mongoClientPromise"; // eat k import kora holo 

export const {
  // egula jno api leve eo handle korte pare...
  handlers:{GET, POST},
  auth,
  signIn, 
  signOut
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, {databaseName: process.env.ENVIRONMENT}),
    providers:[ GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
       })]
   
})


