import { Component } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { Contestant, contestantAttributesMapping } from './contestant.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bachelor';
  contestants$: Observable<Contestant[]>;


  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.contestants$ = this.googleSheetsDbService.get<Contestant>(
      environment.contestants.spreadsheetId, environment.contestants.worksheetId, contestantAttributesMapping);

  }


}
