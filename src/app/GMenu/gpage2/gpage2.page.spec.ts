import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gpage2Page } from './gpage2.page';

describe('Gpage2Page', () => {
  let component: Gpage2Page;
  let fixture: ComponentFixture<Gpage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Gpage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
