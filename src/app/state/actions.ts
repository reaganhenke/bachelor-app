import { createAction, props } from '@ngrx/store';
import { Contestant } from '../contestant.model';

export const loadContestants = createAction('Load Contestants');

export const loadContestantsSuccess = createAction(
  'Load Contestants Success',
  props<{ contestants: Contestant[] }>()
);

export const loadContestantsFailure = createAction(
  'Load Contestants Success',
  props<{ error: any }>()
);

export const updateWeek = createAction(
  'Update Week',
  props<{ newWeek: number }>()
);
