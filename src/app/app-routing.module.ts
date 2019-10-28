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
    path: 'country-list',
    children: [
      {
        path: '',
        loadChildren:
        './country-list/country-list.module#CountryListPageModule'
      },
      {
        path: ':id',
        loadChildren: './country/country.module#CountryPageModule'
      }
    ]
  },
  { path: 'add-country',
  loadChildren: './add-country/add-country.module#AddCountryPageModule'
 }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
