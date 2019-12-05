import { Injectable } from '@angular/core';
import { User } from './model/User';
import { SSanta } from './model/SSanta';

@Injectable({
  providedIn: 'root'
})
export class MybackService {

  bartoi = true;
  menuVisible = false;
  user :User =new User();
  santa : SSanta = new SSanta();
  lienHTTP='http://localhost:8090/';
  idParticipantSelectionne;
  msgErr;
  utilisateurProprio = false

  idEventClickInv;
  constructor() {
 
  }

  kilSes(){
    this.user.mail = null;
  }

  recupSes() {
    // this.user = localStorage.getItem('UserConect') as any;

    console.log('tes af ses 1 ' , JSON.parse(localStorage.getItem('UserConect')));
    console.log('tes af ses 2' , JSON.stringify(this.user));
    let u :User = JSON.parse(localStorage.getItem('UserConect'));
    this.user = JSON.parse(localStorage.getItem('UserConect'));

    console.log('tes af ses 3' , u);
  }

  recupUserC() {
    let u :User = JSON.parse(localStorage.getItem('UserConect'));

    if(u != null){

      return u;
    }
    else{
      return this.user;
    }

  }
}
