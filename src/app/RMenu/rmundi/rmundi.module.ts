import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RMundiPageRoutingModule } from './rmundi-routing.module';

import { RMundiPage } from './rmundi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RMundiPageRoutingModule
  ],
  declarations: [RMundiPage]
})
export class RMundiPageModule {}
