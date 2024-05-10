import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FimQuizPageRoutingModule } from './fim-quiz-routing.module';

import { FimQuizPage } from './fim-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FimQuizPageRoutingModule
  ],
  declarations: [FimQuizPage]
})
export class FimQuizPageModule {}
