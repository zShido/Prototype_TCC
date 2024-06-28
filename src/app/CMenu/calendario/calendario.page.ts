import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  alertButtons = ['Entendido']

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessPage2(){
    this.navCtrl.navigateForward('/cpage2')
  }

}
