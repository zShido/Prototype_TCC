import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.page.html',
  styleUrls: ['./cronometro.page.scss'],
})
export class CronometroPage implements OnInit {

  alertButtons = ['Entendido']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessMundi(){
    this.navCtrl.navigateBack('/rmundi')
  }

  accessAlarme(){
    this.navCtrl.navigateBack('/relogio')
  }

  accessTemporizador(){
    this.navCtrl.navigateForward('/temporizador')
  }

}
