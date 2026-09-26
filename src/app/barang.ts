import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Barang {
  selectedProduct: any = null;
  defaultProducts = [
    { name: 'Beras', price: 25000, stock: 50, hargaBeli: 20000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDpHqJY5l8DLjACiSZxGCQjQ7IdHrHKQyHlw-kM0dFzYVSrWhanObW1M&s=10', description: 'Beras super premium kualitas pilihan.' },
    { name: 'Chiki Coklat', price: 10000, stock: 150, hargaBeli: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxW3s2f1d2bfvfsEG9x_eauhz0mnUSCkXt4LI6bu6ww&s=10', description: 'Makanan ringan rasa coklat manis.' },
    { name: 'Chitato Lite Salmon', price: 12000, stock: 85, hargaBeli: 7000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MNQqnoy7oXvEK2Qyd2f6Og3ijgq8YP7na1DMDGCJCw&s=10', description: 'Keripik kentang rasa salmon teriyaki.' },
    { name: 'Roma Kelapa', price: 20000, stock: 40, hargaBeli: 15000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYG_lWHyQK4d8IruHOzQB-QtFBjmZ4TouMoBHcbPEYQ&s=10', description: 'Biskuit renyah dari kelapa asli.' },
    { name: 'Teh Pucuk', price: 6000, stock: 20, hargaBeli: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZOf4G3k542HPl1t6oM3v3gU35w1w2w&s=10', description: 'Minuman teh melati segar kemasan botol.' },
  ];

  products: any[] = [];

  constructor() {
    this.loadProducts();
  }

 
  loadProducts() {
    const savedData = localStorage.getItem('products_data');
    if (savedData) {
      this.products = JSON.parse(savedData);
    } else {
      this.products = [...this.defaultProducts];
      this.saveProducts();
    }
  }

 
  saveProducts() {
    localStorage.setItem('products_data', JSON.stringify(this.products));
  }

  
  addPasta(p_name: string, p_price: number, p_stock: number, p_hargaBeli: number, p_image: string, p_description: string) {
    this.products.push({
      name: p_name,
      price: p_price,
      stock: p_stock,
      hargaBeli: p_hargaBeli,
      image: p_image,
      description: p_description
    });
    
   
    this.saveProducts();
  }
}