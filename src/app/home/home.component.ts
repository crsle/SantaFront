import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bartoi = true;
  constructor(private myback: MybackService, private route: Router, private http: HttpClient) {
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
  goDeco() {
    this.route.navigate(['login']);
  }
}
