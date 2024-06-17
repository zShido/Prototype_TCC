import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { MenuAndroidPageRoutingModule } from './menu-android-routing.module';

import { MenuAndroidPage } from './menu-android.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAndroidPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuAndroidPage]
})
export class MenuAndroidPageModule {}
