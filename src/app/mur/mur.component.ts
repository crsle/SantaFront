import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Participation } from '../model/Participation';
import { UploadimageComponent } from '../uploadimage/uploadimage.component';

@Component({
  selector: 'app-mur',
  templateUrl: './mur.component.html',
  styleUrls: ['./mur.component.css']
})
export class MurComponent implements OnInit {
  
  mursanta;
  parti;
  test;

  imgConv;
 p :Participation= new Participation();
  constructor(private myback: MybackService, private route: Router, private http: HttpClient,private dialog: MatDialog) {

    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }
  ngOnInit() {
    this.http.get(this.myback.lienHTTP+'/participation/'+this.myback.user.id+'/'+this.myback.santa.id)
    .subscribe(data => {
      this.parti=data;
      this.p=this.parti;
      

      this.http.get(this.myback.lienHTTP+'/mur/messages/'+ this.p.evenement.id)
      .subscribe(data2 => {
        this.mursanta = data2;




      },err => {
        console.log(err);
      });



    }, err => {
      console.log(err);
    });


    this.http.get(this.myback.lienHTTP + 'mur/messages/2/7').subscribe( data => {
      this.test = data;
      this.imgConv = window.atob(this.test.image);
    }, err => {
      console.log(err);
    })

}


changeImForm(img){  
    return window.atob(img);
}
imageExist(img){
  if (img==null){
    return false;
  }else{
    return true;
  }

}

msgExist(msg){
  if (msg==null){
    return false;
  }else{
    return true;
  }

}
  

openUploadImage() {
  const mydial =this.dialog.open(UploadimageComponent);
  mydial.afterClosed().subscribe(result => {
    this.ngOnInit();
  });
}
}
