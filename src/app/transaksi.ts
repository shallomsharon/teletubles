import { Injectable } from '@angular/core';

export interface TransaksiItem {
  barang: {
    name: string;
    price: number;
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
  listTransaksi: Transaksi[] = [
    {
      transaksiID: 'TRX001',
      transaksiCode: 'TRX-20260926-001',
      transaksiDate: new Date('2026-09-26T08:30:00'),
      totalAmount: 68000,
      transaksiItems: [
        { barang: { name: 'Beras', price: 25000 }, jumlah: 2, subtotal: 50000 },
        { barang: { name: 'Teh Pucuk', price: 6000 }, jumlah: 3, subtotal: 18000 }
      ]
    },
    {
      transaksiID: 'TRX002',
      transaksiCode: 'TRX-20260926-002',
      transaksiDate: new Date('2026-09-26T14:15:00'),
      totalAmount: 52000,
      transaksiItems: [
        { barang: { name: 'Chiki Coklat', price: 10000 }, jumlah: 2, subtotal: 20000 },
        { barang: { name: 'Chitato Lite Salmon', price: 12000 }, jumlah: 1, subtotal: 12000 },
        { barang: { name: 'Roma Kelapa', price: 20000 }, jumlah: 1, subtotal: 20000 }
      ]
    },
    {
      transaksiID: 'TRX003',
      transaksiCode: 'TRX-20260927-001',
      transaksiDate: new Date('2026-09-27T09:10:00'),
      totalAmount: 60000,
      transaksiItems: [
        { barang: { name: 'Sania', price: 30000 }, jumlah: 2, subtotal: 60000 }
      ]
    },
    {
      transaksiID: 'TRX004',
      transaksiCode: 'TRX-20260927-002',
      transaksiDate: new Date('2026-10-08T11:45:00'),
      totalAmount: 36000,
      transaksiItems: [
        { barang: { name: 'Teh Pucuk', price: 6000 }, jumlah: 4, subtotal: 24000 },
        { barang: { name: 'Chiki Coklat', price: 10000 }, jumlah: 1, subtotal: 10000 }
      ]
    },
    {
      transaksiID: 'TRX005',
      transaksiCode: 'TRX-20260928-001',
      transaksiDate: new Date('2026-09-28T10:00:00'),
      totalAmount: 70000,
      transaksiItems: [
        { barang: { name: 'Beras', price: 25000 }, jumlah: 1, subtotal: 25000 },
        { barang: { name: 'Roma Kelapa', price: 20000 }, jumlah: 1, subtotal: 20000 },
        { barang: { name: 'Tango Vanilla', price: 15000 }, jumlah: 1, subtotal: 15000 },
        { barang: { name: 'Japota Original', price: 10000 }, jumlah: 1, subtotal: 10000 }
      ]
    },
    {
      transaksiID: 'TRX006',
      transaksiCode: 'TRX-20260928-002',
      transaksiDate: new Date('2026-09-28T16:20:00'),
      totalAmount: 31000,
      transaksiItems: [
        { barang: { name: 'Happy Cow', price: 8000 }, jumlah: 2, subtotal: 16000 },
        { barang: { name: 'Tango Vanilla', price: 15000 }, jumlah: 1, subtotal: 15000 }
      ]
    },
    {
      transaksiID: 'TRX007',
      transaksiCode: 'TRX-20260929-001',
      transaksiDate: new Date('2026-09-29T13:00:00'),
      totalAmount: 42000,
      transaksiItems: [
        { barang: { name: 'Chitato Lite Salmon', price: 12000 }, jumlah: 1, subtotal: 12000 },
        { barang: { name: 'Paddle Pop', price: 5000 }, jumlah: 6, subtotal: 30000 }
      ]
    },
    {
      transaksiID: 'TRX008',
      transaksiCode: 'TRX-20260929-002',
      transaksiDate: new Date('2026-09-29T18:40:00'),
      totalAmount: 50000,
      transaksiItems: [
        { barang: { name: 'Beras', price: 25000 }, jumlah: 2, subtotal: 50000 }
      ]
    },
    {
      transaksiID: 'TRX009',
      transaksiCode: 'TRX-20260930-001',
      transaksiDate: new Date('2026-09-30T08:15:00'),
      totalAmount: 48000,
      transaksiItems: [
        { barang: { name: 'Teh Pucuk', price: 6000 }, jumlah: 3, subtotal: 18000 },
        { barang: { name: 'Japota Original', price: 10000 }, jumlah: 3, subtotal: 30000 }
      ]
    },
    {
      transaksiID: 'TRX010',
      transaksiCode: 'TRX-20260930-002',
      transaksiDate: new Date('2026-09-30T19:30:00'),
      totalAmount: 45000,
      transaksiItems: [
        { barang: { name: 'Sania', price: 30000 }, jumlah: 1, subtotal: 30000 },
        { barang: { name: 'Tango Vanilla', price: 15000 }, jumlah: 1, subtotal: 15000 }
      ]
    }
  ];

  constructor() { }

  getRiwayat(): Transaksi[] {
    return [...this.listTransaksi].sort((a, b) => {
      return new Date(b.transaksiDate).getTime() - new Date(a.transaksiDate).getTime();
    });
  }

  tambahTransaksi(transaksi: Transaksi): void {
    this.listTransaksi.unshift(transaksi);
  }

  getTransaksiHariIni(): number {
    const today = new Date().toDateString();

    return this.getRiwayat().filter(transaksi => {
      const tDate = new Date(transaksi.transaksiDate).toDateString();
      return tDate === today;
    }).length;
  }
}