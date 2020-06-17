import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageItem: string = 'current';
  // title = 'weather-app';
  pageDisplay(item: string){
    this.pageItem = item;

  }
}
