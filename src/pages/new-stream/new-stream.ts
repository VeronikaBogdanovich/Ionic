import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import { Events } from 'ionic-angular';
import {PostClass} from "../../components/postClass";
import {Storage} from "@ionic/storage";
import {ProfilePage} from "../profile/profile";

@Component({
  selector: 'page-new-stream',
  templateUrl: 'new-stream.html',
})
export class NewStreamPage {
  description:string;
  username:string;
  time:string;
  date:string;
  duration:string;
  price:string;
  priceRun:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public postsService:PostsProvider,
              public events:Events, public storage:Storage) {
    this.storage.get('user').then((user) =>{
      this.username = user.username;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewStreamPage');
  }

  addStream() {

    let post ={
      description: this.description,
      username: this.username,
      time:this.time,
      date: this.date,
      duration: this.duration,
      price: this.price,
      priceRun: this.priceRun,
    };
    console.log(post);
    this.postsService.createPost(post).then((result) => {
      // this.userPosts.push(post);
      console.log("post created");
      this.navCtrl.setRoot(ProfilePage);
      this.events.publish("created", post);
    }, (err) => {
      console.log("not allowed");
    });
  }
}
