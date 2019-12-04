import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SSanta } from '../model/SSanta';
import { MatDialog } from '@angular/material/dialog';
import { PopupsouhaitComponent } from '../popupsouhait/popupsouhait.component';

@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.css']
})
export class SantaComponent implements OnInit {
  participants;
  souhaits;

  constructor(private myback: MybackService, private route: Router, private http: HttpClient,private dialog: MatDialog) {

    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.http.get(this.myback.lienHTTP + 'santa/participants/' + this.myback.santa.id)
      .subscribe(data => {
        this.participants = data;
      }, err => {
        console.log(err);
      });
      this.http.get(this.myback.lienHTTP + 'user/santa/souhaits/' + this.myback.user.id + '/' + this.myback.santa.id)
      .subscribe(data => {
        this.souhaits = data;
        console.log('souhaits', this.souhaits);
      }, err => {
        console.log(err);

      });
  }

  recupSouhaits() {
    this.http.get(this.myback.lienHTTP + 'user/santa/souhaits/' + this.myback.user.id + '/' + this.myback.santa.id)
      .subscribe(data => {
        this.souhaits = data;
        console.log('souhaits', this.souhaits);
      }, err => {
        console.log(err);

      });
  }

  afficherSouhaits(id){
    //const mydial =this.dialog.open(PopupsouhaitComponent);
    // mydial.afterClosed().subscribe(result => {
    //   this.ngOnInit();
    // });

  }

}
