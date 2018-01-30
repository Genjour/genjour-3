import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedsService {

  constructor(
    private http:Http,
  ) { }

  articleFeeds(userId){
    return this.http.get('http://localhost:3000/journals/feeds/'+userId)
         .map(response=>response.json())
  }

}
