import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TallerPage } from './taller';

@NgModule({
  declarations: [
    TallerPage,
  ],
  imports: [
    IonicPageModule.forChild(TallerPage),
  ],
})
export class TallerPageModule {}
