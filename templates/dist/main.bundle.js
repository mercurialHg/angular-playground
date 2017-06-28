webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_section_section_component__ = __webpack_require__("../../../../../src/app/components/main/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_5__components_main_section_section_component__["a" /* SectionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container md-card\">\n  <app-header></app-header>\n  <app-main [content]=\"content\" >\n  </app-main>\n  <app-footer></app-footer>\n\n  <div class=\"debug hidden\">\n    {{ content | json }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background: #ECECEC;\n  padding-top: 25px;\n  border-radius: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.content = [
            {
                title: "Education",
                class: "education",
                contacts: false,
                subsections: [
                    {
                        id: 'univ1',
                        title: 'University Name',
                        date: '2014-2017',
                        subtitle: 'Master of Science',
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                    {
                        id: 'univ2',
                        title: 'University Name',
                        date: '2014-2017',
                        subtitle: 'Master of Science',
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                ]
            },
            {
                title: "Experience",
                class: "experience",
                contacts: false,
                subsections: [
                    {
                        id: 'company1',
                        title: 'Company Name',
                        date: '2014-2017',
                        subtitle: 'Position Title',
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                    {
                        id: 'company2',
                        title: 'Company Name',
                        date: '2014-2017',
                        subtitle: 'Position Title',
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                    {
                        id: 'company3',
                        title: 'Company Name',
                        date: '2014-2017',
                        subtitle: 'Position Title',
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                    {
                        id: 'company4',
                        title: 'Company Name',
                        date: '2014-2017',
                        subtitle: 'Position Title',
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    }
                ]
            },
            {
                title: "References",
                class: "references",
                contacts: false,
                subsections: [
                    {
                        id: 'ref1',
                        title: 'Reference name',
                        date: null,
                        subtitle: null,
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                    {
                        id: 'ref2',
                        title: 'Reference name',
                        date: null,
                        subtitle: null,
                        description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit. Aliquam sit ' +
                            'amet nunc risus. Cras augue tellus, porta id nibh eu '
                    },
                ]
            },
            //contact item
            {
                title: "Contact",
                class: "contacts",
                contacts: true,
                subsections: [
                    {
                        id: 'contacts1',
                        contacts: [
                            {
                                contact: '+000123456789012',
                                icon: 'fa fa-phone',
                                link: '#'
                            },
                            {
                                contact: '323 Jones St. New York, NY',
                                icon: 'fa fa-map-marker',
                                link: '#'
                            },
                            {
                                contact: 'www.yourcompany.com',
                                icon: 'fa fa-globe',
                                link: '#'
                            }
                        ]
                    },
                    {
                        id: 'contacts1',
                        contacts: [
                            {
                                contact: 'John_Doe@email.com',
                                icon: 'fa fa-envelope',
                                link: '#'
                            },
                            {
                                contact: '@yourusername',
                                icon: 'fa fa-twitter',
                                link: '#'
                            },
                            {
                                contact: '@yourusername',
                                icon: 'fa fa-facebook-official',
                                link: '#'
                            }
                        ]
                    }
                ]
            } //end section
        ];
        this.prettyObject = JSON.stringify(this.content);
    }
    return AppComponent;
}()); //end AppComponent 
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app.component.sass")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <a \n      href='http://www.freepik.com/free-psd/corporate-resume-template_1050072.htm'\n      class=\"attribution\"\n      target=\"_blank\">\n      Designed by Freepik\n    </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background: #4b4f5a;\n  margin: 0 -15px;\n  height: 30px;\n  text-align: center; }\n\n.attribution {\n  font-size: 20px;\n  line-height: 30px;\n  color: #fff;\n  text-decoration: none;\n  display: block;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header applicant clearfix\">\n  <div class=\"row\">\n    <div class=\"applicant__image col-lg-2 col-md-3  col-sm-4 block-center-sm block-center-xs\">\n      <img alt=\"\" class=\"img-responsive img-rounded face\" src=\"../../assets/images/man-303792_640.png\">\n    </div>\n    <div class=\"applicant__info col-md-8 col-md-offset-0 col-sm-8 col-sm-offset-0 col-xs-10 col-xs-offset-1\">\n      <h1 class=\"applicant__name text-center-sm text-center-xs\">Johan Doe</h1>\n      <div class=\"applicant__objective text-center-sm text-center-xs\">Lorem ipsum dolor sit amet, duis eu, elementum dictum amet egestas. Ac eros donec venenatis libero. Molestie cras rutrum\n        praesent at parturient aliquam uscipi venenatis libero Molestie cras rutrum praesent at parturient</div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".applicant__name {\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #4B4F5A;\n  margin-top: 10px; }\n\n.applicant__objective {\n  color: #7d7d82;\n  font-size: 20px;\n  padding-right: 30px; }\n\n.face {\n  background: #fff;\n  display: inline-block; }\n\n@media (max-width: 991px) {\n  .container {\n    background: transparent; } }\n\n@media (max-width: 767px) {\n  .applicant__image {\n    max-width: 300px; }\n  .applicant__name {\n    margin-top: 20px;\n    margin-bottom: 16px; }\n  .applicant__objective {\n    padding-right: 20px;\n    padding-left: 20px;\n    padding-bottom: 10px; }\n  .block-center-sm {\n    margin: 0 auto; }\n  .text-center-sm {\n    text-align: center; } }\n\n@media (max-width: 468px) {\n  .applicant__name {\n    margin-top: 20px;\n    margin-bottom: 16px; }\n  .applicant__objective {\n    margin-left: -8.3333%;\n    margin-right: -8.3333%;\n    padding-right: 0; }\n  .applicant__image {\n    max-width: 270px; }\n  .block-center-xs {\n    margin: 0 auto; }\n  .text-center-xs {\n    text-align: center; } }\n\n@media (min-width: 1200px) {\n  .null {\n    background: transparent; } }\n\n@media (max-width: 991px) {\n  .null {\n    background: transparent; } }\n\n@media (max-width: 767px) {\n  .null {\n    background: transparent; } }\n\n@media (max-width: 479px) {\n  .null {\n    background: transparent; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- inside a container -->\n<!-- object loaded in: @Input content -->\n<main class=\"main \">\n    <app-section *ngFor=\"let item of content\" [section]=\"item\">\n    </app-section>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MainComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MainComponent.prototype, "contacts", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section {{section.class}}\">\r\n    <!-- section variable loaded in main -->\r\n    <h2 class=\"section__title md-card text-uppercase\">{{section.title}}</h2>\r\n    <div class=\"row section__row\">\r\n        <div \r\n            class=\"col-sm-6 subsection\" \r\n            *ngFor=\"let item of section.subsections\"  \r\n            [class.hidden]=\"section.contacts\"\r\n        > <!-- :not(contacts) -->\r\n            <h3 class=\"subsection__title text-center-767max text-center-467max text-uppercase\">\r\n                <span class=\"subtitle__title-container\">{{item.title}} \r\n                    <span class=\"subsection__date\" *ngIf=\"item.date\"> {{ \"(\" + item.date + \")\"}} </span>\r\n                </span>\r\n            </h3>\r\n            <h4 class=\"subsection__subtitle text-center-767max text-center-467max text-uppercase\">{{item.subtitle}}</h4>\r\n            <p class=\"subsection__description\">{{item.description}}</p>\r\n            \r\n        </div>\r\n        <!--contacts only-->\r\n        <div class=\"col-sm-6 subsection subsection__contacts\" \r\n            *ngFor=\"let subsection of section.subsections\"\r\n            [class.hidden]=\"!section.contacts\">\r\n            <a class=\"subsection__contact\" *ngFor=\"let contact of subsection.contacts\" href=\"{{contact?.link}}\"> <i class=\"contact__icon {{contact.icon}}\"></i> {{contact.contact}} </a>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/main/section/section.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\n  position: relative;\n  margin-bottom: 30px;\n  margin-top: 30px; }\n\n.section__row {\n  padding-top: 26px;\n  background: #ffffff;\n  padding-left: 50px; }\n\n.subsection {\n  padding-bottom: 20px;\n  padding-left: 50px; }\n\n.subsection:nth-child(3) {\n  clear: both; }\n\n.section__title {\n  margin: 0;\n  position: absolute;\n  width: 230px;\n  height: 35px;\n  top: 0;\n  -webkit-transform: translateY(-60%);\n          transform: translateY(-60%);\n  line-height: 35px;\n  background: #4b4f5a;\n  color: #ffffff;\n  text-align: center;\n  border-radius: 3px;\n  font-size: 22px; }\n\n.subsection__title {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.subtitle__title-container {\n  position: relative; }\n  .subtitle__title-container:before {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 8px;\n    width: 8px;\n    background: #4B4F5B;\n    border-radius: 50%;\n    top: 50%;\n    left: -14px;\n    -webkit-transform: translateY(-55%);\n            transform: translateY(-55%); }\n\n.subsection__subtitle {\n  margin-top: 0; }\n\n.subsection__date {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: bold;\n  color: #94959A;\n  padding-left: 2px;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translate(100%, -50%);\n          transform: translate(100%, -50%); }\n\n.subsection__description {\n  padding-right: 90px;\n  margin: 0;\n  color: #94959A;\n  font-size: 18px; }\n\n.subsection__contact {\n  display: block;\n  font-size: 16px;\n  text-decoration: none;\n  color: #616267;\n  transition: color .2s linear; }\n  .subsection__contact:hover {\n    color: black;\n    transition: color .2s linear; }\n\n.contact__icon {\n  width: 30px;\n  height: 18px;\n  vertical-align: middle;\n  line-height: 18px;\n  font-size: 18px; }\n\n@media (max-width: 991px) {\n  .subsection {\n    padding-left: 10px;\n    padding-bottom: 26px; }\n  .subsection__description {\n    padding-right: 40px; } }\n\n@media (max-width: 767px) {\n  .text-center-767max {\n    text-align: center; }\n  .lext-left-767max {\n    text-align: left; }\n  .subsection__description {\n    padding: 3px 5px;\n    margin: 0 15%;\n    background: #f8f7f7;\n    border-radius: 3px; }\n  .section__row {\n    padding-left: 0; }\n  .section__title {\n    left: 50%;\n    -webkit-transform: translate(-50%, -60%);\n            transform: translate(-50%, -60%); }\n  .subtitle__title-container:before {\n    display: none; }\n  .subsection__contacts {\n    padding-bottom: 10px; }\n  .subsection__contacts:nth-of-type(3) {\n    padding-bottom: 0; }\n  .subsection__contact {\n    text-align: center;\n    margin-bottom: 10px; } }\n\n@media (max-width: 467px) {\n  .text-center-467max {\n    text-align: center; }\n  .lext-left-467max {\n    text-align: left; }\n  .subsection__description {\n    margin: 0 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = (function () {
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    return SectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "section", void 0);
SectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-section',
        template: __webpack_require__("../../../../../src/app/components/main/section/section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/section/section.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], SectionComponent);

//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map