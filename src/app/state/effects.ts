import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Contestant, contestantAttributesMapping } from '../contestant.model';
import {
  loadContestants,
  loadContestantsSuccess,
  loadContestantsFailure,
} from './actions';

@Injectable()
export class Effects {
  loadContestants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContestants),
      switchMap(() => 
        this.googleSheetsDbService
          .get<Contestant>(
            environment.contestants.spreadsheetId,
            environment.contestants.worksheetId,
            contestantAttributesMapping
          )
          .pipe(
            map((contestants: Contestant[]) =>
              loadContestantsSuccess({ contestants })
            ),
            catchError((error) => of(loadContestantsFailure({ error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private googleSheetsDbService: GoogleSheetsDbService
  ) {}
}
