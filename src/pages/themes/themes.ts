import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {NextRegistrationPage} from "../next-registration/next-registration";
import {FindyourselfPage} from "../findyourself/findyourself";
import {ProfilePage} from "../profile/profile";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ThemesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-themes',
  templateUrl: 'themes.html',
})
export class ThemesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemesPage');
  }
  showPrevious(){
    this.navCtrl.setRoot(FindyourselfPage);
  }

  showNext() {
    this.navCtrl.setRoot(TabsPage);
  }

}
