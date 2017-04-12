"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var types = require('../../constants/app-constants');
var result_dialog_component_1 = require('../../components/result-dialog/result-dialog.component');
var QuizComponent = (function () {
    function QuizComponent(store, firebaseService, dialog) {
        var _this = this;
        this.store = store;
        this.firebaseService = firebaseService;
        this.dialog = dialog;
        store.select('quizReducer')
            .subscribe(function (state) {
            _this.quizQuestions = state.quizQuestions;
            _this.questionQuantity = state.questions.length;
            _this.quizStarted = state.quizStarted;
            _this.quizComplete = state.quizComplete;
            _this.currentQuizQuestion = state.currentQuizQuestion;
            _this.userScore = state.userScore;
            _this.currentCorrectAnswer = state.currentCorrectAnswer;
            _this.pctRemainingRunning = state.pctRemainingRunning;
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.fetchQuestions().subscribe(function (questions) {
            return _this.store.dispatch({
                type: types.FETCHED_QUESTIONS_FROM_DATABASE,
                payload: questions
            });
        });
    };
    QuizComponent.prototype.clickQuizCard = function (clickAction) {
        switch (clickAction) {
            case 'start':
                this.startQuiz();
                break;
            case 'restart':
                this.restartQuiz();
                break;
            case 'post':
                this.postScore();
                break;
            default:
                this.restartQuiz();
        }
    };
    QuizComponent.prototype.nextQuestion = function (chosenAnswer) {
        var _this = this;
        if (this.pctRemainingRunning) {
            this.store.dispatch({ type: types.STOP_PROGRESS_BAR });
            this.store.dispatch({ type: types.HIGHLIGHT_CORRECT_ANSWER });
            setTimeout(function () {
                _this.store.dispatch({ type: types.RESET_PCT_REMAINING });
                _this.store.dispatch({ type: types.VALIDATE_SCORE, payload: chosenAnswer });
                _this.store.dispatch({ type: types.NEXT_QUESTION });
            }, 3000);
        }
    };
    QuizComponent.prototype.startQuiz = function () {
        this.store.dispatch({ type: types.SET_QUIZ_QUESTIONS });
        this.store.dispatch({ type: types.START_QUIZ });
    };
    QuizComponent.prototype.restartQuiz = function () {
        this.store.dispatch({ type: types.RESTART_QUIZ });
    };
    // TODO implement post score
    QuizComponent.prototype.postScore = function () {
        var _this = this;
        var dialogRef = this.dialog.open(result_dialog_component_1.ResultDialogComponent);
        dialogRef.componentInstance.score = this.userScore;
        dialogRef.afterClosed().subscribe(function (nick) {
            if (nick !== undefined || nick !== '') {
                var result = { nick: nick, score: _this.userScore };
                _this.firebaseService.addScore(result);
                _this.firebaseService.fetchResults().subscribe(function (x) { return console.log(x); });
            }
        });
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'app-quiz',
            templateUrl: './quiz.component.html',
            styleUrls: ['./quiz.component.scss']
        })
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
