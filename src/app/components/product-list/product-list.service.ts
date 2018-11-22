import { Product } from "./product.model";


export class ProductListService{
   private Products: Product[]= [
        new Product('ordinateur','15 pouces','src/assets/images/product/6.png'),
        new Product('saccouche','15 pouces','src/assets/images/product/8.png'),
      ];
    getProducts(){
        return this.Products.slice();
    }
}