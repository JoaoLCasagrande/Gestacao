import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizLivroMeuPageRoutingModule } from './quiz-livro-meu-routing.module';

import { QuizLivroMeuPage } from './quiz-livro-meu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizLivroMeuPageRoutingModule
  ],
  declarations: [QuizLivroMeuPage]
})
export class QuizLivroMeuPageModule {}
