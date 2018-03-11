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
userId:String;
journals : Object;
quotations :Object;
supportersLists : any[] = [];
supportingLists : any[] = [];
supportingNumber : number;
supportersNumber : number;
profileImg:String;
supportersListsStatus:String;
supportGenjouristId : String;

  constructor(
    private authService : AuthService,
    private router : Router,
    private profileService : ProfileService,
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.authService.userSubject.subscribe(
      data=> {
                this.user = data;

                this.profileService.articles(this.user.genjouristId).subscribe(article=>{
                   this.journals = article;
                });
                this.profileService.quotation(this.user.genjouristId).subscribe(quotation=>{
                  this.quotations = quotation;
                });
        //=================================================================================================
        //======================================= Support Numbers =========================================
        //=================================================================================================

                this.supportersNumber = this.user.length;
                this.supportingNumber = this.user.length;
                

        //=================================================================================================
        //======================================= LIST ====================================================
        //=================================================================================================
              this.genjouristService.getSupportingList(this.user.genjouristId).subscribe(data=>{
                this.supportingLists = data;
                this.supportingNumber = data.length;
                //console.log(this.supportingLists);
              })

              this.genjouristService.getSupportersList(this.user.genjouristId).subscribe(data=>{
                this.supportersLists = data;
                this.supportersNumber = data.length;
                //console.log(this.supportersLists)
              })
          })

  } 

  deleteArticle(articleId){
        if (confirm('Are you sure you want to delete this article?')) {
          this.genjouristService.deleteArticle(articleId).subscribe(data=>{
            console.log(data);
            this.profileService.articles(this.user.genjouristId).subscribe(article=>{
              this.journals = article;
           });
          });
      } else {
         console.log('cannot do anything');
      }
  }

}
