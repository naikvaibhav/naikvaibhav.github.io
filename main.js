(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abstract/abstract.component.css":
/*!*************************************************!*\
  !*** ./src/app/abstract/abstract.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 1px solid #ddd; /* Gray border */\r\n    border-radius: 4px;  /* Rounded border */\r\n    padding: 5px; /* Some padding */\r\n    width: 150px; /* Set a small width */\r\n    cursor: pointer;\r\n  }\r\n\r\n  .zoom {\r\n    /*padding: 10px;*/\r\n    /*background-color: green;*/\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s; /* Animation */\r\n    /*width: 200px;*/\r\n    /*height: 200px;*/\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .zoom:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJzdHJhY3QvYWJzdHJhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQixFQUFFLGdCQUFnQjtJQUN4QyxrQkFBa0IsR0FBRyxtQkFBbUI7SUFDeEMsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixZQUFZLEVBQUUsc0JBQXNCO0lBQ3BDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFBekIsZ0RBQXlCLEVBQUUsY0FBYztJQUN6QyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUUscUZBQXFGO0VBQzlHIiwiZmlsZSI6InNyYy9hcHAvYWJzdHJhY3QvYWJzdHJhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBHcmF5IGJvcmRlciAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgLyogUm91bmRlZCBib3JkZXIgKi9cclxuICAgIHBhZGRpbmc6IDVweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICB3aWR0aDogMTUwcHg7IC8qIFNldCBhIHNtYWxsIHdpZHRoICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuem9vbSB7XHJcbiAgICAvKnBhZGRpbmc6IDEwcHg7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gICAgLyp3aWR0aDogMjAwcHg7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMDBweDsqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC56b29tOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/abstract/abstract.component.html":
/*!**************************************************!*\
  !*** ./src/app/abstract/abstract.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\"><a [routerLink]=\"['/home']\"><button type=\"button\" class=\"btn btn-dark\"\n      style=\"font-family:'Righteous', cursive;\">Back</button></a></div>\n<br />\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px;font-family:'Righteous', cursive;\">Abstract images </div>\n    <br><br><br><br>\n  </div>\n  <div class=\"row mx-5\" style=\"text-align:center\" *ngIf=\"abstractImages.length>0\">\n    <!--iterative div starts from here creates multiple panels or card depending on the objects declared in the array allBlogs-->\n    <div *ngFor=\"let images of abstractImages\" class=\"col-12 col-md-4 mb-4 zoom\" style=\"align-items: center;\">\n\n      <!--using bootstrap card for image arrangement in the form of thumbnails\n    <div class=\"card-group mx-5\">\n    <div class=\"card\">\n  \n    <a href=\"\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><img src='{{images.url}}' class=\"card-img-top img-fluid\" alt=\"spiritual images\" ></a>\n    </div>-->\n\n      <!--creating thumbnails using just the img-thumnail class-->\n      <img src='{{images.url}}' class=\"img-thumbnail\" [routerLink]=\"['/viewabstract',images.imgId]\">\n\n\n\n      <br />\n\n    </div>\n\n  </div>\n  <!--end of iterative div-->\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/abstract/abstract.component.ts":
/*!************************************************!*\
  !*** ./src/app/abstract/abstract.component.ts ***!
  \************************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery.service.ts");


//importing route related code


var AbstractComponent = /** @class */ (function () {
    function AbstractComponent(_route, router, galleryService) {
        this._route = _route;
        this.router = router;
        this.galleryService = galleryService;
        console.log("Abstract component constructor is called");
    }
    AbstractComponent.prototype.ngOnInit = function () {
        console.log("spiritual component oninit called");
        this.abstractImages = this.galleryService.getabstractImages();
        return this.abstractImages;
    };
    AbstractComponent.prototype.ngOnDestroy = function () {
        console.log("abstract component destroyed");
    };
    AbstractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abstract',
            template: __webpack_require__(/*! ./abstract.component.html */ "./src/app/abstract/abstract.component.html"),
            styles: [__webpack_require__(/*! ./abstract.component.css */ "./src/app/abstract/abstract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"]])
    ], AbstractComponent);
    return AbstractComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    /*background-color: #01579B;*/\r\n    display: block;\r\n    padding: 2%;\r\n    font-size: 35px;\r\n}\r\nbody {\r\n  /*background-color:#FFEB3B;*/\r\n  /*background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);*/\r\n  /*background: linear-gradient(to right, #373b44, #4286f4);*/\r\n  background-color: #B2EBF2;\r\n}\r\n.navbar-custom {\r\n    background-color: #FFFF8D;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsb0VBQW9FO0VBQ3BFLDJEQUEyRDtFQUMzRCx5QkFBeUI7QUFDM0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzAxNTc5QjsqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5ib2R5IHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6I0ZGRUIzQjsqL1xyXG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjk4MGI5LCAjNmRkNWZhLCAjZmZmZmZmKTsqL1xyXG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzczYjQ0LCAjNDI4NmY0KTsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMkVCRjI7XHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGOEQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<html>\n\n<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Righteous\" rel=\"stylesheet\">\n</head>\n<div class=\"container-fluid\" style=\"text-align:center;\">\n  <div class=\"header\">\n    <h1 style=\"color:#ff5500;font-family:'Righteous', cursive;\">Wallpaper gallery</h1>\n  </div>\n\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-md navbar-light navbar-custom\">\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\" style=\"font-family:'Righteous', cursive;\">Home <span\n                class=\"sr-only\">(current)</span></a>\n          </li>\n          <!--\n            <li class=\"nav-item\">\n              <a class=\"nav-link\">View</a>\n            </li>\n          -->\n          <!--\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n            </li>\n          -->\n        </ul>\n\n      </div>\n    </nav>\n  </div>\n</div>\n\n<!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n\n</html>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//viewencapsulation is used for applying background color to the whole website,the style is applies in app.component.css
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'wallpaper-gallery';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spiritual_spiritual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spiritual/spiritual.component */ "./src/app/spiritual/spiritual.component.ts");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery.service */ "./src/app/gallery.service.ts");
/* harmony import */ var _viewspiritual_viewspiritual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewspiritual/viewspiritual.component */ "./src/app/viewspiritual/viewspiritual.component.ts");
/* harmony import */ var _nature_nature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nature/nature.component */ "./src/app/nature/nature.component.ts");
/* harmony import */ var _viewabstract_viewabstract_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewabstract/viewabstract.component */ "./src/app/viewabstract/viewabstract.component.ts");
/* harmony import */ var _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./abstract/abstract.component */ "./src/app/abstract/abstract.component.ts");
/* harmony import */ var _viewnature_viewnature_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./viewnature/viewnature.component */ "./src/app/viewnature/viewnature.component.ts");






