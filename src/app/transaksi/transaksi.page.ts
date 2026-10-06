import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Transaksi, TransaksiService } from '../transaksi';
import { Barang } from '../barang';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  @ViewChild('aboutContent', { read: ElementRef })
  private pageContent!: ElementRef<HTMLElement>;

  @ViewChild('cartButton', { read: ElementRef })
  private cartButton!: ElementRef<HTMLElement>;

  isOpeningBeli = false;
  defaultImage: string = 'https://static.thenounproject.com/png/default-image-icon-4595376-512.png';
  searchTerm: string = '';
  transaksiList: Transaksi[] = [];

  constructor(
    public transaksiService: TransaksiService,
    public barangService: Barang,
    private animationCtrl: AnimationController,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadTransactions();
  }

  ionViewDidEnter() {
    this.animatePageSlide();
  }

  
  animatePageSlide() {
    this.animationCtrl
      .create()
      .addElement(this.pageContent.nativeElement)
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(80px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1')
      .play();
  }

  async goToBeli(): Promise<void> {
    if (this.isOpeningBeli) return;
    this.isOpeningBeli = true;

    await this.animationCtrl
      .create()
      .addElement(this.cartButton.nativeElement)
      .duration(450)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.6, transform: 'scale(1.45)' },
        { offset: 1, transform: 'scale(1.15)' },
      ])
      .play();

    await this.router.navigate(['/beli']);
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
