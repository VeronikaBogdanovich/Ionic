import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallPage } from '../call/call';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToCall(){
    this.navCtrl.push(CallPage);
  }

}
