import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  
  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

}
