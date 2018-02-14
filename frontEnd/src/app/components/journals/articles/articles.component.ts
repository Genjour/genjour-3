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
journals : any[]=[]

  ngOnInit() {
      if(this.authService.loggedIn()){
        this.authService.userSubject.subscribe(
          data=> {
                    this.user = data;
              })
        }
      this.journalsService.getJournals().subscribe(data=>{
      this.journals = data.filter( x=> x.status == true );
      this.articles = this.journals.slice(0,7);
      });
    }

    onScroll () {
      console.log('scrolled!!')
      if(this.articles.length<this.journals.length){
        let len = this.articles.length;
        console.log(len);
        for(let i = len; i<=len+3; i++ ){
          this.articles.push(this.journals[i]);
        }
        
      }
    }


  }

  
