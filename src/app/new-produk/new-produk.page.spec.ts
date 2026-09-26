import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewProdukPage } from './new-produk.page';

describe('NewProdukPage', () => {
  let component: NewProdukPage;
  let fixture: ComponentFixture<NewProdukPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
