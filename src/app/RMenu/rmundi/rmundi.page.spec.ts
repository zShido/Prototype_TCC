import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RMundiPage } from './rmundi.page';

describe('RMundiPage', () => {
  let component: RMundiPage;
  let fixture: ComponentFixture<RMundiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RMundiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
