import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite : boolean; //Input is another decorator in angular for marking fields and properties as input properties.

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }

}
