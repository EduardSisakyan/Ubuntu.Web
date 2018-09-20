
/* Angular platform services */

import { NgModule }     from '@angular/core';

/* Angular platform services end */

import { HelpersModule }  from './helpers';

/* Components */

import { Toaster } from 'app/platform/components/global/toaster';

/* Components end */


@NgModule({
  imports: [
    HelpersModule,
  ],
  declarations: [
    Toaster,
  ],
  exports: [
    Toaster,
  ]
})

export class ToasterModule { }
