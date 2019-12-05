import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SSanta } from '../model/SSanta';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupsouhaitComponent } from '../popupsouhait/popupsouhait.component';
import { Souhait } from '../model/Souhait';
import { PopupcreationsouhaitComponent } from '../popupcreationsouhait/popupcreationsouhait.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.css']
})
export class SantaComponent implements OnInit {
  



  constructor(private myback: MybackService, private route: Router, private http: HttpClient, private dialog: MatDialog) {

    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {

  }


}
