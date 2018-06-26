import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListproductsPage } from '../pages/listproducts/listproducts';
import { ProvidersPage } from '../pages/providers/providers';
import { BrandsPage } from '../pages/brands/brands';
import { InventoryPage } from '../pages/inventory/inventory';
import { ConversionfactorPage } from '../pages/conversionfactor/conversionfactor';
import { ProductPage } from '../pages/product/product';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListproductsPage,
    ProvidersPage,
    BrandsPage,
    InventoryPage,
    ConversionfactorPage,
    ProductPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListproductsPage,
    ProvidersPage,
    BrandsPage,
    InventoryPage,
    ConversionfactorPage,
    ProductPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
