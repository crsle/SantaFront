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

  constructor(private myback: MybackService, private route :Router, private http: HttpClient) { }

  ngOnInit() {
  }

  invitation() {
    this.http.post(this.myback.lienHTTP + 'participation/invitation/' + this.myback.idEventClickInv , this.user).subscribe(
      data => {
        console.log('invitation part ' , data);
      }, err => {
        console.log(err);
      }
    )
  }


  /*invitation(){
    this.http.get(this.myback.lienHTTP+'invitation').subscribe(date =>{

    }, err =>{
      console.log(err);
    }
    this.invitationParticipant();
    );


  }
  invitationParticipant(){
    this.http.get(this.myback.lienHTTP+'inv', this.user).subscribe (data )
  }*/
}
