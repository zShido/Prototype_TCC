import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelogioPage } from './relogio.page';

describe('RelogioPage', () => {
  let component: RelogioPage;
  let fixture: ComponentFixture<RelogioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
