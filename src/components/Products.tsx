import React from "react";
import { ProductInterface } from "@/interfaces/products";
import Product from "./Product";

interface ProductsProps {
  products: ProductInterface[];
  category: string;
}

const Products = ({ products, category }: ProductsProps) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product._id} {...product} category={category} />
      ))}
    </div>
  );
};

export default Products;
