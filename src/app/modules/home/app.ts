import { NgModule }            from '@angular/core';

import { Controller }    from './controller';
import { Router }        from './route';

import { CommonModule } from '@angular/common';

@NgModule({
  imports      : [ Router, CommonModule ],
  declarations : [ Controller ],
  exports      : [ Controller ],
  providers 	 : [  ]
})

export class HomeModule { }
