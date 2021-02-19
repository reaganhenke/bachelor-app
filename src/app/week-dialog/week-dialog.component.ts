import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { updateWeek } from '../state/actions';
import { AppState } from '../state/reducer';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-week-dialog',
  templateUrl: './week-dialog.component.html',
  styleUrls: ['./week-dialog.component.scss'],
})
export class WeekDialogComponent {
  week = new FormControl(0);
  weeks = [...Array(environment.max_week).keys()];

  constructor(
    public dialogRef: MatDialogRef<WeekDialogComponent>,
    private store: Store<AppState>
  ) {}

  onSubmit(e: Event) {
    e.preventDefault();
    this.store.dispatch(updateWeek({ newWeek: this.week.value }));
    this.dialogRef.close();
  }
}
