import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MainSettingsPage} from "../main-settings/main-settings";
import {ChangePasswordPage} from "../change-password/change-password";

/**
 * Generated class for the AccauntSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accaunt-settings',
  templateUrl: 'accaunt-settings.html',
})
export class AccauntSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccauntSettingsPage');
  }

  PasswordChange(){
    this.navCtrl.push(ChangePasswordPage)
  }
}
