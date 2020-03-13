"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driver_controller_1 = require("../controllers/driver.controller");
var app_1 = require("../app");
exports.driverRoutes = function () {
    var ctrl = new driver_controller_1.DriverController();
    app_1.app.post('/driver/add', ctrl.create);
    app_1.app.get('/drivers', ctrl.findAll);
    app_1.app.put('/driver/update/:id', ctrl.update);
    app_1.app.delete('/driver/delete/:id', ctrl.delete);
    app_1.app.get('/driver/find/:name', ctrl.findByName);
    app_1.app.get('/driver/by-team/:teamName', ctrl.findByTeam);
    app_1.app.get('/drivers/teamless', ctrl.findTeamless);
};
