import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {Storage} from "@ionic/storage";
import {PopPage} from "../pop/pop";

@Component({
  selector: 'page-show-user',
  templateUrl: 'show-user.html',
})
export class ShowUserPage {

  user: any;
  postsList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public posts: PostsProvider, public storage: Storage,  public popoverCtrl: PopoverController) {
    this.user = this.navParams.data;
    this.posts.getPostsByUsername(this.user.username).then((value) => {
      this.postsList = value;
    });
  }

  ionViewDidLoad() {
    this.user = this.navParams.data;
    console.log(this.user);
  }

  presentPopover(myEvent, item) {
    let popover = this.popoverCtrl.create(PopPage, item);
    popover.present({
      ev: myEvent
    });
  }
}
