import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { HomePageRoutingModule } from './homepage-routing.module';
@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        BrowserModule,
         HomePageRoutingModule
    ],
    providers: []
})
export class HomePageModule { }
