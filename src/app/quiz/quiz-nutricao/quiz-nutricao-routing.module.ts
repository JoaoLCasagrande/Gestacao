import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizNutricaoPage } from './quiz-nutricao.page';

const routes: Routes = [
  {
    path: '',
    component: QuizNutricaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizNutricaoPageRoutingModule {}
