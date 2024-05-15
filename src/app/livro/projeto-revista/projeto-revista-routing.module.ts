import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoRevistaPage } from './projeto-revista.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoRevistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoRevistaPageRoutingModule {}
