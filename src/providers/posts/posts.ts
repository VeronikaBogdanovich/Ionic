import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import {AuthProvider} from "../auth/auth";
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {

  BASE_URI = "http://127.0.0.1:8181";

  constructor(public http: Http,public authService:AuthProvider, public storage:Storage) {
  }


  createPost(post){
    let token:string;
    this.storage.get("token").then((value)=>{
      token = value;
    });
    return new Promise(((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
      this.http.post(this.BASE_URI + '/api/posts',JSON.stringify(post),{headers:headers}).map(res => res.json())
        .subscribe(res =>{
          resolve(res)
        },(err) =>
        {
          reject(err);
        })
    }));
  }

  getPosts(){
    return new Promise(((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
      this.http.get(this.BASE_URI + '/api/posts', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    }));
  }

  getPostsByUsername(username){
    return new Promise(((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
      this.http.get(this.BASE_URI + '/api/posts/' + username, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    }))
  }

  deletePost(post){
    return new Promise(((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
      this.http.get(this.BASE_URI + '/api/posts/delete/' + post._id, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    }))
  }

}
