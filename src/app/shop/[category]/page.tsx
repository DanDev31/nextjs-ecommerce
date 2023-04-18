import Products from "@/components/Products";
import { ProductInterface } from "@/interfaces/products";
import { getProductsByCategory, getProductsBySearch } from "@/services";
import { Suspense } from "react";
import React from "react";

type Params = {
  params: {
    category: string;
  };
};

const ShopPage = async ({ params: { category } }: Params) => {
  let products: ProductInterface[];
  if (category === "dogs" || category === "cats") {
    products = await getProductsByCategory(category);
  } else {
    products = await getProductsBySearch(category);
  }

  return (
    <section className="py-7">
      <header className="border-b-2 border-gray-300 pb-5 mb-10 text-center w-full">
        <h2 className="font-semibold text-3xl uppercase">{category}</h2>
      </header>

      {products.length > 0 ? (
        <Suspense fallback={<h2>Loading...</h2>}>
          <Products products={products} category={category} />
        </Suspense>
      ) : (
        <div>Not products found for your search.</div>
      )}
    </section>
  );
};

export default ShopPage;
