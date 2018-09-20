import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule }        from '@angular/common';

import { Controller }    from './controller';
import { Router }        from './route';

import { HelpersModule } from 'app/platform/sharedModules/helpers';

@NgModule({
  imports      : [ Router, CommonModule, ReactiveFormsModule, HelpersModule ],
  declarations : [ Controller ],
  exports      : [ Controller ],
  providers 	 : [  ]
})

export class SignInModule { }
