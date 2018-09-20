import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Controller } from '../controller';

import { SignIn }     from 'app/platform/services/guards/signIn';

const ROUTES: Routes = [
  {
    path          : '',
    component     : Controller,
    // canActivate   : [ SignIn ],
  }
];

@NgModule({
  imports : [ RouterModule.forChild(ROUTES) ],
  exports : [ RouterModule ]
})

export class Router { }
