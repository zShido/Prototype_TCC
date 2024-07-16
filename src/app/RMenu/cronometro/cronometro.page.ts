import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.page.html',
  styleUrls: ['./cronometro.page.scss'],
})
export class CronometroPage implements OnInit {

  constructor(private navCtrl : NavController, private alertService : AlertService) { }

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

  alertaInfo(){
    this.alertService.presentAlert("TechSênior","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que não são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("TechSênior","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
