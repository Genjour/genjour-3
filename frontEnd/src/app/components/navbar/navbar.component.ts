import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbarService : NavbarService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.navbarService.logout();
    console.log('User is logged out');
    this.router.navigate(['/']);
  }

}
