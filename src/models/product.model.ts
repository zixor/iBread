import { Ingredient } from "./Ingredient";

export interface Product {
  id?:number;
  name:string;
  portions:number;
  margin:number;
  utility:number;
  portionweight:number;
  saleprice:number;
  ingredientList:Ingredient[];
}
