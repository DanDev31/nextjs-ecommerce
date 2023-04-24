import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { client } from "@/lib/sanity.client";


const handler = NextAuth({
     providers: [
      CredentialsProvider({
        name:"Credentials",
        credentials:{
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials){

          const { email, password } = credentials as {
            email:string,
            password:string
          };

          const user = await client.fetch(`*[_type == 'user' && email == '${email}'][0]`);
          
          if(!user){
            return null
          };
          
          const passwordMatch = await bcrypt.compare(password, user.password );
          
          if(passwordMatch) {
            return user
          }else{
            return null
          }

          }
      }),
      
         GoogleProvider({
           clientId: process.env.GOOGLE_CLIENT_ID || "",
           clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
         })
       ],
       secret:process.env.NEXTAUTH_SECRET,
       pages:{
        signIn:"/"
       }
      
 });

export { handler as GET, handler as POST };

