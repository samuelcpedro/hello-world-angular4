import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
//this class is decorated by another function NgModule
@NgModule({
  //where we add all the components that are part of this module
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent //to auto import this component install Auto Import Extensions on vscode
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
