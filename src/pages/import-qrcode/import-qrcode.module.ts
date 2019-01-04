import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImportQrcodePage } from './import-qrcode';

@NgModule({
  declarations: [
    ImportQrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(ImportQrcodePage),
  ],
})
export class ImportQrcodePageModule {}
