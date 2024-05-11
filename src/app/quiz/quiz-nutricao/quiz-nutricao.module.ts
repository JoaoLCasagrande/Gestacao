import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizNutricaoPageRoutingModule } from './quiz-nutricao-routing.module';

import { QuizNutricaoPage } from './quiz-nutricao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizNutricaoPageRoutingModule
  ],
  declarations: [QuizNutricaoPage]
})
export class QuizNutricaoPageModule {}
