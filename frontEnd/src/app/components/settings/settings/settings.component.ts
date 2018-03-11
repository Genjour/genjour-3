import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { user } from '../../models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  constructor( private authService : AuthService ) { }

  user : user;
  profileImg: String;

  ngOnInit() {
    this.authService.userSubject.subscribe(
      data=> {
                this.user = data;
                if(this.user.profileImg == "No"){
                  if(this.user.gender=="Female"){
                    this.profileImg = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520725961/defaultGirl.png";
                  }else if(this.user.gender = "Male"){
                    this.profileImg = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520725961/defaultBoy.png";
                  }else if(this.user.gender = "Other"){
                    this.profileImg = "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520726450/profile.png";
                  }
                }else{
                  this.profileImg = this.user.profileImg
                }
          })
  }



}
