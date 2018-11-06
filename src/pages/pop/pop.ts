import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-pop',
  templateUrl: 'pop.html',
})
export class PopPage {
  date;
  time;
  description;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.time=this.navParams.get('time');
    this.date=this.navParams.get('date');
    this.description = this.navParams.get('description');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopPage');
  }

}
