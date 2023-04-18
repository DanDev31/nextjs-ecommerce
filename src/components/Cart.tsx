"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import CartItem from "./CartItem";
import getStripe from "@/utils/getStripe";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const {
    state: { cart, total },
  } = useAppContext();

  const { data: session } = useSession();
  const router = useRouter();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    if (session) {
      try {
        const stripeResponse = await fetch(
          "http://localhost:3000/api/checkout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart }),
          }
        );

        const data = await stripeResponse.json();

        stripe?.redirectToCheckout({ sessionId: data.session.id });
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/authentication/login");
    }
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="grid grid-col-1 gap-7 lg:grid-cols-[4fr_1fr]">
          <div>
            <div className="flex justify-between font-semibold mb-5 w-full">
              <h4>Product</h4>
              <h4>Price</h4>
            </div>
            {cart.map((product) => (
              <CartItem key={product._id} {...product} />
            ))}
          </div>
          <div className="flex flex-col justify-between bg-slate-100 h-fit p-4 min-h-[300px]">
            <h2 className="bg-indigo-900 text-white font-semibold uppercase text-center py-2">
              Summary
            </h2>

            <div>
              <ul className="space-y-2 border-b-2 border-gray-400 py-2 text-sm">
                <li className="flex items-center justify-between">
                  <h6 className="text-gray-500">Subtotal:</h6>
                  <span>{total}</span>
                </li>
                <li className="flex items-center justify-between">
                  <h6 className="text-gray-500">Shipping:</h6>
                  <span>Free</span>
                </li>
                <li className="flex items-center justify-between">
                  <h6 className="text-gray-500">Discounts:</h6>
                  <span>0.0</span>
                </li>
              </ul>
              <div className="flex items-center justify-between pt-2">
                <h5 className="font-semibold">Total:</h5>
                <span>{total}</span>
              </div>
              <button
                className="bg-indigo-900 text-white font-semibold uppercase text-center py-2 mt-3 w-full"
                onClick={() => handleCheckout()}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-[150px] text-gray-400 border-4 border-gray-400 rounded-full p-7">
            <RiShoppingCartLine />
          </div>
          <h3>Your cart is empty.</h3>
        </div>
      )}
    </>
  );
};

export default Cart;
