import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupsouhaitComponent } from '../popupsouhait/popupsouhait.component';
import { PopupdetailparticipantComponent } from '../popupdetailparticipant/popupdetailparticipant.component';
import { SSanta } from '../model/SSanta';
import { Participation } from '../model/Participation';
import { Button } from 'protractor';
import { ConfirmationpopupComponent } from '../confirmationpopup/confirmationpopup.component';

@Component({
  selector: 'app-resultattirage',
  templateUrl: './resultattirage.component.html',
  styleUrls: ['./resultattirage.component.css']
})
export class ResultattirageComponent implements OnInit {
  participants;
  santa;
  participation;
  toutLeMondeAccepte = true;
  p;

  participant = new Participation();
  tirageFait = false;
  boutonTirage;

  constructor(public myback: MybackService, private route: Router, private http: HttpClient, private dialog: MatDialog) {
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
      
    }
    

  }

  ngOnInit() {
    
    this.cibleCadeau();
    
    
  }



  cibleCadeau(){
    this.http.get(this.myback.lienHTTP + 'santa/cible/'+this.myback.user.id+'/'+this.myback.santa.id).subscribe(data =>{
      
      
      this.participation = data;
      
      this.myback.cible = this.participation;

     }, err =>{
      console.log(err);
     });
     
  }

  afficherSouhaits(id) {
    this.myback.idParticipantSelectionne = id;
    const mydial = this.dialog.open(PopupsouhaitComponent);
  }

  afficherDetails(id: number) {
    this.myback.idParticipantSelectionne = id;
    const mydial = this.dialog.open(PopupdetailparticipantComponent);
    console.log('participation :' + this.participation)
    console.log('cible :' + this.myback.cible)
  }

  





}