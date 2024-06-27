import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gpage2',
  templateUrl: './gpage2.page.html',
  styleUrls: ['./gpage2.page.scss'],
})
export class Gpage2Page implements OnInit {

  alertButtons = ['Entendi']

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  accessImagens(){
    this.navCtrl.navigateBack('/galeria')
  }

}
