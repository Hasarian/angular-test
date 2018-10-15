import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { PropertyCompComponent } from './property-comp/property-comp.component';
import { EventCompComponent } from './event-comp/event-comp.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { NgClassCompComponent } from './ng-class-comp/ng-class-comp.component';
import { NgModelCompComponent } from './ng-model-comp/ng-model-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    PropertyCompComponent,
    EventCompComponent,
    InputCompComponent,
    NgClassCompComponent,
    NgModelCompComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
