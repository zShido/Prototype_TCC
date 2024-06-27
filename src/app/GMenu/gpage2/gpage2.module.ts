import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Gpage2PageRoutingModule } from './gpage2-routing.module';

import { Gpage2Page } from './gpage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gpage2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Gpage2Page]
})
export class Gpage2PageModule {}
