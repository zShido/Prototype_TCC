import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.page.html',
  styleUrls: ['./chose.page.scss'],
})
export class ChosePage implements OnInit {

  alertButtons = ['Ok!']

  constructor(private navCtrl: NavController, private alertService: AlertService) { }

  ngOnInit() {
  }

  accessHome(){
    this.navCtrl.navigateBack('/home');
  }

  accessAndroid(){
    this.navCtrl.navigateForward('/menu-android');
  }

  abrirAlerta(){
    this.alertService.presentAlert("TechSênior","Dificuldades?","Repare na maçã na parte traseira do seu aparelho!")
  }

}