import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FimQuizPage } from './fim-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: FimQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FimQuizPageRoutingModule {}
