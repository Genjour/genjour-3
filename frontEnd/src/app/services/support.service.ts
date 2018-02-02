import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class SupportService {

  constructor(
    private http:Http,
  ) { }

 
    supportArticle(articleId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `http://localhost:3000/support/${articleId}/${genjouristId}`;
      // console.log(URL);
      return this.http.post(URL,{headers:headers}).map(res=>res.json());

    }


    supportGenjourist(userId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `http://localhost:3000/support/genjourist/${userId}/${genjouristId}`;
      return this.http.post(URL,{headers:headers}).map(res=>res.json());

    }

    supportingGenjourist(userId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `http://localhost:3000/supporting/genjourist/${userId}/${genjouristId}`;
      return this.http.post(URL,{headers:headers}).map(res=>res.json());

    }



  }
