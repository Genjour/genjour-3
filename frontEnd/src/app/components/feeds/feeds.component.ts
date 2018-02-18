import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../../services/feeds/feeds.service';
import { user } from '../models/user';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  
articleId: String;
user :user;
articles : Object;
newUserStatus: Boolean = true;
userId : String;

  constructor(
    private feedsService: FeedsService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.userSubject.subscribe(data=>{
      this.user = data;
      console.log(this.user.supporting.length);
      if(this.user.supporting.length == 0){
        this.newUserStatus = false;
      }
      this.feedsService.articleFeeds(this.user.genjouristId).subscribe(data=>{
        this.articles = data; 
        console.log(data);
      })
    })
    
  }
  

}
