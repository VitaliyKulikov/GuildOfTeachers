import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
@NgModule({
    declarations: [
        HomepageComponent,
        HeaderComponent,
        HeroBannerComponent
    ],
    imports: [
        BrowserModule,
         HomePageRoutingModule
    ],
    providers: []
})
export class HomePageModule { }
