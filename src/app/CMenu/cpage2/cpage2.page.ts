import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-cpage2',
  templateUrl: './cpage2.page.html',
  styleUrls: ['./cpage2.page.scss'],
})
export class Cpage2Page implements OnInit {

  constructor(private navCtrl : NavController, private alertService : AlertService) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessCalendario(){
    this.navCtrl.navigateBack('/calendario')
  }

  alertaInfo(){
    this.alertService.presentAlert("TechSênior","Aviso","Nesta página serão mostrados algumas maneiras de realizar algumas funcionalidades, porém existem outras maneiras que não são abordadas.")
  }

  alertaPaginaAtual(){
    this.alertService.presentAlert("TechSênior","Aviso","Você já está nesta página, apenas role para baixo!")
  }

}
