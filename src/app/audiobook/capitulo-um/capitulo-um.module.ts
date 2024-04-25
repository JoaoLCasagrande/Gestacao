import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloUmPageRoutingModule } from './capitulo-um-routing.module';

import { CapituloUmPage } from './capitulo-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapituloUmPageRoutingModule
  ],
  declarations: [CapituloUmPage]
})
export class CapituloUmPageModule {}
