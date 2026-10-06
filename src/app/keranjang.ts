import { Injectable } from '@angular/core';
import { Barang } from '../app/barang';
import { TransaksiService, Transaksi, TransaksiItem } from '../app/transaksi';

@Injectable({
  providedIn: 'root',
})
export class KeranjangService {
  availableProducts: any[] = [];
  cartItems: any[] = [];

  constructor(
    private barangService: Barang,
    private transaksiService: TransaksiService,
  ) {}

  refreshAvailableProducts() {
    this.availableProducts = this.barangService.products.filter(
      (p) => p.stock > 0,
    );
  }

  tambahProduk() {
    this.cartItems.push({
      selectedProduct: null,
      quantity: 0,
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

  konfirmasiTransaksi(): boolean {
    const validItems = this.cartItems.filter(
      (item) => item.selectedProduct != null && item.quantity > 0,
    );

    if (validItems.length === 0) {
      alert('Silakan pilih produk dan tentukan jumlahnya terlebih dahulu.');
      return false;
    }

    let totalAmount = 0;
    const transaksiItems: TransaksiItem[] = [];

    for (const item of validItems) {
      const product = item.selectedProduct;
      const subtotal = product.price * item.quantity;
      totalAmount += subtotal;

      // 1. Kurangi stok dan tambahkan angka terjual langsung di objek referensi memori
      product.stock -= item.quantity;
      if (product.terjual !== undefined) {
        product.terjual += item.quantity;
      } else {
        product.terjual = item.quantity;
      }

      // 2. Buat objek item transaksi
      transaksiItems.push({
        barang: {
          name: product.name,
          price: product.price,
        },
        jumlah: item.quantity,
        subtotal: subtotal,
      });
    }

    // Pembuatan ID & Kode Transaksi
    const now = new Date();
    const dateString =
      now.getFullYear().toString() +
      (now.getMonth() + 1).toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(100 + Math.random() * 900); // 3 digit acak

    const newTransaksi: Transaksi = {
      transaksiID: 'TRX' + now.getTime(),
      transaksiCode: `TRX-${dateString}-${randomNum}`,
      transaksiDate: now,
      transaksiItems: transaksiItems,
      totalAmount: totalAmount,
    };

    // Simpan riwayat transaksi ke transaksiService di memori
    this.transaksiService.tambahTransaksi(newTransaksi);

    // Reset keranjang belanja
    this.cartItems = [];
    this.tambahProduk();
    return true;
  }
}