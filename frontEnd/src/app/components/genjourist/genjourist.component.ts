import { Component, OnInit } from '@angular/core';
import { GenjouristService } from '../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SupportService } from '../../services/support.service';
import { SocketService } from '../../services/socket/socket.service';

@Component({
  selector: 'app-genjourist',
  templateUrl: './genjourist.component.html',
  styleUrls: ['./genjourist.component.css']
})
export class GenjouristComponent implements OnInit {

  userData : Object;
  journals: Object;
  quotations :Object;
  user: object;
  articleId: any;
  supporterNumber : any;
  supportingNumber : Number;
  selfSupportAlert : Boolean = true;
  supportersLists : any[] = [];
  supportingLists : any[] = [];

  constructor(
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private supportService: SupportService,
    private router: Router,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    
    this.authService.getGenjourist().subscribe(profile=>{
    this.user = profile.user;
    })

    this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(data=>{
      this.userData = data;
    })

    this.genjouristService.articles(this.route.snapshot.params.id).subscribe(article=>{
    this.journals = article;
    })

    this.genjouristService.quotation(this.route.snapshot.params.id).subscribe(data=>{
    this.quotations = data;
    })

    this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(data=>{
      this.supportingLists = data;
      console.log(this.supportingLists);
    })

  }

  support(userId, genjouristId){
    if(this.authService.loggedIn()){

      if(userId == genjouristId){
        console.log('You cannot like your own profile');
        this.selfSupportAlert = false;
        return this.selfSupportAlert;
      }

      //=============== Support Code ==========================

      this.supportService.supportGenjourist(userId, genjouristId).subscribe(data=>{
        this.supporterNumber = data.msg;
        console.log(data.msg);
        this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(data=>{
          console.log(data.supporters.length);
        this.supporterNumber = data.supporters.length;
        })
      });

       //=============== Supporting Code ======================

      this.supportService.supportingGenjourist(userId, genjouristId).subscribe(data=>{
        this.supportingNumber = data.msg;
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

  

}
