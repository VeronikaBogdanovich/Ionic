import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {FindyourselfPage} from "../findyourself/findyourself";
import {AlertController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-next-registration',
  templateUrl: 'next-registration.html',
})
export class NextRegistrationPage {
  name:string;
  surname:string;
  rules:boolean;
  details:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public authService:AuthProvider) {
    this.details = navParams.get("userData");
    this.rules = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextRegistrationPage');
  }
  showPrevious(){
    this.navCtrl.setRoot(RegistrationPage);
  }

  showNext() {
    if(this.name && this.surname){
      if(this.rules){
        this.details.name = this.name;
        this.details.surname = this.surname;
        this.navCtrl.setRoot(FindyourselfPage, {userData:this.details});
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Подтвердите лицензию',
          buttons: ['Ок']
        });
        alert.present();
      }
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Заполните все поля',
        buttons: ['Ок']
      });
      alert.present();
    }
  }
}
