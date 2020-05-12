import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  regisrationForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    apartment: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    state: new FormControl(''),
  });
  constructor(
    private auth: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.auth.login({username, password}).pipe();
  }

}
