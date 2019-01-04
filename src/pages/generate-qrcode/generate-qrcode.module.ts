import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateQrcodePage } from './generate-qrcode';

@NgModule({
  declarations: [
    GenerateQrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateQrcodePage),
  ],
})
export class GenerateQrcodePageModule {}