//importing router module for routing the path








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _spiritual_spiritual_component__WEBPACK_IMPORTED_MODULE_7__["SpiritualComponent"],
                _viewspiritual_viewspiritual_component__WEBPACK_IMPORTED_MODULE_9__["ViewspiritualComponent"],
                _nature_nature_component__WEBPACK_IMPORTED_MODULE_10__["NatureComponent"],
                _viewabstract_viewabstract_component__WEBPACK_IMPORTED_MODULE_11__["ViewabstractComponent"],
                _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_12__["AbstractComponent"],
                _viewnature_viewnature_component__WEBPACK_IMPORTED_MODULE_13__["ViewnatureComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'spiritual', component: _spiritual_spiritual_component__WEBPACK_IMPORTED_MODULE_7__["SpiritualComponent"] },
                    { path: 'abstract', component: _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_12__["AbstractComponent"] },
                    { path: 'nature', component: _nature_nature_component__WEBPACK_IMPORTED_MODULE_10__["NatureComponent"] },
                    { path: 'viewspiritual/:imgId', component: _viewspiritual_viewspiritual_component__WEBPACK_IMPORTED_MODULE_9__["ViewspiritualComponent"] },
                    { path: 'viewabstract/:imgId', component: _viewabstract_viewabstract_component__WEBPACK_IMPORTED_MODULE_11__["ViewabstractComponent"] },
                    { path: 'viewnature/:imgId', component: _viewnature_viewnature_component__WEBPACK_IMPORTED_MODULE_13__["ViewnatureComponent"] }
                ])
            ],
            providers: [_gallery_service__WEBPACK_IMPORTED_MODULE_8__["GalleryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery.service.ts":
/*!************************************!*\
  !*** ./src/app/gallery.service.ts ***!
  \************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryService = /** @class */ (function () {
    function GalleryService() {
        this.spiritualImages = [
            {
                "imgId": "1",
                "url": "assets/img/om-wallpaper.jpg"
            },
            {
                "imgId": "2",
                "url": "assets/img/buddha.jpg"
            },
            {
                "imgId": "3",
                "url": "assets/img/ganesh.jpg"
            },
            {
                "imgId": "4",
                "url": "assets/img/ganesha2.jpg"
            },
            {
                "imgId": "5",
                "url": "assets/img/saffron.jpg"
            },
            {
                "imgId": "6",
                "url": "assets/img/islam.jpg"
            },
            {
                "imgId": "7",
                "url": "assets/img/islam2.jpg"
            },
            {
                "imgId": "8",
                "url": "assets/img/christ-wallpaper.jpg"
            },
            {
                "imgId": "9",
                "url": "assets/img/bhagavad-gita-wallpapers.jpg"
            }
        ];
        this.abstractImages = [
            {
                "imgId": "1",
                "url": "assets/img/abstract1.jpg"
            },
            {
                "imgId": "2",
                "url": "assets/img/abstract2.jpg"
            },
            {
                "imgId": "3",
                "url": "assets/img/abstract3.jpg"
            },
            {
                "imgId": "4",
                "url": "assets/img/abstract4.jpg"
            },
            {
                "imgId": "5",
                "url": "assets/img/abstract5.jpg"
            },
            {
                "imgId": "6",
                "url": "assets/img/abstract6.jpg"
            },
            {
                "imgId": "7",
                "url": "assets/img/abstract7.jpg"
            },
            {
                "imgId": "8",
                "url": "assets/img/abstract8.jpg"
            },
            {
                "imgId": "9",
                "url": "assets/img/abstract9.jpg"
            }
        ];
        this.natureImages = [
            {
                "imgId": "1",
                "url": "assets/img/nature1.jpg"
            },
            {
                "imgId": "2",
                "url": "assets/img/nature2.jpg"
            },
            {
                "imgId": "3",
                "url": "assets/img/nature3.jpg"
            },
            {
                "imgId": "4",
                "url": "assets/img/nature4.jpg"
            },
            {
                "imgId": "5",
                "url": "assets/img/nature5.jpg"
            },
            {
                "imgId": "6",
                "url": "assets/img/nature6.jpg"
            },
            {
                "imgId": "7",
                "url": "assets/img/nature7.jpg"
            },
            {
                "imgId": "8",
                "url": "assets/img/nature8.jpg"
            },
            {
                "imgId": "9",
                "url": "assets/img/nature9.jpg"
            }
        ];
    }
    GalleryService.prototype.getImages = function () {
        return this.spiritualImages;
    };
    GalleryService.prototype.getabstractImages = function () {
        return this.abstractImages;
    };
    GalleryService.prototype.getnatureImages = function () {
        return this.natureImages;
    };
    GalleryService.prototype.getImage = function (currentImageId) {
        for (var _i = 0, _a = this.spiritualImages; _i < _a.length; _i++) {
            var images = _a[_i];
            if (images.imgId == currentImageId) {
                this.currentImageId = images;
            }
        }
        return this.currentImageId;
    };
    GalleryService.prototype.getAbstractImage = function (currentImageId) {
        for (var _i = 0, _a = this.abstractImages; _i < _a.length; _i++) {
            var images = _a[_i];
            if (images.imgId == currentImageId) {
                this.currentImageId = images;
            }
        }
        return this.currentImageId;
    };
    GalleryService.prototype.getNatureImage = function (currentImageId) {
        for (var _i = 0, _a = this.natureImages; _i < _a.length; _i++) {
            var images = _a[_i];
            if (images.imgId == currentImageId) {
                this.currentImageId = images;
            }
        }
        return this.currentImageId;
    };
    GalleryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12 pt-3\" style=\"font-size:22px;font-weight: bolder;font-family:'Righteous', cursive;\">Categories\n      of Wallpapers</div>\n    <br><br><br><br>\n  </div>\n\n  <div class=\"col-md auto\">\n    <div class=\"card-deck\">\n      <div class=\"card\">\n        <a [routerLink]=\"['/spiritual']\"><img src=\"assets/img/spiritual.jpg\" class=\"card-img-top\" alt=\"spiritual\"></a>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Spiritual Wallpapers</h5>\n          <p class=\"card-text\">Explore plethora of Wallpapers/images and get a sense of spirituality.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n      <div class=\"card\">\n        <a [routerLink]=\"['/abstract']\"><img src=\"assets/img/abstract.jpg\" class=\"card-img-top\" alt=\"abstract\"></a>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Abstract Wallpapers</h5>\n          <p class=\"card-text\">Redifne your abstract thoughts in the form of beautiful and meaningful images.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n      <div class=\"card\">\n        <a [routerLink]=\"['/nature']\"><img src=\"assets/img/nature.jpg\" class=\"card-img-top\" alt=\"nature\"></a>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Nature Wallpapers</h5>\n          <p class=\"card-text\">Dive into the mesmerizing world of mother nature.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nature/nature.component.css":
/*!*********************************************!*\
  !*** ./src/app/nature/nature.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 1px solid #ddd; /* Gray border */\r\n    border-radius: 4px;  /* Rounded border */\r\n    padding: 5px; /* Some padding */\r\n    width: 150px; /* Set a small width */\r\n    cursor: pointer;\r\n  }\r\n\r\n  .zoom {\r\n    /*padding: 10px;*/\r\n    /*background-color: green;*/\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s; /* Animation */\r\n    /*width: 200px;*/\r\n    /*height: 200px;*/\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .zoom:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF0dXJlL25hdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCLEVBQUUsZ0JBQWdCO0lBQ3hDLGtCQUFrQixHQUFHLG1CQUFtQjtJQUN4QyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUIsRUFBRSxjQUFjO0lBQ3pDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBRSxxRkFBcUY7RUFDOUciLCJmaWxlIjoic3JjL2FwcC9uYXR1cmUvbmF0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogR3JheSBib3JkZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgIC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgICBwYWRkaW5nOiA1cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgd2lkdGg6IDE1MHB4OyAvKiBTZXQgYSBzbWFsbCB3aWR0aCAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnpvb20ge1xyXG4gICAgLypwYWRkaW5nOiAxMHB4OyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGdyZWVuOyovXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAvKiBBbmltYXRpb24gKi9cclxuICAgIC8qd2lkdGg6IDIwMHB4OyovXHJcbiAgICAvKmhlaWdodDogMjAwcHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuem9vbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nature/nature.component.html":
/*!**********************************************!*\
  !*** ./src/app/nature/nature.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\"><a [routerLink]=\"['/home']\"><button type=\"button\" class=\"btn btn-dark\"\n      style=\"font-family:'Righteous', cursive;\">Back</button></a></div>\n<br />\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px; font-family:'Righteous', cursive;\">Nature images </div>\n    <br><br><br><br>\n  </div>\n  <div class=\"row mx-5\" style=\"text-align:center\" *ngIf=\"natureImages.length>0\">\n    <!--iterative div starts from here creates multiple panels or card depending on the objects declared in the array allBlogs-->\n    <div *ngFor=\"let images of natureImages\" class=\"col-12 col-md-4 mb-4 zoom\" style=\"align-items: center;\">\n\n      <!--using bootstrap card for image arrangement in the form of thumbnails\n    <div class=\"card-group mx-5\">\n    <div class=\"card\">\n  \n    <a href=\"\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><img src='{{images.url}}' class=\"card-img-top img-fluid\" alt=\"spiritual images\" ></a>\n    </div>-->\n\n      <!--creating thumbnails using just the img-thumnail class-->\n      <img src='{{images.url}}' class=\"img-thumbnail\" [routerLink]=\"['/viewnature',images.imgId]\">\n\n\n\n      <br />\n\n    </div>\n\n  </div>\n  <!--end of iterative div-->\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/nature/nature.component.ts":
/*!********************************************!*\
  !*** ./src/app/nature/nature.component.ts ***!
  \********************************************/
/*! exports provided: NatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatureComponent", function() { return NatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery.service.ts");


//importing route related code


var NatureComponent = /** @class */ (function () {
    function NatureComponent(_route, router, galleryService) {
        this._route = _route;
        this.router = router;
        this.galleryService = galleryService;
        console.log("Nature component constructor is called");
    }
    NatureComponent.prototype.ngOnInit = function () {
        console.log("nature component oninit called");
        this.natureImages = this.galleryService.getnatureImages();
        return this.natureImages;
    };
    NatureComponent.prototype.ngOnDestroy = function () {
        console.log("abstract component destroyed");
    };
    NatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nature',
            template: __webpack_require__(/*! ./nature.component.html */ "./src/app/nature/nature.component.html"),
            styles: [__webpack_require__(/*! ./nature.component.css */ "./src/app/nature/nature.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"]])
    ], NatureComponent);
    return NatureComponent;
}());



/***/ }),

