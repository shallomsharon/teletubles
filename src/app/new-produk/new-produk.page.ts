import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Barang } from '../barang';

@Component({
  selector: 'app-new-produk',
  templateUrl: './new-produk.page.html',
  styleUrls: ['./new-produk.page.scss'],
  standalone: false,
})

export class NewProdukPage implements OnInit {
  addForm!: FormGroup;

  arr_price: number[] = [];
  public alertButtons = ['OK'];
  constructor(
    private barang: Barang,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      hargaBeli: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      image: ['']
    });
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  }

  add() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    const formValue = this.addForm.value;
    this.barang.addProduk(
      formValue.name,
      Number(formValue.price),
      Number(formValue.stock),
      Number(formValue.hargaBeli),
      formValue.image,
      formValue.description
    );

    this.router.navigate(['/produk']);
  }
}
