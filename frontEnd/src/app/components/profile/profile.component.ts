import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { GenjouristService } from '../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user : any;
journals : Object;
quotations :Object;

  constructor(
    private authService : AuthService,
    private router : Router,
    private profileService : ProfileService,
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.authService.getGenjourist().subscribe(profile=>{
    this.user = profile.user;
      this.profileService.articles(this.user.genjouristId).subscribe(article=>{
      this.journals = article;
      });
      this.profileService.quotation(this.user.genjouristId).subscribe(quotation=>{
        this.quotations = quotation;
        });
    });


    // err => {
    //   console.log(err);
    //   return false;
    // });
  }

}
