import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { user } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user: user;
profileImg:String;
  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
      this.authService.getGenjourist().subscribe(profile=>{
      this.user = profile.user;
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
      this.authService.userDataBridge(this.user);
      },
      err => {
        console.log(err);
        return false;
      });

      
  }

  logout(){
    this.authService.logout();
    console.log('User is logged out');
    this.router.navigate(['/']);
    return false;
  }

}
