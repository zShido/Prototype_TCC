import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cpage2PageRoutingModule } from './cpage2-routing.module';

import { Cpage2Page } from './cpage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cpage2PageRoutingModule
  ],
  declarations: [Cpage2Page]
})
export class Cpage2PageModule {}
