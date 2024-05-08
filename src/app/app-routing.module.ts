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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
