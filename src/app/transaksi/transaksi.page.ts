import { Component, OnInit } from '@angular/core';
import { Transaksi, TransaksiService } from '../transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  searchTerm: string = '';
  transaksiList: Transaksi[] = [];

  constructor(private transaksiService: TransaksiService) { }

  ngOnInit() {
    this.loadTransactions();
  }

  ionViewWillEnter() {
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

}
