import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAsistPageRoutingModule } from './registrar-asist-routing.module';

import { RegistrarAsistPage } from './registrar-asist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAsistPageRoutingModule
  ],
  declarations: [RegistrarAsistPage]
})
export class RegistrarAsistPageModule {}
