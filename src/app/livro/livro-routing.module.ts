import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroPage } from './livro.page';

const routes: Routes = [
  {
    path: '',
    component: LivroPage
  },
  {
    path: 'projeto-revista',
    loadChildren: () => import('./projeto-revista/projeto-revista.module').then( m => m.ProjetoRevistaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroPageRoutingModule {}
