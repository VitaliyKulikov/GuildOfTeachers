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
<<<<<<< HEAD
=======
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token');
    },
    whitelistedDomains: ['localhost:8100', 'localhost:3000']
  };
}
>>>>>>> 4fa6acdf761cd4bf3c2a423de73f94ea0ae01d7f
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, OurTeacherModule,
<<<<<<< HEAD
    AppRoutingModule, HomePageModule, RegistrationModule, BrowserAnimationsModule, MaterialModule
=======
    AppRoutingModule, HomePageModule, RegistrationModule, BrowserAnimationsModule, MaterialModule, JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })
>>>>>>> 4fa6acdf761cd4bf3c2a423de73f94ea0ae01d7f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
