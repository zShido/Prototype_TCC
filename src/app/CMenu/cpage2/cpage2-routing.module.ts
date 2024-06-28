import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cpage2Page } from './cpage2.page';

const routes: Routes = [
  {
    path: '',
    component: Cpage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cpage2PageRoutingModule {}