/***/ "./src/app/spiritual/spiritual.component.css":
/*!***************************************************!*\
  !*** ./src/app/spiritual/spiritual.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 1px solid #ddd; /* Gray border */\r\n    border-radius: 4px;  /* Rounded border */\r\n    padding: 5px; /* Some padding */\r\n    width: 150px; /* Set a small width */\r\n    cursor: pointer;\r\n  }\r\n\r\n  .zoom {\r\n    /*padding: 10px;*/\r\n    /*background-color: green;*/\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s; /* Animation */\r\n    /*width: 200px;*/\r\n    /*height: 200px;*/\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .zoom:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpcml0dWFsL3NwaXJpdHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCLEVBQUUsZ0JBQWdCO0lBQ3hDLGtCQUFrQixHQUFHLG1CQUFtQjtJQUN4QyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUIsRUFBRSxjQUFjO0lBQ3pDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBRSxxRkFBcUY7RUFDOUciLCJmaWxlIjoic3JjL2FwcC9zcGlyaXR1YWwvc3Bpcml0dWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogR3JheSBib3JkZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgIC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgICBwYWRkaW5nOiA1cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgd2lkdGg6IDE1MHB4OyAvKiBTZXQgYSBzbWFsbCB3aWR0aCAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnpvb20ge1xyXG4gICAgLypwYWRkaW5nOiAxMHB4OyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGdyZWVuOyovXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAvKiBBbmltYXRpb24gKi9cclxuICAgIC8qd2lkdGg6IDIwMHB4OyovXHJcbiAgICAvKmhlaWdodDogMjAwcHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuem9vbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/spiritual/spiritual.component.html":
/*!****************************************************!*\
  !*** ./src/app/spiritual/spiritual.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\"><a [routerLink]=\"['/home']\"><button type=\"button\" class=\"btn btn-dark\">Back</button></a></div>\n<br />\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px;font-family:'Righteous', cursive;\">Spiritual images </div>\n    <br><br><br><br>\n  </div>\n  <div class=\"row mx-5\" style=\"text-align:center\" *ngIf=\"spiritualImages.length>0\">\n    <!--iterative div starts from here creates multiple panels or card depending on the objects declared in the array allBlogs-->\n    <div *ngFor=\"let images of spiritualImages\" class=\"col-12 col-md-4 mb-4 zoom\" style=\"align-items: center;\">\n\n      <!--using bootstrap card for image arrangement in the form of thumbnails\n    <div class=\"card-group mx-5\">\n    <div class=\"card\">\n  \n    <a href=\"\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><img src='{{images.url}}' class=\"card-img-top img-fluid\" alt=\"spiritual images\" ></a>\n    </div>-->\n\n      <!--creating thumbnails using just the img-thumnail class-->\n      <a data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><img src='{{images.url}}' class=\"img-thumbnail\"\n          [routerLink]=\"['/viewspiritual',images.imgId]\"></a>\n\n\n\n      <br />\n\n    </div>\n\n  </div>\n  <!--end of iterative div-->\n  <!--Modal\n  <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\" *ngFor=\"let img of modalspiritualImages\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Modal title</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img src='{{img.url}}'>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-success\">Save/Download</button>\n        </div>\n      </div>\n    </div>\n  </div>-->\n\n\n</div>"

/***/ }),

