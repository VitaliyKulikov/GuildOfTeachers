import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageModule } from './homepage/homepage.module';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationModule} from './registration/registration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HomePageModule, RegistrationModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
