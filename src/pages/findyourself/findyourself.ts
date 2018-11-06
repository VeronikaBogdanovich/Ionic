import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ThemesPage} from "../themes/themes";
import {RegistrationPage} from "../registration/registration";
import {NextRegistrationPage} from "../next-registration/next-registration";
import {AuthProvider} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";

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
  details:any;
  about:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthProvider) {
    this.details = this.navParams.get("userData");
  }


  showPrevious(){
    this.navCtrl.setRoot(NextRegistrationPage, {userData:this.details});
  }

  showNext() {
    this.details.role = this.about;
    this.authService.createAccount(this.details).then((result) => {
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      console.log(err);
    });
  }

}
