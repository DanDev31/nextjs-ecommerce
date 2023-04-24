import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/services";
import React from "react";

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

const Product = async ({ params: { productId } }: ProductDetailProps) => {
  const product = await getProduct(productId);
  return (
    <section className="py-10 animate-fadeInLeft">
      <ProductDetail product={product[0]} />
    </section>
  );
};

export default Product;
