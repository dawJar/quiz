import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Question, QuizState } from '../../state/app-state';
import { Store } from '@ngrx/store';
import * as types from '../../constants/app-constants';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    quizQuestions: Question[];
    userScore: number;
    quizStarted: boolean;
    quizComplete: boolean;
    currentQuizQuestion: number;
    pctRemainingRunning: boolean;
    currentCorrectAnswer: string;

    constructor(private store: Store<QuizState>, private fs$: FirebaseService) {
        store.select('quizReducer')
            .subscribe((state: QuizState) => {
                this.quizQuestions = state.quizQuestions;
                this.quizStarted = state.quizStarted;
                this.quizComplete = state.quizComplete;
                this.currentQuizQuestion = state.currentQuizQuestion;
                this.userScore = state.userScore;
                this.currentCorrectAnswer = state.currentCorrectAnswer;
                this.pctRemainingRunning = state.pctRemainingRunning;
            });
    }

    ngOnInit() {
        this.fs$.fetchQuestions().subscribe(questions =>
            this.store.dispatch({
                type: types.FETCHED_QUESTIONS_FROM_DATABASE,
                payload: questions
            }));
    }

    clickQuizCard(clickAction: string) {
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
    }

    nextQuestion(chosenAnswer: string) {
        if (this.pctRemainingRunning) {
            this.store.dispatch({type: types.STOP_PROGRESS_BAR});
            this.store.dispatch({type: types.HIGHLIGHT_CORRECT_ANSWER});
            setTimeout(() => {
                this.store.dispatch({type: types.RESET_PCT_REMAINING});
                this.store.dispatch({type: types.VALIDATE_SCORE, payload: chosenAnswer});
                this.store.dispatch({type: types.NEXT_QUESTION});
            }, 3000);
        }
    }

    startQuiz() {
        this.store.dispatch({ type: types.SET_QUIZ_QUESTIONS });
        this.store.dispatch({ type: types.START_QUIZ });
    }

    restartQuiz() {
        this.store.dispatch({ type: types.RESTART_QUIZ });
    }

    // TODO implement post score
    postScore() {
        console.log('post');
    }
}
