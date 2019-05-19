import { Product } from '../models/product';

export class ProductServices {
    products: Product[];
    constructor() {
        this.products = [
            {  id:1, data:{name: "camera 1",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 550, priceAfterSale: 500 },
            {  id:2, data:{name: "camera 2",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 650, discount: 20, priceAfterSale: 500},
            {  id:3, data:{name: "camera 3",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 450, discount: 20, priceAfterSale: 500 },
            {  id:4, data:{name: "camera 4",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 320, priceAfterSale: 500 },
            {  id:5, data:{name: "camera 5",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 550, priceAfterSale: 500 },
            {  id:6, data:{name: "camera 6",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 850, discount: 20, priceAfterSale: 500 },
            {  id:7, data:{name: "camera 7",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 550, discount: 20, priceAfterSale: 500 },
            {  id:8, data:{name: "camera 8",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 420, discount: 20, priceAfterSale: 500 },
            {  id:9, data:{name: "camera 9",discription: "this is camer1"}, image: "https://cdn.pixabay.com/photo/2017/03/30/13/33/photography-2188440_960_720.jpg", price: 930, discount: 20, priceAfterSale: 500 },
           
        ]

    }
    
//five curd operation 
    getAll()
    {
        return this.products.slice();
    }
    getById(id :number){
        return this.products.find(p=>p.id===id);
    }
    add(product :Product){
        product.id = this.products.length + 1;
        this.products.push(product);
    }
    update(product :Product){
        let oldProduct = this.getById(product.id);
        oldProduct = product;

    }
    delete(id :number){
        let index = this.products.findIndex(p=>p.id===id);
        this.products.splice(index,1);
    }
}