import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadQrCodePage } from './read-qr-code';

@NgModule({
  declarations: [
    ReadQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ReadQrCodePage),
  ],
})
export class ReadQrCodePageModule {}
