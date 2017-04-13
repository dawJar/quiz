"use strict";
var types = require('../constants/app-constants');
var initialState = {
    results: [],
    topResults: []
};
exports.resultsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types.FETCHED_RESULTS_FROM_DATABASE:
            var results = action.payload;
            var topResults = results.filter(function (result) { return result.score === 5; });
            if (results.length > 0) {
                var sorted = void 0;
                do {
                    sorted = false;
                    for (var i = 0; i < results.length - 1; i++) {
                        if (results[i].score < results[i + 1].score) {
                            var temp = results[i];
                            results[i] = results[i + 1];
                            results[i + 1] = temp;
                            sorted = true;
                        }
                    }
                } while (sorted);
            }
            return Object.assign({}, state, {
                results: results,
                topResults: topResults
            });
        default:
            return state;
    }
};
