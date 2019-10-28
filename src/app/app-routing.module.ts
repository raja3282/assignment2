import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list22',
    children: [
      {
        path: '',
        loadChildren:
        './list22/list22.module#List22PageModule'
      },
      {
        path: ':id',
        loadChildren: './country/country.module#CountryPageModule'
      }
    ]
  },
  { path: 'add-country',
  loadChildren: './add-country/add-country.module#AddCountryPageModule'
 },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
