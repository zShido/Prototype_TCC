import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RMundiPage } from './rmundi.page';

const routes: Routes = [
  {
    path: '',
    component: RMundiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RMundiPageRoutingModule {}
