import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {ReaderProvider} from "../../providers/reader/reader";
import {ShowUserPage} from "../show-user/show-user";

export class people {
  id: number;
  name: string;
  status: string;
  img: string;
}

export class tags {
  id: number;
  name: string;
}

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  parray: people [];
  tarray: tags[];
  fterm: string = '';
  segments: string = "popular";

  constructor(public navCtrl: NavController, public navParams: NavParams, public ms: ReaderProvider) {
  }

  ionViewDidLoad() {
    this.ms.getData('people').subscribe(data => {
      this.parray = data['people']
    });
    this.ms.getData('tags').subscribe(data => {
      this.tarray = data['tags']
    });

  }

  getItems(evnt: any) {
    this.fterm = evnt.target.value;
  }

  show(u) {
    console.log(u);
    this.navCtrl.push(ShowUserPage, u);
  }
}
