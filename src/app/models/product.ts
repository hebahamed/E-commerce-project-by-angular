import { Category } from './category';
import { Payment } from './payment';
import { Tag } from './tag';

export class Product{

    //member variables
    id?:number;
   
    data:{
        name:string;
        discription?:string;
    }
    image?:string;
    price:number;
    discount?:number;
    priceAfterSale?:number;
    category?:Category;
    paymentTypes?:Payment[];
    tag?:string;


}