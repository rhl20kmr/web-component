import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  //WC_URL_PATH = `http://localhost:3005/main.js?ts=${Date.now()}`;
  WC_URL_PATH = `http://localhost:3005/main.js`;
}
