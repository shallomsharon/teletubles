import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Barang {
    products = [
    { name: 'Beras', price: 25000, stock: 50, hargaBeli: 20000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDpHqJY5l8DLjACiSZxGCQjQ7IdHrHKQyHlw-kM0dFzYVSrWhanObW1M&s=10' },
    { name: 'Chiki Coklat', price: 10000, stock: 150,hargaBeli: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxW3s2f1d2bfvfsEG9x_eauhz0mnUSCkXt4LI6bu6ww&s=10' },
    { name: 'Chitato Lite Salmon', price: 12000, stock: 85,hargaBeli: 7000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MNQqnoy7oXvEK2Qyd2f6Og3ijgq8YP7na1DMDGCJCw&s=10' },
    { name: 'Roma Kelapa', price: 20000, stock: 40,hargaBeli: 15000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYG_lWHyQK4d8IruHOzQB-QtFBjmZ4TouMoBHcbPEYQ&s=10' },
    { name: 'Teh Pucuk', price: 6000, stock: 20, hargaBeli: 5000, image: 'https://ionicframework.com/docs/api/card'},
    ];    
}
