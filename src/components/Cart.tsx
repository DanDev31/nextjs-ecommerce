"use client";
import { useAppContext } from "@/context/AppContext";
import { urlFor } from "@/lib/sanity.client";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import React, { useState } from "react";

const Cart = () => {
  const { state } = useAppContext();
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="grid grid-col-1 gap-7 lg:grid-cols-[4fr_1fr]">
      <div>
        <div className="flex justify-between font-semibold mb-5 w-full">
          <h4>Product</h4>
          <h4>Price</h4>
        </div>
        {state.cart.map((product) => (
          <div
            key={product._id}
            className="border-b border-gray-300 flex justify-between py-4"
          >
            <div className="flex gap-4 w-full">
              <div className="max-w-[250px] bg-slate-200 rounded-lg">
                <img
                  src={urlFor(product.image.asset._ref).url()}
                  alt="Product image"
                />
              </div>

              <div className="flex flex-col space-y-10">
                <h4 className="text-gray-400 font-semibold">{product.name}</h4>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-gray-400">
                      Quantity:
                    </span>
                    <div className="border border-gray-300 rounded-lg flex h-8">
                      <div className="border-r border-gray-400 w-[35px] flex items-center justify-center text-sm">
                        <span>{quantity}</span>
                      </div>
                      <div className="px-2 [&>*]:cursor-pointer [&>*]:text-sm">
                        <IoIosArrowUp
                          onClick={() => setQuantity((prev) => prev + 1)}
                        />
                        <IoIosArrowDown
                          onClick={
                            quantity !== 1
                              ? () => setQuantity((prev) => prev - 1)
                              : undefined
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <HiOutlineTrash className="text-gray-400 text-xl cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="flex justify-center text-xl font-medium">
              <span>{product.price}</span>
            </div>
          </div>
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
              <span>{state.total}</span>
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
            <span>{state.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
