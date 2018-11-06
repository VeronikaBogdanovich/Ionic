import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import {StartPage} from "../pages/start/start";
import {TabsPage} from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.storage.get("token").then((token)=>{
      if(token && token.length > 1){
        this.rootPage = TabsPage;
      }
      else{
        this.rootPage = StartPage;
      }
    });
  }


}
