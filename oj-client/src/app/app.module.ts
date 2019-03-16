import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing} from './app.routes';

import { AppComponent } from './app.component';
import { PromblemListComponent } from './components/promblem-list/promblem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PromblemListComponent,
    ProblemDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [{
    provide: 'data',
    useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
