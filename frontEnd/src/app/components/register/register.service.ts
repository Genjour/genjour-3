import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  checkRegister(user){
    if(user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
    }

    registerUser(user){
      let headers = new Headers();
      headers.append('Content-Type','Application/json');
      return this.http.post('http://localhost:3000/register',user,{headers:headers})
      .map(res=>res.json());
    }
}
