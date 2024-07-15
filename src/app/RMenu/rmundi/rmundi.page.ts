import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-rmundi',
  templateUrl: './rmundi.page.html',
  styleUrls: ['./rmundi.page.scss'],
})
export class RMundiPage implements OnInit {

  alertButtons = ['Entendido']

  helpButtons = ['Entendido']

  constructor(private navCtrl : NavController, private alertService : AlertService) { }

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

  alertaInfo(){
    this.alertService.presentAlert("Prototype","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que nçao são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("Prototype","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
