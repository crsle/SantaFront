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
  bool;
  msg;
  msgV;

  constructor(public mys: MybackService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  inscription() {
    this.http.post(this.mys.lienHTTP + 'inscription', this.user).subscribe(data => {
      console.log(data)
      if (data == true) {
        this.msg = 'mail déjà utilisé'
      } else {
        this.msg = ''
        this.msgV = 'Bien enregistré';

        setTimeout(() => { 
          this.redirectLogin();
        }, 1500);
      }

    }, err => {
      console.log(err);
    });
  }



  redirectLogin() {
    this.route.navigate(['/login']);
  }


}
