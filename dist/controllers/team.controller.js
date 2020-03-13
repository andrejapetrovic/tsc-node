"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
var Team_1 = require("../entities/Team");
var Driver_1 = require("../entities/Driver");
var TeamController = /** @class */ (function () {
    function TeamController() {
        var _this = this;
        this.findAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var teams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamRepo.find({ relations: ['drivers'] })];
                    case 1:
                        teams = _a.sent();
                        res.status(200).json(teams);
                        return [2 /*return*/];
                }
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var inserted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamRepo.insert(req.body)];
                    case 1:
                        inserted = _a.sent();
                        res.status(200).send(inserted.raw[0]);
                        return [2 /*return*/];
                }
            });
        }); };
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var team, updateRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamRepo.findOne(req.params.id)];
                    case 1:
                        team = _a.sent();
                        if (!team) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.teamRepo.update(req.params.id, req.body)];
                    case 2:
                        updateRes = _a.sent();
                        res.status(200).send();
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(400).send("Team with id " + req.body.id + " doesn't exist");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var team;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamRepo.findOne(req.params.id)];
                    case 1:
                        team = _a.sent();
                        if (!team) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.teamRepo.remove(team)];
                    case 2:
                        _a.sent();
                        res.status(200).send();
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(400).send("Team with id " + req.params.id + " doesn't exist, unable to delete");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.addDriver = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var team, driver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamRepo.findOne(req.params.teamId)];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            res.status(400).send("Team doesn't exist");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.driverRepo.findOne(req.params.driverId, { relations: ['team'] })];
                    case 2:
                        driver = _a.sent();
                        if (!driver) {
                            res.status(400).send("Driver with that id doesn't exist");
                        }
                        else if (driver.team) {
                            res.status(400).send("Driver cannot be part of more than 1 team");
                        }
                        else {
                            delete driver.team;
                            this.driverRepo.update(driver.id, { team: team });
                            res.status(200).send({ teamId: team.id, driver: driver });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.removeDriver = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var team, driver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamRepo.findOne(req.params.teamId)];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            res.status(400).send("Team doesn't exist");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.driverRepo.findOne(req.params.driverId, { relations: ['team'] })];
                    case 2:
                        driver = _a.sent();
                        if (!driver) {
                            res.status(400).send("Driver with that id doesn't exist");
                        }
                        else if (driver.team.id === team.id) {
                            this.driverRepo.update(driver.id, { team: undefined });
                            res.status(200).send();
                        }
                        else {
                            res.status(400).send("Driver is not part of that team");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.init();
    }
    TeamController.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, app_1.dbConnection];
                    case 1:
                        connection = _a.sent();
                        this.teamRepo = connection.getRepository(Team_1.Team);
                        this.driverRepo = connection.getRepository(Driver_1.Driver);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TeamController;
}());
exports.TeamController = TeamController;
