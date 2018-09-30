import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Controller } from '../controller';

import { Resolver } from '../services/resolver';

import { Login } from 'app/platform/services/guards/login';

const ROUTES: Routes = [
  {
    path          : '',
    component     : Controller,
    canActivate   : [ Login ],
    resolve       : {
      data: Resolver,
    }
  }
];

@NgModule({
  imports   : [ RouterModule.forChild(ROUTES) ],
  exports   : [ RouterModule ],
  providers : [ Resolver ],
})

export class Router { }
