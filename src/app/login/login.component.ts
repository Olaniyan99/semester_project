import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { catchError, map, first } from 'rxjs/operators';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: './app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  continueButton = false;
  loginError = false;
  flag = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  // registerForm1 = new FormGroup({
  //   "username": new FormControl(""),
  //   "password": new FormControl(""),
  //   "email": new FormControl("")
  // })

  // registerForm2 = new FormGroup({
  //   address1: new FormControl(""),
  //   address2: new FormControl(""),
  //   city: new FormControl("")
  // });

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
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
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
    if (user) {
        setTimeout(() => {
          this.router.navigate(['homepage']);
     }, 1000);
      }
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
    if (payload) {
      setTimeout(() => {
        this.router.navigate(['homepage']);
   }, 1500);
    }
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

