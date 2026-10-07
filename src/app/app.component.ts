import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() { }

  logout() {
    const isConfirmed = confirm('Apakah Anda yakin ingin keluar?');
    if (isConfirmed) {
      alert('Berhasil keluar dari akun.');
    }
  }
}
