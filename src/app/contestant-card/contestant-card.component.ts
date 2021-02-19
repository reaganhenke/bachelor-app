import { Component, Input } from '@angular/core';
import { Contestant } from '../contestant.model';

@Component({
  selector: 'app-contestant-card',
  templateUrl: './contestant-card.component.html',
  styleUrls: ['./contestant-card.component.scss']
})
export class ContestantCardComponent {

  @Input() contestantInfo: Contestant | undefined;

  constructor() { }

}
