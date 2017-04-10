import { Action, ActionReducer } from '@ngrx/store';
import { QuizState } from '../state/app-state';
import {
    FETCHED_QUESTIONS_FROM_DATABASE,
    INCREMENT_SCORE, QUIZ_COMPLETE, RESTART_QUIZ,
    SET_QUIZ_QUESTIONS,
    START_QUIZ
} from '../constants/app-constants';

const initialState: QuizState = {
    questions: [],
    quizQuestions: [],
    quizStarted: false,
    currentQuizQuestion: 0,
    quizComplete: false,
    userScore: 0,
};

export const quizReducer: ActionReducer<QuizState> = (
    state = initialState,
    action: Action
) => {

    switch (action.type) {

        case FETCHED_QUESTIONS_FROM_DATABASE:
            return Object.assign({}, state, {
                questions: action.payload
            });

        case SET_QUIZ_QUESTIONS:
            const { questions } = state;
            const questionsLen = questions.length;
            let questionCount = 0;
            const questionsSet = new Set();

            while (questionCount < 5) {
                questionsSet.add(questions[Math.floor(Math.random() * questionsLen)]);
                if (questionsSet.size > questionCount) {
                    questionCount++;
                }
            }

            return Object.assign({}, state, {
                quizQuestions: Array.from(questionsSet)
            });

        case START_QUIZ:
            return Object.assign({}, state, {
                quizStarted: !state.quizStarted
            });

        case QUIZ_COMPLETE:
            return Object.assign({}, state, {
                quizComplete: !state.quizComplete
            });

        case INCREMENT_SCORE:
            return Object.assign({}, state, {
                userScore: state.userScore++
            });

        case RESTART_QUIZ:
            return Object.assign({}, state, {
                quizStarted: false,
                currentQuizQuestion: 0,
                quizComplete: false,
                userScore: 0
            });

        default:
            return state;

    }

};
