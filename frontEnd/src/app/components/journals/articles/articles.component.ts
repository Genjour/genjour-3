import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalsService } from '../../../services/journals.service'; 
import { AuthService } from '../../../services/auth.service';
import { SupportService } from '../../../services/support.service';
import { ArticleComponent } from '../../article/article.component';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private journalsService : JournalsService,
    private authService : AuthService,
    private router: Router,
    private supportService: SupportService,
  ) { }

  
articleId: String;
userId :String;
articles : any[] = [];
user : any[] = [];

  ngOnInit() {
      if(this.authService.loggedIn()){
          this.authService.getGenjourist().subscribe(profile=>{
          this.user = profile.user;
          })
        }
      this.journalsService.getJournals().subscribe(data=>{
      this.articles=data;
      })
    }

  }

  
