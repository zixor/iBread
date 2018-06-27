import { Ingredient } from "./product.model";

export interface Bread {
  id?:number;
  name:string;
  ingredient:Ingredient;
  isFlour:boolean;
  quantity:number;
  unity:number;
  percentage:number;
  observations:string;
}