/***/ "./src/app/spiritual/spiritual.component.ts":
/*!**************************************************!*\
  !*** ./src/app/spiritual/spiritual.component.ts ***!
  \**************************************************/
/*! exports provided: SpiritualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiritualComponent", function() { return SpiritualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery.service.ts");


//importing route related code


var SpiritualComponent = /** @class */ (function () {
    //public modalspiritualImages;
    function SpiritualComponent(_route, router, galleryService) {
        this._route = _route;
        this.router = router;
        this.galleryService = galleryService;
        console.log("Spiritual component constructor is called");
    }
    SpiritualComponent.prototype.ngOnInit = function () {
        //this.modalspiritualImages = this.galleryService.getImages();
        console.log("spiritual component oninit called");
        this.spiritualImages = this.galleryService.getImages();
        return this.spiritualImages;
    };
    SpiritualComponent.prototype.ngOnDestroy = function () {
        console.log("spiritual component destroyed");
    };
    SpiritualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spiritual',
            template: __webpack_require__(/*! ./spiritual.component.html */ "./src/app/spiritual/spiritual.component.html"),
            styles: [__webpack_require__(/*! ./spiritual.component.css */ "./src/app/spiritual/spiritual.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"]])
    ], SpiritualComponent);
    return SpiritualComponent;
}());



