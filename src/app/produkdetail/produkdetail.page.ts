import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {

  constructor(
    public barangService: Barang,
    private router: Router
  ) {}

  ngOnInit() {}

  get product() {
    return this.barangService.selectedProduct;
  }

  ionViewWillEnter() {
    if (!this.product) {
      this.router.navigate(['/produk']);
    }
  }

  goToEdit() {
    this.router.navigate(['/editproduk']);
  }
}