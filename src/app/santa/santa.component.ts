import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SSanta } from '../model/SSanta';

@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.css']
})
export class SantaComponent implements OnInit {
  participants;

  constructor(private myback: MybackService, private route: Router, private http: HttpClient) {

    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.http.get(this.myback.lienHTTP + 'santa/participants/' + this.myback.santa.id)
      .subscribe(data => {
        this.participants = data;
        console.log('participants', this.participants);
      }, err => {
        console.log(err);
      });
  }

}
