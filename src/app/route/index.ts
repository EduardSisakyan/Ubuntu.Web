import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login }  from 'app/platform/services/guards/login';
import { SignIn } from 'app/platform/services/guards/signIn';

const ROUTES: Routes = [
  {
    path         : 'sign-in',
    loadChildren : 'app/modules/signIn/app#SignInModule',
    canActivate  : [ SignIn ],
  },
  {
    path         : 'home',
    loadChildren : 'app/modules/home/app#HomeModule',
    canActivate  : [ Login ],
  },
  {
    path         : 'servers',
    loadChildren : 'app/modules/servers/app#ServersModule',
    canActivate  : [ Login ],
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports : [ RouterModule.forRoot(ROUTES) ],
  exports : [ RouterModule ],
})

export class AppRouter { }
