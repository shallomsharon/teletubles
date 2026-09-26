import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  searchTerm: string = '';
  products = [
    { id: 1, name: 'Beras', price: 25000, stock: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDpHqJY5l8DLjACiSZxGCQjQ7IdHrHKQyHlw-kM0dFzYVSrWhanObW1M&s=10' },
    { id: 2, name: 'Chiki Coklat', price: 10000, stock: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxW3s2f1d2bfvfsEG9x_eauhz0mnUSCkXt4LI6bu6ww&s=10' },
    { id: 3, name: 'Chitato Lite Salmon', price: 12000, stock: 85, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MNQqnoy7oXvEK2Qyd2f6Og3ijgq8YP7na1DMDGCJCw&s=10' },
    { id: 4, name: 'Roma Kelapa', price: 20000, stock: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYG_lWHyQK4d8IruHOzQB-QtFBjmZ4TouMoBHcbPEYQ&s=10' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {

  }
  get filteredProducts() {
    if (!this.searchTerm) {
      return this.products;
    }
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetail(product: any) {
    this.router.navigate(['/produk-detail'], { state: { product: product } });
  }
}
