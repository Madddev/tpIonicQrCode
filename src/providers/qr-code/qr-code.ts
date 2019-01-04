import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import QRCode from 'qrcode'
import {QrCode} from "../../interface/QrCode";
import {Transfer} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";
import {Camera, DestinationType, EncodingType} from '@ionic-native/camera';
import { Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';

import jsQR from "jsqr";

const qrcode_KEY = "qrcode_";




@Injectable()
export class QrCodeProvider {

  constructor(
      public http: HttpClient,
      private storage : Storage,
      private transfer: Transfer,
      private file: File,
      private filePath: FilePath,
      public platform: Platform,
      private camera: Camera,
  ) {
  }

  async  generateQrcode(text: string): Promise<string> {
    try {
      let qrcode = this.constructQrCodeObject(text);
      this.addQrcode(qrcode);
      return await QRCode.toDataURL(text);
    } catch (err) {
      console.error(err)
    }
  }

  addQrcode(qrcode : QrCode) {
    return this.storage.set(this.getQrcodeKey(qrcode), JSON.stringify(qrcode));
  }

  getQrcodeKey(qrcode : QrCode) {
    return qrcode_KEY + qrcode.title.toString();
  }
  getQrcodesHistories() {
    let resultsPromise: Array<any> = [];
    return this.storage
        .keys()
        .then(keys => {
              keys
                  .filter(key => key.includes(qrcode_KEY))
                  .forEach(key =>
                      resultsPromise.push(this.storage.get(key).then(data => JSON.parse(data)))
                  );
              return Promise.all(resultsPromise);
            }
        );
  }
  constructQrCodeObject(text) : QRCode{
    let qrcodeObject : QrCode = {
      title : text,
      date : new Date()
    };
    return qrcodeObject;
  }
  async takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      mediaType: this.camera.MediaType.PICTURE,
      EncodingType: this.camera.EncodingType.JPEG,
      DestinationType: this.camera.DestinationType.DATA_URL
    };

     const base64 = await this.camera.getPicture(options);

      let image = await this.decodeQrCode('data:image/base64'+base64);
      let Qrcoding = jsQR(image.data, image.width,image.height);

      return Qrcoding;
      //
  }
  decodeQrCode(imageimgReference): Promise<ImageData>{
    return new Promise((resolve, reject) =>{
      let image = new Image();
      image.src = imageimgReference;
      let  canvas    = document.createElement("canvas"),
          context   = canvas.getContext("2d");

      image.onload = () =>{
        try {
          canvas.width  = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0);
        }catch (e) {
          console.log(e);
        }
        const data =  context.getImageData(0,0,canvas.width,canvas.height);
        resolve(data);
      }
    })


  }



}
