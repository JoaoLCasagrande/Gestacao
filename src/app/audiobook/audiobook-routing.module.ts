import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiobookPage } from './audiobook.page';

const routes: Routes = [
  {
    path: '',
    component: AudiobookPage
  },
  {
    path: 'capitulo-um',
    loadChildren: () => import('./capitulo-um/capitulo-um.module').then( m => m.CapituloUmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiobookPageRoutingModule {}
