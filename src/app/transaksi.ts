import { Injectable } from '@angular/core';

export interface TransaksiItem {
  barang: {
    name: string;
    price: number;
    stock: number;
    hargaBeli: number;
    image: string;
    description: string;
  };
  jumlah: number;
  subtotal: number;
}

export interface Transaksi {
  transaksiID: string;
  transaksiCode: string;
  transaksiDate: Date;
  transaksiItems: TransaksiItem[];
  totalAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
  private listTransaksi: Transaksi[] = [
    {
      transaksiID: 'TRX001',
      transaksiCode: 'TRX-20260926-001',
      transaksiDate: new Date('2026-09-26T08:30:00'),
      totalAmount: 68000,
      transaksiItems: [
        {
          barang: {
            name: 'Beras',
            price: 25000,
            stock: 50,
            hargaBeli: 20000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDpHqJY5l8DLjACiSZxGCQjQ7IdHrHKQyHlw-kM0dFzYVSrWhanObW1M&s=10',
            description: 'Beras super premium kualitas pilihan.'
          },
          jumlah: 2,
          subtotal: 50000
        },
        {
          barang: {
            name: 'Teh Pucuk',
            price: 6000,
            stock: 20,
            hargaBeli: 5000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZOf4G3k542HPl1t6oM3v3gU35w1w2w&s=10',
            description: 'Minuman teh melati segar kemasan botol.'
          },
          jumlah: 3,
          subtotal: 18000
        }
      ]
    },
    {
      transaksiID: 'TRX002',
      transaksiCode: 'TRX-20260926-002',
      transaksiDate: new Date('2026-09-26T14:15:00'),
      totalAmount: 52000,
      transaksiItems: [
        {
          barang: {
            name: 'Chiki Coklat',
            price: 10000,
            stock: 150,
            hargaBeli: 5000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxW3s2f1d2bfvfsEG9x_eauhz0mnUSCkXt4LI6bu6ww&s=10',
            description: 'Makanan ringan rasa coklat manis.'
          },
          jumlah: 2,
          subtotal: 20000
        },
        {
          barang: {
            name: 'Chitato Lite Salmon',
            price: 12000,
            stock: 85,
            hargaBeli: 7000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MNQqnoy7oXvEK2Qyd2f6Og3ijgq8YP7na1DMDGCJCw&s=10',
            description: 'Keripik kentang rasa salmon teriyaki.'
          },
          jumlah: 1,
          subtotal: 12000
        },
        {
          barang: {
            name: 'Roma Kelapa',
            price: 20000,
            stock: 40,
            hargaBeli: 15000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYG_lWHyQK4d8IruHOzQB-QtFBjmZ4TouMoBHcbPEYQ&s=10',
            description: 'Biskuit renyah dari kelapa asli.'
          },
          jumlah: 1,
          subtotal: 20000
        }
      ]
    }
  ];

  constructor() { }

  getRiwayat(): Transaksi[] {
    return this.listTransaksi;
  }

  tambahTransaksi(transaksi: Transaksi): void {
    this.listTransaksi.unshift(transaksi);
  }
}