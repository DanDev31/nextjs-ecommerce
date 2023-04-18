import { client } from "@/lib/sanity.client";


export const getProductsByCategory = async(category:string) => {
    const query = `*[_type == "product" && category == "${category}"]{
        _id,
        name,
        image,
        price
    }`;
    const products = await client.fetch(query);
    return products;
}


export const getProductsBySearch = async(searchValue:string) => {
    const query = `*[_type == "product" && name match "${searchValue}"]{
        _id,
        name,
        image,
        price
    }`;
    const products = await client.fetch(query);
    return products;
}


export const getProduct = async(id:string) => {
    const query = `*[_type == "product" && _id == "${id}"]`
    const product = client.fetch(query);
    return product; 
}

  