export interface ProductInterface{
    _id:string;
    name:string;
    description:string;
    image:any;
    price:number;
    category:string;
    quantity:number | 1;
}