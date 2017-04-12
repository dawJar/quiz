"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
        this.questions = this.af.database.list('/questions');
        this.results = this.af.database.list('/results');
    }
    FirebaseService.prototype.fetchQuestions = function () {
        return this.questions;
    };
    FirebaseService.prototype.fetchResults = function () {
        return this.results;
    };
    FirebaseService.prototype.addScore = function (result) {
        this.results.push(result);
    };
    FirebaseService = __decorate([
        core_1.Injectable()
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
