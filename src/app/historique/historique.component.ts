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

  constructor(private myback: MybackService,private route :Router,private http: HttpClient,private dialog: MatDialog) { }

  ngOnInit() {
    this.recupSantaHistorique();
    this.recupSantaHistoriquebis();
  

  }

  recupSantaHistorique(){
    this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id + '/' + true+ '/' + false)
    .subscribe(data => {
     
      this.eventsHistorique = data;
    }, err => {
      console.log(err);
    });
  }
  recupSantaHistoriquebis(){
    this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id + '/' + false+ '/' + false)
    .subscribe(data => {
      
      this.eventsHistoriquebis = data;
    }, err => {
      console.log(err);
    });
  }
  goSanta(s:SSanta) {
    this.myback.santa=s;
    this.route.navigate(['santa']);
  }
}
