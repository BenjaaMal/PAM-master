import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarAsistPage } from './registrar-asist.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarAsistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarAsistPageRoutingModule {}
