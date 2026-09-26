import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeliPage } from './beli.page';

describe('BeliPage', () => {
  let component: BeliPage;
  let fixture: ComponentFixture<BeliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
