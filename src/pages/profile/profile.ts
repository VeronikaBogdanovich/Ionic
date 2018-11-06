import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {EditPage} from "../edit/edit";
import {PopPage} from "../pop/pop";
import {CommentsPage} from "../comments/comments";
import {SettingsPage} from "../settings/settings";
import {StatusWinPage} from "../status-win/status-win";
import {StatusWaitPage} from "../status-wait/status-wait";
import {Storage} from "@ionic/storage";
import {PostsProvider} from "../../providers/posts/posts";
import {PopoverController} from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})
export class ProfilePage {
  segments: string = "registered";
  user: any;
  postsList: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams, public storage: Storage, public posts: PostsProvider, public popoverCtrl: PopoverController) {
    this.storage.get('user').then((user) => {
      this.user = user;
      this.posts.getPostsByUsername(this.user.username).then((value) => {
        this.postsList = value;
      });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  presentPopover(myEvent, item) {
    let popover = this.popoverCtrl.create(PopPage, item);
    popover.present({
      ev: myEvent
    });
  }

  doEdit() {
    let modal = this.modalCtrl.create(EditPage);
    modal.onDidDismiss(u => {
      if (u) {
        console.log('saved');
      }
    });
    modal.present()
  }

  doRefresh(refresher) {
    this.posts.getPostsByUsername(this.user.username).then((value) => {
      this.postsList = value;
    });
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }


  ShowComments() {
    this.navCtrl.push(CommentsPage);
  }

  ShowSettings() {
    this.navCtrl.push(SettingsPage)
  }

  showstatus() {
    this.navCtrl.push(StatusWinPage)
  }

  showwait() {
    this.navCtrl.push(StatusWaitPage)
  }
}