/***/ }),

/***/ "./src/app/viewabstract/viewabstract.component.css":
/*!*********************************************************!*\
  !*** ./src/app/viewabstract/viewabstract.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdhYnN0cmFjdC92aWV3YWJzdHJhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/viewabstract/viewabstract.component.html":
/*!**********************************************************!*\
  !*** ./src/app/viewabstract/viewabstract.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\"><a [routerLink]=\"['/abstract']\"><button type=\"button\" class=\"btn btn-dark\">Back</button></a>\n</div>\n<br />\n<div class=\"container\" style=\"text-align:center\">\n\n  <div class=\"row\" *ngIf=\"currentImage\">\n    <!--<div class=\"window\">       \n     <img src='{{currentImage.url}}' style=\"width: 100% ;height: 50%;\">\n    </div>-->\n    <div class=\"container mx-2\">\n      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src='{{currentImage.url}}' class=\"d-block w-100 img-responsive\" alt=\"abstract images\">\n          </div>\n          <div class=\"carousel-item\" *ngFor=\"let img of abstractImages\">\n\n            <img src='{{img.url}}' class=\"d-block w-100 img-responsive\" alt=\"abstract images\">\n\n\n          </div>\n\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <br />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/viewabstract/viewabstract.component.ts":
/*!********************************************************!*\
  !*** ./src/app/viewabstract/viewabstract.component.ts ***!
  \********************************************************/
