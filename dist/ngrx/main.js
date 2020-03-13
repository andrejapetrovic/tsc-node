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

/***/ "./src/app/actions/drivers.actions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/drivers.actions.ts ***!
  \********************************************/
/*! exports provided: FETCH, FETCH_SUCCESS, ADD, ADD_SUCCESS, EDIT, EDIT_SUCCESS, RESET, DELETE, DELETE_SUCCESS, DELETE_FAIL, TOGGLE_EDIT, Fetch, FetchSuccess, Add, AddSuccess, Edit, EditSuccess, Delete, DeleteSucces, DeleteFail, ToggleEdit, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUCCESS", function() { return FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT", function() { return EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUCCESS", function() { return EDIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_EDIT", function() { return TOGGLE_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetch", function() { return Fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSuccess", function() { return FetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSuccess", function() { return AddSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSuccess", function() { return EditSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSucces", function() { return DeleteSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFail", function() { return DeleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleEdit", function() { return ToggleEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
var FETCH = '[Drivers] Fetch';
var FETCH_SUCCESS = '[Drivers] Fetch Success';
var ADD = '[Drivers] Add';
var ADD_SUCCESS = '[Drivers] Add Success';
var EDIT = '[Drivers] Edit';
var EDIT_SUCCESS = '[Drivers] Edit Success';
var RESET = '[Drivers] Reset';
var DELETE = '[Drivers] Delete';
var DELETE_SUCCESS = '[Drivers] Delete Succes';
var DELETE_FAIL = '[Drivers] Delete Fail';
var TOGGLE_EDIT = '[Drivers] Toggle Edit';
var Fetch = /** @class */ (function () {
    function Fetch() {
        this.type = FETCH;
    }
    return Fetch;
}());

var FetchSuccess = /** @class */ (function () {
    function FetchSuccess(drivers) {
        this.drivers = drivers;
        this.type = FETCH_SUCCESS;
    }
    return FetchSuccess;
}());

var Add = /** @class */ (function () {
    function Add(driver) {
        this.driver = driver;
        this.type = ADD;
    }
    return Add;
}());

var AddSuccess = /** @class */ (function () {
    function AddSuccess(driver) {
        this.driver = driver;
        this.type = ADD_SUCCESS;
    }
    return AddSuccess;
}());

var Edit = /** @class */ (function () {
    function Edit(driver) {
        this.driver = driver;
        this.type = EDIT;
    }
    return Edit;
}());

var EditSuccess = /** @class */ (function () {
    function EditSuccess(driver) {
        this.driver = driver;
        this.type = EDIT_SUCCESS;
    }
    return EditSuccess;
}());

var Delete = /** @class */ (function () {
    function Delete(id) {
        this.id = id;
        this.type = DELETE;
    }
    return Delete;
}());

var DeleteSucces = /** @class */ (function () {
    function DeleteSucces(id) {
        this.id = id;
        this.type = DELETE_SUCCESS;
    }
    return DeleteSucces;
}());

var DeleteFail = /** @class */ (function () {
    function DeleteFail(id) {
        this.id = id;
        this.type = DELETE_FAIL;
    }
    return DeleteFail;
}());

var ToggleEdit = /** @class */ (function () {
    function ToggleEdit(driver) {
        this.driver = driver;
        this.type = TOGGLE_EDIT;
    }
    return ToggleEdit;
}());

var Reset = /** @class */ (function () {
    function Reset() {
        this.type = RESET;
    }
    return Reset;
}());



/***/ }),

/***/ "./src/app/actions/teams.actions.ts":
/*!******************************************!*\
  !*** ./src/app/actions/teams.actions.ts ***!
  \******************************************/
