"use client";
import React, { useState } from "react";
import { urlFor } from "@/lib/sanity.client";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import { useAppContext } from "@/context/AppContext";

interface CartItemProps {
  _id: string;
  name: string;
  image: any;
  quantity: number;
  price: number;
}

const CartItem = ({ _id, name, image, quantity, price }: CartItemProps) => {
  const [quantityState, setQuantityState] = useState<number>(quantity);
  const { dispatch } = useAppContext();

  const handleRemoveItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: _id } });
  };

  const handleIncrementQuantity = () => {
    setQuantityState((prev) => prev + 1);
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: _id } });
  };

  const handleDecrementtQuantity = () => {
    setQuantityState((prev) => prev - 1);
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: _id } });
  };
  return (
    <div className="border-b border-gray-300 flex justify-between py-4">
      <div className="flex gap-4 w-full">
        <div className="max-w-[250px] bg-slate-200 rounded-lg">
          <img src={urlFor(image.asset._ref).url()} alt="Product image" />
        </div>

        <div className="flex flex-col space-y-10">
          <h4 className="text-gray-400 font-semibold">{name}</h4>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-gray-400">
                Quantity:
              </span>
              <div className="border border-gray-300 rounded-lg flex h-8">
                <div className="border-r border-gray-400 w-[35px] flex items-center justify-center text-sm">
                  <span>{quantityState}</span>
                </div>
                <div className="px-2 [&>*]:cursor-pointer [&>*]:text-sm">
                  <IoIosArrowUp onClick={() => handleIncrementQuantity()} />
                  <IoIosArrowDown
                    onClick={
                      quantityState !== 1
                        ? () => handleDecrementtQuantity()
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>

            <HiOutlineTrash
              className="text-gray-400 text-xl cursor-pointer"
              onClick={() => handleRemoveItem()}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center text-xl font-medium">
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CartItem;
