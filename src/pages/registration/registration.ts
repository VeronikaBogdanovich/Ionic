import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NextRegistrationPage} from "../next-registration/next-registration";
import {LoginPage} from "../login/login";
import {AuthProvider} from "../../providers/auth/auth";
import {AlertController} from "ionic-angular";

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
  password:string;
  username:string;
  confirmpassword:string;
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthProvider, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  ShowNext(){
    if(this.password == this.confirmpassword && this.username && this.email){
      let details = {
        username: this.username,
        password: this.password,
        email: this.email,
        name: "",
        surname: "",
        role: ""
      };



      this.navCtrl.setRoot(NextRegistrationPage, {userData:details});
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Заполните все поля',
        buttons: ['Ок']
      });
      alert.present();
    }
  }
  goToLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }
}
