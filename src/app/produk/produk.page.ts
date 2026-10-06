import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang';
import { Transaksi, TransaksiService } from '../transaksi';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  @ViewChild('aboutContent', { read: ElementRef })
  private pageContent!: ElementRef<HTMLElement>;

  searchTerm: string = '';
  defaultImage: string = 'https://static.thenounproject.com/png/default-image-icon-4595376-512.png';

  constructor(
    public barangService: Barang,
    public transaksiService: TransaksiService,
    private router: Router,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {}
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
  get filteredProducts() {
    if (!this.searchTerm) {
      return this.barangService.products;
    }
    return this.barangService.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetail(product: any) {
    this.router.navigate(['/produkdetail', product.id]);
  }

  onImageError(event: any): void {
    event.target.src = this.defaultImage;
  }
}