import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { Controller }    from './controller';
import { Router }        from './route';

import { HelpersModule } from 'app/platform/sharedModules/helpers';

import { Manage } from './components/manage';

@NgModule({
  imports      : [ Router, CommonModule, HelpersModule ],
  declarations : [ Controller, Manage ],
  exports      : [ Controller ],
  providers 	 : [  ]
})

export class ServersModule { }
