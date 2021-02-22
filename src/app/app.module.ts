import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContestantCardComponent } from './contestant-card/contestant-card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './state/effects';
import { WeekDialogComponent } from './week-dialog/week-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }        from '@angular/forms';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { MoreInfoComponent } from './more-info/more-info.component';

@NgModule({
  declarations: [AppComponent, ContestantCardComponent, WeekDialogComponent, DetailModalComponent, MoreInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ core: reducer }),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument(),
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [GoogleSheetsDbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
