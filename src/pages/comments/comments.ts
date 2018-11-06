import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReaderProvider} from "../../providers/reader/reader";

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class people {
  id: number;
  name: string;
  status:string;
  img:string;
  comment:string;
}
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  parray:  people [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public ms: ReaderProvider) {
  }

  ionViewDidLoad() {
    this.ms.getData('people').subscribe(data =>{ this.parray = data['people']});
  }

}
