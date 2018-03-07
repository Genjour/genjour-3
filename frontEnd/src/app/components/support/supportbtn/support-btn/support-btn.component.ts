import { user } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SupportService } from '../../../../services/support.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-support-btn',
  templateUrl: './support-btn.component.html',
  styleUrls: ['./support-btn.component.css'],
  
})


export class SupportBtnComponent implements OnInit {

  @Input() supportGenjouristId; 
  @Input() userId;

  supportStatus: Boolean;
  user:user;
  supporting:any[]=[];
  
  constructor(
    private authService : AuthService,
    private router: Router,
    private supportService: SupportService,
  ) { }

  ngOnInit( ) {

    this.authService.userSubject.subscribe(data=>{
      this.user = data;
        console.log(data.supporting);
        console.log("supporting id "+this.supportGenjouristId);
        let arr = data.supporting;
        let found = arr.find(found => found == this.supportGenjouristId);
        console.log(found)
        if(found != undefined){
          this.supportStatus = false;
        }else{
          this.supportStatus = true;
        }
    });

  }

  supportGen(userId,supportGenjouristId){
    //console.log("userId "+userId+" genjouristId "+supportGenjouristId);

    if(this.authService.loggedIn()){


       // ========================================= Support Status ===========================================

      if(this.supportStatus === true){
        this.supportStatus = false;
      }else if (this.supportStatus === false){
        this.supportStatus = true;
      }

      //============================================ Support Code ============================================

      this.supportService.supportGenjourist(userId, supportGenjouristId).subscribe(data=>{
        // this.supporterNumber = data.msg;
           console.log(data.msg);

      });

       //========================================= Supporting Code ============================================

      this.supportService.supportingGenjourist(userId, supportGenjouristId).subscribe(data=>{
        //this.supportingNumber = data.msg;
        console.log(data.msg);
      });



    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }

  }

}
