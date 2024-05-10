import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage
  },
  {
    path: 'quiz-livro-meu',
    loadChildren: () => import('./quiz-livro-meu/quiz-livro-meu.module').then( m => m.QuizLivroMeuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
