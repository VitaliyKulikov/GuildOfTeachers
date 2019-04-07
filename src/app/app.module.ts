import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './homepage/homepage.module';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationModule } from './registration/registration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/modules/material/material.module';
import { OurTeacherModule } from './our-teacher/our-teacher.module';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
//import { GetUserComponent } from './service/get-user/get-user.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfileLeftSideComponent } from './profile-data/profile-left-side/profile-left-side.component';


export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token');
    },
    whitelistedDomains: ['localhost:8100', 'localhost:3000']
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ProfileDataComponent,
    ProfileLeftSideComponent
  ],
  imports: [
    BrowserModule, OurTeacherModule,
    AppRoutingModule, HomePageModule, RegistrationModule, BrowserAnimationsModule, MaterialModule, JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }), BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
