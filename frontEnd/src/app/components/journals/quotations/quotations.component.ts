import { Component, OnInit } from '@angular/core';
import { QuotationsService } from '../../../services/quotations.service';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {

  constructor(
    private quotationsService : QuotationsService,
  ) { }

  quotes: any[]=[];

  ngOnInit() {
    this.quotationsService.getQuotations().subscribe(data=>{
      this.quotes = data.filter( x=> x.status == true );
      console.log(this.quotes);
    });
  }

}
