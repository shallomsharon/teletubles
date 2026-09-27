import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})
export class EditprodukPage implements OnInit {
  originalProduct: any = null;

  edit_name: string = '';
  edit_hargaBeli: number = 0;
  edit_price: number = 0;
  edit_stock: number = 0;
  edit_image: string = '';
  edit_description: string = '';

  constructor(private router: Router, private barangService: Barang) {}

  ngOnInit() {
    this.loadProductData();
  }

  ionViewWillEnter() {
    this.originalProduct = this.barangService.selectedProduct;

    if (this.originalProduct) {
      this.edit_name = this.originalProduct.name;
      this.edit_hargaBeli = this.originalProduct.hargaBeli;
      this.edit_price = this.originalProduct.price;
      this.edit_stock = this.originalProduct.stock;
      this.edit_image = this.originalProduct.image;
      this.edit_description = this.originalProduct.description || '';
    } else {
      this.router.navigate(['/produk']);
    }
  }

  private loadProductData() {
    this.originalProduct = this.barangService.selectedProduct;

    if (this.originalProduct) {
      this.edit_name = this.originalProduct.name;
      this.edit_hargaBeli = this.originalProduct.hargaBeli;
      this.edit_price = this.originalProduct.price;
      this.edit_stock = this.originalProduct.stock;
      this.edit_image = this.originalProduct.image;
      this.edit_description = this.originalProduct.description || '';
    } else {
      this.router.navigate(['/produk']);
    }
  }

  saveProduct() {
    const index = this.barangService.products.findIndex(
      p => p.name === this.originalProduct.name
    );

    if (index !== -1) {
      const updatedProduct = {
        name: this.edit_name,
        hargaBeli: Number(this.edit_hargaBeli),
        price: Number(this.edit_price),
        stock: Number(this.edit_stock),
        image: this.edit_image,
        description: this.edit_description,
        terjual: this.originalProduct.terjual || 0
      };

      this.barangService.products[index] = updatedProduct;
      this.barangService.selectedProduct = updatedProduct;
      this.barangService.saveProducts();

      this.router.navigate(['/produk']);
    }
  }
}