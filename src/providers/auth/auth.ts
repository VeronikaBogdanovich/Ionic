import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token: any;

  constructor(public http: Http,public storage:Storage) {
    this.BASE_URI = "http://127.0.0.1:8181";
  }

  BASE_URI:any;


  checkAuthentication(){
    return new Promise((resolve, reject) => {
      //Load token if exists
      this.storage.get('token').then((value) => {
        this.token = value;
        let headers = new Headers();
        headers.append('Authorization', this.token);
        this.http.get(this.BASE_URI + '/api/auth/protected', {headers: headers})
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    });
  }

  getUsers(){
    return new Promise(((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', this.token);
      this.http.get(this.BASE_URI + '/api/auth/users', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    }))
  }

  createAccount(details){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.BASE_URI + '/api/auth/register', JSON.stringify(details), {headers: headers})
        .subscribe(res => {
          let data = res.json();
          this.token = data.token;
          this.storage.set('token', data.token);
          this.storage.set('user', data.user);
          resolve(data);
        }, (err) => {
          reject(err);
        });

    });

  }

  login(credentials){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      console.log(this.BASE_URI + '/api/auth/protected');
      this.http.post(this.BASE_URI + '/api/auth/login', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          let data = res.json();
          this.token = data.token;
          this.storage.set('token', data.token);
          this.storage.set('user', data.user);
          resolve(data);
          resolve(res.json());
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  logout(){
    this.storage.set('token', '');
    this.storage.set('user', '');
  }


}
