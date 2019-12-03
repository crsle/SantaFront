import { Component } from '@angular/core';
import {MybackService} from './myback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'santa';
  constructor(private myserv: MybackService){

  }
}
