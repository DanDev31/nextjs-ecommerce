import { client } from "@/lib/sanity.client";
import { signJWT, verifyToken } from "@/utils/auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const {email, password} = await request.json(); 
  try {

    const user = await client.fetch(`*[_type == 'user' && email == '${email}'][0]`);

    if(!user){
      return new Response("You are not registered yet.")
    };

    bcrypt.compare(password, user.password , (err, same) => {
      if(err){
        return new Response("Password is wrong, please try again.")
      }
    });

    const token = signJWT({name:user.name, email:user.email});
  
    const headers = verifyToken();

    const authenticatedUser = {
      id:user._id,
      name:user.name,
      email:user.email,
      accessToken:token
    }

    return NextResponse.json({message:"Login succesful", user:authenticatedUser, headers});
  } catch (error) {
    return new Response('There was an error in login: ' + error, {
      status:404
    })
  }
}
