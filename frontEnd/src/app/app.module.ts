import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BaseRequestOptions, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginComponent } from './components/login/login.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { RegisterComponent } from './components/register/register.component';

import { JournalsComponent } from './components/journals/journals.component';
import { ArticlesComponent } from './components/journals/articles/articles.component';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
const appRoutes: Routes = [
  {path: '', component: JournalsComponent },
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'feeds', component: FeedsComponent },
  {path: 'genjourist', component: ProfileComponent },
  {path: 'article', component:ArticleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FeedsComponent,
    ProfileComponent,
    ArticleComponent,
    SidenavComponent,
    RegisterComponent,
    JournalsComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
