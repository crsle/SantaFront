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

@Component({
  selector: 'app-listeparticipant',
  templateUrl: './listeparticipant.component.html',
  styleUrls: ['./listeparticipant.component.css']
})
export class ListeparticipantComponent implements OnInit {
  participants;
  santa;
  cible;
  toutLeMondeAccepte = true;

  participant = new Participation();
  tirageFait = false;
  boutonTirage;

  constructor(public myback: MybackService, private route: Router, private http: HttpClient, private dialog: MatDialog) {
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
    this.isProprio();

  }

  ngOnInit() {
    
    
    this.recupParticipants();
    this.verificationTirageFait();
    
    
  }

  recupParticipants() {
    this.http.get(this.myback.lienHTTP + 'santa/participants/' + this.myback.santa.id)
      .subscribe(data => {
        this.participants = data;
      }, err => {
        console.log(err);
      });
  }

  verificationTirageFait() {
    this.http.get(this.myback.lienHTTP + 'ssanta/' + this.myback.santa.id)
      .subscribe(data => {
        this.santa = data;
        this.tirageFait = this.santa.tirageFait;
        if (this.myback.utilisateurProprio && this.tirageFait==false) {
          this.myback.boutonTirageVisible = true;
        }
        else {
          this.myback.boutonTirageVisible = false;
        }
        console.log('bouton visible', this.myback.boutonTirageVisible)
      }, err2 => {
        console.log(err2);
      });
  }



  tirage() {
    this.http.get(this.myback.lienHTTP + 'santa/tirage/' + this.myback.santa.id)
      .subscribe(data => {
      }, err => {
        console.log(err);
      });
    this.myback.santa.tirageFait = true;
    this.http.post(this.myback.lienHTTP + 'ssanta', this.myback.santa)
      .subscribe(data => {
        this.ngOnInit();
      }, err => {
        
      });

  }

  afficherSouhaits(id) {
    this.myback.idParticipantSelectionne = id;
    const mydial = this.dialog.open(PopupsouhaitComponent);
  }

  afficherDetails(id: number) {
    this.myback.idParticipantSelectionne = id;
    const mydial = this.dialog.open(PopupdetailparticipantComponent);
  }

  isProprio() {
    if (this.myback.user.id == this.myback.santa.createur.id) {
      this.myback.utilisateurProprio = true;
    }
    else {
      this.myback.utilisateurProprio = false;
    }
  }


  delete(idparticipant){
    this.http.delete(this.myback.lienHTTP + '/SupprimerParticipation/' +idparticipant+'/'+ this.myback.santa.id)
    .subscribe(data =>{
      this.ngOnInit()
    },err =>{
      console.log(err);
    });    
  }

  cloture(){
    this.http.post(this.myback.lienHTTP + '/clotureSanta' , this.myback.santa)
    .subscribe(data =>{
      this.ngOnInit()
    },err =>{
      console.log(err);
    });  

  }

  popupconfirmation(){
    const mydial = this.dialog.open(PopupdetailparticipantComponent);
  }

}
