import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bartoi = true;
  constructor() { }

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
