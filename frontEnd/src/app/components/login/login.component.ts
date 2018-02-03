import { ValidateService } from './../../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { Observable } from "rxjs/Rx"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: String;
password: String;
checkStatus: String;

  constructor(
    private authService : AuthService,
    private router : Router,
    private validateService :ValidateService
  ) { }

  ngOnInit() {
  }

  Login(){
    const user = {
      username : this.username,
      password : this.password
    }

    if(this.username == undefined || this.password == undefined){
      this.checkStatus = "Enter Username & Password Correctly";
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data=>{
    if(data.success == false){
      this.checkStatus = data.msg;
      console.log(this.checkStatus);
    }
    else if(data.success == true){
      this.authService.storeUserData(data.token,data.user);
      this.router.navigate(['feeds']);
    }else{
      console.log("Inncoret Username or password");
      this.router.navigate(['login']);
    }
  });

  }



}
