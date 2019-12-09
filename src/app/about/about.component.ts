import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Participation } from '../model/Participation';
import { SSanta } from '../model/SSanta';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  eventsenAttente;
  parti;
  p: Participation = new Participation();
  constructor(public myback: MybackService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
    this.recupSantaenAttente();
    this.recupNbSantaenAttente()
  }

  recupNbSantaenAttente(){
    this.http.get(this.myback.lienHTTP+'nbSanta/'+ this.myback.user.id + '/' + false+ '/' + true)
    .subscribe(data => {
      console.log(data);      
      this.myback.nbInvitations=data;
    }, err => { 
      console.log(err);
    });

  }

  recupSantaenAttente() {
    this.http.get(this.myback.lienHTTP + 'participantsanta/' + this.myback.user.id + '/' + false + '/' + true)
      .subscribe(data => {
        if (data ==null) {
          this.myback.aucuneInvit = true;
        }
        else {
          this.myback.aucuneInvit = false;
          this.eventsenAttente = data;
        }
        
      }, err => {
        console.log(err);
      });
  }

  confirmParticipation(s: SSanta) {
    this.http.get(this.myback.lienHTTP + '/participation/' + this.myback.user.id + '/' + s.id)
      .subscribe(data => {
        this.parti = data;
        this.p = this.parti;

        this.p.present = true;

        this.http.post(this.myback.lienHTTP + '/participation/valider', data)
          .subscribe(data2 => {
            this.route.navigate(['home']);
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
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

  goSanta(s:SSanta) {
    this.myback.santa=s;
    this.route.navigate(['santa']);
  }

}
