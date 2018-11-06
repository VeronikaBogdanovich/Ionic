import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NextRegistrationPage} from "../next-registration/next-registration";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  ShowNext(){
    this.navCtrl.setRoot(NextRegistrationPage);
  }
  goToLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }
}
