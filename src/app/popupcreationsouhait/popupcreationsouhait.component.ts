import { Component, OnInit } from '@angular/core';
import { Souhait } from '../model/Souhait';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupcreationsouhait',
  templateUrl: './popupcreationsouhait.component.html',
  styleUrls: ['./popupcreationsouhait.component.css']
})
export class PopupcreationsouhaitComponent implements OnInit {
  souhait = new Souhait();
  nvOrdre;
  nvDescription;

  constructor(public mys :MybackService,private route :Router,private http: HttpClient, private dialogRef: MatDialogRef<PopupcreationsouhaitComponent>) { }

  ngOnInit() {
  }

  creaSouhait(){
    this.souhait.personne=this.mys.user;
    this.souhait.santa = this.mys.santa;
    this.nvOrdre = document.getElementById("ordreSouhait");
    this.souhait.ordre = this.nvOrdre.value;
    this.nvDescription= document.getElementById("descsouhait");
    this.souhait.description = this.nvDescription.value;
    console.log('souhait',this.souhait)
    this.http.post(this.mys.lienHTTP+'souhait',this.souhait)
    .subscribe(data => {
      this.dialogRef.close();
    }, err => {
      console.log(err);
    });
  }

}
