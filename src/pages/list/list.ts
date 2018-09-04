import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MarketPlaceList } from '../../models/marketplacelist.model';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  selectedItem: any;
  icons: string[];
  items: MarketPlaceList[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {

    this.selectedItem = navParams.get('item');


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  add() {
    let prompt = this.alertCtrl.create({
      title: "Nuevo Producto",
      inputs: [
        {
          type: 'string',
          name: 'name',
          placeholder: "Nombre"
        },
        {
          type: 'number',
          name: 'price',
          placeholder: 'Precio'
        },
        {
          type: 'text',
          name: 'grossweight',
          placeholder: 'Peso Bruto gr!'
        },
        {
          type: 'text',
          name: 'netweight',
          placeholder: 'Peso Neto gr!'
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          handler: data => { }
        },
        {
          text: "Guardar",
          handler: data => {
            let currentPriceperunity: number = Number((data.price / data.grossweight).toFixed(2));
            let currentCorrectionfactor = Number((data.grossweight / data.netweight).toFixed(2));
            let currentPriceRealUnity = Number((currentPriceperunity / currentCorrectionfactor).toFixed(2));
            let detail: MarketPlaceList = {
              name: data.name,
              price: data.price,
              grossweight: data.grossweight,
              netweight: data.netweight,
              unity: "g",
              priceperunity: currentPriceperunity,
              correctionfactor: currentCorrectionfactor,
              priceperrealunity: currentPriceRealUnity,
              test: Number((data.netweight * currentPriceRealUnity).toFixed(2))
            }
            this.items.push(detail);
          }
        }
      ]
    });
    prompt.present();
  }
}
