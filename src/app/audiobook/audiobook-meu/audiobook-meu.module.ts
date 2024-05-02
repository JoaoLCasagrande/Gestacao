import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiobookMeuPageRoutingModule } from './audiobook-meu-routing.module';

import { AudiobookMeuPage } from './audiobook-meu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiobookMeuPageRoutingModule
  ],
  declarations: [AudiobookMeuPage]
})
export class AudiobookMeuPageModule {}
