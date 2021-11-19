import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistasistPageRoutingModule } from './registasist-routing.module';

import { RegistasistPage } from './registasist.page';

//QR
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistasistPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [RegistasistPage]
})
export class RegistasistPageModule {}
