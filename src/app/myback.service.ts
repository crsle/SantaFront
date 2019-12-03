import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class MybackService {
  
  bartoi = true;
  menuVisible = false;
  user :User =new User();
  lienHTTP='http://localhost:8090/';
  msgErr;
  constructor() { }
}
