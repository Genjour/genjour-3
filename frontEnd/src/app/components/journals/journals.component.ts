import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  status : boolean = true;
  constructor() { }

  

  ngOnInit() {
   
  }

  toggle(){
    if(this.status == true){
      this.status = false;
      console.log(this.status);
    }else{
      this.status = true;
      console.log(this.status);
    }
  }

}
