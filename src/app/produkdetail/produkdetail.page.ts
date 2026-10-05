import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barang } from '../barang';
import { TransaksiService } from '../transaksi';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {

  defaultImage: string = 'https://static.thenounproject.com/png/default-image-icon-4595376-512.png';
  index: number = 0;
  product: any;

  constructor(
    private barangService: Barang, private transaksiService: TransaksiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.transaksiService && this.transaksiService.listTransaksi) {
      this.barangService.updateTerjual(this.transaksiService.listTransaksi);
    }
    
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.product = this.barangService.products[this.index];
    });
  }

  goToEdit() {
    //this.route.navigate(['/editproduk']);
  }

  onImageError(event: any): void {
    event.target.src = this.defaultImage;
  }
}