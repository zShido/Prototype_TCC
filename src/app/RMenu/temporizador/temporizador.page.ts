import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  alertButtons = ['Entendido']

  helpButtons = ['Entendido']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessMundi(){
    this.navCtrl.navigateBack('/rmundi')
  }

  accessCronometro(){
    this.navCtrl.navigateForward('/cronometro')
  }

  accessAlarme(){
    this.navCtrl.navigateForward('/relogio')
  }
}
