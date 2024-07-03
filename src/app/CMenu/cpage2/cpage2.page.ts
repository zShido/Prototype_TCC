import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cpage2',
  templateUrl: './cpage2.page.html',
  styleUrls: ['./cpage2.page.scss'],
})
export class Cpage2Page implements OnInit {

  alertButtons = ['Entendido']

  helpButtons = ['Entendido']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }

  accessCalendario(){
    this.navCtrl.navigateBack('/calendario')
  }

}
