import { draftArticles } from './../components/models/draftArticles';
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


  getSupportingList(userId){
    return this.http.get(`http://localhost:3000/supportingList/${userId}`).map(res=>res.json());
  }

  getSupportersList(userId){
    return this.http.get(`http://localhost:3000/supportersList/${userId}`).map(res=>res.json());
  }

  getDraftArticles(articleId){
    return this.http.get(`http://localhost:3000/edit/article/${articleId}`).map(res=>res.json());
  }

  getDraftQuotation(quotationId){
    return this.http.get(`http://localhost:3000/edit/quotation/${quotationId}`).map(res=>res.json());
  }

  deleteArticle(articleId){
    return this.http.delete(`http://localhost:3000/delete/article/${articleId}`).map(res=>res.json());
  }

  draftArticles(articleId,article){
    return this.http.put(`http://localhost:3000/update/article/${articleId}`,article).map(res=>res.json());
  }

  updateArticle(articleId,article){
    return this.http.put(`http://localhost:3000/update/article/${articleId}`,article).map(res=>res.json());
  }

}