/*! exports provided: FETCH, FETCH_SUCCESS, ADD, ADD_SUCCESS, EDIT, EDIT_SUCCESS, RESET, DELETE, DELETE_SUCCESS, DELETE_FAIL, TOGGLE_EDIT, ADD_DRIVER, REMOVE_DRIVER, ADD_DRIVER_SUCCESS, REMOVE_DRIVER_SUCCESS, Fetch, FetchSuccess, Add, AddSuccess, Edit, EditSuccess, Delete, DeleteSucces, DeleteFail, ToggleEdit, Reset, AddDriver, RemoveDriver, AddDriverSuccess, RemoveDriverSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUCCESS", function() { return FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT", function() { return EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUCCESS", function() { return EDIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_EDIT", function() { return TOGGLE_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DRIVER", function() { return ADD_DRIVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_DRIVER", function() { return REMOVE_DRIVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DRIVER_SUCCESS", function() { return ADD_DRIVER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_DRIVER_SUCCESS", function() { return REMOVE_DRIVER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetch", function() { return Fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSuccess", function() { return FetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSuccess", function() { return AddSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSuccess", function() { return EditSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSucces", function() { return DeleteSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFail", function() { return DeleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleEdit", function() { return ToggleEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriver", function() { return AddDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDriver", function() { return RemoveDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverSuccess", function() { return AddDriverSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDriverSuccess", function() { return RemoveDriverSuccess; });
var FETCH = '[Tams] Fetch';
var FETCH_SUCCESS = '[Teams] Fetch Success';
var ADD = '[Teams] Add';
var ADD_SUCCESS = '[Teams] Add Success';
var EDIT = '[Teams] Edit';
var EDIT_SUCCESS = '[Teams] Edit Success';
var RESET = '[Teams] Reset';
var DELETE = '[Teams] Delete';
var DELETE_SUCCESS = '[Teams] Delete Succes';
var DELETE_FAIL = '[Teams] Delete Fail';
var TOGGLE_EDIT = '[Teams] Toggle Edit';
var ADD_DRIVER = '[Teams] Add Driver';
var REMOVE_DRIVER = '[Teams] Remove Driver';
var ADD_DRIVER_SUCCESS = '[Teams] Add Driver';
var REMOVE_DRIVER_SUCCESS = '[Teams] Remove Driver';
var Fetch = /** @class */ (function () {
    function Fetch() {
        this.type = FETCH;
    }
    return Fetch;
}());

var FetchSuccess = /** @class */ (function () {
    function FetchSuccess(teams) {
        this.teams = teams;
        this.type = FETCH_SUCCESS;
    }
    return FetchSuccess;
}());

var Add = /** @class */ (function () {
    function Add(team) {
        this.team = team;
        this.type = ADD;
    }
    return Add;
}());

var AddSuccess = /** @class */ (function () {
    function AddSuccess(team) {
        this.team = team;
        this.type = ADD_SUCCESS;
    }
    return AddSuccess;
}());

var Edit = /** @class */ (function () {
    function Edit(team) {
        this.team = team;
        this.type = EDIT;
    }
    return Edit;
}());

var EditSuccess = /** @class */ (function () {
    function EditSuccess(team) {
        this.team = team;
        this.type = EDIT_SUCCESS;
    }
    return EditSuccess;
}());

var Delete = /** @class */ (function () {
    function Delete(id) {
        this.id = id;
        this.type = DELETE;
    }
    return Delete;
}());

var DeleteSucces = /** @class */ (function () {
    function DeleteSucces(id) {
        this.id = id;
        this.type = DELETE_SUCCESS;
    }
    return DeleteSucces;
}());

var DeleteFail = /** @class */ (function () {
    function DeleteFail(id) {
        this.id = id;
        this.type = DELETE_FAIL;
    }
    return DeleteFail;
}());

var ToggleEdit = /** @class */ (function () {
    function ToggleEdit(team) {
        this.team = team;
        this.type = TOGGLE_EDIT;
    }
    return ToggleEdit;
}());

var Reset = /** @class */ (function () {
    function Reset() {
        this.type = RESET;
    }
    return Reset;
}());

var AddDriver = /** @class */ (function () {
    function AddDriver(payload) {
        this.payload = payload;
        this.type = ADD_DRIVER;
    }
    return AddDriver;
}());

var RemoveDriver = /** @class */ (function () {
    function RemoveDriver(payload) {
        this.payload = payload;
        this.type = REMOVE_DRIVER;
    }
    return RemoveDriver;
}());

var AddDriverSuccess = /** @class */ (function () {
    function AddDriverSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DRIVER_SUCCESS;
    }
    return AddDriverSuccess;
}());

var RemoveDriverSuccess = /** @class */ (function () {
    function RemoveDriverSuccess(payload) {
        this.payload = payload;
        this.type = REMOVE_DRIVER_SUCCESS;
    }
    return RemoveDriverSuccess;
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
/* harmony import */ var _components_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/teams.component */ "./src/app/components/teams.component.ts");
/* harmony import */ var _components_drivers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/drivers.component */ "./src/app/components/drivers.component.ts");





