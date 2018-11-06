import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RestPasswordPage} from "../rest-password/rest-password";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-next-confirm',
  templateUrl: 'next-confirm.html',
})
export class NextConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextConfirmPage');
  }

  goToPrevPage() {
    this.navCtrl.setRoot(RestPasswordPage);
  }
  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

}
