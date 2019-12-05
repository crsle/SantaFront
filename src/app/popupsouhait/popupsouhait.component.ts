import { Component, OnInit, Inject } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popupsouhait',
  templateUrl: './popupsouhait.component.html',
  styleUrls: ['./popupsouhait.component.css']
})
export class PopupsouhaitComponent implements OnInit {
  psouhaits;

  constructor(private myback: MybackService, private route: Router, private http: HttpClient) {

    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }}

  ngOnInit() {
    this.http.get(this.myback.lienHTTP + 'user/santa/souhaits/' + this.myback.idParticipantSelectionne + '/' + this.myback.santa.id)
      .subscribe(data => {
        this.psouhaits = data;
        console.log('souhaits', this.psouhaits);
      }, err => {
        console.log(err);

      });
  }

}
