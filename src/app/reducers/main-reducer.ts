import { Action, ActionReducer } from '@ngrx/store';
import { State } from '../state/app-state';
import { EVENT_FROM_EFFECT, INCREMENT } from '../constants/app-constants';

const initialState: State = {
  counter: 0
};

export const mainReducer: ActionReducer<State> = (
  state = initialState,
  action: Action
) => {
  const { type } = action;

  switch (type) {

    case INCREMENT:
      return {
        counter: state.counter + 1
      };

    case EVENT_FROM_EFFECT:
      return {
        counter: state.counter + 4
      };

    default:
      return state;

  }
};
