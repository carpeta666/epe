import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CristoPage} from '../cristo/cristo';
/**
 * Generated class for the TallerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taller',
  templateUrl: 'taller.html',
})
export class TallerPage {
  private images:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TallerPage');
  }

  ir5(){
    this.navCtrl.push(CristoPage);
  }
}
