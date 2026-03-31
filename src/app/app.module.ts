import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DetatilsComponent } from './detatils/detatils.component';
import { BlogComponent } from './blog/blog.component';
import { LiveDrumAppComponent } from './live-drum-app/live-drum-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AngularPerformanceTuningComponent } from './angular-performance-tuning/angular-performance-tuning.component';
import { MetronomeComponent } from './metronome/metronome.component';
import { FirestoreModule } from '@angular/fire/firestore';


@NgModule({
    declarations: [AppComponent, MetronomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FirestoreModule,
        ProfileComponent,
        DetatilsComponent,
        BlogComponent,
        LiveDrumAppComponent,
        AngularPerformanceTuningComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
