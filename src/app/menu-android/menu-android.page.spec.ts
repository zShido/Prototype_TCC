import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAndroidPage } from './menu-android.page';

describe('MenuAndroidPage', () => {
  let component: MenuAndroidPage;
  let fixture: ComponentFixture<MenuAndroidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAndroidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
