import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalsService } from '../../../services/journals.service'; 
import { AuthService } from '../../../services/auth.service';
import { SupportService } from '../../../services/support.service';
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

    support(articleId, genjouristId){
        if(this.authService.loggedIn()){
          // this.authService.getGenjourist().subscribe(profile=>{
          // this.user = profile.user;
          // })
          this.supportService.supportArticle(articleId, genjouristId);
          console.log('user is logged in article id - '+articleId+' userId - ' genjouristId);

        }
        else{
            this.router.navigate(['/login']);
            console.log('first logged in then support us');
        }

      
    }


  }

  


