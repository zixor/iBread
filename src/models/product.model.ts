import { Ingredient } from "./Ingredient";

export interface Product {
  id?:number;
  name:string;
  portions:number;
  portionweight:number;
  saleprice:number;
  ingredientList:Ingredient[];
}
