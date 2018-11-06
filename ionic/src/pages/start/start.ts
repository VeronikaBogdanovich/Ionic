import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {LoginPage} from "../login/login";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  showDetails(){
    this.navCtrl.setRoot(LoginPage);
  }

  showLogin() {
    this.navCtrl.setRoot(RegistrationPage);
  }
}
