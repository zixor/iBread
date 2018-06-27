import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Brand } from '../../models/brand.model';

/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {

  private brands: Brand[] = [];
  private brand: Brand;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.brand = {name:"Marcadsdada"};
   this.brands.push(this.brand);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
  }

  edit(brand:Brand){

  }

  onTrash(brand:Brand){

  }

  onAddClick(){

  }

  doRefresh(){}

}
