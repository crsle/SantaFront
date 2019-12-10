import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup-invitation',
  templateUrl: './popup-invitation.component.html',
  styleUrls: ['./popup-invitation.component.css']
})
export class PopupInvitationComponent implements OnInit {
  user : User = new User();

  constructor(public myback: MybackService, private route :Router, private http: HttpClient) { }

  ngOnInit() {
  }

  invitation() {
    this.http.get(this.myback.lienHTTP + 'participationmail/' + this.user.mail + '/' + this.myback.idEventClickInv)
    .subscribe(data => {
      if (data == null) {
        //console.log(data)
        this.http.post(this.myback.lienHTTP + 'participation/invitation/' + this.myback.idEventClickInv , this.user).subscribe(
          data => {
          }, err => {
            console.log(err);
          }
        )
      }
    })

  }


}
