import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validation';
import { RegistrationService } from '../../services/registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private service: RegistrationService) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: [null, Validators.compose([
        UsernameValidator.passwordValid(), Validators.required
      ])]
    });
  }
  openDialog() {
    this.dialog.open(ErrorMessageComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

logIn(data) {
  this.service.login(data).subscribe((res) => {
    console.log(res);
    this.router.navigate(['/our-teacher']);
  },
    (err) => {
      this.openDialog();

    }
    );
}

}
