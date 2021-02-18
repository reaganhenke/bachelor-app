import { createReducer, on } from '@ngrx/store';
import { Contestant } from '../contestant.model';
import { loadContestantsSuccess, updateWeek } from './actions';

export interface State {
  contestants: Contestant[];
  currentWeek: number;
  // TODO: error handling
}

export interface AppState {
  core: State;
}

export const initialState: State = {
  contestants: [],
  currentWeek: 0,
};

export const reducer = createReducer(
  initialState,
  on(updateWeek, (state, { newWeek }) => ({
    ...state,
    currentWeek: newWeek,
  })),
  on(loadContestantsSuccess, (state, { contestants }) => ({
    ...state,
    contestants,
  }))
);

export const currentWeek = (state: AppState) => state.core.currentWeek;
export const contestants = (state: AppState) => state.core.contestants;
