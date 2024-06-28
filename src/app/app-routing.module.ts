import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'chose',
    loadChildren: () => import('./chose/chose.module').then( m => m.ChosePageModule)
  },
  {
    path: 'menu-android',
    loadChildren: () => import('./menu-android/menu-android.module').then( m => m.MenuAndroidPageModule)
  },
  
  {
    path: 'galeria',
    loadChildren: () => import('./GMenu/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./CMenu/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'relogio',
    loadChildren: () => import('./relogio/relogio.module').then( m => m.RelogioPageModule)
  },
  {
    path: 'gpage2',
    loadChildren: () => import('./GMenu/gpage2/gpage2.module').then( m => m.Gpage2PageModule)
  },  {
    path: 'cpage2',
    loadChildren: () => import('./CMenu/cpage2/cpage2.module').then( m => m.Cpage2PageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
