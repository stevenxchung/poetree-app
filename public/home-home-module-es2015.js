(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "NBun":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ContentService = class ContentService {
    constructor(http) {
        this.http = http;
        // For local only
        this.local = 'http://localhost:8080/content';
        this.deployed = 'https://poetree-app.herokuapp.com/content';
    }
    getPoemOfTheMonth() {
        // Must use this.deployed when deployed
        return this.http.get(this.deployed);
    }
};
ContentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ContentService);



/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  --background: url('aman-grayscale.jpg') no-repeat center/cover fixed;\n}\n\n.front {\n  --background: url('aman.jpg') no-repeat center/cover fixed;\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n}\n\n.home-page-container {\n  margin: 10% auto;\n  width: 75%;\n  padding: 2.5rem;\n  border-radius: 0.5rem;\n  font-family: Georgia, serif;\n  color: #D9AB9A;\n  background-color: #401107;\n  opacity: 0.95;\n  -webkit-animation: fadein 1.5s;\n          animation: fadein 1.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0VBQUE7QUFDRjs7QUFFQTtFQUNFLDBEQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRUEsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsOEJBQUE7VUFBQSxzQkFBQTtBQURGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCd+c3JjL2Fzc2V0cy9waG90b3MvYW1hbi1ncmF5c2NhbGUuanBnJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuLmZyb250IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnfnNyYy9hc3NldHMvcGhvdG9zL2FtYW4uanBnJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuICBhbmltYXRpb246IGZhZGVpbiAxcztcclxufVxyXG5cclxuLmhvbWUtcGFnZS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxuICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgY29sb3I6ICNEOUFCOUE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwMTEwNztcclxuICBvcGFjaXR5OiAwLjk1O1xyXG5cclxuICBhbmltYXRpb246IGZhZGVpbiAxLjVzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/content.service */ "NBun");




let HomePage = class HomePage {
    constructor(content) {
        this.content = content;
        // Helper method to format poem from DB
        this.getFormattedPoem = (poem) => {
            const separators = ['\\,', '\\.', '\\?'];
            const stringToArray = poem.split(new RegExp(separators.join('|'), 'g'));
            let count = 0;
            stringToArray.forEach((s, i) => {
                count += 1;
                if (count === 4 && i === stringToArray.length - 2) {
                    stringToArray[i] = s + `.<br/><br/>`;
                    count = 0;
                }
                else if (count === 4) {
                    stringToArray[i] = s + `,<br/><br/>`;
                    count = 0;
                }
                else if (i !== stringToArray.length - 1) {
                    stringToArray[i] = s + `,<br/>`;
                }
            });
            return stringToArray.join('');
        };
        content
            .getPoemOfTheMonth()
            .subscribe((res) => (this.poemOfTheMonth = this.getFormattedPoem(res[0].poem)));
    }
};
HomePage.ctorParameters = () => [
    { type: _services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'home-page',
        template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="back" [fullscreen]="true">
      <ion-content class="front" [fullscreen]="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="home-page-container">
          <h1>Poem of the Month</h1>
          <p [innerHTML]="poemOfTheMonth"></p>
        </div>
      </ion-content>
    </ion-content>
  `,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map