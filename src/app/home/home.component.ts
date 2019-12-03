import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bartoi = true;
  constructor(private myback: MybackService) {
    this.myback.menuVisible=true
   }

  ngOnInit() {
  }

  bartoide() {
    if(this.bartoi == true){
      this.bartoi = false
    } else{
      this.bartoi = true;
    }
  }
}
