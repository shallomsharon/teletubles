import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Barang {
    selectedProduct: any = null;
    defaultProducts = [
        { name: 'Beras', price: 25000, stock: 50, hargaBeli: 20000, terjual: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDpHqJY5l8DLjACiSZxGCQjQ7IdHrHKQyHlw-kM0dFzYVSrWhanObW1M&s=10', description: 'Beras super premium kualitas pilihan.' },
        { name: 'Chiki Coklat', price: 10000, stock: 150, hargaBeli: 5000, terjual: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxW3s2f1d2bfvfsEG9x_eauhz0mnUSCkXt4LI6bu6ww&s=10', description: 'Makanan ringan rasa coklat manis.' },
        { name: 'Chitato Lite Salmon', price: 12000, stock: 85, hargaBeli: 7000, terjual: 100 , image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MNQqnoy7oXvEK2Qyd2f6Og3ijgq8YP7na1DMDGCJCw&s=10', description: 'Keripik kentang rasa salmon teriyaki.' },
        { name: 'Roma Kelapa', price: 20000, stock: 40, hargaBeli: 15000, terjual: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYG_lWHyQK4d8IruHOzQB-QtFBjmZ4TouMoBHcbPEYQ&s=10', description: 'Biskuit renyah dari kelapa asli.' },
        { name: 'Teh Pucuk', price: 6000, stock: 20, hargaBeli: 5000, terjual: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZOf4G3k542HPl1t6oM3v3gU35w1w2w&s=10', description: 'Minuman teh melati segar kemasan botol.' },
        { name: 'Japota Original', price: 10000, stock: 30, hargaBeli: 5000, terjual: 70, image: 'https://image.astronauts.cloud/product-images/2026/7/japotanewpackagingc_7427af77-a76a-488a-82c1-93777e8e70d2_900x900.jpg' , description: 'Snack Rasa asin original.'},
        { name: 'Tango Vanilla', price: 15000, stock: 40, hargaBeli: 10000, terjual: 90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheVjlTS1WbUKPNkAAfK6iipmWJ3XzOa8t0lxkBStGYA&s=10', description: 'Wafer Manis.'},
        { name: 'Sania', price: 30000, stock: 15, hargaBeli: 25000, terjual: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTzRRvnmy4IZYDvQVPQ4Evz6hrpG6xLl3cGkA2LxcOQ&s=10', description: 'Minyak bagus.'},
        { name: 'Happy Cow', price: 8000, stock: 4, hargaBeli: 5000, terjual: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEXCks1f-Bp9b4vOpdRWXlvvUYfjh56DN847rRBMc2A&s=10', description: 'Ada coklatnya loh.'},
        { name: 'Paddle Pop', price: 5000, stock: 50, hargaBeli: 5000, terjual: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRc-pikARcObf2jN4tBWGXAQt_okDl6cE5dATZf57Vbg&s=10', description: 'Singa Maniez.'}
    
    
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


    addProduk(p_name: string, p_price: number, p_stock: number, p_hargaBeli: number,  p_terjual: number, p_image: string, p_description: string) {
        this.products.push({
            name: p_name,
            price: p_price,
            stock: p_stock,
            hargaBeli: p_hargaBeli,
            terjual: p_terjual,
            image: p_image,
            description: p_description,
        });


        this.saveProducts();
    }
}