import { Component, OnInit } from '@angular/core';
import { GenjouristService } from '../../../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor( private genjouristService: GenjouristService, private route: ActivatedRoute,) { }

  draftData:String;
  imgUrl   : String;
  title    : String;
  tags     : String;
  image    : String;
  category : String;
  content  : String;
  throwStatus : String;
  status : Boolean;

  ngOnInit() {

    this.genjouristService.getDraftArticles(this.route.snapshot.params.articleId).subscribe(data=>{
        console.log(data);
        this.draftData = data;
    })

  }

  draft(){
    const article = {
      title    : this.title,
      tags     : this.tags,
      category : this.category,
      imgUrl   : this.imgUrl,
      content  : this.content,
      status   : false,

    }
    console.log(article);
  }

}
