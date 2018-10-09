
import { Brand } from "./brand.model";
import { Ingredient } from "./Ingredient";

export interface Inventory {
  id?:number;
  ingredient:Ingredient;
  brand:Brand;
  quantity: number;
  expiration: Date;
  price: number;
}
