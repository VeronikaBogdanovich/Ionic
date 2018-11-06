import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProfilePage} from "../../pages/profile/profile";
import {StartPage} from "../../pages/start/start";
import {Storage} from "@ionic/storage";

/*
  Generated class for the TabsCheckerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabsCheckerProvider {
  public show:boolean;
  constructor(public http: HttpClient, public storage:Storage) {
    this.storage.get("token").then((token)=>{
      if(token && token.length > 1){
        this.show = true;
      }
      else{
        this.show = false;
      }
    });
  }

  Hide(){
    this.show = false;
  }

  Show(){
    this.show = true;
  }

}
