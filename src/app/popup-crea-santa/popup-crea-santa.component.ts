import { Component, OnInit } from '@angular/core';
import { SSanta } from '../model/SSanta';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup-crea-santa',
  templateUrl: './popup-crea-santa.component.html',
  styleUrls: ['./popup-crea-santa.component.css']
})
export class PopupCreaSantaComponent implements OnInit {
  ssanta : SSanta = new SSanta();
  constructor(private mys :MybackService,private route :Router,private http: HttpClient) { }

  ngOnInit() {
  }

  creaSanta(){
    this.ssanta.user =this.mys.user;
    this.ssanta.enCours=true;
    this.http.post(this.mys.lienHTTP + '/createSSanta', this.ssanta).subscribe(data=>{
      this.ngOnInit();      
    },err => {
      console.log(err);
      
    })
  }

}
