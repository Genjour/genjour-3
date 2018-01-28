import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  private url = 'http://localhost:3000';  
  private socket;

  constructor() {
    this.socket = io(this.url);
   }

  test(){

        this.socket = io(this.url);
        this.socket.on('test1', (data) => {
          console.log(data);
          this.socket.emit('test2',{msg:'emiting to console'});
        });
  
      }
      
  supportArticle(articleId){
      this.socket.emit('getArticleIdForSupport',articleId);
      // return Observable.create((observer)=>{
      //   this.socket.on('getArticleSupportNumber',(supportNumber)=>{
      //     observer.next(supportNumber);
      //   });
      // });
  }

  getSupport = () =>{
      return Observable.create((observer)=>{
        this.socket.on('getArticleSupportNumber',(supportNumber)=>{
          observer.next(supportNumber);
        });
      });
  }
}


