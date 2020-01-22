import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './landing/header/header.component';
import { AboutComponent } from './landing/about/about.component';
import { GuideComponent } from './landing/guide/guide.component';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { KeepInTouchComponent } from './landing/keep-in-touch/keep-in-touch.component';
import { PlanInfoComponent } from './landing/plan-info/plan-info.component';
import { MapComponent } from './landing/map/map.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        HeaderComponent,
        AboutComponent,
        GuideComponent,
        AboutUsComponent,
        KeepInTouchComponent,
        PlanInfoComponent,
        MapComponent
    ]
})
export class ExamplesModule { }
