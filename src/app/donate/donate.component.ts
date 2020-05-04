import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  submit = false;

  name = new FormControl('');
  cardNum = new FormControl('');
  ccv = new FormControl('');
  expDate = new FormControl('');
  address1 = new FormControl('');
  address2 = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zipCode = new FormControl('');


  submitBtn() {
    this.submit = true;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
