"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Driver_1 = require("./Driver");
var Team = /** @class */ (function () {
    function Team() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Team.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            unique: true
        }),
        __metadata("design:type", String)
    ], Team.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Team.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column({
            name: "podium_finishes"
        }),
        __metadata("design:type", Number)
    ], Team.prototype, "podiumFinishes", void 0);
    __decorate([
        typeorm_1.Column({
            name: "championship_titles"
        }),
        __metadata("design:type", Number)
    ], Team.prototype, "championshipTitles", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Driver_1.Driver; }, function (driver) { return driver.team; }),
        __metadata("design:type", Array)
    ], Team.prototype, "drivers", void 0);
    Team = __decorate([
        typeorm_1.Entity()
    ], Team);
    return Team;
}());
exports.Team = Team;
