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
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  

  ngOnInit() {
   
  }

  toggle(){
    if(this.authService.loggedIn()){
      if(this.status == true){
        console.log('initally'+this.status);
          this.status = false;
          console.log(this.status);
        }else if(this.status == false){
          console.log('initally'+this.status);
          this.status = true;
          console.log(this.status);
        }

    }else {
      this.status = true;
      this.router.navigate(['/login']);
    }
  }

}
