import jwt from "jsonwebtoken";
import { headers } from 'next/headers'

const SECRET = process.env.JWT_SECRET || "";

export const signJWT = (user:object) => {
    const token = jwt.sign(user, SECRET ,{
        expiresIn:'1h'
    })

    return token;
};


export const verifyToken = () => {
    
    try {
    const authorization = headers(); 

    return authorization.get('Authorization')
    
    // jwt.verify(authorization, SECRET, (err, decode) => {
    //     if(err){
    //         return new Response("Invalid token.");
    //     }else{
    //         request.user = 
    //     }
    // })

    } catch (error) {
        console.log(error)
    }

}
