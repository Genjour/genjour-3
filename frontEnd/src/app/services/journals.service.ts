import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JournalsService {

  constructor(
    private http: Http,
  ) { }


  articles: any;

getJournals(){

  return this.http.get('http://localhost:3000/journals')
      .map(response=>response.json())

  } 

}

