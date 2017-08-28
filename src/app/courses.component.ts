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
			<input #email (keyup.enter)="onKeyUp(email.value)" />
			#email is a template variable
		
			More clean but we cant change and pass the value if we change in the textbox because,
			with property binding the direction of binding is from the component to the view
			
			<input [value]="email" (keyup.enter)="onKeyUp()" />

			so we can modify this expression "onKeyUp()"

			<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
		
			And now we got a 2 way binding, but there is a better way...
			two way binding syntaxe --> [()] (this is, banana in the box)

			<input [(ngModel)]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />

			ngModel -> this builtin directive is used for implementing a 2 way binding

			<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

			but to use this directive we need to add FormsModule to imports in app.modules.ts file

			imports: [
			  BrowserModule,
			  FormsModule
			],

		-->
		<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

	`
})

export class CoursesComponent {
	email = "me@example.com";

	onKeyUp(){
		console.log(this.email);
	}
}