"use client";
import React, { useState } from "react";
import { urlFor } from "@/lib/sanity.client";
import { ProductInterface } from "@/interfaces/products";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TfiRulerAlt } from "react-icons/tfi";
import { TbWeight } from "react-icons/tb";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { useAppContext } from "@/context/AppContext";

interface ProductDetailProps {
  product: ProductInterface;
}

const componentTags = [
  {
    id: 0,
    title: "Description",
    state: true,
  },
  {
    id: 1,
    title: "Details",
    state: false,
  },
];

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [tags, setTags] = useState(componentTags);
  const [component, setComponent] = useState<string>("Description");

  const { _id, name, image, description, price, category } = product;
  const { dispatch } = useAppContext();

  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: _id } });
  };

  const handleDecrementtQuantity = () => {
    setQuantity((prev) => prev - 1);
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: _id } });
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity,
      },
    });
  };

  const handleSwitchComponent = (index: number) => {
    setTags((prev) => {
      return prev.map((e) => {
        if (index === e.id) {
          setComponent(e.title);
          if (!e.state) {
            return { ...e, state: !e.state };
          } else {
            return e;
          }
        } else {
          return { ...e, state: false };
        }
      });
    });
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[3fr_2fr] lg:px-[150px]">
      <div className="bg-gray-200 rounded-xl mx-auto p-3 max-w-[600px]">
        <img src={urlFor(image.asset._ref).url()} alt="Product image" />
      </div>

      <div className="space-y-6">
        <header>
          <h2 className="text-2xl text-gray-600">{name}</h2>
          <span className="text-xs text-gray-500">Category: {category}</span>
        </header>

        <p className="text-xs font-medium text-gray-400 leading-5">
          {description}
        </p>

        <span className="block font-semibold text-3xl">$ {price}</span>

        <div className="flex items-center gap-1">
          <span className="text-xs font-medium text-gray-400">Quantity:</span>
          <div className="border border-gray-300 rounded-lg flex h-10">
            <div className="border-r border-gray-400 w-[40px] flex items-center justify-center">
              <span>{quantity}</span>
            </div>
            <div className="py-1 px-2 [&>*]:cursor-pointer">
              <IoIosArrowUp onClick={() => handleIncrementQuantity()} />
              <IoIosArrowDown
                onClick={
                  quantity !== 1 ? () => handleDecrementtQuantity() : undefined
                }
              />
            </div>
          </div>
        </div>

        <button
          className="outline-none rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white 
        font-medium py-2 px-4 mx-auto duration-200 w-full"
          onClick={() => handleAddToCart()}
        >
          Add to cart
        </button>

        <div>
          <div className="grid grid-cols-2">
            {tags.map((tag, i) => (
              <div
                key={i}
                className={`border-t border-l border-r ${
                  tag.state ? "" : "border-b"
                } border-gray-200 py-1 text-center cursor-pointer text-sm text-gray-500`}
                onClick={() => handleSwitchComponent(i)}
              >
                <span>{tag.title}</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-400 border-b border-r border-l border-gray-200">
            <div className="p-5">
              {component === "Description" ? <Description /> : <Details />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const Description = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laborum.
      </p>
    </>
  );
};

export const Details = () => {
  return (
    <>
      <ul className="space-y-3">
        <li className="flex items-center gap-4 text-xs text-gray-400">
          <TfiRulerAlt />
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            ratione!
          </span>
        </li>
        <li className="flex items-center gap-4 text-xs text-gray-400">
          <HiOutlineSquare3Stack3D />
          <span>2 x 5 x 8 cm</span>
        </li>
        <li className="flex items-center gap-4 text-xs text-gray-400">
          <TbWeight />
          <span>0.5 kg</span>
        </li>
      </ul>
    </>
  );
};
