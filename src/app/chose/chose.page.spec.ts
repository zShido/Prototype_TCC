import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChosePage } from './chose.page';

describe('ChosePage', () => {
  let component: ChosePage;
  let fixture: ComponentFixture<ChosePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
