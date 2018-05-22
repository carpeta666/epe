import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InstructorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instructor',
  templateUrl: 'instructor.html',
})
export class InstructorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructorPage');
  }
   
  slides = [
    {
      title: "Instructor ",
      description: "<b>Álvaro Valenzuela Valdés</b> Instructor De Circo, Enfocado en la mirada del Circo Social ",
      image: "assets/imgs/yo.jpg",
    },
    {
      title: "Qué Es El Circo Social?",
      description: "<b>El Circo Social</b><br/> Es ocupar el circo como herramienta de cambios sociales, y con ello contribuir al desarrollo de la resilencia y la inclusión de personas a la sociedad haciendose participe a la población en la cual viven, nos enfocamos en la cualidad  y utilizamos diferentes métodos pedagogicos para concluir con éxito nuestra intervención",
      image: "assets/imgs/5.jpg",
    },
    {
      title: "Cuál es nuestra formación Académica?",
      description: "<b>*</b>Egresado del Diplomado De Artes Circenses Otorgado Por La Universidad De Humanismo Cristiano Año 2017.<br/>*Malabarista<br/>*Clown<br/>*Acrobata<br/>*Telista",
      image: "assets/imgs/6.jpg",
    }
  ];
}
