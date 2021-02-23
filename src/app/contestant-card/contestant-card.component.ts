import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contestant } from '../contestant.model';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { AppState, currentWeek } from '../state/reducer';

@Component({
  selector: 'app-contestant-card',
  templateUrl: './contestant-card.component.html',
  styleUrls: ['./contestant-card.component.scss'],
})
export class ContestantCardComponent implements OnInit, OnDestroy {
  currentWeek$: Observable<number>;
  isEliminated = false;
  isSelected = false;
  subscriptions = new Subscription();

  @Input() contestantInfo!: Contestant;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.currentWeek$ = store.select(currentWeek);
  }

  ngOnInit() {
    this.subscriptions.add(
      this.currentWeek$.subscribe(
        (week) =>
          (this.isEliminated = this.contestantInfo.week_elim ? Number(this.contestantInfo.week_elim) <= week : false)
      )
    );
  }

  launchDetailModal() {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      autoFocus: false
    });
    dialogRef.componentInstance.contestantInfo = this.contestantInfo; 
    dialogRef.componentInstance.isEliminated = this.isEliminated; 
    this.isSelected = true;
    dialogRef.afterClosed().subscribe(result => this.isSelected = false)
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
