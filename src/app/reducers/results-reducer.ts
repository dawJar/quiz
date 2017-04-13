import { Action, ActionReducer } from '@ngrx/store';
import { Result, ResultsState } from '../state/app-state';
import * as types from '../constants/app-constants';

const initialState: ResultsState = {
    results: [],
    topResults: []
};

export const resultsReducer: ActionReducer<ResultsState> = (
    state = initialState,
    action: Action
) => {

    switch (action.type) {

        case types.FETCHED_RESULTS_FROM_DATABASE:
            let results = action.payload;
            let topResults = results.filter(result => result.score === 5);

            if (results.length > 0) {
                let sorted: boolean;
                do {
                    sorted = false;
                    for (let i = 0; i < results.length - 1; i++) {
                        if (results[i].score < results[i + 1].score) {
                            let temp = results[i];
                            results[i] = results[i + 1];
                            results[i + 1] = temp;
                            sorted = true;
                        }
                    }
                } while (sorted);
            }

            return Object.assign({}, state, {
                results,
                topResults
            });

        default:
            return state;

    }
};
