import { Component, OnInit } from '@angular/core';
import { Transaksi, TransaksiService } from '../transaksi';
import { Barang } from '../barang';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  defaultImage: string = 'https://static.thenounproject.com/png/default-image-icon-4595376-512.png';
  searchTerm: string = '';
  transaksiList: Transaksi[] = [];

  constructor(public transaksiService: TransaksiService, public barangService: Barang) { }

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.transaksiList = this.transaksiService.getRiwayat();
  }

  get filteredTransaksi() {
    if (!this.searchTerm.trim()) {
      return this.transaksiList;
    }
    const term = this.searchTerm.toLowerCase();
    return this.transaksiList.filter(t =>
      t.transaksiCode.toLowerCase().includes(term) ||
      new Date(t.transaksiDate).toLocaleDateString().toLowerCase().includes(term)
    );
  }

  getImage(productName: string): string {
    const foundProduct = this.barangService.products.find(
      p => p.name === productName
    );

    if (foundProduct && foundProduct.image && foundProduct.image.trim() !== '') {
      return foundProduct.image;
    }
    return this.defaultImage;
  }

  onImageError(event: any): void {
    event.target.src = this.defaultImage;
  }
}
