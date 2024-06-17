import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { ChosePageRoutingModule } from './chose-routing.module';

import { ChosePage } from './chose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChosePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChosePage]
})
export class ChosePageModule {}
