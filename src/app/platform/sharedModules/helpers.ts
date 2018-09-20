
/* Angular platform services */

import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Angular platform services end */

/* Directives */

import { BackgroundImageDirective } from '../directives/backgroundImage';
import { RouteToDirective }         from '../directives/routes';
import { CheckboxDirective }        from '../directives/checkbox';

/* Directives end */

/* Components */

import { ClickOutSide } from '../components/global/clickOutside';
import { Modal }        from '../components/global/modal';
import { ConfirmModal } from '../components/global/confirm-modal';
import { Pagination }   from '../components/global/pagination';
import { ImgWithName }  from '../components/global/person-details';
import { Dropdown }     from '../components/global/dropdown';

/* Components end */

/* Pipe */

/* Pipe end */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    BackgroundImageDirective,
    RouteToDirective,
    CheckboxDirective,

    ClickOutSide,
    Modal,
    ConfirmModal,
    Pagination,
    ImgWithName,
    Dropdown,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BackgroundImageDirective,
    RouteToDirective,
    CheckboxDirective,

    ClickOutSide,
    Modal,
    ConfirmModal,
    Pagination,
    ImgWithName,
    Dropdown,
  ]
})

export class HelpersModule { }
