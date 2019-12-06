import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SSanta } from '../model/SSanta';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  eventsHistorique;
  eventsHistoriquebis;

  constructor(public myback: MybackService,private route :Router,private http: HttpClient,private dialog: MatDialog) {
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.recupSantaHistorique();
  }

  recupSantaHistorique(){
    this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id + '/' + true+ '/' + false)
    .subscribe(data => {
     
      this.eventsHistorique = data;
    }, err => {
      console.log(err);
    });
  }
  
  goSanta(s:SSanta) {
    this.myback.santa=s;
    this.route.navigate(['santa']);
  }
}
