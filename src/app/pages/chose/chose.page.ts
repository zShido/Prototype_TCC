import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.page.html',
  styleUrls: ['./chose.page.scss'],
})
export class ChosePage implements OnInit {

  alertButtons = ['Ok!']

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  accessHome(){
    this.navCtrl.navigateBack('/home');
  }

  accessAndroid(){
    this.navCtrl.navigateForward('/menu-android');
  }

}