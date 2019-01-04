import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import QRCode from 'qrcode'
import {QrCode} from "../../interface/QrCode";

const qrcode_KEY = "qrcode_";




@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient, private storage : Storage) {
  }

  async  generateQrcode(text: string): Promise<string> {
    try {
      let qrcode = this.constructQrCodeObjetc(text);
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
  constructQrCodeObjetc(text) : QRCode{
    let qrcodeObject : QrCode = {
      title : text,
      date : new Date()
    };
    return qrcodeObject;
  }

}
