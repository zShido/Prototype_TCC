import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    BackgroundComponent
  ]
})
export class ComponentsModule { }