var routes = [
    { path: '', redirectTo: '/a/teams', pathMatch: 'full' },
    { path: 'a/drivers', component: _components_drivers_component__WEBPACK_IMPORTED_MODULE_4__["DriversComponent"] },
    { path: 'a/teams', component: _components_teams_component__WEBPACK_IMPORTED_MODULE_3__["TeamsComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align: center\">\n  <button mat-button routerLink=\"/a/drivers\" color=\"primary\">Drivers</button> \n  <button mat-button routerLink=\"/a/teams\" color=\"primary\">Teams</button> \n</div>\n<router-outlet></router-outlet>\n\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngrx';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _components_drivers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/drivers.component */ "./src/app/components/drivers.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_drivers_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/drivers.reducer */ "./src/app/reducers/drivers.reducer.ts");
/* harmony import */ var _reducers_teams_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/teams.reducers */ "./src/app/reducers/teams.reducers.ts");
/* harmony import */ var _components_teams_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/teams.component */ "./src/app/components/teams.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _pipes_editable_cell_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/editable-cell.pipe */ "./src/app/pipes/editable-cell.pipe.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_drivers_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effects/drivers.effects */ "./src/app/effects/drivers.effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _effects_teams_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./effects/teams.effects */ "./src/app/effects/teams.effects.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_drivers_component__WEBPACK_IMPORTED_MODULE_5__["DriversComponent"],
                _components_teams_component__WEBPACK_IMPORTED_MODULE_9__["TeamsComponent"],
                _pipes_editable_cell_pipe__WEBPACK_IMPORTED_MODULE_20__["EditableCellPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                    drivers: _reducers_drivers_reducer__WEBPACK_IMPORTED_MODULE_7__["driversReducer"],
                    teams: _reducers_teams_reducers__WEBPACK_IMPORTED_MODULE_8__["teamsReducer"]
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__["EffectsModule"].forRoot([_effects_drivers_effects__WEBPACK_IMPORTED_MODULE_22__["DriversEffects"], _effects_teams_effects__WEBPACK_IMPORTED_MODULE_25__["TeamsEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_23__["StoreDevtoolsModule"].instrument({
                    maxAge: 25
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/drivers.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/drivers.component.ts ***!
  \*************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/drivers.actions */ "./src/app/actions/drivers.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reducers_drivers_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/drivers.reducer */ "./src/app/reducers/drivers.reducer.ts");






var DriversComponent = /** @class */ (function () {
    function DriversComponent(store, fb, elRef) {
        this.store = store;
        this.fb = fb;
        this.elRef = elRef;
        this.displayedColumns = ['actions', 'position', 'name', 'country', 'points', 'team'];
    }
    DriversComponent.prototype.ngOnInit = function () {
        this.refresh();
        this.drivers$ = this.store.select(_reducers_drivers_reducer__WEBPACK_IMPORTED_MODULE_5__["selectAll"]);
        this.driversForm = this.fb.group({
            name: 'New Driver',
            country: 'srb',
            points: '9001',
        });
    };
    DriversComponent.prototype.toggleEditing = function (driver) {
        this.store.dispatch(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["ToggleEdit"]({ id: driver.id, editable: driver.editable }));
    };
    DriversComponent.prototype.edit = function (driver) {
        var upd = Object.assign({}, driver.update);
        delete driver.update;
        upd.id = driver.id;
        this.store.dispatch(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["Edit"](upd));
    };
    DriversComponent.prototype.add = function () {
        var driver = this.driversForm.value;
        this.store.dispatch(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["Add"](driver));
    };
    DriversComponent.prototype.remove = function (driver) {
        this.store.dispatch(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["Delete"](driver.id));
    };
    DriversComponent.prototype.cancel = function (driver) {
        this.toggleEditing(driver);
    };
    DriversComponent.prototype.refresh = function () {
        this.store.dispatch(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["Reset"]());
    };
    DriversComponent.prototype.setUpdate = function ($event, driver, prop) {
        if (!driver.update) {
            driver.update = {};
        }
        driver.update[prop] = $event.target.value;
    };
    DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drivers',
            template: "\n    <div style=\"text-align: center\">\n      <button mat-button (click)=\"refresh()\" color=\"primary\">Refresh</button>\n    </div>\n    <table mat-table [dataSource]=\"drivers$ | async\" class=\"mat-elevation-z8\" style=\"margin: auto; width: 60%\">\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\n      <td mat-cell *matCellDef=\"let driver\">\n        <div *ngIf=\"driver.editable; else notEditable\">\n          <button [disabled]=\"driver.loading\" mat-button (click)=\"edit(driver)\" color=\"primary\">Save</button>\n          <button [disabled]=\"driver.loading\" mat-button (click)=\"cancel(driver)\" color=\"primary\">Cancel</button>\n        </div>\n        <ng-template #notEditable>\n          <button [disabled]=\"driver.loading\" mat-button (click)=\"remove(driver)\" color=\"primary\">Delete</button>\n          <button [disabled]=\"driver.loading\" mat-button (click)=\"toggleEditing(driver)\" color=\"primary\">Edit</button>\n        </ng-template>\n        <mat-spinner *ngIf=\"driver.loading\" [diameter]=\"20\"></mat-spinner>\n      </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let driver;index as i;\"> {{ i + 1}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let driver;\"> \n        <input *ngIf=\"driver.editable; else notEditable\" placeholder=\"name\" [disabled]=\"driver.loading\"\n         value=\"{{ driver.name }}\" (input)=\"setUpdate($event, driver, 'name')\" autocomplete=\"off\"\n         (keyup.enter)=\"edit(driver)\">\n        <ng-template #notEditable> {{ driver.name }} </ng-template>\n      </td>\n    </ng-container>\n  \n    <!-- Country Column -->\n    <ng-container matColumnDef=\"country\">\n      <th mat-header-cell *matHeaderCellDef> Country </th>\n      <td mat-cell *matCellDef=\"let driver\">\n        <input *ngIf=\"driver.editable; else notEditable\" placeholder=\"country\" [disabled]=\"driver.loading\"\n          value=\"{{ driver.country }}\" (input)=\"setUpdate($event, driver, 'country')\" autocomplete=\"off\"\n          (keyup.enter)=\"edit(driver)\">\n        <ng-template #notEditable> {{ driver.country }} </ng-template>\n      </td>\n    </ng-container>\n\n    <!-- Country Column -->\n    <ng-container matColumnDef=\"points\">\n      <th mat-header-cell *matHeaderCellDef> Points </th>\n      <td mat-cell *matCellDef=\"let driver\">\n        <input *ngIf=\"driver.editable; else notEditable\" placeholder=\"points\" [disabled]=\"driver.loading\"\n          value=\"{{ driver.points }}\" (input)=\"setUpdate($event, driver, 'points')\" autocomplete=\"off\"\n          (keyup.enter)=\"edit(driver)\" >\n        <ng-template #notEditable> {{ driver.points }} </ng-template>\n      </td>\n    </ng-container>\n\n    <!-- Team Column -->\n    <ng-container matColumnDef=\"team\">\n      <th mat-header-cell *matHeaderCellDef> Team </th>\n      <td mat-cell *matCellDef=\"let driver\">\n        <span *ngIf=\"driver.team;else na\">{{ driver.team.name }}</span> \n        <ng-template #na>N/A</ng-template>\n      </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row class=\"driver-{{row.id}}\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <br>\n    <div style=\"text-align: center\">\n    <form [formGroup]=\"driversForm\" (ngSubmit)=\"add()\">\n    <mat-form-field>\n      <input matInput placeholder=\"name\" formControlName=\"name\" autocomplete=\"off\">\n    </mat-form-field>\n    &nbsp;\n    <mat-form-field>\n      <input matInput placeholder=\"country\" formControlName=\"country\" autocomplete=\"off\">\n    </mat-form-field>\n    &nbsp;\n    <mat-form-field>\n      <input matInput placeholder=\"points\" formControlName=\"points\" autocomplete=\"off\">\n    </mat-form-field>\n    <button mat-button color=\"primary\" type=\"submit\">Add new driver</button>\n    </form>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/components/teams.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/teams.component.ts ***!
  \***********************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/teams.actions */ "./src/app/actions/teams.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reducers_teams_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/teams.reducers */ "./src/app/reducers/teams.reducers.ts");
/* harmony import */ var _reducers_drivers_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/drivers.reducer */ "./src/app/reducers/drivers.reducer.ts");








var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(store, fb, elRef) {
        this.store = store;
        this.fb = fb;
        this.elRef = elRef;
        this.displayedColumns = ['actions', 'position', 'name', 'titles', 'country', 'podiums', 'drivers'];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.refresh();
        this.teams$ = this.store.select(_reducers_teams_reducers__WEBPACK_IMPORTED_MODULE_6__["selectAll"]);
        this.teamlessDrivers$ = this.store.select(_reducers_drivers_reducer__WEBPACK_IMPORTED_MODULE_7__["selectAll"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (driver) { return driver.filter(function (d) { return !d.team; }); }));
        this.teamsForm = this.fb.group({
            name: 'New Team',
            country: 'srb',
            championshipTitles: '9001',
            podiumFinishes: '10000'
        });
    };
    TeamsComponent.prototype.toggleEditing = function (team) {
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["ToggleEdit"]({ id: team.id, editable: team.editable }));
    };
    TeamsComponent.prototype.edit = function (team) {
        var upd = Object.assign({}, team.update);
        delete team.update;
        upd.id = team.id;
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["Edit"](upd));
    };
    TeamsComponent.prototype.add = function () {
        var team = this.teamsForm.value;
        team.drivers = [];
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["Add"](team));
    };
    TeamsComponent.prototype.remove = function (team) {
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["Delete"](team.id));
    };
    TeamsComponent.prototype.cancel = function (team) {
        this.toggleEditing(team);
    };
    TeamsComponent.prototype.refresh = function () {
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["Reset"]());
    };
    TeamsComponent.prototype.setUpdate = function ($event, team, prop) {
        if (!team.update) {
            team.update = {};
        }
        team.update[prop] = $event.target.value;
    };
    TeamsComponent.prototype.addDriver = function (team, driver) {
        if (!driver)
            return;
        console.log(team);
        console.log(JSON.parse(driver));
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["AddDriver"]({ team: team, driver: JSON.parse(driver) }));
    };
    TeamsComponent.prototype.removeDriver = function (team, driver) {
        console.log(team);
        console.log(driver);
        this.store.dispatch(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveDriver"]({ team: team, driver: driver }));
    };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: "\n    <div style=\"text-align: center\">\n      <button mat-button (click)=\"refresh()\" color=\"primary\">Refresh</button>\n    </div>\n    <table mat-table [dataSource]=\"teams$ | async\" class=\"mat-elevation-z8\" style=\"margin: auto; width: 70%\">\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\n      <td mat-cell *matCellDef=\"let team\">\n        <div *ngIf=\"team.editable; else notEditable\">\n          <button [disabled]=\"team.loading\" mat-button (click)=\"edit(team)\" color=\"primary\">Save</button>\n          <button [disabled]=\"team.loading\" mat-button (click)=\"cancel(team)\" color=\"primary\">Cancel</button>\n        </div>\n        <ng-template #notEditable>\n          <button [disabled]=\"team.loading\" mat-button (click)=\"remove(team)\" color=\"primary\">Delete</button>\n          <button [disabled]=\"team.loading\" mat-button (click)=\"toggleEditing(team)\" color=\"primary\">Edit</button>\n        </ng-template>\n        <mat-spinner *ngIf=\"team.loading\" [diameter]=\"20\"></mat-spinner>\n      </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let team;index as i;\"> {{ i + 1}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let team;\"> \n        <input *ngIf=\"team.editable; else notEditable\" placeholder=\"name\" [disabled]=\"team.loading\"\n         value=\"{{ team.name }}\" (input)=\"setUpdate($event, team, 'name')\" autocomplete=\"off\"\n         (keyup.enter)=\"edit(team)\">\n        <ng-template #notEditable> {{ team.name }} </ng-template>\n      </td>\n    </ng-container>\n  \n    <!-- Country Column -->\n    <ng-container matColumnDef=\"country\">\n      <th mat-header-cell *matHeaderCellDef> Country </th>\n      <td mat-cell *matCellDef=\"let team\">\n        <input *ngIf=\"team.editable; else notEditable\" placeholder=\"country\" [disabled]=\"team.loading\"\n          value=\"{{ team.country }}\" (input)=\"setUpdate($event, team, 'country')\" autocomplete=\"off\"\n          (keyup.enter)=\"edit(team)\">\n        <ng-template #notEditable> {{ team.country }} </ng-template>\n      </td>\n    </ng-container>\n\n        <!-- Country Column -->\n    <ng-container matColumnDef=\"podiums\">\n      <th mat-header-cell *matHeaderCellDef> Podium finishes </th>\n      <td mat-cell *matCellDef=\"let team\">\n        <input *ngIf=\"team.editable; else notEditable\" placeholder=\"country\" [disabled]=\"team.loading\"\n          value=\"{{ team.podiumFinishes }}\" (input)=\"setUpdate($event, team, 'country')\" autocomplete=\"off\"\n          (keyup.enter)=\"edit(team)\">\n        <ng-template #notEditable> {{ team.podiumFinishes }} </ng-template>\n      </td>\n    </ng-container>\n\n        <!-- Country Column -->\n    <ng-container matColumnDef=\"titles\">\n      <th mat-header-cell *matHeaderCellDef> Championship titles </th>\n      <td mat-cell *matCellDef=\"let team\">\n        <input *ngIf=\"team.editable; else notEditable\" placeholder=\"country\" [disabled]=\"team.loading\"\n          value=\"{{ team.country }}\" (input)=\"setUpdate($event, team, 'country')\" autocomplete=\"off\"\n          (keyup.enter)=\"edit(team)\">\n        <ng-template #notEditable> {{ team.championshipTitles }} </ng-template>\n      </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"drivers\">\n      <th mat-header-cell *matHeaderCellDef> Drivers </th>\n      <td mat-cell *matCellDef=\"let team\">\n          <div *ngFor=\"let driver of team.drivers\">\n              <span style=\"min-width: 150px; float: left; padding-top: 10px\">{{ driver.name }}</span>\n              <button (click)=\"removeDriver(team, driver)\" mat-button color=\"warn\">Remove</button>\n          </div>\n          <div *ngIf=\"!team.drivers || team.drivers.length < 2\">\n          <form #driverForm=\"ngForm\" (ngSubmit)=\"addDriver(team, driverForm.value.driver)\">\n            <span style=\"min-width: 150px; float: left; padding-top: 10px\">\n            <select name=\"driver\" ngModel>\n            <option></option>\n            <option *ngFor=\"let driver of teamlessDrivers$ | async\"\n                [value]=\"driver | json\">\n                {{driver.name}}\n              </option> \n              </select>\n              </span>\n            <button type=\"submit\" mat-button color=\"primary\">Add</button>\n           </form> \n          </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row class=\"team-{{row.id}}\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <br>\n    <div style=\"text-align: center\">\n    <form [formGroup]=\"teamsForm\" (ngSubmit)=\"add()\">\n    <mat-form-field>\n      <input matInput placeholder=\"name\" formControlName=\"name\" autocomplete=\"off\">\n    </mat-form-field>\n    &nbsp;\n    <mat-form-field>\n      <input matInput placeholder=\"country\" formControlName=\"country\" autocomplete=\"off\">\n    </mat-form-field>\n    &nbsp;\n    <mat-form-field>\n      <input matInput placeholder=\"titles\" formControlName=\"championshipTitles\" autocomplete=\"off\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"podium finishes\" formControlName=\"podiumFinishes\" autocomplete=\"off\">\n    </mat-form-field>\n    <button mat-button color=\"primary\" type=\"submit\">Add new team</button>\n    </form>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/effects/drivers.effects.ts":
/*!********************************************!*\
  !*** ./src/app/effects/drivers.effects.ts ***!
  \********************************************/
/*! exports provided: DriversEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversEffects", function() { return DriversEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/drivers.actions */ "./src/app/actions/drivers.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/drivers.service */ "./src/app/services/drivers.service.ts");







var DriversEffects = /** @class */ (function () {
    function DriversEffects(actions, service) {
        var _this = this;
        this.actions = actions;
        this.service = service;
        this.delete$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (id) { return _this.service.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteSucces"](id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteFail"](id)); })); }));
        this.edit$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.driver; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (driver) { return _this.service.edit(driver.id, driver).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["EditSuccess"](driver); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteFail"](driver.id)); })); }));
        this.add$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["ADD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.driver; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (driver) { return _this.service.add(driver).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["AddSuccess"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, driver, { id: res.id })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteFail"](driver.id)); })); }));
        this.getData$ = this.service.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (drivers) { return new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["FetchSuccess"](drivers); }));
        this.refresh$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_drivers_actions__WEBPACK_IMPORTED_MODULE_3__["RESET"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (drivers) { return _this.getData$; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DriversEffects.prototype, "delete$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DriversEffects.prototype, "edit$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DriversEffects.prototype, "add$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DriversEffects.prototype, "getData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DriversEffects.prototype, "refresh$", void 0);
    DriversEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_drivers_service__WEBPACK_IMPORTED_MODULE_6__["DriversService"]])
    ], DriversEffects);
    return DriversEffects;
}());



