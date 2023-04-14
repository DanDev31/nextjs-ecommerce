import { createClient } from "next-sanity";
import imageUrlBuilder  from '@sanity/image-url';
import { StaticImageData } from "next/image";

export const client = createClient({
    projectId:'jay4397q',
    dataset: 'production',
    apiVersion:'2023-04-02',
    useCdn: false,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source:any) => builder.image(source);