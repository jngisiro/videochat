import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideochatComponent } from './videochat/videochat.component';

const routes: Routes = [
  {
    path: '',
    component: VideochatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
