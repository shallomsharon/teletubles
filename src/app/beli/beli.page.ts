import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { KeranjangService } from '../keranjang'; // Adjust import path if needed

@Component({
  selector: 'app-beli',
  templateUrl: './beli.page.html',
  styleUrls: ['./beli.page.scss'],
  standalone: false,
})
export class BeliPage implements OnInit {

  constructor(
    public keranjangService: KeranjangService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.keranjangService.refreshAvailableProducts();
    if (this.keranjangService.cartItems.length === 0) {
      this.keranjangService.tambahProduk();
    }
  }

  ionViewWillEnter() {
    this.keranjangService.refreshAvailableProducts();
  }

  // Getters & Delegates for template compatibility
  get availableProducts() {
    return this.keranjangService.availableProducts;
  }

  get cartItems() {
    return this.keranjangService.cartItems;
  }

  tambahProduk() {
    this.keranjangService.tambahProduk();
  }

  increaseQty(item: any) {
    this.keranjangService.increaseQty(item);
  }

  decreaseQty(item: any) {
    this.keranjangService.decreaseQty(item);
  }

  onProductChange(item: any) {
    this.keranjangService.onProductChange(item);
  }

  konfirmasiTransaksi() {
    const isSuccess = this.keranjangService.konfirmasiTransaksi();
    if (isSuccess) {
      this.navCtrl.navigateBack('/transaksi');
    }
  }
}