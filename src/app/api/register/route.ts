import { client } from "@/lib/sanity.client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(request:Request) {

  const {name, email, password} = await request.json(); 

 try {
    const user = await client.fetch(`*[_type == "user" && email == '${email}'][0]`);
    if(user){
      return new NextResponse("This email is already registered.",{
        status:401
      })
    }

    const saltRounds = 8;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    
    const newUser = {
      _type:"user",
      name,
      email,
      password:hashedPassword 
    }

   await client.create(newUser);
   return new NextResponse("Sign up is successful.")

 } catch (error) {
  return new NextResponse("error", {
    status:401
  })
 }
  
}