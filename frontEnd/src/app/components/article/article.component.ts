import { Component, OnInit } from '@angular/core';
import { GenjouristService } from '../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SupportService } from '../../services/support.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleData: Object;
  articleId: String;
  userId: String;


  constructor(
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private supportService: SupportService,
    private router: Router,
    private articleService: ArticleService
  ) { }

  //articleId:any = this.route.snapshot.params.articleId;

  ngOnInit() {

    this.articleService.article(this.route.snapshot.params.articleId).subscribe(data=>{
      this.articleData = data;
      console.log(this.articleData);
    })

  }

}
