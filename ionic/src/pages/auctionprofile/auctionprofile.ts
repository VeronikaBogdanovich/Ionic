import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {CommentsPage} from "../comments/comments";
import {EditPage} from "../edit/edit";
import {AuctionPage} from "../auction/auction";
import {StartPage} from "../start/start";
import {StatusWinPage} from "../status-win/status-win";

/**
 * Generated class for the AuctionprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auctionprofile',
  templateUrl: 'auctionprofile.html',
})
export class AuctionprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctionprofilePage');
  }
  ShowComments() {
    this.navCtrl.push(CommentsPage);
  }

  ShowSettings(){
    this.navCtrl.push(SettingsPage)
  }
  doEdit() {
    let modal = this.modalCtrl.create(EditPage);
  modal.onDidDismiss(u => {
  if (u) {
    console.log('saved');
  }
});
modal.present()
// this.navCtrl.setRoot(EditPage);
}
  showauction(){
    this.navCtrl.push(AuctionPage)
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Вы уверены?',
      subTitle: 'Если вы хотите приобрести стрим за полную стоимость прямо сейчас, нажмите ОК. Если нет, нажмите Отменить',
      buttons:[
        {
          text: 'ОК',
          handler: data => {
            this.navCtrl.push(StatusWinPage)
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
