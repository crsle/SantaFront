import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  eventshistorique;

  constructor(private myback: MybackService,private route :Router,private http: HttpClient,private dialog: MatDialog) { }

  ngOnInit() {
  //   this.http.get(this.myback.lienHTTP+'participantsanta/'+ this.myback.user.id + '/' + true)
  //   .subscribe(data => {
  //     this.eventshistorique = data;
  //   }, err => {
  //     console.log(err);
  //   });
  // }

}
