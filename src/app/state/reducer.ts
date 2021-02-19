import { createReducer, on } from '@ngrx/store';
import { Contestant } from '../contestant.model';
import { loadContestants, loadContestantsFailure, loadContestantsSuccess, updateWeek } from './actions';

export interface State {
  contestants: Contestant[];
  currentWeek: number;
  loading: boolean;
  error: any | null;
}

export interface AppState {
  core: State;
}

export const initialState: State = {
  contestants: [],
  currentWeek: 0,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(updateWeek, (state, { newWeek }) => ({
    ...state,
    currentWeek: newWeek,
    contestants: state.contestants.slice().sort((a, b) => 
    {
      const isAEliminated = a.week_elim <= newWeek;
      const isBEliminated = b.week_elim <= newWeek;
      // Sort eliminated contestants to the end, from most recently eliminated to least.
      /// Otherwise, sort alphabetically. 
      if (isAEliminated && !isBEliminated) {
        return 1;
      } else if (!isAEliminated && isBEliminated) {
        return -1;
      } else if (isAEliminated && isBEliminated && (a.week_elim != b.week_elim)) {
        return b.week_elim - a.week_elim;
      }
      else {
        return a.name > b.name ? 1 : -1;
      }
    })
  })),
  on(loadContestants, (state) => ({
    ...state,
    loading: true
  })),
  on(loadContestantsSuccess, (state, { contestants }) => ({
    ...state,
    loading: false,
    contestants: contestants.slice().sort((a, b) => a.name > b.name ? 1 : -1) 
  })),
  on(loadContestantsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);

export const currentWeek = (state: AppState) => state.core.currentWeek;
export const contestants = (state: AppState) => state.core.contestants;
export const error = (state: AppState) => state.core.error;
