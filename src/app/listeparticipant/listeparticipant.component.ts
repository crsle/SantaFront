import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupsouhaitComponent } from '../popupsouhait/popupsouhait.component';
import { PopupdetailparticipantComponent } from '../popupdetailparticipant/popupdetailparticipant.component';
import { Participation } from '../model/Participation';
import { ConfirmationpopupComponent } from '../confirmationpopup/confirmationpopup.component';

@Component({
  selector: 'app-listeparticipant',
  templateUrl: './listeparticipant.component.html',
  styleUrls: ['./listeparticipant.component.css']
})

export class ListeparticipantComponent implements OnInit {
  participantsPresents;
  participantsEnAttente;
  santa;
  cible;

  participant = new Participation();
  ppp;
  pp = new Participation();
  tirageFait = false;
  boutonTirage;
  allAccepted = true;

  constructor(public myback: MybackService, private route: Router, private http: HttpClient, private dialog: MatDialog) {
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
    this.isProprio();
  }

  ngOnInit() {
    this.recupParticipantsPresents();
    this.recupParticipantsEnAttente();
    this.verificationTirageFait();
  }

  recupParticipantsPresents() {
    this.http.get(this.myback.lienHTTP + 'santa/participants/' + this.myback.santa.id + '/1')
      .subscribe(data => {
        this.participantsPresents = data;
        this.allAccepted=true;
        this.participantsPresents.forEach(p => {
          if (p.present == false) {
            console.log('partcicipant : ' + p.participant)
            console.log('present : ' + p.present)
            this.allAccepted = false;
          }
        });
      }, err => {
        console.log(err);
      });
  }

  recupParticipantsEnAttente() {
    this.http.get(this.myback.lienHTTP + 'santa/participants/' + this.myback.santa.id + '/0')
      .subscribe(data => {
        this.participantsEnAttente = data;
        if (this.participantsEnAttente != null) {
          this.allAccepted = false
        }
      }, err => {
        console.log(err);
      });
  }

  verificationTirageFait() {
    this.http.get(this.myback.lienHTTP + 'ssanta/' + this.myback.santa.id)
      .subscribe(data => {
        this.santa = data;
        this.tirageFait = this.santa.tirageFait;
        if (this.myback.utilisateurProprio && this.tirageFait == false) {
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
        this.myback.santa.tirageFait = true;
        this.http.post(this.myback.lienHTTP + 'ssanta', this.myback.santa)
          .subscribe(data => {
            this.ngOnInit();
          }, err => {

          });
      }, err => {
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
  }

  isProprio() {
    if (this.myback.user.id == this.myback.santa.createur.id) {
      this.myback.utilisateurProprio = true;
    }
    else {
      this.myback.utilisateurProprio = false;
    }
  }


  delete(idparticipant) {
    this.http.delete(this.myback.lienHTTP + '/SupprimerParticipation/' + idparticipant + '/' + this.myback.santa.id)
      .subscribe(data => {
        this.ngOnInit()
      }, err => {
        console.log(err);
      });
  }

  cloture(){
    this.http.post(this.myback.lienHTTP + '/clotureSanta' , this.myback.santa)
    .subscribe(data =>{
      //this.ngOnInit()
    },err =>{
      console.log(err);
    });  
 
  }

  deleteVisilble(id: number) {
    if (this.myback.utilisateurProprio && this.myback.boutonTirageVisible) {
      if (id == this.myback.user.id) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  popupconfirmation() {
    const mydial = this.dialog.open(ConfirmationpopupComponent);
  }

}
