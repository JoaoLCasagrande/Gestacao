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
  },
  {
    path: 'fim-quiz',
    loadChildren: () => import('./fim-quiz/fim-quiz.module').then( m => m.FimQuizPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
