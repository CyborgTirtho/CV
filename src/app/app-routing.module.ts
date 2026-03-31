import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DetatilsComponent } from './detatils/detatils.component';
import { BlogComponent } from './blog/blog.component';
import { LiveDrumAppComponent } from './live-drum-app/live-drum-app.component';
import { AngularPerformanceTuningComponent } from './angular-performance-tuning/angular-performance-tuning.component';

const routes: Routes = [{ path: '', component: ProfileComponent },
{ path: 'details', component: DetatilsComponent },
{ path: 'drum', component: LiveDrumAppComponent },
{ path: 'drum', component: LiveDrumAppComponent },
{ path: 'perfomence', component: AngularPerformanceTuningComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
