import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'livro',
    loadChildren: () => import('./livro/livro.module').then( m => m.LivroPageModule)
  },
  {
    path: 'audiobook',
    loadChildren: () => import('./audiobook/audiobook.module').then( m => m.AudiobookPageModule)
  },
  {
    path:'audiobook-meu',
    loadChildren: () => import('./audiobook/audiobook-meu/audiobook-meu-routing.module').then( m => m.AudiobookMeuPageRoutingModule)
  },
  {
    path: 'audio-livro',
    loadChildren: () => import('./audio-livro/audio-livro.module').then( m => m.AudioLivroPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'quiz-livro-meu',
    loadChildren: () => import('./quiz/quiz-livro-meu/quiz-livro-meu.module').then( m => m.QuizLivroMeuPageModule)
  },
  {
    path: 'quiz-nutricao',
    loadChildren: () => import('./quiz/quiz-nutricao/quiz-nutricao.module').then( m => m.QuizNutricaoPageModule)
  },
  {
    path: 'fim-quiz',
    loadChildren: () => import('./quiz/fim-quiz/fim-quiz-routing.module').then( m => m.FimQuizPageRoutingModule)
  },
  {
    path: 'revista',
    loadChildren: () => import('./livro/revista/revista.module').then( m => m.RevistaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
