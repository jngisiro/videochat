import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideochatComponent } from './videochat/videochat.component';


@NgModule({
  declarations: [VideochatComponent],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
