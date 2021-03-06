import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Result, ResultsState } from '../../state/app-state';
import { Store } from '@ngrx/store';
import { FETCHED_RESULTS_FROM_DATABASE, SET_TITLE } from '../../constants/app-constants';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    results: Result[];
    topResults: Result[];

    constructor(
        private firebaseService: FirebaseService,
        private store: Store<ResultsState>
    ) {
        store.select('resultsReducer')
            .subscribe((state: ResultsState) => {
                this.results = state.results;
                this.topResults = state.topResults;
            });
    }

    ngOnInit() {
        this.firebaseService.fetchResults().subscribe(results => {
            this.store.dispatch({
                type   : FETCHED_RESULTS_FROM_DATABASE,
                payload: results
            });
        });
        this.store.dispatch({
            type   : SET_TITLE,
            payload: 'results'
        });
    }

}
