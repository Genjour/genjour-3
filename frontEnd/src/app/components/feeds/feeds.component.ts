import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../../services/feeds/feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  
articleId: String;
user :any;
articles : Object;
newUserStatus: Boolean = true;

  constructor(
    private feedsService: FeedsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;

      console.log(this.user.supporting.length);
      if(this.user.supporting.length<1){
        this.newUserStatus = false;
      }
      this.feedsService.articleFeeds(this.user.genjouristId).subscribe(data=>{
        this.articles = data; 
        console.log(data);
      })
    })
    
  }
  

}
