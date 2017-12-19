import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
authToken : any;
user : any;
  constructor(
    private http:Http , 
    
  ) { }

authenticateUser(user){
  let headers = new Headers();
  headers.append('Content-Type','Application/json');
  return this.http.post('http://localhost:3000/authenticate',user,{headers:headers})
  .map(res=>res.json());
}

storeUserData(token,user){
  localStorage.setItem('id_token',token);
  localStorage.setItem('userinfo',JSON.stringify(user));
  this.authToken  = token;
  this.user = user;
}




}
