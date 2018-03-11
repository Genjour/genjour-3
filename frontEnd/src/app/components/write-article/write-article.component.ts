import { Component, OnInit, TemplateRef, ElementRef  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { ScriptLoaderService } from '../../services/script-loader.service';

import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

//import * as $ from "jquery";
declare let $:any;
@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.css']
})
export class WriteArticleComponent implements OnInit {

  cloudinaryImage: any;
 
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dzmob0mk9', uploadPreset: 'yezel8lw' })
  );

  constructor(
    private authService : AuthService,
    private router : Router,
    private postService : PostService,
    private el : ElementRef ,
    private script: ScriptLoaderService,
       
  ) { 
    //Override onSuccessItem function to record cloudinary response data
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      //response is the cloudinary response
      //see http://cloudinary.com/documentation/upload_images#upload_response
      this.cloudinaryImage = JSON.parse(response);
      
      return {item, response, status, headers};
    };
  }

  imgUrl   : String;
  title    : String;
  tags     : String;
  image    : String;
  category : String;
  content  : String;
  throwStatus : String;
  status : Boolean;
  imgStatus : Boolean = false;


  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        'assets/demo/default/custom/components/forms/widgets/summernote.js');
        

}

upload(){

  this.uploader.uploadAll();
  this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
  let res: any = JSON.parse(response);
  console.log(res);
  this.imgUrl=res.url;
  this.imgStatus = true;
  }
}
  articleSubmit(){
    
    //var markup = $('.summernote').summernote('code');  //this is summercode editor code

//this.upload();
    
    const article = {
      title    : this.title,
      tags     : this.tags,
      category : this.category,
      imgUrl   : this.imgUrl,
      content  : this.content,
      status   : true,

    }

    console.log(article)
    
    if(article.title == undefined || article.tags == undefined || article.content == undefined || article.category == undefined ){
      this.throwStatus = "Please fill all fields";
      return false;
    } else if(this.imgStatus == false){
        console.log('please upload image');
    }
      else{

          this.authService.postArticle(article).subscribe(data=>{
            if(data.success){ 
              console.log('article is posted');
              this.router.navigate(['/']);
            }else{
              console.log('unable to post this article');
              this.router.navigate(['/write-article']);
            }
          });


        }

  }

  articleSave(){
    const article = {
      title    : this.title,
      tags     : this.tags,
      category : this.category,
      imgUrl   : this.imgUrl,
      content  : this.content,
      status   : false,

    }
    this.authService.saveArticle(article).subscribe(data=>{
      if(data.success){
        console.log('article is successfully saved');
        this.router.navigate(['/']);
      }else{
        console.log('unable to post this article something went wrong');
        this.router.navigate(['/write-article']);
      }
    })
  }

}
