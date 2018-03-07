import { AuthService } from './../../../../services/auth.service';
import { GenjouristService } from './../../../../services/genjourist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend-user',
  templateUrl: './recommend-user.component.html',
  styleUrls: ['./recommend-user.component.css']
})
export class RecommendUserComponent implements OnInit {

  userId:String;
  supportGenjouristId : String;
  
  constructor(
    private genjouristService: GenjouristService,
    private authService : AuthService
  ) { }

 user:any;
 recommendedUsers:any

  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user =data;
      this.genjouristService.recommendedUser(this.user.genjouristId).subscribe(data=>{
        this.recommendedUsers = data;
        //console.log(data);
      })
    })
  }

}
