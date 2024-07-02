import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemporizadorPage } from './temporizador.page';

describe('TemporizadorPage', () => {
  let component: TemporizadorPage;
  let fixture: ComponentFixture<TemporizadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporizadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
