import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioLivroPageRoutingModule } from './audio-livro-routing.module';

import { AudioLivroPage } from './audio-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioLivroPageRoutingModule
  ],
  declarations: [AudioLivroPage]
})
export class AudioLivroPageModule {}
