import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { NewsComponent } from './news/news.component';
import { UpdatesComponent } from './updates/updates.component';
@NgModule({
    declarations: [
        HomepageComponent,
        HeaderComponent,
        HeroBannerComponent,
        AboutUsComponent,
        BenefitsComponent,
        NewsComponent,
        UpdatesComponent


    ],
    imports: [
        BrowserModule,
         HomePageRoutingModule
    ],
    providers: []
})
export class HomePageModule { }
