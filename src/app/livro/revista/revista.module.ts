import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevistaPageRoutingModule } from './revista-routing.module';

import { RevistaPage } from './revista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevistaPageRoutingModule
  ],
  declarations: [RevistaPage]
})
export class RevistaPageModule {}
