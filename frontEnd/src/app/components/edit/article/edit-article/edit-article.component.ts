import { Component, OnInit } from '@angular/core';
import { GenjouristService } from '../../../../services/genjourist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { draftArticles } from '../../../models/draftArticles';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor( private genjouristService: GenjouristService, private route: ActivatedRoute, private router:Router) { }

  draftData= new draftArticles();




  ngOnInit() {

    this.genjouristService.getDraftArticles(this.route.snapshot.params.articleId).subscribe(data=>{
        console.log(data);
        this.draftData = data;
    })

  }

  draft(articleId){
    const article = {
      title    : this.draftData.title,
      tags     : this.draftData.tags,
      category : this.draftData.category,
      content  : this.draftData.content,
      status   : false,

    }
    this.genjouristService.draftArticles(articleId,article).subscribe(data=>{
      if(data.success){
        console.log('Yeah updated');
        this.router.navigate(['/genjourist']);
      }else{
        console.log('cant update');
      }
    })
  }

  articleSubmit(articleId){
    const article = {
      title    : this.draftData.title,
      tags     : this.draftData.tags,
      category : this.draftData.category,
      content  : this.draftData.content,
      status   : true,
    }

    this.genjouristService.updateArticle(articleId,article).subscribe(data=>{
      if(data.success){
        console.log('Yeah updated');
        this.router.navigate(['/genjourist']);
      }else{
        console.log('cant update');
      }
    })
  }

}
