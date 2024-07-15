import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';
@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.page.html',
  styleUrls: ['./relogio.page.scss'],
})
export class RelogioPage implements OnInit {

  constructor(private navCtrl : NavController, private alertService : AlertService) { }

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

  alertaInfo(){
    this.alertService.presentAlert("Prototype","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que nçao são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("Prototype","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
