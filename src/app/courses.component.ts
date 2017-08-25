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
    
        <!-- 
            First choice is "the best"
            is more clean and easy to read
        -->
        <h2>{{ title }}</h2>
        <!-- or -->
        <h2 [textContent]="title"></h2>

        <!-- 
            Second choice is "the best"
            is more clean and easy to read
        -->
        <img src="{{ imageUrl }}" />
        <!-- or -->
        <img [src]="imageUrl" />

        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    ` // its the html markup we want to be rendered for this component, it can be several lines of code, and it can be in a separate file
})
export class CoursesComponent {
    title = "List of Courses";
    imageUrl = "http://lorempixel.com/400/200";
    /**
     *
     * Instead of having values here weneed to get these courses from the server so we need to call an http endpoint to get the list of courses
     * https://en.wikipedia.org/wiki/Web_API#Endpoints
     * 
     * So we have 2 options:
     * 1- add the logic for calling http service in the component, but
     *  1.1 - we will be having problems with unit tests
     *  1.2 - if this info is needed in other places code with be repetead
     *  1.3 - component should not include any logic other than the presentation logic
     * 2- Services
     *  
     */

    //courses = ["course1", "course2", "course3"];

    //Logic for calling an HTTP service
    courses;
    constructor(service: CoursesService){
        /**
         * with this we are making the same mistake of coupled this course component with the service
         * because we are creating an instance of the class.
         * problems:
         * units teste
         * add more parameters in the contruct we need them to update the construtor
         * 
         */
        //let service = new CoursesService();//so we delete this line and add a dependecy in the contructor
        /**
         * 
         * we will add a parameter service typeof coursesServices, 
         * we create an instance of coursesService and it will them passes to the construtor and get the dependecies
         * so if the constructor change with more parameters, theres no problem
         * but now we need to register these dependencies in our model
         * 
         */
        this.courses = service.getCourses();
    }

}