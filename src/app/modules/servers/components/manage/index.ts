import { Component, EventEmitter, Output } from '@angular/core';

import { ServerService } from 'app/platform/api/server';
import { ICreateServerBodyModel } from 'app/platform/models/api/server';

@Component({
  selector    : 'manage-server',
  templateUrl : './index.html',
  styleUrls   : ['./index.scss']
})

export class Manage {
  @Output() close: EventEmitter<undefined> = new EventEmitter();
  @Output() update: EventEmitter<undefined> = new EventEmitter();

  public data: ICreateServerBodyModel = {
    name     : null,
    username : null,
    password : null,
    host     : null,
  };

  public errors = {
    name     : false,
    username : false,
    password : false,
    host     : false,
  };

  constructor(
    private serverService: ServerService,
  ) { }

  private validate = (): boolean => {
    let isError: boolean = false;
    const ERRORS = {
      name     : false,
      username : false,
      password : false,
      host     : false,
    };

    if (!this.data.name) {
      isError = true;
      ERRORS.name = true;
    }

    if (!this.data.username) {
      isError = true;
      ERRORS.username = true;
    }

    if (!this.data.password) {
      isError = true;
      ERRORS.password = true;
    }

    if (!this.data.host) {
      isError = true;
      ERRORS.host = true;
    }

    this.errors = ERRORS;

    return isError;
  }

  public save = () => {
    const ERR: boolean = this.validate();

    if (!ERR) {
      this.serverService.create(this.data)
        .subscribe(() => this.update.emit());
    }
  }
}
