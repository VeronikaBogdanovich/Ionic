import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-show-user',
  templateUrl: 'show-user.html',
})
export class ShowUserPage {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data;
    console.log(this.user);
  }

  ionViewDidLoad() {
    this.user = this.navParams.data;
    console.log(this.user);
  }

}
