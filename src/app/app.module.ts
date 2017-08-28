import { SummaryPipe } from './summary.pipe'; //it will automatically imports the summary pipe here
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StarComponent } from './star/star.component';
import { FavoriteComponent } from './favorite/favorite.component';
//this class is decorated by another function NgModule
@NgModule({
  //where we add all the components that are part of this module
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent, //to auto import this component install Auto Import Extensions on vscode
    SummaryPipe, StarComponent, FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
    /**
     * Note1
     *  Dependency Injection means injecting or providing the dependencies on class into its constructor.
     * 
     * Note2
     * if we create a service, without mention in here we will get the error
     * Unhandled Promise rejection: No provider for CoursesService! 
     * 
     */
  ],//register all the depencies 
  bootstrap: [AppComponent]
})
export class AppModule { }
