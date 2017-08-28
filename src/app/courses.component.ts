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
	{{ course.title }} <br/>
	{{ course.title | uppercase }} <br/>
	{{ course.title | uppercase | lowercase}} <br/>
	{{ course.students }} <br/>
	{{ course.students | number }} <br/>
	{{ course.rating | number }} <br/>
	{{ course.rating | number:'1.2-2' }} <br/>
	{{ course.rating | number:'1.1-3' }} <br/>
	{{ course.rating | number:'1.2-3' }} <br/>
	{{ course.rating | number:'1.2-4' }} <br/>
	{{ course.rating | number:'2.1-1' }} <br/>
	{{ course.price }} <br/>
	{{ course.price | currency }} <br/>
	{{ course.price | currency:'AUD' }} <br/>
	{{ course.price | currency:'AUD':true }} <br/>
	{{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
	{{ course.releaseDate }} <br/>
	{{ course.releaseDate | date:'shortDate' }} <br/>
	</br>
	https://angular.io/api/common/DatePipe
	`
})

export class CoursesComponent {
	course = {
		title: "The Complete Angular Course",
		rating: 4.9745,
		students: 30123,
		price: 190.95,
		releaseDate: new Date(2016, 3, 1)
	}
}