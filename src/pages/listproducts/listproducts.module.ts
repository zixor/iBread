import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListproductsPage } from './listproducts';

@NgModule({
  declarations: [
    ListproductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListproductsPage),
  ],
})
export class ListproductsPageModule {}
