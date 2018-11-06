import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-new-stream',
  templateUrl: 'new-stream.html',
})
export class NewStreamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewStreamPage');
  }

  addEvents() {

  }
}
