import { Component, OnInit } from '@angular/core';

@Component({
  selector: './app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  continueButton = false;
  loginError = false;

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

  continue() {
    this.continueButton = true;
  }

}

