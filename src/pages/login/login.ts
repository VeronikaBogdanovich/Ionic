import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestPasswordPage} from "../rest-password/rest-password";
import {RegistrationPage} from "../registration/registration";
import {TabsPage} from "../tabs/tabs";
import {AuthProvider} from "../../providers/auth/auth";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthProvider) {
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
    if(this.username){
      this.username = this.username.toLocaleLowerCase();
    }

    let credentials = {

      username: this.username,
      password: this.password,
    };

    this.auth.login(credentials).then((result) => {
       this.navCtrl.setRoot(TabsPage);
      console.log("good");
    }, (err) => {
      console.log("bad");
      console.log(err);
    });



  }
}
