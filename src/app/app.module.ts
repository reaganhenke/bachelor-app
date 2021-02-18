import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BachelorCardComponent } from './bachelor-card/bachelor-card.component';
import { ContestantCardComponent } from './contestant-card/contestant-card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './state/effects';

@NgModule({
  declarations: [AppComponent, BachelorCardComponent, ContestantCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ core: reducer }),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [GoogleSheetsDbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
