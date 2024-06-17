import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.page.html',
  styleUrls: ['./chose.page.scss'],
})
export class ChosePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  accessHome(){
    this.navCtrl.navigateForward('/home');
  }

  accessAndroid(){
    this.navCtrl.navigateForward('/home');
    //Mudar para a página do android
  }
}