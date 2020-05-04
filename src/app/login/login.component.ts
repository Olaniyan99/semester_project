import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

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
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  authenticateLogin() {
    if (this.username === null || this.password === null) {
      this.loginError = true;
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

