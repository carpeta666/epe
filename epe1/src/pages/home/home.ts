import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InstructorPage} from '../instructor/instructor';
import {VideosPage} from '../videos/videos';
import {PracticasPage} from '../practicas/practicas';
import {TallerPage} from '../taller/taller';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


ir(){
  this.navCtrl.push(InstructorPage);
}

ir1(){
  this.navCtrl.push(VideosPage);
}

ir2(){
  this.navCtrl.push(PracticasPage);
}

ir3(){
  this.navCtrl.push(TallerPage);
}

}
