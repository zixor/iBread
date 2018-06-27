
import { Brand } from "./brand.model";
import { Ingredient } from "./product.model";

export interface Inventory {
  id?:number;
  ingredient:Ingredient;
  brand:Brand;
  quantity: number;
  expiration: Date;
  price: number;
}
