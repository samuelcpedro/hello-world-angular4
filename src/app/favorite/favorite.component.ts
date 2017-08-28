import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'favorite',
	templateUrl: './favorite.component.html',
	styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
	@Input('isFavorite') isSelected : boolean; //Input is another decorator in angular for marking fields and properties as input properties.
	/**
	 * 
	 * There are 2 files that might change, when we change:
	 * 	- favorite.componente.ts
	 * Where isFavorite can change to isSelected, therefor it will change:
	 * 	- app.component.html where we have the favorite component
	 * 	- favorite.component.html
	 * So with a alias we would only have to change favorite.component.html, so alias e always a option
	 * 
	 */

	 @Output() change = new EventEmitter();
	 
	constructor() { }

	ngOnInit() {
	}

	onClick(){
		console.log(this.isSelected);
		this.isSelected = !this.isSelected;
		//this.change is your emitter and we use that to raise or publish an event which notify others that something has happened
		//if we wanted to pass a single value
		//this.change.emit(this.isSelected);
		//if we wanted to pass a object value
		this.change.emit({ newValue: this.isSelected });
		console.log(this.isSelected);
	}

}
