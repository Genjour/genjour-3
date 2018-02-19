import { Observable } from 'rxjs/Observable';
import { QuotationsService } from './../../services/quotations.service';
import { ArticleService } from './../../services/article.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  status : boolean = true;
  articles:Observable<any[]>;
  quotations = [
    {
      "quotationId" : "24z72vwjc7awjbh",
      "genjouristId" : "901513534774213",
      "genjourist" : "shrey",
      "category" : "Economics",
      "quote" : "this is a dummy text for text quotation in which your can write limited text so use it efficiently be nice and humble to those who are weak and motivate everyone today is monday and be surprised.",
      "tags" : "a,d,d,f,e,",
      "date" : "Tue Jan 09 2018 12:44:43 GMT+0530 (India Standard Time)",
      "supporters" : [''],
      "status" : true,
      "type" : "quote",
      "__v" : 0
    },
    {
      "quotationId" : "24z71jkjcxmz4sh",
      "genjouristId" : "901513509696095",
      "genjourist" : "raj",
      "category" : "Economics",
      "quote" : "second ",
      "tags" : "second",
      "date" : "Sat Jan 27 2018 23:04:40 GMT+0530 (India Standard Time)",
      "supporters" : [''],
      "status" : true,
      "type" : "quote",
      "__v" : 0
    },
    {
      "quotationId" : "24z76v4jdekwp3z",
      "genjouristId" : "901513509696095",
      "genjourist" : "raj",
      "category" : "Life",
      "quote" : "publish",
      "tags" : "pub",
      "date" : "Thu Feb 08 2018 19:38:52 GMT+0530 (India Standard Time)",
      "supporters" : [''],
      "status" : true,
      "type" : "quote",
      "__v" : 0
    },
    {
      "quotationId" : "24z74n4jdtvj0bi",
      "genjouristId" : "101517946887646",
      "genjourist" : "yateen raje",
      "category" : "Economics",
      "quote" : "yateen's quote",
      "tags" : "yateen genjour",
      "date" : "Mon Feb 19 2018 12:32:42 GMT+0530 (India Standard Time)",
      "status" : false,
      "supporters" : [''],
      "type" : "quote",
      "__v" : 0
  }
  ]
  journals = [
      {
        "articleId" : "24z74icjbscy764",
        "genjouristId" : "901513509696095",
        "genjourist" : "raj",
        "category" : "Controversy",
        "title" : "article 2",
        "date" : "Sat Dec 30 2017 01:45:27 GMT+0530 (India Standard Time)",
        "imgUrl" : "uploads\\articles\\photo-1514578579968.JPG",
        "supportNumber" : 2,
        "content" : "Loda Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "tags" : "tag1, tag2, tag3",
        "__v" : 0,
        "supporters" : [ 
            "901513509696095"
        ],
        "type" : "article",
        "status" : true
    },
    {
      "articleId" : "24z72cgjdl9l95s",
      "genjouristId" : "901513534788143",
      "genjourist" : "anush",
      "category" : "Politics",
      "title" : "demo 2",
      "imgUrl" : "uploads\\articles\\photo-1514578579968.JPG",
      "content" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\n",
      "date" : "Tue Feb 13 2018 11:56:26 GMT+0530 (India Standard Time)",
      "tags" : "yo ",
      "status" : true,
      "supporters" : [''],
      "type" : "article",
      "__v" : 0
    },
    {
      "articleId" : "24z74icjbsd3g8f",
      "genjouristId" : "901513534788143",
      "genjourist" : "anush",
      "category" : "Self-Help",
      "title" : "article 7",
      "date" : "Sat Dec 30 2017 01:49:32 GMT+0530 (India Standard Time)",
      "tags" : "aas,adad,fr,gsd,st",
      "imgUrl" : "uploads\\articles\\photo-1514578782764.JPG",
      "supporters" : [''],
      "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "__v" : 0,
      "supportNumber" : 2,
      "type" : "article",
      "status" : true
    },
    {
      "articleId" : "24z74icjbsd3g8f",
      "genjouristId" : "901513534788143",
      "genjourist" : "anush",
      "category" : "Self-Help",
      "title" : "article 7",
      "date" : "Sat Dec 30 2017 01:49:32 GMT+0530 (India Standard Time)",
      "tags" : "aas,adad,fr,gsd,st",
      "imgUrl" : "uploads\\articles\\photo-1514578782764.JPG",
      "supporters" : [''],
      "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "__v" : 0,
      "supportNumber" : 2,
      "type" : "article",
      "status" : true
    },
    {
      "articleId" : "24z74icjbsd3g8f",
      "genjouristId" : "901513534788143",
      "genjourist" : "anush",
      "category" : "Self-Help",
      "title" : "article 7",
      "date" : "Sat Dec 30 2017 01:49:32 GMT+0530 (India Standard Time)",
      "tags" : "aas,adad,fr,gsd,st",
      "imgUrl" : "uploads\\articles\\photo-1514578782764.JPG",
      "supporters" : [''],
      "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "__v" : 0,
      "supportNumber" : 2,
      "type" : "article",
      "status" : true
    },
    {
      "articleId" : "24z74icjbsd1uke",
      "genjouristId" : "901513534774213",
      "genjourist" : "shrey",
      "category" : "Philosophy",
      "title" : "article 6",
      "date" : "Sat Dec 30 2017 01:48:17 GMT+0530 (India Standard Time)",
      "tags" : "f,s,fds,f,s",
      "imgUrl" : "uploads\\articles\\photo-1514578579968.JPG",
      "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "__v" : 0,
      "supporters" : [ 
          "901513534774213"
      ],
      "supportNumber" : 1,
      "type" : "article",
      "status" : "true"
    }
  ]
  combine:any[]=[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private quotationsService:QuotationsService,
    private articleService:ArticleService,
  ) { }

  
  ngOnInit() {

      console.log(this.journals);

  }

  toggle(){
    if(this.authService.loggedIn()){
      if(this.status == true){
          this.status = false;
        }else if(this.status == false){
          this.status = true;
        }

    }else {
      this.status = true;
      this.router.navigate(['/login']);
    }
  }

}
