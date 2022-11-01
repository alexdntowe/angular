import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo1';

  getTextInfoText(event:string){
    console.log(event);
    this.title = event;
  }
}
