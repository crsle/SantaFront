import { Component } from '@angular/core';
import {MybackService} from './myback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'santa';
  constructor(private myserv: MybackService, private route :Router){

  }

  bartoide() {
    if(this.myserv.bartoi == true){
      this.myserv.bartoi = false
    } else{
      this.myserv.bartoi = true;
    }
  }

  goDeco() {
    this.route.navigate(['login']);
    this.myserv.menuVisible=false;
  }
}
