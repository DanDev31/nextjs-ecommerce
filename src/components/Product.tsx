"use client";
import { urlFor } from "@/lib/sanity.client";
import React, { useState } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

interface ProductProps {
  _id?: string;
  name?: string;
  image?: any;
  price?: number;
  category?: string;
}

const starsData = [
  {
    id: 0,
    isRated: false,
  },
  {
    id: 1,
    isRated: false,
  },
  {
    id: 2,
    isRated: false,
  },
  {
    id: 3,
    isRated: false,
  },
  {
    id: 4,
    isRated: false,
  },
];

const Product = ({ _id, name, image, price, category }: ProductProps) => {
  const [stars, setStars] = useState(starsData);
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleRating = (index: number) => {
    setStars((prev) => {
      return prev.map((e) => {
        if (index >= e.id) {
          return {
            ...e,
            isRated: true,
          };
        } else {
          return {
            ...e,
            isRated: false,
          };
        }
      });
    });
  };

  const handleFavorite = () => {};

  return (
    <div className="overflow-hidden space-y-2 flex flex-col justify-between h-full relative">
      <div className="absolute top-4 right-3 [&>*]:cursor-pointer [&>*]:text-xl text-gray-600">
        {favorite ? (
          <BsHeartFill
            className="fill-pink-500 z-30"
            onClick={() => setFavorite(false)}
          />
        ) : (
          <BsHeart onClick={() => setFavorite(true)} />
        )}
      </div>
      <Link
        href={`/shop/${category}/${_id}`}
        className="bg-slate-200 rounded-xl shadow-md h-full p-7"
      >
        <img
          src={urlFor(image.asset._ref).url()}
          alt="Product image"
          className="hover:scale-[1.1] duration-200"
        />
      </Link>
      <div className="space-y-1">
        <div className="flex [&>*]:cursor-pointer [&>*]:text-gray-600 [&>*]:text-2xl">
          {stars.map((star, i) =>
            star.isRated ? (
              <HiStar
                className="fill-yellow-400"
                onClick={() => handleRating(i)}
                key={i}
              />
            ) : (
              <HiOutlineStar onClick={() => handleRating(i)} key={i} />
            )
          )}
        </div>
        <h4 className="font-semibold">{name}</h4>
        <span className="text-xl">$ {price}</span>
      </div>
    </div>
  );
};

export default Product;
