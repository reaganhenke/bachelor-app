import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contestant } from './contestant.model';
import { Store } from '@ngrx/store';
import { AppState, contestants, currentWeek } from './state/reducer';
import { loadContestants } from './state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bachelor';
  contestants$: Observable<Contestant[]>;
  currentWeek$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.contestants$ = store.select(contestants);
    this.currentWeek$ = store.select(currentWeek);
  }

  ngOnInit() {
    this.store.dispatch(loadContestants());
  }
}
