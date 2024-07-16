import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(private navCtrl : NavController, private alertService: AlertService) { }

  ngOnInit() {
  }
  
  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessAlbuns(){
    this.navCtrl.navigateForward('/gpage2')
  }

  alertaInfo(){
    this.alertService.presentAlert("TechSênior","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que não são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("TechSênior","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
