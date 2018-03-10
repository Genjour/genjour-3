import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any;
  searchTerm$ = new Subject<string>();

  constructor(
    private searchService:SearchService
  ) {
      this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
        console.log(results)
      });
   }

  ngOnInit() {
  }

}
