import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http: HttpClient;

  constructor() {}

  login(loginInfo: {username: string, password: string} ) {
    const loginReq = this.http.post('http://localhost:4200/users/login', {loginInfo});
    return loginReq;
  }

  register(userInfo: {
    name: string;
    username: string;
    password: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string
  }) {
    const registrationInfo = this.http.post('http://localhost:4200/users/create_account', userInfo);
    return registrationInfo;
  }



}
