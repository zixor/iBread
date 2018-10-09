import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product.model';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product: Product = {
    name: "",
    portions: 0,
    portionweight: 0,
    saleprice: 0,
    ingredientList: [
      {
        name: "dada",
        portionquantity: 0,
        totalquantity: 0,
        portion: 0,
        total: 0
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  onItemClick(){

  }

  onTrash(){}

  onSave(){}

  minusClick(){}

  plusClick(){}

  addIngredient(){}

}
