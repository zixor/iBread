import { Provider } from "./provider.model";
import { Brand } from "./brand.model";


export interface Ingredient {
  id?:number;
  name:string;
  provider:Provider;
  brand:Brand;
}
