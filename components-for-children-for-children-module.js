(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-for-children-for-children-module"],{

/***/ "Pg6L":
/*!************************************************************************!*\
  !*** ./src/app/components/for-children/for-children-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ForChildrenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForChildrenRoutingModule", function() { return ForChildrenRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _for_children_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for-children.component */ "jvyE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _for_children_component__WEBPACK_IMPORTED_MODULE_1__["ForChildrenComponent"] }];
class ForChildrenRoutingModule {
}
ForChildrenRoutingModule.ɵfac = function ForChildrenRoutingModule_Factory(t) { return new (t || ForChildrenRoutingModule)(); };
ForChildrenRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ForChildrenRoutingModule });
ForChildrenRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForChildrenRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "jvyE":
/*!*******************************************************************!*\
  !*** ./src/app/components/for-children/for-children.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForChildrenComponent", function() { return ForChildrenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dataService */ "AGcD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ForChildrenComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041A\u043E\u043B-\u0432\u043E \u0434\u0435\u0442\u0435\u0439: ", ctx_r0.model == null ? null : ctx_r0.model.childrenCount, "");
} }
function ForChildrenComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0411\u0435\u0437 \u0434\u0435\u0442\u0435\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
} }
function ForChildrenComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0415\u0441\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForChildrenComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u041D\u0435\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445");
} }
class ForChildrenComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
        this.subs = this.user.userActivated.subscribe((forma) => {
            console.log(forma);
            this.model = forma;
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
ForChildrenComponent.ɵfac = function ForChildrenComponent_Factory(t) { return new (t || ForChildrenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ForChildrenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForChildrenComponent, selectors: [["app-for-children"]], decls: 25, vars: 11, consts: [[1, "page"], [1, "image"], [1, "params"], [4, "ngIf", "ngIfElse"], ["noChildren", ""], ["noPets", ""], ["routerLink", "", 1, "button"], [1, "btn"]], template: function ForChildrenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423\u0441\u0430\u0434\u044C\u0431\u0430 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u0442\u0434\u043E\u0445\u043D\u0443\u0442\u044C \u0441 \u0434\u0435\u0442\u044C\u043C\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043D\u0430 40 \u043F\u0435\u0440\u0441\u043E\u043D).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForChildrenComponent_div_13_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ForChildrenComponent_ng_template_14_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForChildrenComponent_div_16_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForChildrenComponent_ng_template_17_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041D\u0430\u0437\u0430\u0434 \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C ", ctx.model == null ? null : ctx.model.name, " ", ctx.model == null ? null : ctx.model.surname, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041A\u043E\u043B-\u0432\u043E \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445: ", ctx.model == null ? null : ctx.model.adultsCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.model == null ? null : ctx.model.childrenCount) != 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.model == null ? null : ctx.model.pets) != false)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 8, ctx.model.dateNow, "dd.MM.yyyy HH:mm"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 98%;\n  position: relative;\n}\n.page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Segoe Print\", cursive;\n  font-size: 24px;\n  margin: 10px 20px;\n}\n.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 60%;\n  margin: 0 auto;\n  border-radius: 15px;\n  box-shadow: 0 0 20px white;\n  position: relative;\n}\n.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 20px;\n  color: white;\n  font-family: \"Segoe Print\", cursive;\n  font-size: 18px;\n  text-shadow: 2px 2px 3px black;\n  cursor: pointer;\n}\n.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1, 1.1);\n}\n.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:active {\n  transform: scale(0.9, 0.9);\n}\n.page[_ngcontent-%COMP%]   .params[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 7px;\n  width: 140px;\n  height: 60px;\n  color: wheat;\n  font-size: 14px;\n  text-shadow: 0 0 5px black;\n}\n.page[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 7px;\n}\n@media only all and (max-width: 500px) {\n  .page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 25%;\n  }\n}\n.image[_ngcontent-%COMP%] {\n  background: url('withChildren.jpg') center center no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlXFxzYW1lQ29tcG9uZW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGZvci1jaGlsZHJlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7QURBRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDR047QURGTTtFQUNFLDBCQUFBO0FDSVI7QURGTTtFQUNFLDBCQUFBO0FDSVI7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNFSjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0VKO0FERUE7RUFFSTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VDQUo7QUFDRjtBQTNEQTtFQUNFLDJEQUFBO0VBQ0Esc0JBQUE7QUE2REYiLCJmaWxlIjoiZm9yLWNoaWxkcmVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgUHJpbnRcIiwgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gIH1cclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHNwYW57XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBQcmludFwiLCBjdXJzaXZlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgICAgfVxyXG4gICAgICAmOmFjdGl2ZXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45LC45KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucGFyYW1ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gIH1cclxuICAuYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogN3B4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5wYWdle1xyXG4gICAgLmltYWdle1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDI1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5OCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBQcmludFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xufVxuLnBhZ2UgLmltYWdlIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2UgLmltYWdlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgUHJpbnRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYWdlIC5pbWFnZSBzcGFuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG59XG4ucGFnZSAuaW1hZ2Ugc3BhbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcbn1cbi5wYWdlIC5wYXJhbXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDdweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiB3aGVhdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcbn1cbi5wYWdlIC5idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogN3B4O1xufVxuXG5AbWVkaWEgb25seSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5wYWdlIC5pbWFnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgfVxufVxuLmltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93aXRoQ2hpbGRyZW4uanBnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "vJTN":
/*!****************************************************************!*\
  !*** ./src/app/components/for-children/for-children.module.ts ***!
  \****************************************************************/
/*! exports provided: ForChildrenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForChildrenModule", function() { return ForChildrenModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _for_children_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for-children-routing.module */ "Pg6L");
/* harmony import */ var _for_children_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./for-children.component */ "jvyE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ForChildrenModule {
}
ForChildrenModule.ɵfac = function ForChildrenModule_Factory(t) { return new (t || ForChildrenModule)(); };
ForChildrenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ForChildrenModule });
ForChildrenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _for_children_routing_module__WEBPACK_IMPORTED_MODULE_1__["ForChildrenRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ForChildrenModule, { declarations: [_for_children_component__WEBPACK_IMPORTED_MODULE_2__["ForChildrenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _for_children_routing_module__WEBPACK_IMPORTED_MODULE_1__["ForChildrenRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-for-children-for-children-module.js.map