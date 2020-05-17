import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { catchError, map, first } from 'rxjs/operators';


@Component({
  selector: './app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  continueButton = false;
  loginError = false;
  flag = false;

  username: string;
  email: string;
  password: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;

  constructor(
    private router: Router,
    private auth: LoginService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  authenticateLogin() {
    const username = this.username;
    const password = this.password;
    // if(username !== undefined && username !== null){
    const user = this.auth
      .login({ username, password })
      .pipe(first())
      .subscribe(
        (response: any) => {
        console.log(response);
        const parsedUser = JSON.stringify(response.user);
        localStorage.setItem('user', parsedUser);
      });
    console.log(user);
  }

  createUser() {
    const obj = {
      username: this.username,
      email: this.email,
      password: this.password,
      address1: this.address1,
      address2: this.address2,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode
    };

    const payload = this.auth
    .register(obj).subscribe((response: any) => {
      console.log(response);
    });
  }


  ifParent() {
    document.getElementById('parent').style.backgroundColor = 'rgb(249, 193, 174)';
    document.getElementById('student').style.backgroundColor = 'white';
  }

  ifStudent() {
    document.getElementById('student').style.backgroundColor = 'rgb(249, 193, 174)';
    document.getElementById('parent').style.backgroundColor = 'white';
  }

  continue() {
    this.continueButton = true;
  }

}

