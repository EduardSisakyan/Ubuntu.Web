import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path         : 'sign-in',
    loadChildren : 'app/modules/signIn/app#SignInModule',
  },

  {
    path: '**',
    redirectTo: 'sign-in'
  }
];


@NgModule({
  imports : [ RouterModule.forRoot(ROUTES) ],
  exports : [ RouterModule ],
})

export class AppRouter { }
