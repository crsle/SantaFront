import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmationpopup',
  templateUrl: './confirmationpopup.component.html',
  styleUrls: ['./confirmationpopup.component.css']
})
export class ConfirmationpopupComponent implements OnInit {

  constructor(public myback: MybackService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  confirmation() {
    this.http.get(this.myback.lienHTTP + 'santa/tirage/annuler/' + this.myback.santa.id)
      .subscribe(data => {
        this.http.get(this.myback.lienHTTP + 'ssanta/annulertirage/' + this.myback.santa.id)
          .subscribe(data => {
            this.myback.santa.tirageFait = false;
            this.myback.boutonTirageVisible = true;
          }, err => {
            console.log(err);
          });

      }, err => {
        console.log(err);
      });
  }

}
