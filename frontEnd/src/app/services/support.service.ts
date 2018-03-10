import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

const webUrl = "http://localhost:3000";

@Injectable()
export class SupportService {

  constructor(
    private http:Http,
  ) { }

 
    supportJournal(journalId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `${webUrl}/support/journal/${journalId}/${genjouristId}`;
      // console.log(URL);
      return this.http.post(URL,{headers:headers}).map(res=>res.json());

    }

    journalSupporters(journalId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `${webUrl}/journal/supportersList/${journalId}`;
      // console.log(URL);
      return this.http.get(URL,{headers:headers}).map(res=>res.json());

    }

    supportGenjourist(userId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `${webUrl}/support/genjourist/${userId}/${genjouristId}`;
      return this.http.post(URL,{headers:headers}).map(res=>res.json());

    }

    supportingGenjourist(userId, genjouristId){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      const URL = `${webUrl}/supporting/genjourist/${userId}/${genjouristId}`;
      return this.http.post(URL,{headers:headers}).map(res=>res.json());

    }



  }
