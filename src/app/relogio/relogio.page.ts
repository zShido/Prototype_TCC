import { Component, OnInit } from '@angular/core';

import { NavController
 } from '@ionic/angular';
@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.page.html',
  styleUrls: ['./relogio.page.scss'],
})
export class RelogioPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessMenu(){
    this.navCtrl.navigateBack('/menu-android')
  }
}
