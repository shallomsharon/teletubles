import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProdukPage } from './new-produk.page';

const routes: Routes = [
  {
    path: '',
    component: NewProdukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProdukPageRoutingModule {}
