import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule} from '@angular/material';

import { FormsModule } from '@angular/forms';

import { Course4Component } from './components/course4/course4.component';


// import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    Course4Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