/*! exports provided: ViewabstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewabstractComponent", function() { return ViewabstractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


//importing route related code



var ViewabstractComponent = /** @class */ (function () {
    function ViewabstractComponent(_route, router, galleryService, location) {
        this._route = _route;
        this.router = router;
        this.galleryService = galleryService;
        this.location = location;
        console.log("View abstract component constructor is called");
    }
    ViewabstractComponent.prototype.ngOnInit = function () {
        var myImageId = this._route.snapshot.paramMap.get('imgId');
        console.log(myImageId);
        this.currentImage = this.galleryService.getAbstractImage(myImageId);
        console.log(this.currentImage);
        this.abstractImages = this.galleryService.getabstractImages();
    };
    ViewabstractComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    ViewabstractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewabstract',
            template: __webpack_require__(/*! ./viewabstract.component.html */ "./src/app/viewabstract/viewabstract.component.html"),
            styles: [__webpack_require__(/*! ./viewabstract.component.css */ "./src/app/viewabstract/viewabstract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ViewabstractComponent);
    return ViewabstractComponent;
}());



/***/ }),

/***/ "./src/app/viewnature/viewnature.component.css":
/*!*****************************************************!*\
  !*** ./src/app/viewnature/viewnature.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXduYXR1cmUvdmlld25hdHVyZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/viewnature/viewnature.component.html":
/*!******************************************************!*\
  !*** ./src/app/viewnature/viewnature.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\"><a [routerLink]=\"['/nature']\"><button type=\"button\" class=\"btn btn-dark\">Back</button></a></div>\n<br />\n<div class=\"container\" style=\"text-align:center\">\n\n  <div class=\"row\" *ngIf=\"currentImage\">\n    <!--<div class=\"window\">       \n     <img src='{{currentImage.url}}' style=\"width: 100% ;height: 50%;\">\n    </div>-->\n    <div class=\"container mx-2\">\n      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src='{{currentImage.url}}' class=\"d-block w-100 img-responsive\" alt=\"abstract images\">\n          </div>\n          <div class=\"carousel-item\" *ngFor=\"let img of natureImages\">\n\n            <img src='{{img.url}}' class=\"d-block w-100 img-responsive\" alt=\"abstract images\">\n\n\n          </div>\n\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <br />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/viewnature/viewnature.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewnature/viewnature.component.ts ***!
  \****************************************************/
