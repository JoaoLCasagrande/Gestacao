import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiobookPage } from './audiobook.page';

const routes: Routes = [
  {
    path: '',
    component: AudiobookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiobookPageRoutingModule {}
