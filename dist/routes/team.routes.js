"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var team_controller_1 = require("../controllers/team.controller");
var app_1 = require("../app");
exports.teamRoutes = function () {
    var ctrl = new team_controller_1.TeamController();
    app_1.app.get('/teams', ctrl.findAll);
    app_1.app.post('/team/add', ctrl.create);
    app_1.app.put('/team/update/:id', ctrl.update);
    app_1.app.delete('/team/delete/:id', ctrl.delete);
    app_1.app.patch('/team/add-driver/:teamId/:driverId', ctrl.addDriver);
    app_1.app.patch('/team/remove-driver/:teamId/:driverId', ctrl.removeDriver);
};
