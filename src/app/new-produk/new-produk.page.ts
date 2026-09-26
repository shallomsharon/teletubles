import { Component, OnInit } from '@angular/core';
import { Barang } from '../barang';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-produk',
  templateUrl: './new-produk.page.html',
  styleUrls: ['./new-produk.page.scss'],
  standalone: false,
})
export class NewProdukPage implements OnInit {
  new_name: string = '';
  new_price: number = 0;
  new_stock: number = 0;
  new_hargaBeli: number = 0;
  new_terjual: number = 0;
  new_image: string = '';
  new_description: string='';

  arr_price: number[] = [];
  public alertButtons = ['OK'];
  constructor(
    private barang: Barang,
    private router: Router,
  ) {}

  ngOnInit() {}
  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  }

  submitpasta() {
    this.barang.addProduk(
      this.new_name,
      this.new_price,
      this.new_stock,
      this.new_hargaBeli,
      this.new_terjual,
      this.new_image,
      this.new_description,
    );
    this.router.navigate(['/produk']);
  }
}
