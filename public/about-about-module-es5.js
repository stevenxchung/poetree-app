(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
    /***/
    "+wPt":
    /*!***********************************************!*\
      !*** ./src/app/about/about-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function wPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "kL6T");

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "0R2D":
    /*!****************************************************************!*\
      !*** ./src/app/about-container/about-container.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function R2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  font-family: Georgia, serif;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n  color: white;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: white;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n  color: darkgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUZGIiwiZmlsZSI6ImFib3V0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogd2hpdGU7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG59XG4iXX0= */";
      /***/
    },

    /***/
    "5cwr":
    /*!**************************************************************!*\
      !*** ./src/app/about-container/about-container.component.ts ***!
      \**************************************************************/

    /*! exports provided: AboutContainerComponent */

    /***/
    function cwr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutContainerComponent", function () {
        return AboutContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _about_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about-container.component.scss */
      "0R2D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutContainerComponent = /*#__PURE__*/function () {
        function AboutContainerComponent() {
          _classCallCheck(this, AboutContainerComponent);
        }

        _createClass(AboutContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutContainerComponent;
      }();

      AboutContainerComponent.ctorParameters = function () {
        return [];
      };

      AboutContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      AboutContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'about-container',
        template: " <div id=\"container\">\n    <strong>{{ name }}</strong>\n    <p>\n      Created By\n      <a\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        href=\"https://github.com/stevenxchung\"\n        >Steven Chung</a\n      >\n    </p>\n  </div>",
        styles: [_about_container_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AboutContainerComponent);
      /***/
    },

    /***/
    "FDhG":
    /*!***********************************************************!*\
      !*** ./src/app/about-container/about-container.module.ts ***!
      \***********************************************************/

    /*! exports provided: AboutContainerComponentModule */

    /***/
    function FDhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutContainerComponentModule", function () {
        return AboutContainerComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _about_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-container.component */
      "5cwr");

      var AboutContainerComponentModule = function AboutContainerComponentModule() {
        _classCallCheck(this, AboutContainerComponentModule);
      };

      AboutContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_about_container_component__WEBPACK_IMPORTED_MODULE_5__["AboutContainerComponent"]],
        exports: [_about_container_component__WEBPACK_IMPORTED_MODULE_5__["AboutContainerComponent"]]
      })], AboutContainerComponentModule);
      /***/
    },

    /***/
    "FQ1g":
    /*!***************************************!*\
      !*** ./src/app/about/about.module.ts ***!
      \***************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function FQ1g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about.page */
      "kL6T");
      /* harmony import */


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about-routing.module */
      "+wPt");
      /* harmony import */


      var _about_container_about_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../about-container/about-container.module */
      "FDhG");

      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageRoutingModule"], _about_container_about_container_module__WEBPACK_IMPORTED_MODULE_7__["AboutContainerComponentModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "kL6T":
    /*!*************************************!*\
      !*** ./src/app/about/about.page.ts ***!
      \*************************************/

    /*! exports provided: AboutPage */

    /***/
    function kL6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about.page.scss */
      "vbXv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutPage = function AboutPage() {
        _classCallCheck(this, AboutPage);
      };

      AboutPage.ctorParameters = function () {
        return [];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'about-page',
        template: "\n    <ion-header [translucent]=\"true\">\n      <ion-toolbar>\n        <ion-title> About </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"back\" [fullscreen]=\"true\">\n      <ion-content class=\"front\" [fullscreen]=\"true\">\n        <about-container name=\"GitHub\"></about-container>\n      </ion-content>\n    </ion-content>\n  ",
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AboutPage);
      /***/
    },

    /***/
    "vbXv":
    /*!***************************************!*\
      !*** ./src/app/about/about.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function vbXv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back {\n  --background: url('aman.jpg') no-repeat center/cover fixed;\n}\n\n.front {\n  --background: url('aman-grayscale.jpg') no-repeat center/cover fixed;\n  -webkit-animation: fadein 1s;\n          animation: fadein 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvRUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUFDRiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJ35zcmMvYXNzZXRzL3Bob3Rvcy9hbWFuLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XHJcbn1cclxuXHJcbi5mcm9udCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJ35zcmMvYXNzZXRzL3Bob3Rvcy9hbWFuLWdyYXlzY2FsZS5qcGcnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG4gIGFuaW1hdGlvbjogZmFkZWluIDFzO1xyXG59XHJcbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=about-about-module-es5.js.map