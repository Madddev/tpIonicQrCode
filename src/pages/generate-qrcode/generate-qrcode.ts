import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";


/**
 * Generated class for the GenerateQrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-qrcode',
  templateUrl: 'generate-qrcode.html',
})
export class GenerateQrcodePage {

  private text : FormGroup;
  private urlQrcode :any ;

  constructor( private formBuilder: FormBuilder, private qrCodeService : QrCodeProvider) {
    this.text = this.formBuilder.group({title: ['', Validators.required],
    });
  }
  generateQrcode(){
    this.qrCodeService.generateQrcode(this.text.value.title).then((url) =>
      this.urlQrcode = url
    );
  }

}