/***/ }),

/***/ "./src/app/effects/teams.effects.ts":
/*!******************************************!*\
  !*** ./src/app/effects/teams.effects.ts ***!
  \******************************************/
/*! exports provided: TeamsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsEffects", function() { return TeamsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/teams.actions */ "./src/app/actions/teams.actions.ts");
/* harmony import */ var _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/drivers.actions */ "./src/app/actions/drivers.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/teams.service */ "./src/app/services/teams.service.ts");








var TeamsEffects = /** @class */ (function () {
    function TeamsEffects(actions, service) {
        var _this = this;
        this.actions = actions;
        this.service = service;
        this.delete$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (id) { return _this.service.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteSucces"](id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteFail"](id)); })); }));
        this.edit$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["EDIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.team; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (team) { return _this.service.edit(team.id, team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["EditSuccess"](team); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteFail"](team.id)); })); }));
        this.add$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["ADD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.team; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (team) { return _this.service.add(team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["AddSuccess"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, team, { id: res.id })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteFail"](team.id)); })); }));
        this.getData$ = this.service.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (teams) { return new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["FetchSuccess"](teams); }));
        this.addDriver$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_DRIVER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (payload) { return _this.service.addDriver(payload.team.id, payload.driver.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["AddDriverSuccess"](payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_4__["EditSuccess"]({ id: payload.driver.id, team: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, payload.team, { drivers: null }) }); })); }));
        this.removeDriver$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_DRIVER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (payload) { return _this.service.removeDriver(payload.team.id, payload.driver.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveDriverSuccess"](payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_4__["EditSuccess"]({ id: payload.driver.id, team: null }); })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log));
        this.refresh$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_teams_actions__WEBPACK_IMPORTED_MODULE_3__["RESET"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (teams) { return _this.getData$; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "delete$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "edit$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "add$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "getData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "addDriver$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "removeDriver$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamsEffects.prototype, "refresh$", void 0);
    TeamsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_teams_service__WEBPACK_IMPORTED_MODULE_7__["TeamsService"]])
    ], TeamsEffects);
    return TeamsEffects;
}());



