import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizLivroMeuPage } from './quiz-livro-meu.page';

const routes: Routes = [
  {
    path: '',
    component: QuizLivroMeuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizLivroMeuPageRoutingModule {}
