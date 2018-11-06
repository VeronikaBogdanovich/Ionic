import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestPasswordPage} from "../rest-password/rest-password";
import {RegistrationPage} from "../registration/registration";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegistrationPage() {
    this.navCtrl.setRoot(RegistrationPage);
  }

  restPassword() {
    this.navCtrl.setRoot(RestPasswordPage);
  }

  doLogin() {
    this.navCtrl.setRoot(TabsPage);
  }
}
