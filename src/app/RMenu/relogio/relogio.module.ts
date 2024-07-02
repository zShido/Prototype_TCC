import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelogioPageRoutingModule } from './relogio-routing.module';

import { RelogioPage } from './relogio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelogioPageRoutingModule
  ],
  declarations: [RelogioPage]
})
export class RelogioPageModule {}
