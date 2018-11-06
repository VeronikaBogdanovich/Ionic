import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ReaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReaderProvider {
  myurl: string = '../assets/people.json';

  myurl1: string = '../assets/tags.json';

  constructor(public http: HttpClient) {
  }

  getData(data) {
    if (data == 'people')
      return this.http.get(this.myurl);
    if (data == "tags")
      return this.http.get(this.myurl1);
  }
}
