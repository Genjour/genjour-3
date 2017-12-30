import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { JournalsService } from '../../../services/journals.service'; 

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private http: Http,
    private journalsService : JournalsService
  ) { }

articles : object;


  ngOnInit() {

      this.journalsService.getJournals().subscribe(data=>{
      this.articles=data;
      })

    }

  }

  


