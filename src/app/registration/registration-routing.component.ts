import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const registrationroutes: Routes = [{
    path: 'sign-in', component: SignInComponent
}, {
    path: 'sign-up', component: SignUpComponent
}];

@NgModule({
    imports: [RouterModule.forChild(registrationroutes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule { }
