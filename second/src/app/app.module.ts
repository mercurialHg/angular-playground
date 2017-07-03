import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SkillComponent } from './components/sidebar/skill/skill.component';
import { ExperienceComponent } from './components/main/sections/experience/experience.component';
import { EducationComponent } from './components/main/sections/education/education.component';
import { LanguagesComponent } from './components/main/sections/languages/languages.component';
import { SkillsComponent } from './components/main/sections/skills/skills.component';
import { UdemyComponent } from './udemy/udemy.component';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
    UdemyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
