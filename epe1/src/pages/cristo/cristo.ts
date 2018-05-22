import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the CristoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cristo',
  templateUrl: 'cristo.html',
})
export class CristoPage {

  private images:any[]=[];
  constructor(public navCtrl: NavController,private modalCtrl : ModalController) {
    for(let i=1;i<5;i++){
      this.images.push({
        url: `assets/imgs/${i}.jpg`
      });
    }
    this.images[0].title ='Taller De Circo Cristo Joven';
    this.images[1].title ='Taller De Circo Cristo Joven';
  }
  openGallery(){
    let modal = this.modalCtrl.create(GalleryModal,{
      photos: this.images,
      initialSlide : 0,
      closeIncon : 'arrow-back'
    });
    modal.present();
  }

}
