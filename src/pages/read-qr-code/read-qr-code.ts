import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';




@IonicPage()
@Component({
  selector: 'page-read-qr-code',
  templateUrl: 'read-qr-code.html',
})
export class ReadQrCodePage {

  decodeQrCode : any;

  constructor(public navCtrl: NavController,
              private camera: Camera,
              private qrCodeService : QrCodeProvider,
              private  barcodeScanner : BarcodeScanner

              ) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadQrCodePage');
  }
  readQrCodeByImage(){
    this.qrCodeService.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((decode)=>{
      this.decodeQrCode = decode;
    });
  }
  readQrCodeByCamera(){
    this.barcodeScanner.scan().then(barcodeData => {
        this.decodeQrCode = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }



}
