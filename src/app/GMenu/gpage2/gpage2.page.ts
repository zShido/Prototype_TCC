import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-gpage2',
  templateUrl: './gpage2.page.html',
  styleUrls: ['./gpage2.page.scss'],
})
export class Gpage2Page implements OnInit {

  alertButtons = ['Entendi']
  helpButtons = ['Entendido']

  constructor(private navCtrl : NavController, private alertService: AlertService) { }

  ngOnInit() {
  }

  accessImagens(){
    this.navCtrl.navigateBack('/galeria')
  }

  alertaInfo(){
    this.alertService.presentAlert("Prototype","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que nçao são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("Prototype","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
