import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  journals : any[] = [];
  quotationContents : any[] = [];

  constructor(
    private categoryService : CategoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.categoryService.JournalsByCategory(this.route.snapshot.params.categoryName).subscribe(data=>{
      this.journals = data;
    });
   
  }

}
