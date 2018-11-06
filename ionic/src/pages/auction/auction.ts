import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StatusWaitPage} from "../status-wait/status-wait";

/**
 * Generated class for the AuctionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auction',
  templateUrl: 'auction.html',
})
export class AuctionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctionPage');
  }
show(){
    this.navCtrl.push(StatusWaitPage)
}
}
