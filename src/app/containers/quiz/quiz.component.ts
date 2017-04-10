import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Question, QuizState } from '../../state/app-state';
import { Store } from '@ngrx/store';
import { FETCHED_QUESTIONS_FROM_DATABASE, SET_QUIZ_QUESTIONS, START_QUIZ } from '../../constants/app-constants';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    quizQuestions: Question[];
    quizStarted: boolean;
    quizComplete: boolean;
    currentQuizQuestion: number;
    userScore: number;

    constructor(private store: Store<QuizState>, private fs$: FirebaseService) {
        store.select('quizReducer')
            .subscribe((state: QuizState) => {
                console.log(state);
                this.quizQuestions = state.quizQuestions;
                this.quizStarted = state.quizStarted;
                this.quizComplete = state.quizComplete;
                this.currentQuizQuestion = state.currentQuizQuestion;
                this.userScore = state.userScore;
            });
    }

    ngOnInit() {
        this.fs$.fetchQuestions().subscribe(questions =>
            this.store.dispatch({
                type: FETCHED_QUESTIONS_FROM_DATABASE,
                payload: questions
            }));
    }

    startQuiz() {
        console.log(this.quizQuestions);
        console.log(typeof this.quizQuestions);
        console.log(this.quizQuestions[0]);
        this.store.dispatch({ type: SET_QUIZ_QUESTIONS });
        this.store.dispatch({ type: START_QUIZ });
    }

    handleNextQuestion() {

    }
}
