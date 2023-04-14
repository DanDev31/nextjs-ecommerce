
import { ProductInterface } from "@/interfaces/products";
import { urlFor } from "@/lib/sanity.client";
import { NextRequest, NextResponse } from "next/server";


import Stripe  from "stripe"
const SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(SECRET_KEY, {
  apiVersion:"2022-11-15",
  typescript:true
});

export async function POST(request:NextRequest, response:any) {

  const { cart } = await request.json();

  // const params = {
  //   line_items: cart.map((item:ProductInterface) => {
  //     // const img = item.image[0].asset._ref;
  //     // const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');

  //     return {
  //       price_data: { 
  //         currency: 'usd',
  //         product_data: { 
  //           name: item.name,
  //           // images: [newImage],
  //         },
  //         unit_amount: item.price * 100,
  //       },
  //       adjustable_quantity: {
  //         enabled:true,
  //         minimum: 1,
  //       },
  //       quantity: item.quantity
  //     }
  //   }),
  //   success_url: `${request.nextUrl.origin}/success`,
  //   cancel_url: `${request.nextUrl.origin}/canceled`,
  // }

  // const session = await stripe.checkout.sessions.create(params)


    const session = await stripe.checkout.sessions.create({
      
      line_items: cart.map((item:ProductInterface) => {
        // const img = item.image[0].asset._ref;
        // const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');
  
        return {
          price_data: { 
            currency: 'usd',
            product_data: { 
              name: item.name,
              // images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled:true,
            minimum: 1,
          },
          quantity: item.quantity
        }
      }),
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/canceled`,
    });

   return NextResponse.json({session})
    
  }