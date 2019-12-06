import { Component, OnInit, Inject } from '@angular/core';
import { MybackService } from '../myback.service';
import { SSanta } from '../model/SSanta';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupCreaSantaComponent } from '../popup-crea-santa/popup-crea-santa.component';
import { User } from '../model/User';
import { Participation } from '../model/Participation';
import { PopupInvitationComponent } from '../popup-invitation/popup-invitation.component';
import { SantaComponent } from '../santa/santa.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//bartoi = true;
ssanta : SSanta = new SSanta();
user : User = new User();
eventsAccepte;
eventsenAttente;
parti;
p :Participation= new Participation();
boutonInviterMembreVisible;

  constructor(public myback: MybackService,private route :Router,private http: HttpClient,private dialog: MatDialog) {
    
     if(myback.recupUserC().mail != null){
       this.myback.user = this.myback.recupUserC();
      this.myback.menuVisible=true;
    }else{
      this.myback.msgErr='Vous devez vous connectez';
      this.route.navigate(['login']);
    }
   }

  ngOnInit() {
    this.recupSanta();
    this.recupSantaenAttente();
  }

  recupSanta(){
    this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id + '/' + true+ '/' + true)
    .subscribe(data => {
      if (data ==null) {
        this.myback.aucunEvenement = true;
      }
      else {
        this.myback.aucunEvenement = false;
        this.eventsAccepte = data;
      }
      
    }, err => {
      console.log(err);
    });

  }

  recupSantaenAttente(){
    this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id + '/' + false+ '/' + true)
    .subscribe(data => {
      this.eventsenAttente = data;
    }, err => { 
      console.log(err);
    });

  }

  openPopupCreaSanta() {
    const mydial =this.dialog.open(PopupCreaSantaComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  isProprio(s:Participation ){
    this.ssanta = s.evenement;
    if(this.myback.user.id == this.ssanta.createur.id){
      return true;
    }
    else {
      return false;
    }
  }

  goSanta(s:SSanta) {
    this.myback.santa=s;
    this.route.navigate(['santa']);
  }


  confirmParticipation(s:SSanta){
    this.http.get(this.myback.lienHTTP+'/participation/'+this.myback.user.id+'/'+s.id)
    .subscribe(data => {
      this.parti=data;
      this.p=this.parti;
      
      this.p.present=true;
      
      this.http.post(this.myback.lienHTTP+'/participation/valider', data)
      .subscribe(data2 => {
        this.ngOnInit();
        

      },err => {
        console.log(err);
      });



    }, err => {
      console.log(err);
    });

  }


  callPopupInv(id) {
    this.myback.idEventClickInv = id;
    const mydial =this.dialog.open(PopupInvitationComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  nonConfirmParticipation(s:SSanta){

    this.http.delete(this.myback.lienHTTP + '/SupprimerParticipation/' +this.myback.user.id+'/'+ s.id)
    .subscribe(data =>{
      this.ngOnInit()
    },err =>{
      console.log(err);
    });
  }
  
}
