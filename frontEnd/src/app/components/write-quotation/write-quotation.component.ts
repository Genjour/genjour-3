import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { PostService } from '../../services/post.service'; 
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-write-quotation',
  templateUrl: './write-quotation.component.html',
  styleUrls: ['./write-quotation.component.css']
})
export class WriteQuotationComponent implements OnInit {

  constructor(
    private validateService : ValidateService,
    private postService : PostService,
    private router : Router,
    private auhtService : AuthService
  ) { }

  ngOnInit() {
  }

  quote         : String;
  tags          : String;
  category      : String;
  // genjouristId  : String,
  // genjourist    : String,

  
  quotationSubmit(){
    const quotation = {
      quote    : this.quote,
      tags     : this.tags,
      category : this.category,

    }

    // if(!this.validateService.checkQuotation(quotation)){
    //   console.log("Please fill all fields");
    //   return false;
    // }

    this.auhtService.postQuotation(quotation).subscribe(data=>{
      if(data.success){
        console.log('quotation is posted');
        this.router.navigate(['/feeds']);
      }else{
        console.log('unable to post this quotation');
        this.router.navigate(['/write-article']);
      }
    });

  }

}
