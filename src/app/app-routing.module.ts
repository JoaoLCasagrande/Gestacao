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
    path:'capituloum',
    loadChildren: () => import('./audiobook/capitulo-um/capitulo-um.module').then( m => m.CapituloUmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
