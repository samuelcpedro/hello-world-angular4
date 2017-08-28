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
  onFavoriteChanged(eventArgs:{ newValue: boolean }){
    console.log("Favorite changed: ", eventArgs);
    //it will return in the console
    //Favorite changed:  {newValue: false}
    //                    newValue: false
    //                    __proto__: Object
    
  }
}
