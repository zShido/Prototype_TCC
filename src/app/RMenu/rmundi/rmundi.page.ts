import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rmundi',
  templateUrl: './rmundi.page.html',
  styleUrls: ['./rmundi.page.scss'],
})
export class RMundiPage implements OnInit {

  alertButtons = ['Entendido']

  helpButtons = ['Entendido']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessAlarme(){
    this.navCtrl.navigateBack('/relogio')
  }

  accessCronometro(){
    this.navCtrl.navigateForward('/cronometro')
  }

  accessTemporizador(){
    this.navCtrl.navigateForward('/temporizador')
  }

}
