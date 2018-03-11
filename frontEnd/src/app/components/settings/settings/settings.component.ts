import { GenjouristService } from './../../../services/genjourist.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { user } from '../../models/user';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  cloudinaryImage: any;
 
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dzmob0mk9', uploadPreset: 'yezel8lw' })
  );

  constructor( 
    private authService : AuthService,
    private genjouristService:GenjouristService,
   ) { 
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.cloudinaryImage = JSON.parse(response);
      return {item, response, status, headers};
    };
  }

  user : user;
  profileImg: String;

  ngOnInit() {
    this.authService.userSubject.subscribe(
      data=> {
                this.user = data;
          })
  }

  upload(){

    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
    let res: any = JSON.parse(response);
    console.log(res);
    this.profileImg=res.url;
    this.genjouristService.changeProfileImage(this.user.genjouristId,res.url).subscribe(data=>{
      if(data.sucess){
        console.log('successfully uploaded')
      }else{
        console.log('something is wrong')
      }
    })
    }
  }

}
