"use strict";
var types = require('../constants/app-constants');
var initialState = {
    questions: [],
    quizQuestions: [],
    quizStarted: false,
    currentQuizQuestion: 0,
    currentCorrectAnswer: '',
    quizComplete: false,
    userScore: 0,
    pctRemaining: 100,
    pctRemainingRunning: false,
    currentTitle: 'home'
};
exports.quizReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types.FETCHED_QUESTIONS_FROM_DATABASE:
            return Object.assign({}, state, {
                questions: action.payload
            });
        case types.SET_QUIZ_QUESTIONS:
            var questions = state.questions;
            var questionsLen = questions.length;
            var questionCount = 0;
            var questionsSet = new Set();
            while (questionCount < 5) {
                questionsSet.add(questions[Math.floor(Math.random() * questionsLen)]);
                if (questionsSet.size > questionCount) {
                    questionCount++;
                }
            }
            return Object.assign({}, state, {
                quizQuestions: Array.from(questionsSet)
            });
        case types.START_QUIZ:
            return Object.assign({}, state, {
                quizStarted: !state.quizStarted,
            });
        case types.STOP_QUIZ:
            return Object.assign({}, state, {
                quizComplete: !state.quizComplete
            });
        case types.VALIDATE_SCORE:
            var correctAnswer = state.quizQuestions[state.currentQuizQuestion].correctAnswer === action.payload;
            return (correctAnswer) ? Object.assign({}, state, {
                userScore: ++state.userScore
            }) : state;
        case types.NEXT_QUESTION:
            if (state.currentQuizQuestion >= 4) {
                return Object.assign({}, state, {
                    currentQuizQuestion: 0,
                    quizComplete: true,
                    quizStarted: false,
                    currentCorrectAnswer: ''
                });
            }
            else {
                return Object.assign({}, state, {
                    currentQuizQuestion: ++state.currentQuizQuestion,
                    currentCorrectAnswer: '',
                    pctRemainingRunning: true
                });
            }
        case types.HIGHLIGHT_CORRECT_ANSWER:
            var currentCorrectAnswer = state.quizQuestions[state.currentQuizQuestion].correctAnswer;
            return Object.assign({}, state, {
                currentCorrectAnswer: currentCorrectAnswer
            });
        case types.SET_PCT_REMAINING:
            return Object.assign({}, state, {
                pctRemaining: state.pctRemaining - 1,
                pctRemainingRunning: true
            });
        case types.RESET_PCT_REMAINING:
            return Object.assign({}, state, {
                pctRemaining: 100
            });
        case types.STOP_PROGRESS_BAR:
            return Object.assign({}, state, {
                pctRemainingRunning: false
            });
        case types.RESTART_QUIZ:
            return Object.assign({}, state, {
                quizStarted: false,
                currentQuizQuestion: 0,
                quizComplete: false,
                userScore: 0,
                pctRemaining: 100
            });
        case types.SET_TITLE:
            return Object.assign({}, state, {
                currentTitle: action.payload
            });
        default:
            return state;
    }
};
