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

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  Login(){
    const user = {
      username : this.username,
      password : this.password
    }

  this.authService.authenticateUser(user).subscribe(data=>{
    if(data.success){
      this.authService.storeUserData(data.token,data.user);
      this.router.navigate(['feeds']);
    }else{
      console.log("Inncoret Username or password");
      this.router.navigate(['login']);
    }
  });

  }



}
