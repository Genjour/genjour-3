import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {


  constructor() { }

  checkLogin(user){
    if(user.username == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }


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

    checkQuotation(quotation){
      if(quotation.title == undefined || quotation.category == " " || quotation.quote == undefined){
        return false;
      }else{
        return true;
      }
    }

}
