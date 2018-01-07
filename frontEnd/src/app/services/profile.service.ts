import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService {

  constructor(
        private http: Http,
  ) { }

  articles(genjouristId){
    console.log(genjouristId);
      return this.http.get('http://localhost:3000/genjourist/article/'+genjouristId)
      .map(response=>response.json())
  }

}
