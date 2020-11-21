import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showRegisterOption: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required,])
  })

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    this.showRegisterOption = true;
  }

  login() {
    console.log(this.loginForm);
  }

}
