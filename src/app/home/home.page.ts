import { Component, OnInit } from '@angular/core';
import { Barang } from '../barang';
import { TransaksiService } from '../transaksi';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  isDarkMode: boolean = false;

  constructor(
    public barangService: Barang,
    public transaksiService: TransaksiService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    const savedTheme = localStorage.getItem('darkMode');
    this.isDarkMode = savedTheme === 'true';
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  onToggleDarkMode(event: any) {
    this.isDarkMode = event.detail.checked;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  ionViewDidEnter() {
    this.animatePageSlide();
  }

  animatePageSlide() {
    const contentElement = document.querySelector('#aboutContent');
    if (!contentElement) return;

    this.animationCtrl
      .create()
      .addElement(contentElement)
      .duration(400)
      .iterations(1)
      .fromTo('transform', 'translateX(50px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1')
      .play();
  }

  countTotalProducts(): number {
    return this.barangService.products.length;
  }

  countTotalTransactions(): number {
    return this.transaksiService.getRiwayat().length;
  }

  refreshData() {
    if (this.transaksiService?.listTransaksi) {
      this.barangService.updateTerjual(this.transaksiService.listTransaksi);
    }
  }

  getMostSoldProduct(): string {
    this.refreshData();

    const terlaris = this.barangService.getProdukTerlaris(1);

    if (terlaris && terlaris.length > 0 && terlaris[0].terjual > 0) {
      return terlaris[0].name;
    }

    return 'Belum ada';
  }
}