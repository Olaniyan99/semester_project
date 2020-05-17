import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/userInterface';
import { catchError, map, first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
}

  login(info: { username: string; password: string }) {
    console.log(info);
    return this.http.post('http://localhost:3000/users/login', {info});
  }


  register(userInfo: {
    username: string;
    password: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string
  }) {
    const registrationInfo = this.http.post('http://localhost:3000/users/create_account', userInfo);
    return registrationInfo;
  }



}
