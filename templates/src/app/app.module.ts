import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';

import {HeaderComponent} from './components/header/header.component';

import { MainComponent} from './components/main/main.component';
import {SectionComponent} from './components/main//section/section.component';

import {FooterComponent} from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    MainComponent, SectionComponent, //main
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
 