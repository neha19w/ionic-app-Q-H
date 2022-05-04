import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CutePageRoutingModule } from './cute-routing.module';

import { CutePage } from './cute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CutePageRoutingModule
  ],
  declarations: [CutePage]
})
export class CutePageModule {}
