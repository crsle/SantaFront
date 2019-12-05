import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupsouhaitComponent } from '../popupsouhait/popupsouhait.component';
import { PopupdetailparticipantComponent } from '../popupdetailparticipant/popupdetailparticipant.component';

@Component({
  selector: 'app-listeparticipant',
  templateUrl: './listeparticipant.component.html',
  styleUrls: ['./listeparticipant.component.css']
})
export class ListeparticipantComponent implements OnInit {
  participants;
  cible;

  constructor(private myback: MybackService, private route: Router, private http: HttpClient, private dialog: MatDialog) {
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  
   }

  ngOnInit() {
    this.http.get(this.myback.lienHTTP + 'santa/participants/' + this.myback.santa.id)
      .subscribe(data => {
        this.participants = data;
      }, err => {
        console.log(err);
      });
  }
  tirage(){
    this.http.get(this.myback.lienHTTP + 'santa/tirage/' + this.myback.santa.id)
    .subscribe(data =>{
      console.log('data',data)
    },err =>{
      console.log(err);
    });
  }

  afficherSouhaits(id) {
    this.myback.idParticipantSelectionne = id;
    const mydial = this.dialog.open(PopupsouhaitComponent);
  }

  afficherDetails(id:number){
    this.myback.idParticipantSelectionne=id;
    const mydial = this.dialog.open(PopupdetailparticipantComponent);
  }

}
