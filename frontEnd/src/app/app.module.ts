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
import { PostService } from './services/post.service';

import { AuthGaurd } from './gaurds/auth.gaurd';
import { WriteArticleComponent } from './components/write-article/write-article.component';
import { WriteQuotationComponent } from './components/write-quotation/write-quotation.component';

const appRoutes: Routes = [
  {path: '', component: JournalsComponent },
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'feeds', component: FeedsComponent, canActivate:[AuthGaurd] },
  {path: 'genjourist', component: ProfileComponent, canActivate:[AuthGaurd] },
  {path: 'article', component:ArticleComponent},
  {path: 'write-article', component:WriteArticleComponent, canActivate:[AuthGaurd]},
  {path: 'write-quotation', component:WriteQuotationComponent, canActivate:[AuthGaurd]},
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
    ArticlesComponent,
    WriteArticleComponent,
    WriteQuotationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ValidateService,PostService,AuthService,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
