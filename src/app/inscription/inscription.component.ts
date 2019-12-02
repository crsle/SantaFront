import { Component, OnInit } from '@angular/core';
import { MybackService } from '../myback.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: User = new User();
  err;

  constructor(private mys: MybackService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }
inscription(){
  this.http.post(this.mys.lienHTTP + 'user', this.user).subscribe( data =>{

  }, err =>{
    this.err = 'erreur';
  });

  this.route.navigate(['/login']);


}
}
