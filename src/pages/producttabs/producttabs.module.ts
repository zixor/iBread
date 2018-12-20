import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProducttabsPage } from './producttabs';

@NgModule({
  declarations: [
    ProducttabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProducttabsPage),
  ],
})
export class ProducttabsPageModule {}
