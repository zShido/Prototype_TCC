import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(private navCtrl : NavController, private alertService : AlertService) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessPage2(){
    this.navCtrl.navigateForward('/cpage2')
  }

  alertaInfo(){
    this.alertService.presentAlert("Prototype","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que nçao são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("Prototype","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
