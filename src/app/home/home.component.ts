import { Component, OnInit, Inject } from '@angular/core';
import { MybackService } from '../myback.service';
import { SSanta } from '../model/SSanta';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupCreaSantaComponent } from '../popup-crea-santa/popup-crea-santa.component';
import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//bartoi = true;
ssanta : SSanta = new SSanta();
user: User = new User();
events;
invite;
  constructor(private myback: MybackService,private route :Router,private http: HttpClient,private dialog: MatDialog) {
    
     if(myback.recupUserC().mail != null){
       this.myback.user = this.myback.recupUserC();
      this.myback.menuVisible=true;
    }else{
      this.myback.msgErr='Vous devez vous connectez';
      this.route.navigate(['login']);
    }
   }

  ngOnInit() {
    this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id)
    .subscribe(data => {
      this.events = data;
    }, err => {
      console.log(err);
    });
  }

  /*invitationUser(){
    this.http.get(this.myback.lienHTTP+'invitation', this.user).subscribe(data =>{
      this.invite = data;

    }, err =>{
      console.log(err);
    }
    this.invitationParticipant();
    );


  }
  invitationParticipant(){
    this.http.get(this.myback.lienHTTP+'inv', this.user).subscribe (data )
  }*/


  openPopupCreaSanta() {
    const mydial =this.dialog.open(PopupCreaSantaComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  isProprio(u: User, s:SSanta ){
    if(u.id = s.createur.id){
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

  
}
