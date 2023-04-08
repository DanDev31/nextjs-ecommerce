import Cart from "@/components/Cart";
import React, { Suspense } from "react";

const CartPage = () => {
  return (
    <section className="py-10">
      <header className="text-center mb-12 w-full">
        <h2 className="font-semibold text-lg uppercase">Shopping Cart</h2>
      </header>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Cart />
      </Suspense>
    </section>
  );
};

export default CartPage;
