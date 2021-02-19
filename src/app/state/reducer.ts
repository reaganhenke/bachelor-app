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
    currentWeek: newWeek
  })),
  on(loadContestants, (state) => ({
    ...state,
    loading: true
  })),
  on(loadContestantsSuccess, (state, { contestants }) => ({
    ...state,
    loading: false,
    contestants
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
