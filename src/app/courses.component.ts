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
    template: '<h2>Courses</h2>' // its the html markup we want to be rendered for this component, it can be several lines of code, and it can be in a separate file
})
export class CoursesComponent {
}