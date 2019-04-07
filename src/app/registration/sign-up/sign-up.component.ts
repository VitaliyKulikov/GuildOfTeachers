import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validation';
import { RegistrationService } from '../../services/registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

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
  { name: 'Харків', value: 'Kharkiv' }];
  constructor(private fb: FormBuilder, public dialog: MatDialog, private service: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      NotHashPassword: [null, Validators.compose([
        UsernameValidator.passwordValid(), Validators.required
      ])],
      phone: [null, Validators.required],
      role: [null, Validators.required]
    });
  }
  logIn(data) {
    console.log(data);
    this.service.register(data).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/our-teacher']);
    }, (err) => {
      this.openDialog();
    });
  }
  openDialog() {
    this.dialog.open(ErrorMessageComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
