import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang';
import { TransaksiService } from '../transaksi';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {

  constructor(
    public barangService: Barang, public transaksiService: TransaksiService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.transaksiService && this.transaksiService.listTransaksi) {
      this.barangService.updateTerjual(this.transaksiService.listTransaksi);
    }
  }

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