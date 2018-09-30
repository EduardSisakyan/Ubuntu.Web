import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Controller } from '../controller';

import { Login } from 'app/platform/services/guards/login';

const ROUTES: Routes = [
  {
    path          : '',
    component     : Controller,
    canActivate   : [ Login ],
  }
];

@NgModule({
  imports : [ RouterModule.forChild(ROUTES) ],
  exports : [ RouterModule ]
})

export class Router { }
