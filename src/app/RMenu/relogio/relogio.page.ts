import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.page.html',
  styleUrls: ['./relogio.page.scss'],
})
export class RelogioPage implements OnInit {

  alertButtons = ['Entendido']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessMundi(){
    this.navCtrl.navigateForward('/rmundi')
  }

  accessCronometro(){
    this.navCtrl.navigateForward('/cronometro')
  }

  accessTemporizador(){
    this.navCtrl.navigateForward('/temporizador')
  }

}
