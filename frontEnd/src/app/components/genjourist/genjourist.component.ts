import { genjouristData } from './../models/genjouristData';
import { LoginComponent } from './../login/login.component';
import { AgeCategoryPipe } from './../profile/age-category.pipe';
import { Component, OnInit } from '@angular/core';
import { GenjouristService } from '../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SupportService } from '../../services/support.service';
import { SocketService } from '../../services/socket/socket.service';
import { user } from '../models/user';

@Component({
  selector: 'app-genjourist',
  templateUrl: './genjourist.component.html',
  styleUrls: ['./genjourist.component.css'],
})
export class GenjouristComponent implements OnInit {

  genjouristData : genjouristData // genjourist profile which user is seeing
  journals: Object;
  quotations :Object;
  user : user;
  currentUser: object;
  articleId: any;
  supportStatus : Boolean;
  supporterNumber : Number;
  supportingNumber : Number;
  selfSupportAlert : Boolean = true;
  supportersLists : any[] = [];
  supportingLists : any[] = [];
  supportingListsStatus: String;
  profileImg:String;

  constructor(
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private supportService: SupportService,
    private router: Router,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    
    this.authService.userSubject.subscribe(
      user=> {
                this.user = user;
               //console.log(this.user);       

          

    this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(genjourist=>{
      this.genjouristData = genjourist;
      // console.log(this.genjouristData);

      //======================================================================================================
      // ========================================= Support Status ============================================
      
        let n = this.user.supporting;
       if(n.includes(this.route.snapshot.params.id) == true){
          this.supportStatus = false;
        }else{
          this.supportStatus = true;
        }

      //======================================================================================================

      if(this.supporterNumber == null){
        this.supporterNumber=0;
      }

      if(this.supportingNumber == null){
        this.supportingNumber = 0;
      }
      
    })

    this.genjouristService.articles(this.route.snapshot.params.id).subscribe(article=>{
    this.journals = article.filter( x=> x.status == true );
    })

    this.genjouristService.quotation(this.route.snapshot.params.id).subscribe(quotation=>{
      this.quotations = quotation.filter( x=> x.status == true);
    })

  });

      //=================================================================================================
      //======================================= LIST ====================================================
      //=================================================================================================
      this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(data=>{
        this.supportingLists = data;
        this.supportingNumber = data.length;
        //console.log(this.supportingLists);
      })

      this.genjouristService.getSupportersList(this.route.snapshot.params.id).subscribe(data=>{
        this.supportersLists = data;
        this.supporterNumber = data.length;
        //console.log(this.supportersLists)
      })

  }


  support(userId, genjouristId){
    if(this.authService.loggedIn()){

      if(userId == genjouristId){
        //console.log('You cannot like your own profile');
        this.selfSupportAlert = false;
        return this.selfSupportAlert;
      }

       // ========================================= Support Status ===========================================

      if(this.supportStatus === true){
        this.supportStatus = false;
      }else if (this.supportStatus === false){
        this.supportStatus = true;
      }

      //============================================ Support Code ============================================

      this.supportService.supportGenjourist(userId, genjouristId).subscribe(data=>{
        // this.supporterNumber = data.msg;
           console.log(data.msg);


        this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(data=>{
        console.log(data.supporters.length);
        this.supporterNumber = data.supporters.length; 

        
        })
      });

       //========================================= Supporting Code ============================================

      this.supportService.supportingGenjourist(userId, genjouristId).subscribe(data=>{
        //this.supportingNumber = data.msg;
        console.log(data.msg);
      });
      this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(data=>{
        console.log(data.supporters.length);
      this.supportingNumber = data.supporting.length;
    });


    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }

  
}


refreshUser(){
  this.ngOnInit();
  this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(data=>{
    this.supportingLists = data;
    //console.log(this.supportingLists);
  })
}
  

}
