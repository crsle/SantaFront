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
events;
  constructor(private myback: MybackService, private route: Router, private http: HttpClient) {
    this.myback.menuVisible=true
   }

  ngOnInit() {
    console.log(this.myback.lienHTTP+'santa/'+ this.myback.user.id);
    this.http.get(this.myback.lienHTTP+'santa/'+ this.myback.user.id)
    .subscribe(data => {
      console.log('data', data)
      //this.events = data;
    }, err => {
      console.log(err);
    });
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
