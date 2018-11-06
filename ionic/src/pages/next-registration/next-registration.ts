import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {TabsPage} from "../tabs/tabs";
import {FindyourselfPage} from "../findyourself/findyourself";

@Component({
  selector: 'page-next-registration',
  templateUrl: 'next-registration.html',
})
export class NextRegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextRegistrationPage');
  }
  showPrevious(){
    this.navCtrl.setRoot(RegistrationPage);
  }

  showNext() {
    this.navCtrl.setRoot(FindyourselfPage);
  }
}
