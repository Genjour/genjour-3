import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken : any;
  user : any;

  constructor(
    private http:Http, 
  ) { }



  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','Application/json');
    return this.http.post('http://localhost:3000/register',user,{headers:headers})
    .map(res=>res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','Application/json');
    return this.http.post('http://localhost:3000/authenticate',user,{headers:headers})
    .map(res=>res.json());
  }

  getGenjourist(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','Application/json');
    return this.http.get('http://localhost:3000/profile',{headers:headers})
    .map(res=>res.json());
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('userinfo',JSON.stringify(user));
    this.authToken  = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
  }


}
