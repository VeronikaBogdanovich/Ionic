import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {NextConfirmPage} from "../next-confirm/next-confirm";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-rest-password',
  templateUrl: 'rest-password.html',
})
export class RestPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestPasswordPage');
  }

  changePassword() {
    this.navCtrl.setRoot(NextConfirmPage);
  }

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
}
