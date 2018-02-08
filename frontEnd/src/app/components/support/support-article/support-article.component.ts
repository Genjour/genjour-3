import { Component, OnInit, Input} from '@angular/core';
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
  supportStatus : Boolean;

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
      this.supporterNumber = data.supporters.length;
    });
    // this.socketService.getSupport().subscribe((data)=>{
    //   console.log(data);
    //   this.supporterNumber = data;
    // })
  }

  support(articleId, userId){
    if(this.authService.loggedIn()){
      this.articleService.article(articleId).subscribe(data=>{
        this.supporterNumber = data.supporters.length;
      });
      this.supportService.supportArticle(articleId, userId).subscribe(data=>{
        console.log(data);
        this.articleService.article(articleId).subscribe(data=>{
          this.supporterNumber = data.supporters.length
        });
      });
      
      //this.socketService.test();

      // this.socketService.supportArticle(articleId);

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

      facebookShare(articleId){
        let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u='+'http://localhost:4200/journal/'+articleId , 'facebook-popup', 'height=350,width=600');
         if(facebookWindow.focus) { facebookWindow.focus(); }
           return false;
      }

      twitterShare(articleId){
        var twitterWindow = window.open('https://twitter.com/share?url='+'http://localhost:4200/journal/'+articleId, 'twitter-popup', 'height=350,width=600');
         if(twitterWindow.focus) { twitterWindow.focus(); }
           return false; 
      }

      whatsappShare(articleId){
        console.log(articleId);
      }

      googlePlusShare(articleId){
        var googleWindpw = window.open('https://plus.google.com/share?url='+'http://localhost:4200/journal/'+articleId, 'twitter-popup', 'height=550,width=400');
         if(googleWindpw.focus) { googleWindpw.focus(); }
           return false; 
      }

      copyLink(articleId){
        console.log(articleId);
        let link = 'http://localhost:4200/journal/'+articleId;
        //link.select();
        //document.execCommand("copy")
      }



      // var twitterShare = document.querySelector('[data-js="twitter-share"]');

      // twitterShare.onclick = function(e) {
      //   e.preventDefault();
      //   var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
      //   if(twitterWindow.focus) { twitterWindow.focus(); }
      //     return false;
      //   }


}
