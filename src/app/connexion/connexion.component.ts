import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
user: User = new User();
  u;
  msgErrorConnect;
  constructor(public mys: MybackService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
   this.dejaCo();
  }

  dejaCo() {
    if(this.mys.recupUserC().mail != null){
      this.route.navigate(['home']);
   }
  }

  connexion() {
   // console.log(this.user.mail);
    this.http.post(this.mys.lienHTTP + '/connexion', this.user).subscribe(data => {
     // console.log('data', data);
      this.verifCo(data);
    })
  }

  verifCo(data) {
    this.u = data;
    if (this.u.mail != null) {
      this.mys.user=this.u;
      localStorage.setItem('UserConect', JSON.stringify(this.u));             //Utilisateur mis en session
     // this.mys.recupSes();
     this.mys.bartoi = true;
      this.route.navigate(['home']);                          //On retourne vers home
    }else{
      this.mys.msgErr=' identifiant ou mot de passe  incorrect';
    }
  }

  goInscription() {
    this.route.navigate(['user']);
  }
}
