import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ImportQrcodePage } from '../pages/import-qrcode/import-qrcode';
import { GenerateQrcodePage } from '../pages/generate-qrcode/generate-qrcode';
import { ReadQrCodePage } from '../pages/read-qr-code/read-qr-code';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      GenerateQrcodePage,
      ImportQrcodePage,
      ReadQrCodePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GenerateQrcodePage,
    ImportQrcodePage,
      ReadQrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
      SocialSharing,
    File,
    Transfer,
    Camera,
    FilePath,
    BarcodeScanner
  ]
})
export class AppModule {}
