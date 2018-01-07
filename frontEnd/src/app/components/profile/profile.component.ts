import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user : Object;
journals : Object;

  constructor(
    private authService : AuthService,
    private router : Router,
    private profileService : ProfileService

  ) { }

  ngOnInit() {
    this.authService.getGenjourist().subscribe(profile=>{
    this.user = profile.user;
      this.profileService.articles(this.user.genjouristId).subscribe(article=>{
      this.journals = article;
      });
    });

    // err => {
    //   console.log(err);
    //   return false;
    // });
  }

}
