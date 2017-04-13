import { Component } from '@angular/core';
import { QuizState } from './state/app-state';
import { Store } from '@ngrx/store';
import { RESET_PCT_REMAINING, RESTART_QUIZ } from './constants/app-constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private store: Store<QuizState>) { }

    resetQuiz() {
        this.store.dispatch({ type: RESTART_QUIZ });
        this.store.dispatch({ type: RESET_PCT_REMAINING });
    }

}
