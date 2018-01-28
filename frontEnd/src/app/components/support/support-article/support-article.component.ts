import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JournalsService } from '../../../services/journals.service'; 
import { AuthService } from '../../../services/auth.service';
import { SupportService } from '../../../services/support.service';
import { ArticleService } from '../../../services/article.service';
import { SocketService } from '../../../services/socket/socket.service';

@Component({
  selector: 'app-support-article',
  templateUrl: './support-article.component.html',
  styleUrls: ['./support-article.component.css']
})
export class SupportArticleComponent implements OnInit {

  articleData:Object;
  articles : Object;
  user : any[] = [];
  supporterNumber : any;

  @Input() articleId: String; 
  @Input() userId : String;

  constructor(
    private journalsService : JournalsService,
    private authService : AuthService,
    private router: Router,
    private supportService: SupportService,
    private socketService: SocketService,
    private articleService : ArticleService,
  ) { }

  ngOnInit( ) {
    this.articleService.article(this.articleId).subscribe(data=>{
      this.supporterNumber = data.supporters.length
    });
    this.socketService.getSupport().subscribe((data)=>{
      console.log(data);
      this.supporterNumber = data;
    })
  }

  support(articleId, userId){
    if(this.authService.loggedIn()){
      this.supportService.supportArticle(articleId, userId).subscribe(data=>{
        console.log(data);
      });
      
      //this.socketService.test();

      this.socketService.supportArticle(articleId).subscribe((data)=>{
        console.log(data);
        this.supporterNumber = data;
      });

      //.subscribe(data=>{
        //this.supporterNumber=data;
        //console.log(this.supporterNumber.supporters);
     // });
      
    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }

  
}

}