/***/ }),

/***/ "./src/app/pipes/editable-cell.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/editable-cell.pipe.ts ***!
  \*********************************************/
/*! exports provided: EditableCellPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableCellPipe", function() { return EditableCellPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditableCellPipe = /** @class */ (function () {
    function EditableCellPipe() {
    }
    EditableCellPipe.prototype.transform = function (rowId, idList) {
        console.log(idList);
        return true;
    };
    EditableCellPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'editableCell'
        })
    ], EditableCellPipe);
    return EditableCellPipe;
}());



/***/ }),

/***/ "./src/app/reducers/drivers.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/drivers.reducer.ts ***!
  \*********************************************/
/*! exports provided: adapter, initialState, driversReducer, getDriversState, selectIds, selectEntities, selectTotal, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driversReducer", function() { return driversReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDriversState", function() { return getDriversState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/drivers.actions */ "./src/app/actions/drivers.actions.ts");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");

var _a;



function newDriver(id, name, country, points, team) {
    return { id: id, name: name, country: country, points: points, team: team };
}
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_3__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
function driversReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_SUCCESS"]:
            return adapter.addAll(action.drivers, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["EDIT"] || _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["ADD"]:
            return adapter.updateOne({
                id: action.driver.id,
                changes: { loading: true }
            }, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_SUCCESS"]:
            return adapter.addOne(action.driver, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["EDIT_SUCCESS"]:
            return adapter.updateOne({
                id: action.driver.id,
                changes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.driver, { editable: false, loading: false })
            }, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_EDIT"]:
            return adapter.updateOne({
                id: action.driver.id,
                changes: { editable: !action.driver.editable }
            }, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE"]:
            return adapter.updateOne({
                id: action.id,
                changes: { loading: true }
            }, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_SUCCESS"]:
            return adapter.removeOne(action.id, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_FAIL"]:
            return adapter.updateOne({
                id: action.id,
                changes: { loading: true }
            }, state);
        case _actions_drivers_actions__WEBPACK_IMPORTED_MODULE_2__["RESET"]:
            return initialState;
        default:
            return state;
    }
}
var getDriversState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('drivers');
var selectIds = (_a = adapter.getSelectors(getDriversState), _a.selectIds), selectEntities = _a.selectEntities, selectTotal = _a.selectTotal, selectAll = _a.selectAll;


/***/ }),

/***/ "./src/app/reducers/teams.reducers.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/teams.reducers.ts ***!
  \********************************************/
/*! exports provided: adapter, initialState, teamsReducer, getTeamsState, selectIds, selectEntities, selectTotal, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamsReducer", function() { return teamsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamsState", function() { return getTeamsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/teams.actions */ "./src/app/actions/teams.actions.ts");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");

var _a;



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_3__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
function teamsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_SUCCESS"]:
            return adapter.addAll(action.teams, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["EDIT"] || _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["ADD"]:
            return adapter.updateOne({
                id: action.team.id,
                changes: { loading: true }
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_SUCCESS"]:
            return adapter.addOne(action.team, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["EDIT_SUCCESS"]:
            return adapter.updateOne({
                id: action.team.id,
                changes: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.team, { editable: false, loading: false })
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_EDIT"]:
            return adapter.updateOne({
                id: action.team.id,
                changes: { editable: !action.team.editable }
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE"]:
            return adapter.updateOne({
                id: action.id,
                changes: { loading: true }
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_SUCCESS"]:
            return adapter.removeOne(action.id, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_FAIL"]:
            return adapter.updateOne({
                id: action.id,
                changes: { loading: true }
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_DRIVER_SUCCESS"]:
            return adapter.updateOne({
                id: action.payload.team.id,
                changes: { drivers: action.payload.team.drivers.concat([action.payload.driver]) }
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_DRIVER_SUCCESS"]:
            return adapter.updateOne({
                id: action.payload.team.id,
                changes: { drivers: action.payload.team.drivers.filter(function (d) { return d.id !== action.payload.driver.id; }).slice() }
            }, state);
        case _actions_teams_actions__WEBPACK_IMPORTED_MODULE_2__["RESET"]:
            return initialState;
        default:
            return state;
    }
}
var getTeamsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('teams');
var selectIds = (_a = adapter.getSelectors(getTeamsState), _a.selectIds), selectEntities = _a.selectEntities, selectTotal = _a.selectTotal, selectAll = _a.selectAll;


/***/ }),

/***/ "./src/app/services/drivers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/drivers.service.ts ***!
  \*********************************************/
/*! exports provided: DriversService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversService", function() { return DriversService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DriversService = /** @class */ (function () {
    function DriversService(http) {
        this.http = http;
        this.url = '/';
    }
    DriversService.prototype.get = function () {
        return this.http.get(this.url + 'drivers');
    };
    DriversService.prototype.add = function (driver) {
        return this.http.post(this.url + 'driver/add', driver);
    };
    DriversService.prototype.edit = function (id, data) {
        return this.http.put(this.url + ("driver/update/" + id), data);
    };
    DriversService.prototype.delete = function (id) {
        return this.http.delete(this.url + ("driver/delete/" + id));
    };
    DriversService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DriversService);
    return DriversService;
}());



/***/ }),

/***/ "./src/app/services/teams.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TeamsService = /** @class */ (function () {
    function TeamsService(http) {
        this.http = http;
        this.url = '/';
    }
    TeamsService.prototype.get = function () {
        return this.http.get(this.url + 'teams');
    };
    TeamsService.prototype.add = function (team) {
        return this.http.post(this.url + 'team/add', team);
    };
    TeamsService.prototype.edit = function (id, data) {
        return this.http.put(this.url + ("team/update/" + id), data);
    };
    TeamsService.prototype.delete = function (id) {
        return this.http.delete(this.url + ("team/delete/" + id));
    };
    TeamsService.prototype.addDriver = function (teamId, driverId) {
        return this.http.patch(this.url + ("team/add-driver/" + teamId + "/" + driverId), null);
    };
    TeamsService.prototype.removeDriver = function (teamId, driverId) {
        return this.http.patch(this.url + ("team/remove-driver/" + teamId + "/" + driverId), null);
    };
    TeamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamsService);
    return TeamsService;
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
    production: false,
    url: 'http://localhost:4000/'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ap/Projects/angular-ngrx/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map