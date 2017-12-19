import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
authToken:any;
user: any;
  constructor() { }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
