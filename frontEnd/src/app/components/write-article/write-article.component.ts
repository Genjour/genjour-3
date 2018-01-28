import { Component, OnInit, TemplateRef, ElementRef  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { ScriptLoaderService } from '../../services/script-loader.service';
import * as $ from "jquery";

@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.css']
})
export class WriteArticleComponent implements OnInit {

 
  constructor(
    private authService : AuthService,
    private router : Router,
    private postService : PostService,
    private el : ElementRef ,
    private script: ScriptLoaderService,
       
  ) { }

  imgUrl   : String;
  title    : String;
  tags     : String;
  image    : String;
  category : String;
  content  : String;


  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        'assets/demo/default/custom/components/forms/widgets/summernote.js');

}

 upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log("iam+ "+inputEl);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('photo', inputEl.files.item(i));
        }
        this.postService.PostImage(formData).subscribe((success) => {
         //alert(success._body);
         //console.log(success._body);
         this.imgUrl = success._body;
         console.log(this.imgUrl);
       },
         (error) => alert(error))
    }
  }

  articleSubmit(){
    var markup = $('.summernote')//.summernote('code');

    const article = {
      title    : this.title,
      tags     : this.tags,
      category : this.category,
      imgUrl   : this.imgUrl,
      content  : markup
    }

    console.log(article)
    
    // this.authService.postArticle(article).subscribe(data=>{
    //   if(data.success){ 
    //     console.log('article is posted');
    //     this.router.navigate(['/write-article']);
    //   }else{
    //     console.log('unable to post this article');
    //     this.router.navigate(['/write-article']);
    //   }
    // });


    

  }

}
