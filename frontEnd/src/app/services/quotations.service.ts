import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotationsService {

  constructor(
    private http: Http,
  ) { }

  getQuotations(){
    return this.http.get(`http://localhost:3000/quotations`)
    .map(res=>res.json());
  }


}
