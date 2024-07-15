import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../common/alert.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu-android',
  templateUrl: './menu-android.page.html',
  styleUrls: ['./menu-android.page.scss'],
})
export class MenuAndroidPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertService: AlertService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {}

  async showLoaderAndNavigate(navigationFn: () => void) {
    const loading = await this.loadingController.create({
      message: 'Aguarde...',
    });
    await loading.present();

    navigationFn();

    setTimeout(() => {
      loading.dismiss();
    }, 1000); 
  }

  accessChose(){
    this.showLoaderAndNavigate(() => this.navCtrl.navigateBack('/chose'));
  }

  accessGaleria(){
    this.showLoaderAndNavigate(() => this.navCtrl.navigateForward('/galeria'));
  }

  accessCalendario(){
    this.showLoaderAndNavigate(() => this.navCtrl.navigateForward('/calendario'));
  }

  accessRelogio(){
    this.showLoaderAndNavigate(() => this.navCtrl.navigateForward('/relogio'));
  }
}
