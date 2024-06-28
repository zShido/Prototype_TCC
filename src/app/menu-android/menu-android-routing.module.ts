import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAndroidPage } from './menu-android.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAndroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAndroidPageRoutingModule {}
