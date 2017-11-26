import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openCalc(){
    this.navCtrl.push("BqcalcPage");
    console.log("Hola");
    
  }
  obj_user(){
    this.navCtrl.push("UserPage");
    console.log("Hola");
  }

}
