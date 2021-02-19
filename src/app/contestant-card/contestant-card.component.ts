import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contestant } from '../contestant.model';
import { AppState, currentWeek } from '../state/reducer';

@Component({
  selector: 'app-contestant-card',
  templateUrl: './contestant-card.component.html',
  styleUrls: ['./contestant-card.component.scss'],
})
export class ContestantCardComponent implements OnInit, OnDestroy {
  currentWeek$: Observable<number>;
  isEliminated = false;
  subscriptions = new Subscription();

  @Input() contestantInfo: Contestant | undefined;

  constructor(private store: Store<AppState>) {
    this.currentWeek$ = store.select(currentWeek);
  }

  ngOnInit() {
    this.subscriptions.add(
      this.currentWeek$.subscribe(
        (week) =>
          (this.isEliminated = Number(this.contestantInfo?.week_elim) <= week)
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
