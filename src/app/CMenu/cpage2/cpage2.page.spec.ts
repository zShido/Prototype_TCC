import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cpage2Page } from './cpage2.page';

describe('Cpage2Page', () => {
  let component: Cpage2Page;
  let fixture: ComponentFixture<Cpage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
