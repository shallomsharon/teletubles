import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Barang } from '../barang';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})

export class EditprodukPage implements OnInit {
  index: number = 0;
  editForm!: FormGroup;

  constructor(private route: ActivatedRoute, private barangService: Barang,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      hargaBeli: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      image: ['']
    });

    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.loadProductData();
    });
  }

  private loadProductData() {
    const currentProduct = this.barangService.products[this.index];
    if (currentProduct) {
      this.editForm.patchValue({
        name: currentProduct.name,
        description: currentProduct.description || '',
        hargaBeli: currentProduct.hargaBeli,
        price: currentProduct.price,
        stock: currentProduct.stock,
        image: currentProduct.image
      });
    } else {
      this.router.navigate(['/produk']);
    }
  }

  saveProduct() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    const currentProduct = this.barangService.products[this.index];
    const formValue = this.editForm.value;

    this.barangService.products[this.index] = {
      name: formValue.name,
      description: formValue.description,
      hargaBeli: Number(formValue.hargaBeli),
      price: Number(formValue.price),
      stock: Number(formValue.stock),
      image: formValue.image,
      terjual: currentProduct?.terjual || 0
    };

    this.router.navigate(['/produkdetail', this.index]);
  }
}