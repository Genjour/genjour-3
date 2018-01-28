import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  articleContents : any[] = [];
  quotationContents : any[] = [];

  constructor(
    private categoryService : CategoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.categoryService.articleContent(this.route.snapshot.params.categoryName).subscribe(data=>{
      this.articleContents = data;
    });
    this.categoryService.quotationContent(this.route.snapshot.params.categoryName).subscribe(data=>{
      this.quotationContents = data;
    });
    
  }

}
