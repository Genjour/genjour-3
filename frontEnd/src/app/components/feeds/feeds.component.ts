import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../../services/feeds/feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  
articleId: String;
userId :String;
articles : Object;

  constructor(
    private feedsService: FeedsService,
  ) { }

  ngOnInit() {
    this.feedsService.articleFeeds('901513534774213').subscribe(data=>{
      this.articles = data; 
      console.log(data);
    })
  }
  

}
