import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroPage } from './livro.page';

const routes: Routes = [
  {
    path: '',
    component: LivroPage
  },
  {
    path: 'revista',
    loadChildren: () => import('./revista/revista.module').then( m => m.RevistaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroPageRoutingModule {}
