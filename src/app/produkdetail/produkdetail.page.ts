import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {
  product: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.product = navigation.extras.state['product'];
    }
  }

  ngOnInit() {
    if (!this.product) {
      this.router.navigate(['/produk']);
    }
  }
}