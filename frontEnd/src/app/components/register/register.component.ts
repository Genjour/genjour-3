import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( 
    private validateService : ValidateService,
    private authService : AuthService,
    private router : Router,

     ) { }

  fullname : String;
  email    : String;
  password : String;
  username : String;
  gender   : String;
  dob      : Date;
  checkStatus : String;



  ngOnInit() {

  }

  register(){
    const user = {
          name     : this.fullname,
          email    : this.email,
          password : this.password,
          username : this.username,
          gender   : this.gender,
          dob      : this.dob,
          
    }

    // check required fields

    if(user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined || user.gender == undefined || user.dob == undefined){
      console.log("please fill all fields");
      this.checkStatus = "Please fill all fields";
      return false;
    }
  
    //check email 

    if(!this.validateService.validateEmail(user.email)){
      console.log("Email is not valid");
      this.checkStatus = "Email is not valid";
      return false;
    }

    //register new user here api from services

    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        console.log('user is register');
        this.router.navigate(['/login']);
      }else{
        console.log('not registered');
        this.router.navigate(['/']);
      }
    });

    console.log(user);

  }



}
