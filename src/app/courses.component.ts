import { CoursesService } from './courses.service';
/**
 * We are importing da component decorator
 * https://angular.io/api/core/Component#description
 * Component decorator allows you to mark a class as an Angular component and provide additional metadata that determines how the component should be processed, instantiated and used at runtime.
 */
import { Component } from "@angular/core";

//decorator function
@Component({
    //property selector is a css selector that identifies this component in a template
    selector: 'courses', // to refence a element <courses> use "courses" or element <div class="courses"> use ".courses" or element <div id ="courses"> use "#courses"
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
    //[class.active]="isActive" property binding syntaxe
    //class -> class property
    //active -> name of the target class name 
})

export class CoursesComponent {
    //isActive = false; //it will not show the class
    isActive = true; //it will show the class
}