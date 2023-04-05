"use client";
import { urlFor } from "@/lib/sanity.client";
import React, { useState } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface ProductProps {
  _id?: string;
  name?: string;
  image?: any;
  price?: string;
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

const Product = ({ _id, name, image, price }: ProductProps) => {
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
    <div className="overflow-hidden space-y-2 flex flex-col justify-between">
      <div className="bg-slate-200 rounded-xl shadow-md relative">
        <div className="absolute top-2 right-2 [&>*]:cursor-pointer [&>*]:text-lg">
          {favorite ? (
            <BsHeartFill
              className="fill-pink-500"
              onClick={() => setFavorite(false)}
            />
          ) : (
            <BsHeart onClick={() => setFavorite(true)} />
          )}
        </div>
        <img src={urlFor(image.asset._ref).url()} alt="" />
      </div>
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
        <h4 className="font-bold">{name}</h4>
        <span className="text-xl">$ {price}</span>
      </div>
      <button className="outline-none rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 mx-auto duration-200 w-full">
        Add
      </button>
    </div>
  );
};

export default Product;
