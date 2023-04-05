"use client";
import { urlFor } from "@/lib/sanity.client";
import React from "react";
import Product from "./Product";
import { ProductInterface } from "@/interfaces/products";

interface PopularProductsProps {
  products: ProductInterface[];
}

const PopularProducts = ({ products }: PopularProductsProps) => {
  return (
    <section className="py-10 border-b border-gray-300">
      <h2 className="font-bold text-xl text-center mb-7">
        Popular in PawFriends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5 lg:max-w-[1200px] mx-auto">
        {products?.slice(4, 8).map((product: any, i) => (
          <Product key={i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
