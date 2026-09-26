import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang'; 
import { TransaksiService, Transaksi, TransaksiItem } from '../transaksi'; 

@Component({
  selector: 'app-beli',
  templateUrl: './beli.page.html',
  styleUrls: ['./beli.page.scss'],
  standalone: false,
})
export class BeliPage implements OnInit {
  availableProducts: any[] = [];
  cartItems: any[] = [];

  constructor(
    private barangService: Barang,
    private transaksiService: TransaksiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshAvailableProducts();
    this.tambahProduk();
  }

  ionViewWillEnter() {
    this.refreshAvailableProducts();
  }

  refreshAvailableProducts() {
    this.availableProducts = this.barangService.products.filter(p => p.stock > 0);
  }

  tambahProduk() {
    this.cartItems.push({
      selectedProduct: null,
      quantity: 0
    });
  }

  increaseQty(item: any) {
    if (item.selectedProduct) {
      if (item.quantity < item.selectedProduct.stock) {
        item.quantity++;
      }
    }
  }

  decreaseQty(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  onProductChange(item: any) {
    item.quantity = 1; 
  }

  konfirmasiTransaksi() {
    const validItems = this.cartItems.filter(item => item.selectedProduct != null && item.quantity > 0);

    if (validItems.length === 0) {
      alert('Silakan pilih produk dan tentukan jumlahnya terlebih dahulu.');
      return;
    }

    let totalAmount = 0;
    const transaksiItems: TransaksiItem[] = [];

    for (const item of validItems) {
      const product = item.selectedProduct;
      const subtotal = product.price * item.quantity;
      totalAmount += subtotal;

      transaksiItems.push({
        barang: {
          name: product.name,
          price: product.price,
          stock: product.stock - item.quantity,
          hargaBeli: product.hargaBeli,
          image: product.image,
          description: product.description
        },
        jumlah: item.quantity,
        subtotal: subtotal
      });
      product.stock -= item.quantity;
      if (product.terjual !== undefined) {
        product.terjual += item.quantity;
      } else {
        product.terjual = item.quantity;
      }
    }

    this.barangService.saveProducts();

    const now = new Date();
    const dateString = now.getFullYear().toString() +
                       (now.getMonth() + 1).toString().padStart(2, '0') +
                       now.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(100 + Math.random() * 900); // 3 digit acak

    const newTransaksi: Transaksi = {
      transaksiID: 'TRX' + now.getTime(),
      transaksiCode: `TRX-${dateString}-${randomNum}`,
      transaksiDate: now,
      transaksiItems: transaksiItems,
      totalAmount: totalAmount
    };
    this.transaksiService.tambahTransaksi(newTransaksi);

    this.cartItems = [];
    this.tambahProduk();
    this.router.navigate(['/transaksi']);
  }
}