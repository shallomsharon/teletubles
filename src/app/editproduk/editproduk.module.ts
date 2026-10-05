import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { EditprodukPageRoutingModule } from './editproduk-routing.module';

import { EditprodukPage } from './editproduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditprodukPageRoutingModule
  ],
  declarations: [EditprodukPage]
})
export class EditprodukPageModule {}
