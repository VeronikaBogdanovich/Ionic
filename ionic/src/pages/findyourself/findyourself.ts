import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ThemesPage} from "../themes/themes";
import {RegistrationPage} from "../registration/registration";
import {NextRegistrationPage} from "../next-registration/next-registration";

/**
 * Generated class for the FindyourselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-findyourself',
  templateUrl: 'findyourself.html',
})
export class FindyourselfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  showPrevious(){
    this.navCtrl.setRoot(NextRegistrationPage);
  }

  showNext() {
    this.navCtrl.setRoot(ThemesPage);
  }

}
