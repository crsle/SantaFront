import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../model/User';

@Component({
  selector: 'app-popupdetailparticipant',
  templateUrl: './popupdetailparticipant.component.html',
  styleUrls: ['./popupdetailparticipant.component.css']
})
export class PopupdetailparticipantComponent implements OnInit {
  details = new User();
  detailbis;

  constructor(private myback: MybackService, private route: Router, private http: HttpClient) { 
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.http.get(this.myback.lienHTTP + 'user/' + this.myback.idParticipantSelectionne)
      .subscribe(data => {
        this.detailbis = data;
        this.details = this.detailbis;
        console.log(this.details);
      }, err => {
        console.log(err);

      });
  }

}
