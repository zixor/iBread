import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { AboutPage } from '../about/about';
import { ListPage } from '../list/list';

/**
 * Generated class for the ProducttabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producttabs',
  templateUrl: 'producttabs.html',
})
export class ProducttabsPage {

  tab1Root = ProductPage;
  tab2Root = AboutPage;
  tab3Root = ListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProducttabsPage');
  }

}
