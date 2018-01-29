webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:45px;\">\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_feeds_feeds_component__ = __webpack_require__("../../../../../src/app/components/feeds/feeds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_article_article_component__ = __webpack_require__("../../../../../src/app/components/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_journals_journals_component__ = __webpack_require__("../../../../../src/app/components/journals/journals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_journals_articles_articles_component__ = __webpack_require__("../../../../../src/app/components/journals/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_genjourist_genjourist_component__ = __webpack_require__("../../../../../src/app/components/genjourist/genjourist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_support_support_article_support_article_component__ = __webpack_require__("../../../../../src/app/components/support/support-article/support-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_support_support_quotation_support_quotation_component__ = __webpack_require__("../../../../../src/app/components/support/support-quotation/support-quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_journals_service__ = __webpack_require__("../../../../../src/app/services/journals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_socket_socket_service__ = __webpack_require__("../../../../../src/app/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_script_loader_service__ = __webpack_require__("../../../../../src/app/services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__gaurds_auth_gaurd__ = __webpack_require__("../../../../../src/app/gaurds/auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_write_article_write_article_component__ = __webpack_require__("../../../../../src/app/components/write-article/write-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_write_quotation_write_quotation_component__ = __webpack_require__("../../../../../src/app/components/write-quotation/write-quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_journals_articles_summary_pipe__ = __webpack_require__("../../../../../src/app/components/journals/articles/summary.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_journals_journals_component__["a" /* JournalsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'feeds', component: __WEBPACK_IMPORTED_MODULE_7__components_feeds_feeds_component__["a" /* FeedsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'category/:categoryName', component: __WEBPACK_IMPORTED_MODULE_18__components_category_category_component__["a" /* CategoryComponent */] },
    { path: 'genjourist/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_genjourist_genjourist_component__["a" /* GenjouristComponent */] },
    { path: 'genjourist', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'journal/:articleId', component: __WEBPACK_IMPORTED_MODULE_10__components_article_article_component__["a" /* ArticleComponent */] },
    { path: 'write-article', component: __WEBPACK_IMPORTED_MODULE_31__components_write_article_write_article_component__["a" /* WriteArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'write-quotation', component: __WEBPACK_IMPORTED_MODULE_32__components_write_quotation_write_quotation_component__["a" /* WriteQuotationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_feeds_feeds_component__["a" /* FeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_journals_journals_component__["a" /* JournalsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_journals_articles_articles_component__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_write_article_write_article_component__["a" /* WriteArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_write_quotation_write_quotation_component__["a" /* WriteQuotationComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_journals_articles_summary_pipe__["a" /* SummaryPipe */],
                __WEBPACK_IMPORTED_MODULE_15__components_genjourist_genjourist_component__["a" /* GenjouristComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_support_support_article_support_article_component__["a" /* SupportArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_support_support_quotation_support_quotation_component__["a" /* SupportQuotationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_category_category_component__["a" /* CategoryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_21__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_30__gaurds_auth_gaurd__["a" /* AuthGaurd */],
                __WEBPACK_IMPORTED_MODULE_22__services_journals_service__["a" /* JournalsService */],
                __WEBPACK_IMPORTED_MODULE_23__services_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_24__services_support_service__["a" /* SupportService */],
                __WEBPACK_IMPORTED_MODULE_25__services_genjourist_service__["a" /* GenjouristService */],
                __WEBPACK_IMPORTED_MODULE_26__services_article_service__["a" /* ArticleService */],
                __WEBPACK_IMPORTED_MODULE_27__services_socket_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_28__services_category_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_29__services_script_loader_service__["a" /* ScriptLoaderService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-widget19 .m-widget19__content .m-widget19__header .m-widget19__user-img .m-widget19__img{\r\n    width:5.2rem;\r\n}\r\n.m-header--fixed .m-body{\r\n    padding:0 !important;\r\n}\r\n\r\n.offset-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  \r\n  .offset-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  \r\n  .offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  \r\n  .offset-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  \r\n  .offset-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  \r\n  .offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  \r\n  .offset-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  \r\n  .offset-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  \r\n  .offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  \r\n  .offset-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  \r\n  .offset-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-sm-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-sm-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-sm-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-sm-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-sm-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-sm-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-sm-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n\r\n.offset-md-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-md-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-md-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-md-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-md-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-md-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-md-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-md-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-md-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-scroll-top--shown\">\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body \">\n      <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n        <!-- BEGIN: Subheader -->\n        <div class=\"row\">\n              <div class=\"col-md-9 col-xs-12 m-subheader m--padding-50 \">\n                  <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                      <div class=\"m-portlet__head m-portlet__head--fit\">\n                        <div class=\"m-portlet__head-caption\">\n                          <div class=\"m-portlet__head-action\">\n                            <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                              {{articleData?.category}}\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"m-portlet__body\">\n                        <div class=\"m-widget19\">\n      \n                              <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                                <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\n                                <h3 class=\"m-widget19__title m--font-light\">\n                                  {{articleData?.title}}\n                                </h3>\n                                <div class=\"m-widget19__shadow\"></div>\n                              </div>\n      \n                              <div class=\"m-widget19__content\">\n                                <div class=\"m-widget19__header\">\n                                  <div class=\"m-widget19__user-img\">\n                                    <a [routerLink]=\"['/genjourist',articleData?.genjouristId]\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                                  </div>\n                                  <div class=\"m-widget19__info\">\n                                    <span class=\"m-widget19__username\">\n                                       <a [routerLink]=\"['/genjourist',articleData?.genjouristId]\">{{articleData?.genjourist}}</a>\n                                    </span>\n                                    <br>\n                                    <span class=\"m-badge m-badge--danger m-badge--wide\">\n                                        14-30\n                                    </span>\n                                  </div>\n                                  <div class=\"col m--align-right\">\n                                      <app-support-article [articleId]=\"articleData?.articleId\" [userId]=\"articleData?.genjouristId\" ></app-support-article>  \n                                  </div>\n                                </div>\n                                <div class=\"\">\n                                  <p class=\"lead\">\n                                     {{articleData?.content}}\n                                  </p>\n                                </div>\n      \n                              </div>\n                        </div>\n                      </div>\n                    </div>           \n              </div>\n              <div class=\"col-md-3 m--padding-30\">\n                <app-sidenav></app-sidenav>\n              </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12 m-subheader \">\n              <div class=\"d-flex align-items-center\">\n                <div class=\"mr-auto\">\n                  <h3 class=\"m-subheader__title \">\n                    Recommended\n                  </h3>\n                </div>\n                <div>\n                </div>\n              </div>\n    \n                <!--Begin::Main Portlet-->\n              <div class=\"m-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <!--begin:: Widgets/Blog-->\n                   \n                        <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                            <div class=\"m-portlet__head m-portlet__head--fit\">\n                              <div class=\"m-portlet__head-caption\">\n                                <div class=\"m-portlet__head-action\">\n                                  <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                                    Life\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"m-portlet__body\">\n                              <div class=\"m-widget19\">\n                                  <a href=\"post\">\n                                    <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                                      <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\n                                      <h3 class=\"m-widget19__title m--font-light\">\n                                        Introducing New Feature\n                                      </h3>\n                                      <div class=\"m-widget19__shadow\"></div>\n                                    </div>\n                                  </a>\n                                    <div class=\"m-widget19__content\">\n                                      <div class=\"m-widget19__header\">\n                                        <div class=\"m-widget19__user-img\">\n                                          <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                                        </div>\n                                        <div class=\"m-widget19__info\">\n                                          <span class=\"m-widget19__username\">\n                                             <a href=\"annakrox\">Anna Krox</a>\n                                          </span>\n                                          <br>\n                                          <span class=\"m-widget19__time\">\n                                            UX/UI Designer, Google\n                                          </span>\n                                        </div>\n                                      </div>\n                                    <a href=\"post\">\n                                      <div class=\"m-widget19__body m-nav__link-text\">\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \n                                      </div>\n                                    </a>\n                                    </div>\n                                  \n                                <div class=\"m-widget19__action\">\n                                    <div class=\"m--margin-top-5 m--margin-bottom-5 \">\n                                        <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                                          <button type=\"button\" class=\"m-btn btn btn-secondary\">\n                                            <i class=\"la la-file-text-o\"></i> Support \n                                          </button>\n                                          <div class=\"m-btn-group btn-group\" role=\"group\">\n                                            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                <i class=\"flaticon-network\"></i> Replicate\n                                            </button>\n                                            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                              <a class=\"dropdown-item\" href=\"#\">\n                                                Dropdown link\n                                              </a>\n                                              <a class=\"dropdown-item\" href=\"#\">\n                                                Dropdown link\n                                              </a>\n                                              <a class=\"dropdown-item\" href=\"#\">\n                                                Dropdown link\n                                              </a>\n                                              <a class=\"dropdown-item\" href=\"#\">\n                                                Dropdown link\n                                              </a>\n                                            </div>\n                                          </div>\n                                        </div>\n                                    </div>\n                                </div>\n                              </div>\n                            </div>\n                        </div>\n                \n                    <!--end:: Widgets/Blog-->\n                  </div>\n                  <div class=\"col-md-3\">\n                          <!--begin:: Widgets/Blog-->\n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\n                                <div class=\"m-portlet__head-caption\">\n                                  <div class=\"m-portlet__head-action\">\n                                    <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                                      Life\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"m-portlet__body\">\n                                <div class=\"m-widget19\">\n                                    <a href=\"post\">\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                                        <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\n                                        <h3 class=\"m-widget19__title m--font-light\">\n                                          Introducing New Feature\n                                        </h3>\n                                        <div class=\"m-widget19__shadow\"></div>\n                                      </div>\n                                    </a>\n                                      <div class=\"m-widget19__content\">\n                                        <div class=\"m-widget19__header\">\n                                          <div class=\"m-widget19__user-img\">\n                                            <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                                          </div>\n                                          <div class=\"m-widget19__info\">\n                                            <span class=\"m-widget19__username\">\n                                               <a href=\"annakrox\">Anna Krox</a>\n                                            </span>\n                                            <br>\n                                            <span class=\"m-widget19__time\">\n                                              UX/UI Designer, Google\n                                            </span>\n                                          </div>\n                                        </div>\n                                      <a href=\"post\">\n                                        <div class=\"m-widget19__body m-nav__link-text\">\n                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \n                                        </div>\n                                      </a>\n                                      </div>\n                                    \n                                  <div class=\"m-widget19__action\">\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 \">\n                                          <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                                            <button type=\"button\" class=\"m-btn btn btn-secondary\">\n                                              <i class=\"la la-file-text-o\"></i> Support \n                                            </button>\n                                            <div class=\"m-btn-group btn-group\" role=\"group\">\n                                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <i class=\"flaticon-network\"></i> Replicate\n                                              </button>\n                                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                              </div>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </div>\n                          </div>\n                          <!--end:: Widgets/Blog-->\n                  </div>\n                  <div class=\"col-md-3\">\n                      <!--begin:: Widgets/Blog-->\n                \n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\n                                <div class=\"m-portlet__head-caption\">\n                                  <div class=\"m-portlet__head-action\">\n                                    <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                                      Life\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"m-portlet__body\">\n                                <div class=\"m-widget19\">\n                                    <a href=\"post\">\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                                        <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\n                                        <h3 class=\"m-widget19__title m--font-light\">\n                                          Introducing New Feature\n                                        </h3>\n                                        <div class=\"m-widget19__shadow\"></div>\n                                      </div>\n                                    </a>\n                                      <div class=\"m-widget19__content\">\n                                        <div class=\"m-widget19__header\">\n                                          <div class=\"m-widget19__user-img\">\n                                            <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                                          </div>\n                                          <div class=\"m-widget19__info\">\n                                            <span class=\"m-widget19__username\">\n                                                <a href=\"annakrox\">Anna Krox</a>\n                                            </span>\n                                            <br>\n                                            <span class=\"m-widget19__time\">\n                                              UX/UI Designer, Google\n                                            </span>\n                                          </div>\n                                        </div>\n                                      <a href=\"post\">\n                                        <div class=\"m-widget19__body m-nav__link-text\">\n                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \n                                        </div>\n                                      </a>\n                                      </div>\n                                    \n                                  <div class=\"m-widget19__action\">\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 \">\n                                          <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                                            <button type=\"button\" class=\"m-btn btn btn-secondary\">\n                                              <i class=\"la la-file-text-o\"></i> Support \n                                            </button>\n                                            <div class=\"m-btn-group btn-group\" role=\"group\">\n                                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <i class=\"flaticon-network\"></i> Replicate\n                                              </button>\n                                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                              </div>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </div>\n                          </div>\n                  \n                      <!--end:: Widgets/Blog-->\n                  </div>     \n                  <div class=\"col-md-3\">\n                      <!--begin:: Widgets/Blog-->\n                \n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\n                                <div class=\"m-portlet__head-caption\">\n                                  <div class=\"m-portlet__head-action\">\n                                    <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                                      Life\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"m-portlet__body\">\n                                <div class=\"m-widget19\">\n                                    <a href=\"post\">\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                                        <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\n                                        <h3 class=\"m-widget19__title m--font-light\">\n                                          Introducing New Feature\n                                        </h3>\n                                        <div class=\"m-widget19__shadow\"></div>\n                                      </div>\n                                    </a>\n                                      <div class=\"m-widget19__content\">\n                                        <div class=\"m-widget19__header\">\n                                          <div class=\"m-widget19__user-img\">\n                                            <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                                          </div>\n                                          <div class=\"m-widget19__info\">\n                                            <span class=\"m-widget19__username\">\n                                                <a href=\"annakrox\">Anna Krox</a>\n                                            </span>\n                                            <br>\n                                            <span class=\"m-widget19__time\">\n                                              UX/UI Designer, Google\n                                            </span>\n                                          </div>\n                                        </div>\n                                      <a href=\"post\">\n                                        <div class=\"m-widget19__body m-nav__link-text\">\n                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \n                                        </div>\n                                      </a>\n                                      </div>\n                                    \n                                  <div class=\"m-widget19__action\">\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 \">\n                                          <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                                            <button type=\"button\" class=\"m-btn btn btn-secondary\">\n                                              <i class=\"la la-file-text-o\"></i> Support \n                                            </button>\n                                            <div class=\"m-btn-group btn-group\" role=\"group\">\n                                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <i class=\"flaticon-network\"></i> Replicate\n                                              </button>\n                                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                                <a class=\"dropdown-item\" href=\"#\">\n                                                  Dropdown link\n                                                </a>\n                                              </div>\n                                            </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </div>\n                          </div>\n                  \n                      <!--end:: Widgets/Blog-->\n                  </div>           \n                </div>\n              </div>\n                <!--End::Main Portlet-->\n          \n                <!--End::Main Portlet-->\n            </div>\n        </div>\n        <!-- END: Subheader -->\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleComponent = (function () {
    function ArticleComponent(genjouristService, route, authService, supportService, router, articleService) {
        this.genjouristService = genjouristService;
        this.route = route;
        this.authService = authService;
        this.supportService = supportService;
        this.router = router;
        this.articleService = articleService;
    }
    //articleId:any = this.route.snapshot.params.articleId;
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.article(this.route.snapshot.params.articleId).subscribe(function (data) {
            _this.articleData = data;
        });
    };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article',
            template: __webpack_require__("../../../../../src/app/components/article/article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_article_service__["a" /* ArticleService */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n}\r\n\r\na:active{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\n\n  <div class=\"m-subheader\">\n\n  </div> \n\n  <div class=\"m-content \">\n      <div class=\"row\">\n          <div class=\"col-xl-8 m--margin-20\">\n              <!--begin:: Widgets/Best Sellers-->\n              <div class=\"m-portlet m-portlet--full-height \">\n                  <div class=\"m-portlet__head\">\n                      <div class=\"m-portlet__head-caption\">\n                        <div class=\"m-portlet__head-title\">\n                          <h3 class=\"m-portlet__head-text\">\n                            Articles\n                          </h3>\n                        </div>\n                      </div>\n                      <div class=\"m-portlet__head-tools\">\n                        <ul class=\"m-portlet__nav\">\n                          <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                            <a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\n                              <i class=\"la la-ellipsis-h m--font-brand\"></i>\n                            </a>\n                            <div class=\"m-dropdown__wrapper\">\n                              <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                              <div class=\"m-dropdown__inner\">\n                                <div class=\"m-dropdown__body\">\n                                  <div class=\"m-dropdown__content\">\n                                    <ul class=\"m-nav\">\n                                      <li class=\"m-nav__item\">\n                                        <a href=\"\" class=\"m-nav__link\">\n                                          <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                          <span class=\"m-nav__link-text\">\n                                            Genjour Trending\n                                          </span>\n                                        </a>\n                                      </li>\n                                      <li class=\"m-nav__item\">\n                                        <a href=\"\" class=\"m-nav__link\">\n                                          <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                          <span class=\"m-nav__link-text\">\n                                            Latest\n                                          </span>\n                                        </a>\n                                      </li>\n                                      <li class=\"m-nav__item\">\n                                        <a href=\"\" class=\"m-nav__link\">\n                                          <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                          <span class=\"m-nav__link-text\">\n                                            Top\n                                          </span>\n                                        </a>\n                                      </li>\n                                      <li class=\"m-nav__item\">\n                                        <a href=\"\" class=\"m-nav__link\">\n                                          <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                          <span class=\"m-nav__link-text\">\n                                            Sort\n                                          </span>\n                                        </a>\n                                      </li>\n                                    </ul>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                <div class=\"m-portlet__body\">\n                  <!--begin::Content-->\n                  <div *ngFor=\"let articleContent of articleContents\"> \n                    <div class=\"tab-content\">\n                      <div class=\"tab-pane active\" id=\"m_widget5_tab1_content\" aria-expanded=\"true\">\n                        <!--begin::m-widget5-->\n                        <div class=\"m-widget5\">\n                          <div class=\"m-widget5__item\">\n                            <div class=\"m-widget5__pic\">\n                              <img class=\"m-widget7__img\" src=\"assets/{{articleContent.imgUrl}}\" alt=\"\">\n                            </div>\n                            <div class=\"m-widget5__content\">\n                              <h4 class=\"m-widget5__title\">\n                                  <a [routerLink]=\"['/journal',articleContent.articleId]\"> {{articleContent.content | summary}} </a>\n                              </h4>\n                              <div class=\"m-widget5__info\">\n                                <span class=\"m-widget5__author\">\n                                  Genjourist:\n                                </span>\n                                <span class=\"m-widget5__info-label\">\n                                    <a [routerLink]=\"['/genjourist',articleContent.genjouristId]\"> {{articleContent.genjourist}} </a>\n                                </span>\n                                <span class=\"m-widget5__info-date m--font-info\">\n                                  {{articleContent.date | date:'medium'}}\n                                </span>\n                              </div>\n                            </div>\n                            <div class=\"m-widget5__stats1\">\n                              <span class=\"m-widget5__number\">\n                                {{articleContent.supportNumber}}\n                              </span>\n                              <br>\n                              <span class=\"m-widget5__sales\">\n                                Supporters\n                              </span>\n                            </div>\n                            <div class=\"m-widget5__stats2\">\n                              <span class=\"m-widget5__number\">\n                                1046\n                              </span>\n                              <br>\n                              <span class=\"m-widget5__votes\">\n                                Replicates\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                        <!--end::m-widget5-->\n                      </div>\n                    </div>\n                  </div>\n                  <!--end::Content-->\n                  <div class=\"m--align-center\">\n                      <div class=\" m-loader m-loader--brand m-loader--lg\" style=\"width: 30px; display: inline-block;\"></div> \n                  </div>\n                  \n                </div>\n              </div>\n              <!--end:: Widgets/Best Sellers-->\n          </div>\n          \n          <div class=\"col-xl-3 m--margin-20\">\n              <!--begin:: Widgets/Support Tickets -->\n              <div class=\"m-portlet m-portlet--full-height \">\n                <div class=\"m-portlet__head\">\n                  <div class=\"m-portlet__head-caption\">\n                    <div class=\"m-portlet__head-title\">\n                      <h3 class=\"m-portlet__head-text\">\n                        Quotations\n                      </h3>\n                    </div>\n                  </div>\n                  <div class=\"m-portlet__head-tools\">\n                      <ul class=\"m-portlet__nav\">\n                        <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                          <a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\n                            <i class=\"la la-ellipsis-h m--font-brand\"></i>\n                          </a>\n                          <div class=\"m-dropdown__wrapper\">\n                            <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                            <div class=\"m-dropdown__inner\">\n                              <div class=\"m-dropdown__body\">\n                                <div class=\"m-dropdown__content\">\n                                  <ul class=\"m-nav\">\n                                    <li class=\"m-nav__item\">\n                                      <a href=\"\" class=\"m-nav__link\">\n                                        <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                        <span class=\"m-nav__link-text\">\n                                          Genjour Trending\n                                        </span>\n                                      </a>\n                                    </li>\n                                    <li class=\"m-nav__item\">\n                                      <a href=\"\" class=\"m-nav__link\">\n                                        <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                        <span class=\"m-nav__link-text\">\n                                          Latest\n                                        </span>\n                                      </a>\n                                    </li>\n                                    <li class=\"m-nav__item\">\n                                      <a href=\"\" class=\"m-nav__link\">\n                                        <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                        <span class=\"m-nav__link-text\">\n                                          Top\n                                        </span>\n                                      </a>\n                                    </li>\n                                    <li class=\"m-nav__item\">\n                                      <a href=\"\" class=\"m-nav__link\">\n                                        <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                        <span class=\"m-nav__link-text\">\n                                          Sort\n                                        </span>\n                                      </a>\n                                    </li>\n                                  </ul>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                </div>\n                <div class=\"m-portlet__body\">\n                  <div class=\"m-widget3\">\n                    <div *ngFor = \"let quotationContent of quotationContents\">\n                        <div class=\"m-widget3__item\">\n                            <div class=\"m-widget3__header\">\n                              <div class=\"m-widget3__user-img\">\n                                <img class=\"m-widget3__img\" src=\"assets/app/media/img/users/user1.jpg\" alt=\"\">\n                              </div>\n                              <div class=\"m-widget3__info\">\n                                <span class=\"m-widget3__username\">\n                                  {{quotationContent.genjourist}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget3__time\">\n                                  2 day ago\n                                </span>\n                              </div>\n                            </div>\n                            <div class=\"m-widget3__body\">\n                              <p class=\"m-widget3__text\">\n                                {{quotationContent.quote}}\n                              </p>\n                            </div>\n                          </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n              <!--end:: Widgets/Support Tickets -->\n          </div>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(categoryService, route) {
        this.categoryService = categoryService;
        this.route = route;
        this.articleContents = [];
        this.quotationContents = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.articleContent(this.route.snapshot.params.categoryName).subscribe(function (data) {
            _this.articleContents = data;
        });
        this.categoryService.quotationContent(this.route.snapshot.params.categoryName).subscribe(function (data) {
            _this.quotationContents = data;
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/feeds.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/feeds.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n  <div class=\"m-subheader\">\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div>\n          <div class=\"col-md-3\" *ngFor=\"let article of articles\">\n              <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                  <div class=\"m-portlet__head m-portlet__head--fit\">\n                    <div class=\"m-portlet__head-caption\">\n                      <div class=\"m-portlet__head-action\">\n                      <a [routerLink]=\"['/category',article.category]\">\n                        <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                          {{article.category}}\n                        </button>\n                      </a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"m-portlet__body\">\n                    <div class=\"m-widget19\">\n                        <a [routerLink]=\"['/journal',article.articleId]\">\n                          <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                            <img src= \"assets/{{article.imgUrl}}\" alt=\"\">\n                            <h3 class=\"m-widget19__title m--font-light\">\n                              {{article.title}}\n                            </h3>\n                            <div class=\"m-widget19__shadow\"></div>\n                          </div>\n                        </a>\n                          <div class=\"m-widget19__content\">\n                            <div class=\"m-widget19__header\">\n                              <div class=\"m-widget19__user-img\">\n                                <a [routerLink]=\"['/',article.genjouristId]\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                              </div>\n                              <div class=\"m-widget19__info\">\n                                <span class=\"m-widget19__username\">\n                                    <a [routerLink]=\"['/genjourist',article.genjouristId]\">{{article.genjourist}}</a>\n                                </span>\n                                <br>\n                                <span class=\"m-widget19__time\">\n                                  {{article.date | date:'medium' }}\n                                </span>\n                              </div>\n                            </div>\n                            <a [routerLink]=\"['/journal',article.articleId]\">\n                              <div class=\"m-widget19__body m-nav__link-text\">\n                                  {{article.content | summary}}\n                              </div>\n                            </a>\n                          </div>\n                        \n                      <div class=\"m-widget19__action\">\n                          <div class=\"m--margin-top-5 m--margin-bottom-5 m--margin-right-15\">\n                            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#m_modal_1\">\n                              Launch Modal\n                            </button>\n                            <div>\n                              <app-support-article [articleId]=\"article.articleId\" [userId]=\"user.genjouristId\">\n                              \n                              </app-support-article>   \n                            </div>\n                          </div>\n                      </div>\n                    </div>\n                  </div> \n              </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 m--margin-20\">\n        <!--begin:: Widgets/Support Tickets -->\n        <div class=\"m-portlet m-portlet--full-height \">\n          <div class=\"m-portlet__head\">\n            <div class=\"m-portlet__head-caption\">\n              <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                  Quotations\n                </h3>\n              </div>\n            </div>\n            <div class=\"m-portlet__head-tools\">\n                <ul class=\"m-portlet__nav\">\n                  <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                    <a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\n                      <i class=\"la la-ellipsis-h m--font-brand\"></i>\n                    </a>\n                    <div class=\"m-dropdown__wrapper\">\n                      <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                      <div class=\"m-dropdown__inner\">\n                        <div class=\"m-dropdown__body\">\n                          <div class=\"m-dropdown__content\">\n                            <ul class=\"m-nav\">\n                              <li class=\"m-nav__item\">\n                                <a href=\"\" class=\"m-nav__link\">\n                                  <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                  <span class=\"m-nav__link-text\">\n                                    Genjour Trending\n                                  </span>\n                                </a>\n                              </li>\n                              <li class=\"m-nav__item\">\n                                <a href=\"\" class=\"m-nav__link\">\n                                  <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                  <span class=\"m-nav__link-text\">\n                                    Latest\n                                  </span>\n                                </a>\n                              </li>\n                              <li class=\"m-nav__item\">\n                                <a href=\"\" class=\"m-nav__link\">\n                                  <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                  <span class=\"m-nav__link-text\">\n                                    Top\n                                  </span>\n                                </a>\n                              </li>\n                              <li class=\"m-nav__item\">\n                                <a href=\"\" class=\"m-nav__link\">\n                                  <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                  <span class=\"m-nav__link-text\">\n                                    Sort\n                                  </span>\n                                </a>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n          </div>\n          <div class=\"m-portlet__body\">\n            <div class=\"m-widget3\">\n              <div *ngFor = \"let quotationContent of quotationContents\">\n                  <div class=\"m-widget3__item\">\n                      <div class=\"m-widget3__header\">\n                        <div class=\"m-widget3__user-img\">\n                          <img class=\"m-widget3__img\" src=\"assets/app/media/img/users/user1.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"m-widget3__info\">\n                          <span class=\"m-widget3__username\">\n                            {{quotationContent.genjourist}}\n                          </span>\n                          <br>\n                          <span class=\"m-widget3__time\">\n                            2 day ago\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"m-widget3__body\">\n                        <p class=\"m-widget3__text\">\n                          {{quotationContent.quote}}\n                        </p>\n                      </div>\n                    </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <!--end:: Widgets/Support Tickets -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/feeds/feeds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsComponent = (function () {
    function FeedsComponent() {
    }
    FeedsComponent.prototype.ngOnInit = function () {
    };
    FeedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__("../../../../../src/app/components/feeds/feeds.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/feeds.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsComponent);
    return FeedsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/genjourist/genjourist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/genjourist/genjourist.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div  class=\"profileContainer\">\n  <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n    <!-- BEGIN: Subheader -->\n    <div class=\"m-subheader\">\n\n    </div> \n    <!-- END: Subheader -->\n    <div class=\"m-content m--margin-top-15 m--margin-25\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-4\">\n          <div class=\"m-portlet m-portlet--full-height  \">\n            <div class=\"m-portlet__body\">\n              <div class=\"m-card-profile\">\n                <div class=\"m-card-profile__title m--hide\">\n                  Profile\n                </div>\n                <div class=\"m-card-profile__pic\">\n                  <div class=\"m-card-profile__pic-wrapper\">\n                    <img src=\"assets/app/media/img/users/user4.jpg\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"m-card-profile__details\">\n                    <span class=\"m-card-profile__name\">\n                      Genjourist {{userData?.name}}\n                    </span>\n                  </div>\n                  <br>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"m-widget19__stats text-center\">\n                            <h3 class=\"m--font-brand\">\n                              <!--{{userData?.supporters}}--> {{userData?.supportNumber}}\n                            </h3>\n                            <span class=\"m-widget19__comment\">\n                              Supporters\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"m-widget19__stats text-center\">\n                            <h3 class=\"m--font-brand\">\n                                <!--{{userData?.supporting}}--> {{userData?.supportingNumber}}  \n                              </h3>\n                            <span class=\"m-widget19__comment\">\n                              Supporting\n                            </span>\n                        </div>\n                    </div>    \n                                     \n                </div>\n              </div>\n              <div class=\"m-separator\"></div>\n              <button type=\"button\" (click)=\"support(user?.genjouristId,userData.genjouristId)\" class=\"btn m-btn--square  btn-primary btn-block\">\n                Support\n              </button>\n              <div *ngIf = \"!selfSupportAlert\">You cannot support your self :-)</div>\n              <ul class=\"m-nav m-nav--hover-bg m-portlet-fit--sides\">\n                <li class=\"m-nav__separator m-nav__separator--fit\"></li>\n                <li class=\"m-nav__section m--hide\">\n                  <span class=\"m-nav__section-text\">\n                    Section\n                  </span>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n                    <span class=\"m-nav__link-title\">\n                      <span class=\"m-nav__link-wrap\">\n                        <span class=\"m-nav__link-text\">\n                          Age\n                        </span>\n                        <span class=\"m-nav__link-badge\">\n                          <span class=\"m-badge m-badge--success m-badge--wide\">\n                            14-30\n                          </span>\n                        </span>\n                      </span>\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-share\"></i>\n                    <span class=\"m-nav__link-title\">\n                      <span class=\"m-nav__link-wrap\">\n                        <span class=\"m-nav__link-text\">\n                          Gender\n                        </span>\n                        <span class=\"m-nav__link-badge\">\n                          <span class=\"m-badge m-badge--info m-badge--wide\">\n                            Male\n                          </span>\n                        </span>\n                      </span>\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a  class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                    <span class=\"m-nav_link-wrap\">\n                      <span class=\"m-nav__link-text\">\n                          Phone Number\n                        </span>\n                        <span class=\"m--pull-right p-details\">\n                            +8989565623\n                        </span>\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-graphic-2\"></i>\n                    <span class=\"m-nav_link-wrap\">\n                        <span class=\"m-nav__link-text\">\n                            Email\n                          </span>\n                          <span class=\"m--pull-right p-details\">\n                              {{userData?.email}}\n                          </span>\n                      </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a  class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-time-3\"></i>\n                    <span class=\"m-nav__link-text\">\n                      Events\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a  class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                    <span class=\"m-nav__link-text\">\n                      Support\n                    </span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-9 col-lg-8\">\n          <div class=\"m-content\">\n            <div class=\"row\">\n              <div class=\"col-lg\">\n                <!--begin::Portlet-->\n                <div class=\"m-portlet\">\n                  <div class=\"m-portlet__body\">\n                    <ul class=\"nav nav-tabs  m-tabs-line\" role=\"tablist\">\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_tabs_6_1\" role=\"tab\">\n                          Articles\n                        </a>\n                      </li>\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_2\" role=\"tab\">\n                          Quotes\n                        </a>\n                      </li>\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_3\" role=\"tab\">\n                          Interview\n                        </a>\n                      </li>\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_3\" role=\"tab\">\n                          Survey\n                        </a>\n                      </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                      <div class=\"tab-pane active\" id=\"m_tabs_6_1\" role=\"tabpanel\">\n                          <div class=\"m--pull-right\">\n                              <ul class=\"m-portlet__nav\">\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\n                                    Sort\n                                  </a>\n                                  <div class=\"m-dropdown__wrapper\">\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\n                                    <div class=\"m-dropdown__inner\">\n                                      <div class=\"m-dropdown__body\">\n                                        <div class=\"m-dropdown__content\">\n                                          <ul class=\"m-nav\">\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Yesterday\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Week\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Month\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Year\n                                                </span>\n                                              </a>\n                                            </li>\n                                          </ul>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ul>\n                          </div>\n                          <div class=\"m-widget5\">\n                            <div class=\"m-widget5__item\" *ngFor=\"let journal of journals\">\n                              <div class=\"m-widget5__pic\">\n                                <img class=\"m-widget7__img\" src=\"assets/app/media/img//products/product6.jpg\" alt=\"\">\n                              </div>\n                              <div class=\"m-widget5__content\">\n                                <h4 class=\"m-widget5__title\">\n                                  {{journal.title}}\n                                </h4>\n                                <span class=\"m-widget5__desc\">\n                                  {{journal.content | summary}}\n                                </span>\n                                <div class=\"m-widget5__info\">\n                                  <span class=\"m-widget5__info-date m--font-info\">\n                                    {{journal.date | date:'medium' }}\n                                  </span>\n                                </div>\n                              </div>\n                              <div class=\"m-widget5__stats1\">\n                                <span class=\"m-widget5__number\">\n                                  {{journal.supportNumber}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget5__sales\">\n                                  supports\n                                </span>\n                              </div>\n                              <div class=\"m-widget5__stats2\">\n                                <span class=\"m-widget5__number\">\n                                  {{journal.replicateNumber}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget5__votes\">\n                                  replicates\n                                </span>\n                              </div>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"m_tabs_6_2\" role=\"tabpanel\">\n                          <div class=\"m--pull-right\">\n                              <ul class=\"m-portlet__nav\">\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\n                                    Sort\n                                  </a>\n                                  <div class=\"m-dropdown__wrapper\">\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\n                                    <div class=\"m-dropdown__inner\">\n                                      <div class=\"m-dropdown__body\">\n                                        <div class=\"m-dropdown__content\">\n                                          <ul class=\"m-nav\">\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Yesterday\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Week\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Month\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Year\n                                                </span>\n                                              </a>\n                                            </li>\n                                          </ul>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ul>\n                          </div>\n                          <div class=\"m-widget5\">\n                            <div class=\"m-widget5__item\" *ngFor=\"let quotation of quotations\">\n                              <div class=\"m-widget5__content m-widget2__item m-widget2__item--primary\">\n                                <h4 class=\"m-widget5__title\">\n                                  {{quotation.title}}\n                                </h4>\n                                <span class=\"m-widget5__title\">\n                                  {{quotation.quote}}\n                                </span>\n                                <div class=\"m-widget5__info\">\n                                  <span class=\"m-widget5__info-date m--font-info\">\n                                    {{quotation.date | date:'medium' }}\n                                  </span>\n                                </div>\n                              </div>\n                              <div class=\"m-widget5__stats1\">\n                                <span class=\"m-widget5__number\">\n                                  {{quotation.supportNumber}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget5__sales\">\n                                  supports\n                                </span>\n                              </div>\n                              <div class=\"m-widget5__stats2\">\n                                <span class=\"m-widget5__number\">\n                                  {{quotation.replicateNumber}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget5__votes\">\n                                  replicates\n                                </span>\n                              </div>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"m_tabs_6_3\" role=\"tabpanel\">\n                        hello  tab 3\n                      </div>\n                    </div>\n                  </div>\n                </div>\n          \n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/genjourist/genjourist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenjouristComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__ = __webpack_require__("../../../../../src/app/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenjouristComponent = (function () {
    function GenjouristComponent(genjouristService, route, authService, supportService, router, socketService) {
        this.genjouristService = genjouristService;
        this.route = route;
        this.authService = authService;
        this.supportService = supportService;
        this.router = router;
        this.socketService = socketService;
        this.selfSupportAlert = true;
    }
    GenjouristComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getGenjourist().subscribe(function (profile) {
            _this.user = profile.user;
        });
        this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(function (data) {
            _this.userData = data;
        });
        this.genjouristService.articles(this.route.snapshot.params.id).subscribe(function (article) {
            _this.journals = article;
        });
        this.genjouristService.quotation(this.route.snapshot.params.id).subscribe(function (data) {
            _this.quotations = data;
        });
    };
    GenjouristComponent.prototype.support = function (userId, genjouristId) {
        var _this = this;
        if (this.authService.loggedIn()) {
            if (userId == genjouristId) {
                console.log('You cannot like your own profile');
                this.selfSupportAlert = false;
                return this.selfSupportAlert;
            }
            //=============== Support Code ==========================
            this.supportService.supportGenjourist(userId, genjouristId).subscribe(function (data) {
                _this.supporterNumber = data.msg;
                console.log(data.msg);
                _this.genjouristService.genjouristProfile(_this.route.snapshot.params.id).subscribe(function (data) {
                    console.log(data.supporters.length);
                    _this.supporterNumber = data.supporters.length;
                });
            });
            //=============== Supporting Code ======================
            this.supportService.supportingGenjourist(userId, genjouristId).subscribe(function (data) {
                _this.supportingNumber = data.msg;
                console.log(data.msg);
            });
            this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(function (data) {
                console.log(data.supporters.length);
                _this.supportingNumber = data.supporting.length;
            });
        }
        else {
            this.router.navigate(['/login']);
            console.log('first logged in then support us');
        }
    };
    GenjouristComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-genjourist',
            template: __webpack_require__("../../../../../src/app/components/genjourist/genjourist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/genjourist/genjourist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__["a" /* SocketService */]])
    ], GenjouristComponent);
    return GenjouristComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/journals/articles/articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    text-decoration:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journals/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-scroll-top--shown\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body \">\n    <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n      <!-- BEGIN: Subheader -->\n      <div class=\"row\">\n        <div class=\"col-lg-12 m-subheader \">\n\n          <div class=\"m-content\" >\n            <div class=\"row\">\n              <div class=\"col-md-3\" *ngFor=\"let article of articles\">\n                <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\n                    <div class=\"m-portlet__head m-portlet__head--fit\">\n                      <div class=\"m-portlet__head-caption\">\n                        <div class=\"m-portlet__head-action\">\n                        <a [routerLink]=\"['/category',article.category]\">\n                          <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\n                            {{article.category}}\n                          </button>\n                        </a>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"m-portlet__body\">\n                      <div class=\"m-widget19\">\n                          <a [routerLink]=\"['/journal',article.articleId]\">\n                            <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\n                              <img src= \"assets/{{article.imgUrl}}\" alt=\"\">\n                              <h3 class=\"m-widget19__title m--font-light\">\n                                {{article.title}}\n                              </h3>\n                              <div class=\"m-widget19__shadow\"></div>\n                            </div>\n                          </a>\n                            <div class=\"m-widget19__content\">\n                              <div class=\"m-widget19__header\">\n                                <div class=\"m-widget19__user-img\">\n                                  <a [routerLink]=\"['/',article.genjouristId]\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\n                                </div>\n                                <div class=\"m-widget19__info\">\n                                  <span class=\"m-widget19__username\">\n                                      <a [routerLink]=\"['/genjourist',article.genjouristId]\">{{article.genjourist}}</a>\n                                  </span>\n                                  <br>\n                                  <span class=\"m-widget19__time\">\n                                    {{article.date | date:'medium' }}\n                                  </span>\n                                </div>\n                              </div>\n                              <a [routerLink]=\"['/journal',article.articleId]\">\n                                <div class=\"m-widget19__body m-nav__link-text\">\n                                    {{article.content | summary}}\n                                </div>\n                              </a>\n                            </div>\n                          \n                        <div class=\"m-widget19__action\">\n                            <div class=\"m--margin-top-5 m--margin-bottom-5 m--margin-right-15\">\n                              <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#m_modal_1\">\n                                Launch Modal\n                              </button>\n                              <div>\n                                <app-support-article [articleId]=\"article.articleId\" [userId]=\"user.genjouristId\">\n                                \n                                </app-support-article>   \n                              </div>\n                            </div>\n                        </div>\n                      </div>\n                    </div> \n                </div>\n              </div>\n\n              <!--begin::Modal-->\n              <div class=\"modal fade\" id=\"m_modal_1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                        Modal title\n                      </h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">\n                          &times;\n                        </span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <p>\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                      </p>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                        Close\n                      </button>\n                      <button type=\"button\" class=\"btn btn-primary\">\n                        Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--end::Modal-->\n\n\n          </div>\n            <!--End::Main Portlet-->\n      \n            <!--End::Main Portlet-->         \n        </div>\n      </div>\n      <!-- END: Subheader -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/journals/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_journals_service__ = __webpack_require__("../../../../../src/app/services/journals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesComponent = (function () {
    function ArticlesComponent(journalsService, authService, router, supportService) {
        this.journalsService = journalsService;
        this.authService = authService;
        this.router = router;
        this.supportService = supportService;
        this.articles = [];
        this.user = [];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getGenjourist().subscribe(function (profile) {
                _this.user = profile.user;
            });
        }
        this.journalsService.getJournals().subscribe(function (data) {
            _this.articles = data;
        });
    };
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__("../../../../../src/app/components/journals/articles/articles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/journals/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_journals_service__["a" /* JournalsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/journals/articles/summary.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        return value.substr(0, 100) + '...';
    };
    SummaryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/journals/journals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journals/journals.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-articles></app-articles>\n"

/***/ }),

/***/ "../../../../../src/app/components/journals/journals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JournalsComponent = (function () {
    function JournalsComponent() {
    }
    JournalsComponent.prototype.ngOnInit = function () {
    };
    JournalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-journals',
            template: __webpack_require__("../../../../../src/app/components/journals/journals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/journals/journals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JournalsComponent);
    return JournalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-grid.m-grid--hor:not(.m-grid--desktop):not(.m-grid--desktop-and-tablet):not(.m-grid--tablet):not(.m-grid--tablet-and-mobile):not(.m-grid--mobile).m-grid--root {\r\n    \r\n    height: 100vh;\r\n}\r\n\r\nbody{\r\n    margin-top:-45px;\r\n}\r\n\r\n.m-login.m-login--1 .m-login__wrapper{\r\n    padding : 10% 2rem 2rem 2rem;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default\"  >\n\t<!-- begin:: Page -->\n\t<div class=\"m-grid m-grid--hor m-grid--root m-page\">\n\t\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin\" id=\"m_login\">\n\t\t\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\n\t\t\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\n\t\t\t\t\t\t<div class=\"m-login__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-login__logo\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/']\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/genjour.png\" height=\"110\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-login__signin\">\n\t\t\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\n\t\t\t\t\t\t\t\t\t\tSign In To Genjour\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form class=\"m-login__form m-form\" (submit)=\"Login()\"> \n\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div style=\"color:red;\">Please fill all fields</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row m-login__form-sub\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\">\n\t\t\t\t\t\t\t\t\t\t\t\tRemember me\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\tForget Password ?\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\t\t\tSign In\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-login__account\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-login__account-msg\">\n\t\t\t\t\t\t\t\t\t\t\tDon't have an account yet ?\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/register']\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\n\t\t\t\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(../../../assets/app/media/img//bg/bg-4.jpg)\">\n\t\t\t\t<div class=\"m-grid__item m-grid__item--middle\">\n\t\t\t\t\t<h3 class=\"m-login__welcome\">\n\t\t\t\t\t\tGenjour <br> <del>Social</del> Societal Network \n\t\t\t\t\t</h3>\n\t\t\t\t\t<p class=\"m-login__msg\">\n\t\t\t\t\t\tTHINK.WRITE.SHOW\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<script src=\"../../../assets/snippets/pages/user/login.js\" type=\"text/javascript\"></script>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, validateService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.checkLogin(user)) {
            console.log("Please fill all fields");
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['feeds']);
            }
            else {
                console.log("Inncoret Username or password");
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    text-decoration:none;\r\n}\r\n.m-header-search .m-header-search__wrapper{\r\n    background-color:transparent;\r\n    border:1px solid #e8e7f4;\r\n}\r\n\r\n\r\n@media all and (max-width: 479px) {\r\n.m-header-search__form{\r\n    visibility:hidden;\r\n}\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"m-grid__item m-header \"  data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" >\n  <div class=\"m-container m-container--fluid m-container--full-height\">\n    <div class=\"m-stack m-stack--ver m-stack--desktop\">\n      <!-- BEGIN: Brand -->\n      <div class=\"m-stack__item m-brand  m-brand--skin-light \">\n        <div class=\"m-stack m-stack--ver m-stack--general\">\n          <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\n            <a [routerLink]=\"['/']\" class=\"m-brand__logo-wrapper\">\n              <img alt=\"\" height=\"45\" src=\"assets/img/logo-dark.png\"/>\n            </a>\n          </div>\n        </div>\n      </div>\n      <!-- END: Brand -->\n      <div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\n        <!-- BEGIN: Horizontal Menu -->\n        <button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark \" id=\"m_aside_header_menu_mobile_close_btn\">\n          <i class=\"la la-close\"></i>\n        </button>\n        <div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark \"  >\n          <ul class=\"m-menu__nav  m-menu__nav--submenu-arrow \">\n\n            <li class=\"m-menu__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"  data-dropdown-toggle=\"click\">\n              <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n                <i class=\"m-menu__link-icon flaticon-add\"></i>\n                <span class=\"m-menu__link-text\">\n                  Write\n                </span>\n                <i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n              </a>\n              <div class=\"m-dropdown__wrapper\">\n                <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                <div class=\"m-dropdown__inner\">\n                  <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\n                    <span class=\"m-dropdown__header-title\">\n                      Quick Actions\n                    </span>\n                    <span class=\"m-dropdown__header-subtitle\">\n                      Shortcuts\n                    </span>\n                  </div>\n                  <div class=\"m-dropdown__body m-dropdown__body--paddingless\">\n                    <div class=\"m-dropdown__content\">\n                      <div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\n                        <div class=\"m-nav-grid m-nav-grid--skin-light\">\n                          <div class=\"m-nav-grid__row\">\n                            <a [routerLink] = \"['/write-article']\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-file\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Generate Article\n                              </span>\n                            </a>\n                            <a [routerLink] = \"['/write-quotation']\"  class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-time\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Generate Quotation\n                              </span>\n                            </a>\n                          </div>\n                          <div class=\"m-nav-grid__row\">\n                            <a href=\"#\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-folder\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Create New Task\n                              </span>\n                            </a>\n                            <a href=\"#\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Completed Tasks\n                              </span>\n                            </a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n\n            <li class=\"m-menu__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"  data-dropdown-toggle=\"click\">\n              <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n                 <i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n                <span class=\"m-menu__link-text\">\n                  Read\n                </span>\n                <i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n              </a>\n              <div class=\"m-dropdown__wrapper\">\n                <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                <div class=\"m-dropdown__inner\">\n                  <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\n                    <span class=\"m-dropdown__header-title\">\n                      Quick Actions\n                    </span>\n                    <span class=\"m-dropdown__header-subtitle\">\n                      Shortcuts\n                    </span>\n                  </div>\n                  <div class=\"m-dropdown__body m-dropdown__body--paddingless\">\n                    <div class=\"m-dropdown__content\">\n                      <div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\n                        <div class=\"m-nav-grid m-nav-grid--skin-light\">\n                          <div class=\"m-nav-grid__row\">\n                            <a href=\"#\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-file\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Generate Report\n                              </span>\n                            </a>\n                            <a href=\"#\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-time\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Add New Event\n                              </span>\n                            </a>\n                          </div>\n                          <div class=\"m-nav-grid__row\">\n                            <a href=\"#\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-folder\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Create New Task\n                              </span>\n                            </a>\n                            <a href=\"#\" class=\"m-nav-grid__item\">\n                              <i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\n                              <span class=\"m-nav-grid__text\">\n                                Completed Tasks\n                              </span>\n                            </a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n\n          </ul>\n        </div>\n        <!-- END: Horizontal Menu -->\t\t\t\t\t\t\t\t<!-- BEGIN: Topbar -->\n        <div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\n            <div class=\"m-stack__item m-stack__item--middle m-dropdown--skin-light m-header-search m-header-search--expandable\" id=\"m_quicksearch\" data-search-type=\"default\">\n              <!--BEGIN: Search Form -->\n              <form class=\"m-header-search__form\">\n                <div class=\"m-header-search__wrapper\">\n                  <span class=\"m-header-search__icon-search\" id=\"m_quicksearch_search\">\n                    <i class=\"flaticon-search\"></i>\n                  </span>\n                  <span class=\"m-header-search__input-wrapper\">\n                    <input autocomplete=\"off\" type=\"text\" name=\"search\" class=\"m-header-search__input\" value=\"\" placeholder=\"Search...\" id=\"m_quicksearch_input\">\n                  </span>\n                  <span class=\"m-header-search__icon-close\" id=\"m_quicksearch_close\">\n                    <i class=\"la la-remove\"></i>\n                  </span>\n                  <span class=\"m-header-search__icon-cancel\" id=\"m_quicksearch_cancel\">\n                    <i class=\"la la-remove\"></i>\n                  </span>\n                </div>\n              </form>\n              <!--END: Search Form -->\n            </div>\n          <div class=\"m-stack__item m-topbar__nav-wrapper\">\n            <ul class=\"m-topbar__nav m-nav m-nav--inline\">\n\n              <li *ngIf=\"authService.loggedIn()\" class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\n                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\n                  <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\n                  <span class=\"m-nav__link-icon\">\n                    <i class=\"flaticon-music-2\"></i>\n                  </span>\n                </a>\n                <div class=\"m-dropdown__wrapper\">\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n                  <div class=\"m-dropdown__inner\">\n                    <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\n                      <span class=\"m-dropdown__header-title\">\n                        9 New\n                      </span>\n                      <span class=\"m-dropdown__header-subtitle\">\n                        User Notifications\n                      </span>\n                    </div>\n                    <div class=\"m-dropdown__body\">\n                      <div class=\"m-dropdown__content\">\n                        <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n                          <li class=\"nav-item m-tabs__item\">\n                            <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\n                              Alerts\n                            </a>\n                          </li>\n                          <li class=\"nav-item m-tabs__item\">\n                            <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\n                              Events\n                            </a>\n                          </li>\n                          <li class=\"nav-item m-tabs__item\">\n                            <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\n                              Logs\n                            </a>\n                          </li>\n                        </ul>\n                        <div class=\"tab-content\">\n                          <div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\n                            <div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n                              <div class=\"m-list-timeline m-list-timeline--skin-light\">\n                                <div class=\"m-list-timeline__items\">\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      12 new users registered\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      Just now\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      System shutdown\n                                      <span class=\"m-badge m-badge--success m-badge--wide\">\n                                        pending\n                                      </span>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      14 mins\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      New invoice received\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      20 mins\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      DB overloaded 80%\n                                      <span class=\"m-badge m-badge--info m-badge--wide\">\n                                        settled\n                                      </span>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      1 hr\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      System error -\n                                      <a href=\"#\" class=\"m-link\">\n                                        Check\n                                      </a>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      2 hrs\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item m-list-timeline__item--read\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span href=\"\" class=\"m-list-timeline__text\">\n                                      New order received\n                                      <span class=\"m-badge m-badge--danger m-badge--wide\">\n                                        urgent\n                                      </span>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      7 hrs\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item m-list-timeline__item--read\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      Production server down\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      3 hrs\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n                                      Production server up\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n                                      5 hrs\n                                    </span>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\n                            <div class=\"m-scrollable\" m-scrollabledata-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n                              <div class=\"m-list-timeline m-list-timeline--skin-light\">\n                                <div class=\"m-list-timeline__items\">\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n                                    <a href=\"\" class=\"m-list-timeline__text\">\n                                      New order received\n                                    </a>\n                                    <span class=\"m-list-timeline__time\">\n                                      Just now\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\n                                    <a href=\"\" class=\"m-list-timeline__text\">\n                                      New invoice received\n                                    </a>\n                                    <span class=\"m-list-timeline__time\">\n                                      20 mins\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n                                    <a href=\"\" class=\"m-list-timeline__text\">\n                                      Production server up\n                                    </a>\n                                    <span class=\"m-list-timeline__time\">\n                                      5 hrs\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n                                    <a href=\"\" class=\"m-list-timeline__text\">\n                                      New order received\n                                    </a>\n                                    <span class=\"m-list-timeline__time\">\n                                      7 hrs\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n                                    <a href=\"\" class=\"m-list-timeline__text\">\n                                      System shutdown\n                                    </a>\n                                    <span class=\"m-list-timeline__time\">\n                                      11 mins\n                                    </span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n                                    <a href=\"\" class=\"m-list-timeline__text\">\n                                      Production server down\n                                    </a>\n                                    <span class=\"m-list-timeline__time\">\n                                      3 hrs\n                                    </span>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\n                            <div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\n                              <div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\n                                <span class=\"\">\n                                  All caught up!\n                                  <br>\n                                  No new logs.\n                                </span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li  *ngIf=\"authService.loggedIn()\" class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\" data-dropdown-toggle=\"click\">\n                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n                  <span class=\"m-topbar__userpic\">\n                    <img src=\"assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\n                  </span>\n                  <span class=\"m-topbar__username m--hide\">\n                    Nick\n                  </span>\n                </a>\n                <div class=\"m-dropdown__wrapper\">\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                  <div class=\"m-dropdown__inner\">\n                    <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\n                      <div class=\"m-card-user m-card-user--skin-dark\">\n                        <div class=\"m-card-user__pic\">\n                          <img src=\"assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless\" alt=\"\"/>\n                        </div>\n                        <div class=\"m-card-user__details\">\n                          <span class=\"m-card-user__name m--font-weight-500\">\n                            {{user?.name}}\n                          </span>\n                          <div class=\"m-card-user__email m--font-weight-300 m-link\">\n                            {{user?.email}}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"m-dropdown__body\">\n                      <div class=\"m-dropdown__content\">\n                        <ul class=\"m-nav m-nav--skin-light\">\n                          <li class=\"m-nav__section m--hide\">\n                            <span class=\"m-nav__section-text\">\n                              Section\n                            </span>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a [routerLink]=\"['/genjourist']\" class=\"m-nav__link\">\n                              <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n                              <span class=\"m-nav__link-title\">\n                                <span class=\"m-nav__link-wrap\">\n                                  <span class=\"m-nav__link-text\">\n                                    My Profile\n                                  </span>\n                                  <span class=\"m-nav__link-badge\">\n                                    <span class=\"m-badge m-badge--success\">\n                                      2\n                                    </span>\n                                  </span>\n                                </span>\n                              </span>\n                            </a>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a [routerLink]=\"['/feeds']\" class=\"m-nav__link\">\n                              <i class=\"m-nav__link-icon flaticon-share\"></i>\n                              <span class=\"m-nav__link-text\">\n                                Feeds\n                              </span>\n                            </a>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a href=\"header/profile.html\" class=\"m-nav__link\">\n                              <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                              <span class=\"m-nav__link-text\">\n                                Messages\n                              </span>\n                            </a>\n                          </li>\n                          <li class=\"m-nav__separator m-nav__separator--fit\"></li>\n                          <li class=\"m-nav__item\">\n                            <a href=\"header/profile.html\" class=\"m-nav__link\">\n                              <i class=\"m-nav__link-icon flaticon-info\"></i>\n                              <span class=\"m-nav__link-text\">\n                                FAQ\n                              </span>\n                            </a>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"['/setting']\" class=\"m-nav__link\">\n                              <i class=\"m-nav__link-icon flaticon-settings\"></i>\n                              <span class=\"m-nav__link-text\">\n                                Setting\n                              </span>\n                            </a>\n                          </li>\n                          <li class=\"m-nav__separator m-nav__separator--fit\"></li>\n                          <li class=\"m-nav__item\">\n                            <a (click)=\"logout()\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\">\n                              Logout\n                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li  *ngIf=\"!authService.loggedIn()\" class=\"m-nav__item\">\n                <span class=\"m--margin-top-5 m-nav__link\">\n                  <a [routerLink]=\"['/login']\" class=\"btn btn-secondary m-btn m-btn--icon m-btn--pill\">\n                      <span>\n                        <span>\n                          Login\n                        </span>\n                      </span>\n                    </a>\n                </span>\n              </li>\n              <li  *ngIf=\"!authService.loggedIn()\" class=\"m-nav__item\">\n                <span class=\"m--margin-top-5 m-nav__link\">\n                  <a [routerLink]=\"['/register']\"  class=\"btn btn-secondary m-btn m-btn--icon m-btn--pill\">\n                      <span>\n                        <span>\n                          Sign Up\n                        </span>\n                      </span>\n                    </a>\n                </span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- END: Topbar -->\n      </div>\n    </div>\n  </div>\n</header>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getGenjourist().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        console.log('User is logged out');
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileContainer{\r\n    background-color: #F2F3F8;\r\n}\r\n\r\n.p-details{\r\n    color: #7b7e8a;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div  *ngIf=\"user\" class=\"profileContainer\">\n  <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n    <!-- BEGIN: Subheader -->\n    <div class=\"m-subheader\">\n\n    </div>\n    <!-- END: Subheader -->\n    <div class=\"m-content m--margin-top-15 m--margin-25\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-4\">\n          <div class=\"m-portlet m-portlet--full-height  \">\n            <div class=\"m-portlet__body\">\n              <div class=\"m-card-profile\">\n                <div class=\"m-card-profile__title m--hide\">\n                  Profile\n                </div>\n                <div class=\"m-card-profile__pic\">\n                  <div class=\"m-card-profile__pic-wrapper\">\n                    <img src=\"assets/app/media/img/users/user4.jpg\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"m-card-profile__details\">\n                    <span class=\"m-card-profile__name\">\n                      Genjourist {{user.name}}\n                    </span>\n                  </div>\n                  <br>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"m-widget19__stats text-center\">\n                            <h3 class=\"m--font-brand\">\n                              {{user.supportNumber}}\n                            </h3>\n                            <span class=\"m-widget19__comment\">\n                              Supporters\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"m-widget19__stats text-center\">\n                            <h3 class=\"m--font-brand\">\n                                {{user.supportingNumber}}\n                              </h3>\n                            <span class=\"m-widget19__comment\">\n                              Supporting\n                            </span>\n                        </div>\n                    </div>    \n                                     \n                </div>\n              </div>\n              <div class=\"m-separator\"></div>\n              <button type=\"button\" class=\"btn m-btn--square  btn-brand btn-block\">\n                  View Your Profile\n              </button>\n              <ul class=\"m-nav m-nav--hover-bg m-portlet-fit--sides\">\n                <li class=\"m-nav__separator m-nav__separator--fit\"></li>\n                <li class=\"m-nav__section m--hide\">\n                  <span class=\"m-nav__section-text\">\n                    Section\n                  </span>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n                    <span class=\"m-nav__link-title\">\n                      <span class=\"m-nav__link-wrap\">\n                        <span class=\"m-nav__link-text\">\n                          Age\n                        </span>\n                        <span class=\"m-nav__link-badge\">\n                          <span class=\"m-badge m-badge--success m-badge--wide\">\n                            14-30\n                          </span>\n                        </span>\n                      </span>\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-share\"></i>\n                    <span class=\"m-nav__link-title\">\n                      <span class=\"m-nav__link-wrap\">\n                        <span class=\"m-nav__link-text\">\n                          Gender\n                        </span>\n                        <span class=\"m-nav__link-badge\">\n                          <span class=\"m-badge m-badge--info m-badge--wide\">\n                            Male\n                          </span>\n                        </span>\n                      </span>\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a  class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                    <span class=\"m-nav_link-wrap\">\n                      <span class=\"m-nav__link-text\">\n                          Phone Number\n                        </span>\n                        <span class=\"m--pull-right p-details\">\n                            +8989565623\n                        </span>\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-graphic-2\"></i>\n                    <span class=\"m-nav_link-wrap\">\n                        <span class=\"m-nav__link-text\">\n                            Email\n                          </span>\n                          <span class=\"m--pull-right p-details\">\n                              {{user.email}}\n                          </span>\n                      </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a  class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-time-3\"></i>\n                    <span class=\"m-nav__link-text\">\n                      Events\n                    </span>\n                  </a>\n                </li>\n                <li class=\"m-nav__item\">\n                  <a  class=\"m-nav__link\">\n                    <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                    <span class=\"m-nav__link-text\">\n                      Support\n                    </span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-9 col-lg-8\">\n          <div class=\"m-content\">\n            <div class=\"row\">\n              <div class=\"col-lg\">\n                <!--begin::Portlet-->\n                <div class=\"m-portlet\">\n                  <div class=\"m-portlet__body\">\n                    <ul class=\"nav nav-tabs  m-tabs-line\" role=\"tablist\">\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_tabs_6_1\" role=\"tab\">\n                          Articles\n                        </a>\n                      </li>\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_2\" role=\"tab\">\n                          Quotes\n                        </a>\n                      </li>\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_3\" role=\"tab\">\n                          Interview\n                        </a>\n                      </li>\n                      <li class=\"nav-item m-tabs__item\">\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_3\" role=\"tab\">\n                          Survey\n                        </a>\n                      </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                      <div class=\"tab-pane active\" id=\"m_tabs_6_1\" role=\"tabpanel\">\n                          <div class=\"m--pull-right\">\n                              <ul class=\"m-portlet__nav\">\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\n                                    Sort\n                                  </a>\n                                  <div class=\"m-dropdown__wrapper\">\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\n                                    <div class=\"m-dropdown__inner\">\n                                      <div class=\"m-dropdown__body\">\n                                        <div class=\"m-dropdown__content\">\n                                          <ul class=\"m-nav\">\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Yesterday\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Week\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Month\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Year\n                                                </span>\n                                              </a>\n                                            </li>\n                                          </ul>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                            <div class=\"m-widget5\">\n                              <div class=\"m-widget5__item\" *ngFor=\"let journal of journals\">\n                                <div class=\"m-widget5__pic\">\n                                  <img class=\"m-widget7__img\" src=\"assets/app/media/img//products/product6.jpg\" alt=\"\">\n                                </div>\n                                <div class=\"m-widget5__content\">\n                                  <h4 class=\"m-widget5__title\">\n                                    {{journal.title}}\n                                  </h4>\n                                  <span class=\"m-widget5__desc\">\n                                    {{journal.content | summary}}\n                                  </span>\n                                  <div class=\"m-widget5__info\">\n                                    <span class=\"m-widget5__info-date m--font-info\">\n                                      {{journal.date | date:'medium' }}\n                                    </span>\n                                  </div>\n                                </div>\n                                <div class=\"m-widget5__stats1\">\n                                  <span class=\"m-widget5__number\"> \n                                    {{journal.supportNumber}}\n                                  </span>\n                                  <br>\n                                  <span class=\"m-widget5__sales\">\n                                    supports\n                                  </span>\n                                </div>\n                                <div class=\"m-widget5__stats2\">\n                                  <span class=\"m-widget5__number\">\n                                    {{journal.replicateNumber}}\n                                  </span>\n                                  <br>\n                                  <span class=\"m-widget5__votes\">\n                                    replicates\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"m_tabs_6_2\" role=\"tabpanel\">\n                          <div class=\"m--pull-right\">\n                              <ul class=\"m-portlet__nav\">\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\n                                    Sort\n                                  </a>\n                                  <div class=\"m-dropdown__wrapper\">\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\n                                    <div class=\"m-dropdown__inner\">\n                                      <div class=\"m-dropdown__body\">\n                                        <div class=\"m-dropdown__content\">\n                                          <ul class=\"m-nav\">\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Yesterday\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Week\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Month\n                                                </span>\n                                              </a>\n                                            </li>\n                                            <li class=\"m-nav__item\">\n                                              <a href=\"\" class=\"m-nav__link\">\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                                <span class=\"m-nav__link-text\">\n                                                  Year\n                                                </span>\n                                              </a>\n                                            </li>\n                                          </ul>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ul>\n                          </div>\n                          <div class=\"m-widget5\">\n                            <div class=\"m-widget5__item\" *ngFor=\"let quotation of quotations\">\n                              <div class=\"m-widget5__content m-widget2__item m-widget2__item--primary\">\n                                <h4 class=\"m-widget5__title\">\n                                  {{quotation.title}}\n                                </h4>\n                                <span class=\"m-widget5__title\">\n                                  {{quotation.quote}}\n                                </span>\n                                <div class=\"m-widget5__info\">\n                                  <span class=\"m-widget5__info-date m--font-info\">\n                                    {{quotation.date | date:'medium' }}\n                                  </span>\n                                </div>\n                              </div>\n                              <div class=\"m-widget5__stats1\">\n                                <span class=\"m-widget5__number\">\n                                  {{quotation.supportNumber}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget5__sales\">\n                                  supports\n                                </span>\n                              </div>\n                              <div class=\"m-widget5__stats2\">\n                                <span class=\"m-widget5__number\">\n                                  {{quotation.replicateNumber}}\n                                </span>\n                                <br>\n                                <span class=\"m-widget5__votes\">\n                                  replicates\n                                </span>\n                              </div>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"m_tabs_6_3\" role=\"tabpanel\">\n                        hello  tab 3\n                      </div>\n                    </div>\n                  </div>\n                </div>\n          \n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, router, profileService, genjouristService, route) {
        this.authService = authService;
        this.router = router;
        this.profileService = profileService;
        this.genjouristService = genjouristService;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getGenjourist().subscribe(function (profile) {
            _this.user = profile.user;
            _this.profileService.articles(_this.user.genjouristId).subscribe(function (article) {
                _this.journals = article;
            });
            _this.profileService.quotation(_this.user.genjouristId).subscribe(function (quotation) {
                _this.quotations = quotation;
            });
        });
        // err => {
        //   console.log(err);
        //   return false;
        // });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_4__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-login.m-login--1 .m-login__wrapper{\r\n    padding:0 2rem 2rem 2rem;\r\n}\r\n\r\n.m-radio-inline{\r\n    display:inline-block;\r\n}\r\n\r\nbody{\r\n    margin-top:-45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"m-grid m-grid--hor m-grid--root m-page\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin\" id=\"m_login\">\n    <div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\n      <div class=\"m-stack m-stack--hor m-stack--desktop\">\n        <div class=\"m-stack__item m-stack__item--fluid\">\n          <div class=\"m-login__wrapper\">\n            <div class=\"m-login__logo\">\n              <a  [routerLink]=\"['/']\">\n                <img src=\"assets/img/genjour.png\" height=\"110\">\n              </a>\n            </div>\n            <div class=\"m-signup\">\n              <div class=\"m-login__head\">\n                <h3 class=\"m-login__title\">\n                  Sign Up\n                </h3>\n                <div class=\"m-login__desc\">\n                  Enter your details to create your account:\n                </div>\n              </div>\n              <form class=\"m-login__form m-form\" (submit) = \"register()\">\n                <div class=\"form-group m-form__group\">\n                  <input class=\"form-control m-input\" [(ngModel)]=\"fullname\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\">\n                </div>\n                <div class=\"form-group m-form__group\">\n                  <input class=\"form-control m-input\" [(ngModel)]=\"email\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\">\n                </div>\n                <div class=\"form-group m-form__group\">\n                  <input class=\"form-control m-input\" [(ngModel)]=\"username\" type=\"text\" placeholder=\"Username\" name=\"username\">\n                </div>\n                <div class=\"form-group m-form__group\">\n                  <input class=\"form-control m-input m-login__form-input--last\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\">\n                </div>\n                <div class=\"row form-group m-form__group m-login__form-sub\">\n                  <div class=\"col m--align-left\">\n                    <label class=\"m-checkbox m-checkbox--focus\">\n                      <input type=\"checkbox\" name=\"agree\">\n                      I Agree the\n                      <a href=\"#\" class=\"m-link m-link--focus\">\n                        terms and conditions\n                      </a>\n                      .\n                      <span></span>\n                    </label>\n                    <span class=\"m-form__help\"></span>\n                  </div>\n                </div>\n                <div class=\"m-login__form-action\">\n                  <button type=\"submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n                    Sign Up\n                  </button>\n                  <button class=\"btn btn-outline-focus  m-btn m-btn--pill m-btn--custom\">\n                    Cancel\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"m-stack__item m-stack__item--center\">\n          <div class=\"m-login__account\">\n            <span class=\"m-login__account-msg\">\n              Already have account\n            </span>\n            &nbsp;&nbsp;\n            <a [routerLink]=\"['/login']\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\n              Sign In\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(../../../assets/app/media/img//bg/bg-4.jpg)\">\n      <div class=\"m-grid__item m-grid__item--middle\">\n        <h3 class=\"m-login__welcome\">\n          Join Our Community\n        </h3>\n        <p class=\"m-login__msg\">\n          Lorem ipsum dolor sit amet, coectetuer adipiscing\n          <br>\n          elit sed diam nonummy et nibh euismod\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user = {
            name: this.fullname,
            email: this.email,
            password: this.password,
            username: this.username
        };
        // check required fields
        if (!this.validateService.checkRegister(user)) {
            console.log("please fill all fields");
            return false;
        }
        // check email 
        if (!this.validateService.validateEmail(user.email)) {
            console.log("Email is not valid");
            return false;
        }
        //register new user here api from services
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log('user is register');
                _this.router.navigate(['/login']);
            }
            else {
                console.log('not registered');
                _this.router.navigate(['/feeds']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 m-portlet  m-widget14\">\n  <div class=\"m-widget14__header\">\n    <h3 class=\"m-widget14__title\">\n      Survey Stats\n    </h3>\n    <span class=\"m-widget14__desc\">\n      Do you think weed leagalisation is a good step?\n    </span>\n  </div>\n  <div class=\"row  align-items-center\">\n    <div class=\"col\">\n      <div id=\"m_chart_profit_share\" class=\"m-widget14__chart\" style=\"height: 160px\">\n        <div class=\"m-widget14__stat\">\n          45\n        </div>\n      <svg xmlns:ct=\"http://gionkunz.github.com/chartist-js/ct\" width=\"100%\" height=\"100%\" class=\"ct-chart-donut\" style=\"width: 100%; height: 100%;\"><g class=\"ct-series custom\"><path d=\"M108.295,101.189A49.766,49.766,0,0,0,63.266,30.234\" class=\"ct-slice-donut\" ct:value=\"32\" ct:meta=\"{&amp;quot;data&amp;quot;:{&amp;quot;color&amp;quot;:&amp;quot;#716aca&amp;quot;}}\" style=\"stroke-width: 17px;\" stroke-dasharray=\"100.06036376953125px 100.06036376953125px\" stroke-dashoffset=\"-100.06036376953125px\" stroke=\"#716aca\"><animate attributeName=\"stroke-dashoffset\" id=\"anim0\" dur=\"1000ms\" from=\"-100.06036376953125px\" to=\"0px\" fill=\"freeze\" stroke=\"#716aca\" calcMode=\"spline\" keySplines=\"0.23 1 0.32 1\" keyTimes=\"0;1\"></animate></path></g><g class=\"ct-series custom\"><path d=\"M24.921,111.722A49.766,49.766,0,0,0,108.369,101.032\" class=\"ct-slice-donut\" ct:value=\"32\" ct:meta=\"{&amp;quot;data&amp;quot;:{&amp;quot;color&amp;quot;:&amp;quot;#00c5dc&amp;quot;}}\" style=\"stroke-width: 17px;\" stroke-dasharray=\"100.23399353027344px 100.23399353027344px\" stroke-dashoffset=\"-100.23399353027344px\" stroke=\"#00c5dc\"><animate attributeName=\"stroke-dashoffset\" id=\"anim1\" dur=\"1000ms\" from=\"-100.23399353027344px\" to=\"0px\" fill=\"freeze\" stroke=\"#00c5dc\" begin=\"anim0.end\" calcMode=\"spline\" keySplines=\"0.23 1 0.32 1\" keyTimes=\"0;1\"></animate></path></g><g class=\"ct-series custom\"><path d=\"M63.266,30.234A49.766,49.766,0,0,0,25.032,111.855\" class=\"ct-slice-donut\" ct:value=\"36\" ct:meta=\"{&amp;quot;data&amp;quot;:{&amp;quot;color&amp;quot;:&amp;quot;#ffb822&amp;quot;}}\" style=\"stroke-width: 17px;\" stroke-dasharray=\"112.7421646118164px 112.7421646118164px\" stroke-dashoffset=\"-112.7421646118164px\" stroke=\"#ffb822\"><animate attributeName=\"stroke-dashoffset\" id=\"anim2\" dur=\"1000ms\" from=\"-112.7421646118164px\" to=\"0px\" fill=\"freeze\" stroke=\"#ffb822\" begin=\"anim1.end\" calcMode=\"spline\" keySplines=\"0.23 1 0.32 1\" keyTimes=\"0;1\"></animate></path></g></svg></div>\n    </div>\n    <div class=\"col\">\n      <div class=\"m-widget14__legends\">\n        <div class=\"m-widget14__legend\">\n          <span class=\"m-widget14__legend-bullet m--bg-accent\"></span>\n          <span class=\"m-widget14__legend-text\">\n            37% Sport Tickets\n          </span>\n        </div>\n        <div class=\"m-widget14__legend\">\n          <span class=\"m-widget14__legend-bullet m--bg-warning\"></span>\n          <span class=\"m-widget14__legend-text\">\n            47% Business Events\n          </span>\n        </div>\n        <div class=\"m-widget14__legend\">\n          <span class=\"m-widget14__legend-bullet m--bg-brand\"></span>\n          <span class=\"m-widget14__legend-text\">\n            19% Others\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"m-portlet m-portlet\">\n        <div class=\"m-portlet__head\">\n          <div class=\"m-portlet__head-caption\">\n            <div class=\"m-portlet__head-title\">\n              <h3 class=\"m-portlet__head-text\">\n                Quotes\n              </h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"m-portlet__body\">\n          <div class=\"m-widget3\">\n            <div class=\"m-widget3__item\">\n              <div class=\"m-widget3__header\">\n                <div class=\"m-widget3__user-img\">\n                  <img class=\"m-widget3__img\" src=\"assets/app/media/img/users/user1.jpg\" alt=\"\">\n                </div>\n                <div class=\"m-widget3__info\">\n                  <span class=\"m-widget3__username m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                    Melania Trump\n                  </span>\n                  <br>\n                  <span class=\"m-widget3__time\">\n                    2 day ago\n                  </span>\n                </div>\n                <span class=\"m-widget3__status m--font-brand\">\n                    Life\n                </span>\n              </div>\n              <div class=\"m-widget3__body\">\n                <p class=\"m-widget3__text\">\n                  Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.\n                </p>\n              </div>\n              <div class=\"row m--block-center\">\n                  <div class=\"m--margin-top-5 m--margin-bottom-5 \">\n                      <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                        <button type=\"button\" class=\"m-btn btn btn-secondary\">\n                          <i class=\"la la-file-text-o\"></i> Support \n                        </button>\n                        <div class=\"m-btn-group btn-group\" role=\"group\">\n                          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                              <i class=\"flaticon-network\"></i> Replicate\n                          </button>\n                          <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\n                            <a class=\"dropdown-item\" href=\"#\">\n                              Dropdown link\n                            </a>\n                            <a class=\"dropdown-item\" href=\"#\">\n                              Dropdown link\n                            </a>\n                            <a class=\"dropdown-item\" href=\"#\">\n                              Dropdown link\n                            </a>\n                            <a class=\"dropdown-item\" href=\"#\">\n                              Dropdown link\n                            </a>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"m-widget3__item\">\n              <div class=\"m-widget3__header\">\n                <div class=\"m-widget3__user-img\">\n                  <img class=\"m-widget3__img\" src=\"assets/app/media/img/users/user4.jpg\" alt=\"\">\n                </div>\n                <div class=\"m-widget3__info\">\n                  <span class=\"m-widget3__username\">\n                    Lebron King James\n                  </span>\n                  <br>\n                  <span class=\"m-widget3__time\">\n                    1 day ago\n                  </span>\n                </div>\n                <span class=\"m-widget3__status m--font-brand\">\n                  Philosphy\n                </span>\n              </div>\n              <div class=\"m-widget3__body\">\n                <p class=\"m-widget3__text\">\n                  Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper.\n                </p>\n              </div>\n            </div>\n            <div class=\"m-widget3__item\">\n              <div class=\"m-widget3__header\">\n                <div class=\"m-widget3__user-img\">\n                  <img class=\"m-widget3__img\" src=\"assets/app/media/img/users/user5.jpg\" alt=\"\">\n                </div>\n                <div class=\"m-widget3__info\">\n                  <span class=\"m-widget3__username\">\n                    Deb Gibson\n                  </span>\n                  <br>\n                  <span class=\"m-widget3__time\">\n                    3 weeks ago\n                  </span>\n                </div>\n                <span class=\"m-widget3__status m--font-success\">\n                  Society\n                </span>\n              </div>\n              <div class=\"m-widget3__body\">\n                <p class=\"m-widget3__text\">\n                  Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/support/support-article/support-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span{\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/support-article/support-article.component.html":
/***/ (function(module, exports) {

module.exports = "<span (click)=\"support(articleId,userId)\"> {{supporterNumber}} Support </span> | <span data-toggle=\"modal\" data-target=\"#m_modal_4\"> Replicate </span> \r\n\r\n<div class=\"modal fade\" id=\"m_modal_4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n                        Replicate\r\n                    </h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">\r\n                            &times;\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                            <i class=\"socicon-whatsapp\"></i>\r\n                                    </span>\r\n                                    <span class=\"m-widget17__subtitle\">\r\n                                        Whatsapp\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                    <div class=\"m-widget17__item\">\r\n                                            <span class=\"m-widget17__icon\">\r\n                                                    <i class=\"socicon-facebook\"></i>\r\n                                            </span>\r\n                                            <span class=\"m-widget17__subtitle\">\r\n                                                Facebook\r\n                                            </span>\r\n                                        </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                    <div class=\"m-widget17__item\">\r\n                                            <span class=\"m-widget17__icon\">\r\n                                                    <i class=\"socicon-twitter\"></i>\r\n                                            </span>\r\n                                            <span class=\"m-widget17__subtitle\">\r\n                                                Twitter\r\n                                            </span>\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                    <div class=\"m-widget17__item\">\r\n                                            <span class=\"m-widget17__icon\">\r\n                                                    <i class=\"socicon-googleplus\"></i>\r\n                                            </span>\r\n                                            <span class=\"m-widget17__subtitle\">\r\n                                                Google Plus\r\n                                            </span>\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                    <div class=\"m-widget17__item\">\r\n                                            <span class=\"m-widget17__icon\">\r\n                                                <i class=\"la la-copy\"></i>\r\n                                            </span>\r\n                                            <span class=\"m-widget17__subtitle\">\r\n                                                Copy Link\r\n                                            </span>\r\n                                    </div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/support/support-article/support-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_journals_service__ = __webpack_require__("../../../../../src/app/services/journals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_socket_socket_service__ = __webpack_require__("../../../../../src/app/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SupportArticleComponent = (function () {
    function SupportArticleComponent(journalsService, authService, router, supportService, socketService, articleService) {
        this.journalsService = journalsService;
        this.authService = authService;
        this.router = router;
        this.supportService = supportService;
        this.socketService = socketService;
        this.articleService = articleService;
        this.user = [];
    }
    SupportArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.article(this.articleId).subscribe(function (data) {
            _this.supporterNumber = data.supporters.length;
        });
        // this.socketService.getSupport().subscribe((data)=>{
        //   console.log(data);
        //   this.supporterNumber = data;
        // })
    };
    SupportArticleComponent.prototype.support = function (articleId, userId) {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.articleService.article(articleId).subscribe(function (data) {
                _this.supporterNumber = data.supporters.length;
            });
            this.supportService.supportArticle(articleId, userId).subscribe(function (data) {
                console.log(data);
                _this.articleService.article(articleId).subscribe(function (data) {
                    _this.supporterNumber = data.supporters.length;
                });
            });
            //this.socketService.test();
            // this.socketService.supportArticle(articleId);
            //.subscribe(data=>{
            //this.supporterNumber=data;
            //console.log(this.supporterNumber.supporters);
            // });
        }
        else {
            this.router.navigate(['/login']);
            console.log('first logged in then support us');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SupportArticleComponent.prototype, "articleId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SupportArticleComponent.prototype, "userId", void 0);
    SupportArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-support-article',
            template: __webpack_require__("../../../../../src/app/components/support/support-article/support-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/support/support-article/support-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_journals_service__["a" /* JournalsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_6__services_socket_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_5__services_article_service__["a" /* ArticleService */]])
    ], SupportArticleComponent);
    return SupportArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/support/support-quotation/support-quotation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/support-quotation/support-quotation.component.html":
/***/ (function(module, exports) {

module.exports = "<span  (click)=\"support()\"> Support </span> | <span (click)=\"replicate()\"> Replicate </span>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/support/support-quotation/support-quotation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportQuotationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportQuotationComponent = (function () {
    function SupportQuotationComponent() {
    }
    SupportQuotationComponent.prototype.ngOnInit = function () {
    };
    SupportQuotationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-support-quotation',
            template: __webpack_require__("../../../../../src/app/components/support/support-quotation/support-quotation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/support/support-quotation/support-quotation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportQuotationComponent);
    return SupportQuotationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/write-article/write-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/write-article/write-article.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\n\n\t\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t\t\t\t\t<div class=\"m-content\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<div class=\"m-portlet\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t  Write an article\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--begin::Form-->\n\t\t\t\t\t\t\t\t\t<form enctype=\"multipart/form-data\" (submit)= \"articleSubmit()\" class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator\" method=\"POST\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tArticle Title:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease enter article title\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tTags:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" [(ngModel)]=\"tags\" name=\"tags\" placeholder=\"Tags\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tEx. - life,genjour\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFeatured Image:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Browser\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input [(ngModel)]=\"image\" type=\"file\" name=\"image\" >\t\t-->\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  id=\"photo\" type=\"file\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-s\"  (click)=\"upload()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button> <br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf = \"imgUrl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"hidden\" [disabled]=\"!xyz\" [(ngModel)]=\"imgUrl\" name=\"imgUrl\"/> \n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                      <div class=\"form-group1 m-form__group row\">\n                        <label class=\"col-lg-2 col-form-label\" for=\"caterogySelection\">\n                          Custom Select\n                        </label>\n                        <select [(ngModel)]=\"category\" name=\"category\" class=\"custom-select\">\n                          <option selected=\"\">\n                            Choose category\n                          </option>\n                          <option value=\"Life\">\n                            Life\n                          </option>\n                          <option value=\"Economics\">\n                            Economics\n                          </option>\n                          <option value=\"Society\">\n                            Society\n                          </option>\n                          <option value=\"Controversy\">\n                            Controversy\n                          </option>\n                          <option value=\"Politics\">\n                            Politics\n                          </option>\n                          <option value=\"Self-Help\">\n                            Self-Help\n                          </option>\n                          <option value=\"Philosophy\">\n                            Philosophy\n                          </option>\n                        </select>\n                      </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group m-form__group--last form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tArticle Content\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8\">\n                          <div class=\"summernote\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t<!--end::Form-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/write-article/write-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_script_loader_service__ = __webpack_require__("../../../../../src/app/services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WriteArticleComponent = (function () {
    function WriteArticleComponent(authService, router, postService, el, script) {
        this.authService = authService;
        this.router = router;
        this.postService = postService;
        this.el = el;
        this.script = script;
    }
    WriteArticleComponent.prototype.ngOnInit = function () {
    };
    WriteArticleComponent.prototype.ngAfterViewInit = function () {
        this.script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/components/forms/widgets/summernote.js');
    };
    WriteArticleComponent.prototype.upload = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#photo');
        console.log("iam+ " + inputEl);
        var fileCount = inputEl.files.length;
        var formData = new FormData();
        if (fileCount > 0) {
            for (var i = 0; i < fileCount; i++) {
                formData.append('photo', inputEl.files.item(i));
            }
            this.postService.PostImage(formData).subscribe(function (success) {
                //alert(success._body);
                //console.log(success._body);
                _this.imgUrl = success._body;
                console.log(_this.imgUrl);
            }, function (error) { return alert(error); });
        }
    };
    WriteArticleComponent.prototype.articleSubmit = function () {
        //var markup = $('.summernote').summernote('code');
        var _this = this;
        var article = {
            title: this.title,
            tags: this.tags,
            category: this.category,
            imgUrl: this.imgUrl,
        };
        //console.log(article)
        this.authService.postArticle(article).subscribe(function (data) {
            if (data.success) {
                console.log('article is posted');
                _this.router.navigate(['/']);
            }
            else {
                console.log('unable to post this article');
                _this.router.navigate(['/write-article']);
            }
        });
    };
    WriteArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-write-article',
            template: __webpack_require__("../../../../../src/app/components/write-article/write-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/write-article/write-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], WriteArticleComponent);
    return WriteArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/write-quotation/write-quotation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/write-quotation/write-quotation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\n\n\t\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t\t\t\t\t<div class=\"m-content\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<div class=\"m-portlet\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t  Write Quotation\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--begin::Form-->\n\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator\" (submit)= \"quotationSubmit()\" >\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuote:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\n                          <div class=\"col-lg-6 col-md-9 col-sm-12\">\n                            <textarea class=\"form-control m-input\" [(ngModel)]=\"quote\" name=\"quote\" id=\"m_autosize_1\" maxlength=\"350\" rows=\"3\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 88px;\"></textarea>\n                          </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tTags:\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" [(ngModel)]=\"tags\" name=\"tags\" placeholder=\"Tags\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tEx. - life,genjour\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                      <div class=\"form-group1 m-form__group row\">\n                        <label class=\"col-lg-2 col-form-label m-input\"  for=\"caterogySelection\">\n                          Choose category\n                        </label>\n                        <select class=\"custom-select\" [(ngModel)]=\"category\" name=\"category\">\n                          <option selected=\"\">\n                            Options\n                          </option>\n                          <option value=\"Life\">\n                            Life\n                          </option>\n                          <option value=\"Economics\">\n                            Economics\n                          </option>\n                          <option value=\"Society\">\n                            Society\n                          </option>\n                          <option value=\"Controversy3\">\n                            Controversy\n                          </option>\n                          <option value=\"Politics\">\n                            Politics\n                          </option>\n                          <option value=\"Self-Help\">\n                            Self-Help\n                          </option>\n                          <option value=\"Philosophy\">\n                            Philosophy\n                          </option>\n                        </select>\n                      </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t<!--end::Form-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/write-quotation/write-quotation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteQuotationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WriteQuotationComponent = (function () {
    function WriteQuotationComponent(validateService, postService, router, auhtService) {
        this.validateService = validateService;
        this.postService = postService;
        this.router = router;
        this.auhtService = auhtService;
    }
    WriteQuotationComponent.prototype.ngOnInit = function () {
    };
    // genjouristId  : String,
    // genjourist    : String,
    WriteQuotationComponent.prototype.quotationSubmit = function () {
        var _this = this;
        var quotation = {
            quote: this.quote,
            tags: this.tags,
            category: this.category,
        };
        // if(!this.validateService.checkQuotation(quotation)){
        //   console.log("Please fill all fields");
        //   return false;
        // }
        this.auhtService.postQuotation(quotation).subscribe(function (data) {
            if (data.success) {
                console.log('quotation is posted');
                _this.router.navigate(['/feeds']);
            }
            else {
                console.log('unable to post this quotation');
                _this.router.navigate(['/write-article']);
            }
        });
    };
    WriteQuotationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-write-quotation',
            template: __webpack_require__("../../../../../src/app/components/write-quotation/write-quotation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/write-quotation/write-quotation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], WriteQuotationComponent);
    return WriteQuotationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gaurds/auth.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "../../../../../src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.article = function (articleId) {
        return this.http.get("http://localhost:3000/journal/" + articleId)
            .map(function (res) { return res.json(); });
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.user = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post('http://localhost:3000/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post('http://localhost:3000/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postQuotation = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('http://localhost:3000/quotation', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postArticle = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('http://localhost:3000/article', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getGenjourist = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.get('http://localhost:3000/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('userinfo', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.articleContent = function (category) {
        return this.http.get('http://localhost:3000/articles/' + category)
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.quotationContent = function (category) {
        return this.http.get('http://localhost:3000/quotations/' + category)
            .map(function (response) { return response.json(); });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/genjourist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenjouristService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenjouristService = (function () {
    function GenjouristService(http) {
        this.http = http;
    }
    GenjouristService.prototype.genjouristProfile = function (genjouristId) {
        return this.http.get('http://localhost:3000/genjourist/' + genjouristId)
            .map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.articles = function (genjouristId) {
        return this.http.get('http://localhost:3000/genjourist/article/' + genjouristId)
            .map(function (response) { return response.json(); });
    };
    GenjouristService.prototype.quotation = function (genjouristId) {
        return this.http.get('http://localhost:3000/genjourist/quotation/' + genjouristId)
            .map(function (response) { return response.json(); });
    };
    GenjouristService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GenjouristService);
    return GenjouristService;
}());



/***/ }),

/***/ "../../../../../src/app/services/journals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JournalsService = (function () {
    function JournalsService(http) {
        this.http = http;
    }
    JournalsService.prototype.getJournals = function () {
        return this.http.get('http://localhost:3000/journals')
            .map(function (response) { return response.json(); });
    };
    JournalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], JournalsService);
    return JournalsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PostService.prototype.PostImage = function (formData) {
        return this.http.post('http://localhost:3000/articleImage', formData)
            .map(function (res) { return res; });
    };
    PostService.prototype.postQuotation = function (quotation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('http://localhost:3000/quotation', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.articles = function (genjouristId) {
        //console.log(genjouristId);
        return this.http.get('http://localhost:3000/genjourist/article/' + genjouristId)
            .map(function (response) { return response.json(); });
    };
    ProfileService.prototype.quotation = function (genjouristId) {
        return this.http.get('http://localhost:3000/genjourist/quotation/' + genjouristId)
            .map(function (response) { return response.json(); });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        this.tag = tag;
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(_this.tag).append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.url = 'http://localhost:3000';
        this.getSupport = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.socket.on('getArticleSupportNumber', function (supportNumber) {
                    observer.next(supportNumber);
                });
            });
        };
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
    }
    SocketService.prototype.test = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        this.socket.on('test1', function (data) {
            console.log(data);
            _this.socket.emit('test2', { msg: 'emiting to console' });
        });
    };
    SocketService.prototype.supportArticle = function (articleId) {
        this.socket.emit('getArticleIdForSupport', articleId);
        // return Observable.create((observer)=>{
        //   this.socket.on('getArticleSupportNumber',(supportNumber)=>{
        //     observer.next(supportNumber);
        //   });
        // });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/services/support.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportService = (function () {
    function SupportService(http) {
        this.http = http;
    }
    SupportService.prototype.supportArticle = function (articleId, genjouristId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "http://localhost:3000/support/" + articleId + "/" + genjouristId;
        // console.log(URL);
        return this.http.post(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService.prototype.supportGenjourist = function (userId, genjouristId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "http://localhost:3000/support/genjourist/" + userId + "/" + genjouristId;
        return this.http.post(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService.prototype.supportingGenjourist = function (userId, genjouristId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "http://localhost:3000/supporting/genjourist/" + userId + "/" + genjouristId;
        return this.http.post(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SupportService);
    return SupportService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.checkLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.checkRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ValidateService.prototype.checkQuotation = function (quotation) {
        if (quotation.title == undefined || quotation.category == " " || quotation.quote == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map