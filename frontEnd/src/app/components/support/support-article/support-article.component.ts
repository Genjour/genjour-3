import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { JournalsService } from '../../../services/journals.service'; 
import { AuthService } from '../../../services/auth.service';
import { SupportService } from '../../../services/support.service';

//import { SocketService } from '../../../services/socket/socket.service';

@Component({
  selector: 'app-support-article',
  templateUrl: './support-article.component.html',
  styleUrls: ['./support-article.component.css']
})
export class SupportArticleComponent implements OnInit {

  @Input() journalId: String; 
  @Input() userId : String;

  articleData:Object;
  articles : Object;
  supporters : any[] = [];
  supporterNumber : any;
  supportStatus : Boolean;

  constructor(
    private journalsService : JournalsService,
    private authService : AuthService,
    private router: Router,
    private supportService: SupportService,

  ) { }

  ngOnInit( ) {
    this.journalsService.getJournalById(this.journalId).subscribe(data=>{
      this.supporterNumber = data.supporters.length;
      this.supporters = data.supporters;
      //-----------------------------------support button animatation--------------------------------
      if(this.supporters.includes(this.userId)==true){ 
        this.supportStatus = true;
      }
      else{
        this.supportStatus=false;
      }
      //---------------------------------end support button animatation--------------------------------
    });

    // this.socketService.getSupport().subscribe((data)=>{
    //   console.log(data);
    //   this.supporterNumber = data;
    // })
  }

  support(journalId, userId){
    
    if(this.authService.loggedIn()){

      this.journalsService.getJournalById(journalId).subscribe(data=>{
        this.supporterNumber = data.supporters.length;
        this.supporters = data.supporters;
        //---------------------------------support button animatation--------------------------------
        if(this.supporters.includes(this.userId)==true){ 
          this.supportStatus = true;
        }
        else{
          this.supportStatus=false;
        }
        //-----------------------------------------------------------------
      });
      this.supportService.supportJournal(journalId, userId).subscribe(data=>{
        //console.log(data);
        this.journalsService.getJournalById(journalId).subscribe(data=>{
          this.supporterNumber = data.supporters.length
          this.supporters = data.supporters;
          //------------------------------support button animatation-----------------------------------
          if(this.supporters.includes(this.userId)==true){ 
            this.supportStatus = true;
          }
          else{
            this.supportStatus=false;
          }
          //-----------------------------------------------------------------
        });
      });
      
      
    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }

  
}

      facebookShare(journalId){
        let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u='+'http://localhost:4200/journal/'+journalId , 'facebook-popup', 'height=350,width=600');
         if(facebookWindow.focus) { facebookWindow.focus(); }
           return false;
      }

      twitterShare(journalId){
        var twitterWindow = window.open('https://twitter.com/share?url='+'http://localhost:4200/journal/'+journalId, 'twitter-popup', 'height=350,width=600');
         if(twitterWindow.focus) { twitterWindow.focus(); }
           return false; 
      }

      whatsappShare(journalId){
        console.log(journalId);
      }

      googlePlusShare(journalId){
        var googleWindpw = window.open('https://plus.google.com/share?url='+'http://localhost:4200/journal/'+journalId, 'twitter-popup', 'height=550,width=400');
         if(googleWindpw.focus) { googleWindpw.focus(); }
           return false; 
      }

      // copyLink(journalId){
      //   console.log(journalId);
      //   let link = 'http://localhost:4200/journal/'+journalId;
      //   //link.select();
      //   //document.execCommand("copy")
      // }



}
