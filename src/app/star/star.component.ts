import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})
export class StarComponent {

	private state = false;
	starClassName = "glyphicon glyphicon-star-empty";
	
	onStarClick(){
		this.state = !this.state;
		this.starClassName = this.state ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty';
	}

}
