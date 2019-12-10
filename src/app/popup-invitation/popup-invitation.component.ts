import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-popup-invitation',
  templateUrl: './popup-invitation.component.html',
  styleUrls: ['./popup-invitation.component.css']
})
export class PopupInvitationComponent implements OnInit {
  user : User = new User();
  users;

  constructor(public myback: MybackService, private route :Router, private http: HttpClient, private autocomplete: MatAutocompleteModule) { }

  ngOnInit() {
    this.recupUsers();
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

  recupUsers() {
    this.http.get(this.myback.lienHTTP + 'invitationAutoComplete')
      .subscribe(data => {
        this.users = data;
      }, err => {
        console.log(err);
      });
  }
}
