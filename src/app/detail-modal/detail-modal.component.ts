import { Component, Input } from '@angular/core';
import { Contestant } from '../contestant.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent {
  @Input() contestantInfo!: Contestant;
  @Input() isEliminated!: boolean;

  constructor() {}
}
