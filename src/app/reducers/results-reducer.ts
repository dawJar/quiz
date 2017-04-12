import { Action, ActionReducer } from '@ngrx/store';
import { ResultsState } from '../state/app-state';
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
            return Object.assign({}, state, {
                results,
                topResults
            });

        default:
            return state;

    }
};
