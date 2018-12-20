import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product.model';
import { IngredientPage } from '../ingredient/ingredient';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product: Product = {
    name: "",
    portions: null,
    portionweight: null,
    saleprice: null,
    margin:null,
    utility:null,
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

  onItemClick() {
    this.navCtrl.push(IngredientPage);
  }

  onTrash() { }

  onSave() { }

  minusClick() { }

  plusClick() { }

  addIngredient() { }

}
