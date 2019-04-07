import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  allCities = [{ name: 'Львів', value: 'Lviv' },
  { name: 'Київ', value: 'Kyiv' },
  { name: 'Дніпро', value: 'Dnipro' },
  { name: 'Харків', value: 'Kharkiv' }]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: [null, Validators.compose([
        UsernameValidator.passwordValid(), Validators.required
      ])],
      phone: [null],
      role: [null]
    });
  }
  logIn(data) {
    // this.service.login(data).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
