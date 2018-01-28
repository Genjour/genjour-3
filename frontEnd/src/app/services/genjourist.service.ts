import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GenjouristService {

  constructor(
    private http:Http,
  ) { }

  genjouristProfile(genjouristId){
    return this.http.get('http://localhost:3000/genjourist/'+genjouristId)
    .map(res=>res.json());
  }

  articles(genjouristId){
      return this.http.get('http://localhost:3000/genjourist/article/'+genjouristId)
      .map(response=>response.json())
  }

  quotation(genjouristId){
      return this.http.get('http://localhost:3000/genjourist/quotation/'+genjouristId)
      .map(response=>response.json())
  }

}
