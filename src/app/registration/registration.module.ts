import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationRoutingModule } from './registration-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module';
import { RegistrationService } from '../services/registration.service';
import { ErrorMessageComponent } from './../components/error-message/error-message.component';
@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent, ErrorMessageComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, RegistrationRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [RegistrationService],
  entryComponents: [ErrorMessageComponent]
})
export class RegistrationModule { }
