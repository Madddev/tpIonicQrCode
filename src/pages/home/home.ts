import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrcodes : any;

  constructor(public navCtrl: NavController, private qrCodeService : QrCodeProvider) {

  }

  ionViewWillEnter() {
    this.initFavoriteMovies();
  }

  private initFavoriteMovies() {
    return this.qrCodeService
        .getQrcodesHistories()
        .then(qrcodes => {
          this.qrcodes = qrcodes
        });
  }

}
