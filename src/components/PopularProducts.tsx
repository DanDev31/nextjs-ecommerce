import { client, urlFor } from "@/lib/sanity.client";
import React from "react";
import Slider from "./Slider";
import Image from "next/image";

interface PopularProductsProps {
  products?: any[];
}

const PopularProducts = ({ products }: PopularProductsProps) => {
  return (
    <section>
      <h2>Popular in PawFriends</h2>

      <div className="grid grid-cols-5 gap-3">
        {products?.map((product: any, i) => (
          <div className="w-[200px]">
            {/* <Image
              src={urlFor(product.image.asset._ref).url()}
              alt="Product image"
            /> */}
            <img src={urlFor(product.image.asset._ref).url()} alt="" />
            <span>{product.name}</span>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div>{/* <Slider /> */}</div>
    </section>
  );
};

export default PopularProducts;
