import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  save(): void {
    console.log('save');
    this.viewCtrl.dismiss();
  }

  close(): void {
    this.viewCtrl.dismiss();
  }
  // save () {
  //   this.navCtrl.setRoot(TabsPage);
  // }

}
