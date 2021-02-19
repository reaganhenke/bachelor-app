import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { updateWeek } from '../state/actions';
import { AppState } from '../state/reducer';

@Component({
  selector: 'app-week-dialog',
  templateUrl: './week-dialog.component.html',
  styleUrls: ['./week-dialog.component.scss'],
})
export class WeekDialogComponent {
  week = new FormControl(0);
  MAX_EPISODE = 7;
  weeks = [...Array(this.MAX_EPISODE).keys()];

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
