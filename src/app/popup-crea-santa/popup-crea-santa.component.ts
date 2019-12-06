import { Component, OnInit } from '@angular/core';
import { SSanta } from '../model/SSanta';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-crea-santa',
  templateUrl: './popup-crea-santa.component.html',
  styleUrls: ['./popup-crea-santa.component.css']
})
export class PopupCreaSantaComponent implements OnInit {
  ssanta : SSanta = new SSanta();
  constructor(public mys :MybackService,private route :Router,private http: HttpClient, private dialogRef: MatDialogRef<PopupCreaSantaComponent>) { }

  ngOnInit() {
  }

  creaSanta(){
    console.log('curentuser', this.mys.user);
    this.ssanta.createur =this.mys.user;
    console.log('curentsanta', this.ssanta);
    this.ssanta.enCours=true;    
    console.log('curentsanta2', this.ssanta);

    this.http.post(this.mys.lienHTTP + '/createSSanta', this.ssanta).subscribe(data=>{
      console.log('data', data);
      this.dialogRef.close(); 
    },err => {
      console.log(err);
      
    })
  }

}
