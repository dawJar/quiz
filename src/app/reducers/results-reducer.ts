import { Action, ActionReducer } from '@ngrx/store';
import { ResultsState } from '../state/app-state';
import * as types from '../constants/app-constants';

const initialState: ResultsState = {
    results: []
};

export const resultsReducer: ActionReducer<ResultsState> = (
    state = initialState,
    action: Action
) => {

    switch (action.type) {

        case types.FETCHED_RESULTS_FROM_DATABASE:
            return Object.assign({}, state, {
                results: action.payload
            });

        default:
            return state;

    }
};
