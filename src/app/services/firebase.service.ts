import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {

    questions: FirebaseListObservable<any[]>;
    results: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.questions = this.af.database.list('/questions');
        this.results = this.af.database.list('/results');
    }

    fetchQuestions() {
        return this.questions;
    }

    fetchResults() {
        return this.results;
    }

    addScore(result) {
        this.results.push(result);
    }

}
