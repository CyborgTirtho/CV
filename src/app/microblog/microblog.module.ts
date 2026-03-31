import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroblogRoutingModule } from './microblog-routing.module';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './main/left/left.component';


@NgModule({
  declarations: [
    MainComponent,
    PostComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    CommonModule,
    MicroblogRoutingModule
  ]
})
export class MicroblogModule { }
