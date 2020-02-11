import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MapService } from './_services/map.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './examples/landing/landing.component';
import { AboutComponent } from './examples/landing/about/about.component';
import { AboutUsComponent } from './examples/landing/about-us/about-us.component';
import { HeaderComponent } from './examples/landing/header/header.component';
import { MapComponent } from './examples/landing/map/map.component';
import { PlanInfoComponent } from './examples/landing/plan-info/plan-info.component';
import { KeepInTouchComponent } from './examples/landing/keep-in-touch/keep-in-touch.component';
import { GuideComponent } from './examples/landing/guide/guide.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    AboutUsComponent,
    HeaderComponent,
    MapComponent,
    PlanInfoComponent,
    KeepInTouchComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
