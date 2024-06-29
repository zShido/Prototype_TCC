import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  pagegalert = ['Entendido']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  
  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessAlbuns(){
    this.navCtrl.navigateForward('/gpage2')
  }

}
