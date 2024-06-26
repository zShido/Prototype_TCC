import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gpage2Page } from './gpage2.page';

const routes: Routes = [
  {
    path: '',
    component: Gpage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gpage2PageRoutingModule {}
