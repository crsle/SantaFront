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
  msgErr;
  constructor() { }
}