/*! exports provided: ViewnatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewnatureComponent", function() { return ViewnatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


//importing route related code



var ViewnatureComponent = /** @class */ (function () {
    function ViewnatureComponent(_route, router, galleryService, location) {
        this._route = _route;
        this.router = router;
        this.galleryService = galleryService;
        this.location = location;
        console.log("View abstract component constructor is called");
    }
    ViewnatureComponent.prototype.ngOnInit = function () {
        var myImageId = this._route.snapshot.paramMap.get('imgId');
        console.log(myImageId);
        this.currentImage = this.galleryService.getNatureImage(myImageId);
        console.log(this.currentImage);
        this.natureImages = this.galleryService.getnatureImages();
    };
    ViewnatureComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    ViewnatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewnature',
            template: __webpack_require__(/*! ./viewnature.component.html */ "./src/app/viewnature/viewnature.component.html"),
            styles: [__webpack_require__(/*! ./viewnature.component.css */ "./src/app/viewnature/viewnature.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ViewnatureComponent);
    return ViewnatureComponent;
}());



/***/ }),

/***/ "./src/app/viewspiritual/viewspiritual.component.css":
/*!***********************************************************!*\
  !*** ./src/app/viewspiritual/viewspiritual.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzcGlyaXR1YWwvdmlld3NwaXJpdHVhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/viewspiritual/viewspiritual.component.html":
/*!************************************************************!*\
  !*** ./src/app/viewspiritual/viewspiritual.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"container\"><a [routerLink]=\"['/spiritual']\"><button type=\"button\" class=\"btn btn-dark\">Back</button></a>\n</div>\n<br />\n<div class=\"container\" style=\"text-align:center\">\n\n  <div class=\"row\" *ngIf=\"currentImage\">\n    <!--<div class=\"window\">       \n     <img src='{{currentImage.url}}' style=\"width: 100% ;height: 50%;\">\n    </div>-->\n    <div class=\"container mx-2\">\n      <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src='{{currentImage.url}}' class=\"d-block w-100 img-responsive\" alt=\"spiritual images\">\n          </div>\n          <div class=\"carousel-item\" *ngFor=\"let img of spiritualImages\">\n\n            <img src='{{img.url}}' class=\"d-block w-100 img-responsive\" alt=\"spiritual images\">\n\n\n          </div>\n\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <br />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/viewspiritual/viewspiritual.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/viewspiritual/viewspiritual.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewspiritualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewspiritualComponent", function() { return ViewspiritualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


//importing route related code



var ViewspiritualComponent = /** @class */ (function () {
    function ViewspiritualComponent(_route, router, galleryService, location) {
        this._route = _route;
        this.router = router;
        this.galleryService = galleryService;
        this.location = location;
        console.log("View spiritual component constructor is called");
    }
    ViewspiritualComponent.prototype.ngOnInit = function () {
        var myImageId = this._route.snapshot.paramMap.get('imgId');
        console.log(myImageId);
        this.currentImage = this.galleryService.getImage(myImageId);
        console.log(this.currentImage);
        this.spiritualImages = this.galleryService.getImages();
    };
    ViewspiritualComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    ViewspiritualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewspiritual',
            template: __webpack_require__(/*! ./viewspiritual.component.html */ "./src/app/viewspiritual/viewspiritual.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]],
            styles: [__webpack_require__(/*! ./viewspiritual.component.css */ "./src/app/viewspiritual/viewspiritual.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ViewspiritualComponent);
    return ViewspiritualComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mean stack development\Angular4\wallpaper-gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map