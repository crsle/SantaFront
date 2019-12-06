import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Mur } from '../model/Mur';
import { MybackService } from '../myback.service';
import { Participation } from '../model/Participation';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {
  parti;
 p :Participation= new Participation();

  selectedFile: File = null;
  imgURL: any;
  import: Mur = new Mur();
  ok;
  visibleimgenvoye = false;
  trueFalse() {
    this.visibleimgenvoye = true;
  }


  constructor(private myback: MybackService,private http: HttpClient, private route: Router, private dialogRef: MatDialogRef<UploadimageComponent>) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.imgURL = reader.result;
      this.ok = reader.result;
    };
  }



  onUpload(messageimage) {

    this.import.message = messageimage;
    //this.import.image = window.btoa(this.ok);
    if (this.ok ==null){
      this.import.image=this.ok;
    }else{
      this.import.image = window.btoa(this.ok);
    }
    
    
    console.log(this.myback.user);
    console.log(this.myback.santa);
    this.http.get(this.myback.lienHTTP+'/participation/'+this.myback.user.id+'/'+this.myback.santa.id)
    .subscribe(data => {
      this.parti=data;
      this.p=this.parti;
      this.import.participation=this.p;
     
      console.log(this.p);

      this.http.post(this.myback.lienHTTP+'/uploadMur', this.import)
      .subscribe(data2 => {
        this.dialogRef.close();

      },err => {
        console.log(err);
      });



    }, err => {
      console.log(err);
    });
    console.log(this.p);


    
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
