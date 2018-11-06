import { Component } from '@angular/core';
import {NewStreamPage} from "../new-stream/new-stream";
import {SearchPage} from "../search/search";
import {ProfilePage} from "../profile/profile";
import {Storage} from "@ionic/storage";
import {TabsCheckerProvider} from "../../providers/tabs-checker/tabs-checker";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = NewStreamPage;
  tab3Root = ProfilePage;
  show:boolean;
  constructor() {

  }
}
