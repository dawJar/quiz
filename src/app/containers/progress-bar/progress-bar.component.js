"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var types = require('../../constants/app-constants');
var Rx_1 = require('rxjs/Rx');
var ProgressBarComponent = (function () {
    function ProgressBarComponent(store) {
        var _this = this;
        this.store = store;
        this.subscription = [];
        this.subscription.push(store.select('quizReducer')
            .subscribe(function (state) {
            _this.pctRemaining = state.pctRemaining;
            _this.progressBarWidth = state.pctRemaining.toString() + '%';
            _this.pctRemainingRunning = state.pctRemainingRunning;
            _this.quizStarted = state.quizStarted;
        }));
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.store.dispatch({ type: types.SET_PCT_REMAINING });
        this.subscription.push(this.createTimer());
    };
    ProgressBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (x) { return x.unsubscribe(); });
    };
    ProgressBarComponent.prototype.createTimer = function () {
        var _this = this;
        this.timer = Rx_1.Observable.timer(100, 100);
        return this.timer.subscribe(function () {
            if (_this.quizStarted) {
                if (_this.pctRemaining > 0 && _this.pctRemainingRunning) {
                    _this.store.dispatch({ type: types.SET_PCT_REMAINING });
                }
                else if (_this.pctRemainingRunning) {
                    _this.store.dispatch({ type: types.STOP_PROGRESS_BAR });
                    _this.store.dispatch({ type: types.HIGHLIGHT_CORRECT_ANSWER });
                    setTimeout(function () {
                        _this.store.dispatch({ type: types.RESET_PCT_REMAINING });
                        _this.store.dispatch({ type: types.NEXT_QUESTION });
                    }, 3000);
                }
            }
        });
    };
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'app-progress-bar',
            templateUrl: './progress-bar.component.html',
            styleUrls: ['./progress-bar.component.scss']
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
