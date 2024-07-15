import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async presentAlert(header: string, subHeader: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async simpleLoader() {
    const loading = await this.loadingController.create({
      message: 'Aguarde...',
    });
    await loading.present();
    return loading;
  }

  async dismissLoader() {
    await this.loadingController.dismiss();
  }
}
