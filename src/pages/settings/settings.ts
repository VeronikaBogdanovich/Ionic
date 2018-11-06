import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertSettingsPage} from "../alert-settings/alert-settings";
import {AccauntSettingsPage} from "../accaunt-settings/accaunt-settings";
import {MainSettingsPage} from "../main-settings/main-settings";
import { AlertController } from 'ionic-angular';
import {StartPage} from "../start/start";
import {AuthProvider} from "../../providers/auth/auth";
import {TabsCheckerProvider} from "../../providers/tabs-checker/tabs-checker";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public auth:AuthProvider,
              public tabsCh:TabsCheckerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  Alerts(){
    this.navCtrl.push(AlertSettingsPage)
  }

  Accaunt(){
    this.navCtrl.push(AccauntSettingsPage)
  }

  Main(){
    this.navCtrl.push(MainSettingsPage)
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Хотите выйти?',
      subTitle: 'Если уверены, что хотите выйти, нажмите ОК. Если нет, нажмите Отменить',
      buttons:[
        {
          text: 'ОК',
          handler: data => {
            this.auth.logout();
            //this.tabs.Hide();
            this.tabsCh.Hide();
            this.navCtrl.setRoot(StartPage)
          }
        },
    {
      text: 'Отменить',
        handler: data => {
          console.log('cancel')
    }
    }
  ]
    });
    alert.present();
  }
}
