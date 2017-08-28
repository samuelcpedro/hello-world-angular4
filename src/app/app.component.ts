import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }


  //if we wanted to pass a single value
  onFavoriteChanged(isFavorite){
    console.log("Favorite changed: ", isFavorite);
  }
}
