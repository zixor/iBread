import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InventoryPage } from '../pages/inventory/inventory';
import { ProvidersPage } from '../pages/providers/providers';
import { BrandsPage } from '../pages/brands/brands';
import { AboutPage } from '../pages/about/about';
import { ProductPage } from '../pages/product/product';
import { ListProductsPage } from '../pages/list-products/list-products';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Lista Mercado', component: ListPage },
      { title: 'Productos', component: ListProductsPage },
      { title: 'Inventario', component: InventoryPage },
      { title: 'Proveedores', component: ProvidersPage },
      { title: 'Marcas', component: BrandsPage },
      { title: 'About', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
