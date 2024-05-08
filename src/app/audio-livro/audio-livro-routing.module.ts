import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioLivroPage } from './audio-livro.page';

const routes: Routes = [
  {
    path: '',
    component: AudioLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioLivroPageRoutingModule {}
