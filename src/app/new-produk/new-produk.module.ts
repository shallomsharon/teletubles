import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { NewProdukPageRoutingModule } from './new-produk-routing.module';

import { NewProdukPage } from './new-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProdukPageRoutingModule
  ],
  declarations: [NewProdukPage]
})
export class NewProdukPageModule {}
