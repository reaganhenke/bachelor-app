import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contestant } from './contestant.model';
import { Store } from '@ngrx/store';
import { AppState, contestants, currentWeek, error } from './state/reducer';
import { loadContestants, updateWeek } from './state/actions';
import { MatDialog } from '@angular/material/dialog';
import { WeekDialogComponent } from './week-dialog/week-dialog.component';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'bachelor';
  contestants$: Observable<Contestant[]>;
  currentWeek$: Observable<number>;
  error$: Observable<any>;

  subscriptions = new Subscription();

  week = new FormControl('');
  weeks = [...Array(environment.max_week).keys()];

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.contestants$ = store.select(contestants);
    this.currentWeek$ = store.select(currentWeek);
    this.error$ = store.select(error);
  }

  updateWeek() {
    this.store.dispatch(updateWeek({newWeek : this.week.value}));
  }

  ngOnInit() {
    // const dialogRef = this.dialog.open(WeekDialogComponent); 
    this.subscriptions.add(this.currentWeek$.subscribe(week => this.week.setValue(week)));
    this.store.dispatch(loadContestants());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
