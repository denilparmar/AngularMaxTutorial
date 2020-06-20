import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaxTutorials';
  loadedFeature = 'recipes';
  onNavigate(feature){
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }
}
