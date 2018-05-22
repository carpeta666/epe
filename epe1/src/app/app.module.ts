import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InstructorPage} from '../pages/instructor/instructor';
import {VideosPage} from '../pages/videos/videos';
import {PracticasPage} from '../pages/practicas/practicas';
import {TallerPage} from '../pages/taller/taller';
import {CristoPage} from '../pages/cristo/cristo';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InstructorPage,
    VideosPage,
    PracticasPage,
    TallerPage,
    CristoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ionicGalleryModal.GalleryModalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InstructorPage,
    VideosPage,
    PracticasPage,
    TallerPage,
    CristoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide:HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig}
  ]
})
export class AppModule {}
