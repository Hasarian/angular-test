import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { PropertyCompComponent } from './property-comp/property-comp.component';
import { EventCompComponent } from './event-comp/event-comp.component';
import { InputCompComponent } from './input-comp/input-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    PropertyCompComponent,
    EventCompComponent,
    InputCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
