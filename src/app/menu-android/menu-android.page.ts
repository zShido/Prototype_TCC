import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-android',
  templateUrl: './menu-android.page.html',
  styleUrls: ['./menu-android.page.scss'],
})
export class MenuAndroidPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessChose(){
    this.navCtrl.navigateForward('/chose');
  }
}
