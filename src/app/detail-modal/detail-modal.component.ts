import { Component, Input, OnInit } from '@angular/core';
import { Contestant } from '../contestant.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {

  @Input() contestantInfo!: Contestant;


  constructor() { }

  ngOnInit(): void {
  }

}
