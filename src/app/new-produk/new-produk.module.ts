import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { NewProdukPageRoutingModule } from './new-produk-routing.module';

import { NewProdukPage } from './new-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewProdukPageRoutingModule
  ],
  declarations: [NewProdukPage]
})
export class NewProdukPageModule {}
