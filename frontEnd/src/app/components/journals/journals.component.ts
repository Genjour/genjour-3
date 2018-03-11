import { JournalsService } from './../../services/journals.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  status : boolean = true;
  user: any;
  journalId :String;
  journals: any[]=[];


  constructor(
    private authService: AuthService,
    private router: Router,
    private journalService: JournalsService,
  ) { }

  
  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    });
    this.journalService.getJournal().subscribe(data=>{
      this.journals = data;
      console.log(this.journals);
    })
  }

  toggle(){
    if(this.authService.loggedIn()){
      if(this.status == true){
          this.status = false;
        }else if(this.status == false){
          this.status = true;
        }

    }else {
      this.status = true;
      this.router.navigate(['/login']);
    }
  }

}
