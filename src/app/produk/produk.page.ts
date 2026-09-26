import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang'; 

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  searchTerm: string = '';

  constructor(private router: Router, private barangService: Barang) { }

  ngOnInit() { }
  get filteredProducts() {
    if (!this.searchTerm) {
      return this.barangService.products;
    }
    return this.barangService.products.filter(p => 
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetail(product: any) {
    this.router.navigate(['/produkdetail'], { state: { product: product } });
  }
}