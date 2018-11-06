import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {EditPage} from "../edit/edit";
import {CommentsPage} from "../comments/comments";
import {SettingsPage} from "../settings/settings";
import {StatusWinPage} from "../status-win/status-win";
import {StatusWaitPage} from "../status-wait/status-wait";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  segments: string = "registered";

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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

  ShowComments() {
    this.navCtrl.push(CommentsPage);
  }

  ShowSettings(){
    this.navCtrl.push(SettingsPage)
  }
  showstatus(){
    this.navCtrl.push(StatusWinPage)
  }
  showwait(){
    this.navCtrl.push(StatusWaitPage)
  }
}
