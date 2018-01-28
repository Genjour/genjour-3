import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(
    private http: Http,
  ) { }

  articleContent(category){
     return this.http.get('http://localhost:3000/articles/'+category)
         .map(response=>response.json())
  }
  quotationContent(category){
    return this.http.get('http://localhost:3000/quotations/'+category)
        .map(response=>response.json())
 }
}

