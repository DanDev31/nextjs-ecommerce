
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

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types:["card"],
      line_items: cart.map((item:ProductInterface) => {
        const img = item.image.asset._ref;
        
        return {
          price_data: { 
            currency: 'usd',
            product_data: { 
              name: item.name,
              images: [urlFor(img).url()],
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
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/canceled`,
    });

   return NextResponse.json({session})
    
  }