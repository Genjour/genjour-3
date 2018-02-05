import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  constructor( private authService : AuthService ) { }

  user : object;

  ngOnInit() {
    this.authService.userSubject.subscribe(
      data=> {
                this.user = data;
          })
  }

}
