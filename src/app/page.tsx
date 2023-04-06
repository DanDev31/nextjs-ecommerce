import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SelectPet from "@/components/SelectPet";
import { client } from "@/lib/sanity.client";

export default async function Home() {
  const products = await getData();
  return (
    <>
      <Hero />
      <SelectPet />
      <PopularProducts products={products} />
      <Banner />
    </>
  );
}

async function getData() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return products;
}
