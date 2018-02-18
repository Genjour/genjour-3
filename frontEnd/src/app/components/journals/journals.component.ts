import { Observable } from 'rxjs/Observable';
import { QuotationsService } from './../../services/quotations.service';
import { ArticleService } from './../../services/article.service';
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
  articles:Observable<any[]>;
  quotations:Observable<any[]>;
  journals: Observable<any[]>;
  constructor(
    private authService: AuthService,
    private router: Router,
    private quotationsService:QuotationsService,
    private articleService:ArticleService,
  ) { }

  
  ngOnInit() {


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
