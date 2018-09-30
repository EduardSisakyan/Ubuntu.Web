import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServerService } from 'app/platform/api/server';
import { IServersModel, IGetServersBodyModel } from 'app/platform/models/api/server';
import { IGetServersResModel } from './../../../platform/models/api/server';

@Component({
  templateUrl : '../view/index.html',
  styleUrls   : ['../styles/index.scss']
})

export class Controller implements OnInit {

  public tableData: IServersModel[] = [];

  // #region Pagination
  public pageNo: number = 1;
  public limit: number = 20;
  public pageCount: number;
  // #endregion

  // #region Modals
  public createModalState: boolean = false;
  // #endregion

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
  ) { }

  // #region Modals
  public openCreateModal = () => this.createModalState = true;
  public closeCreateModal = () => this.createModalState = false;
  // #endregion

  // #region Pagination
  public changeLimit = (value) => {
    if (value !== this.limit) {
      this.limit = value;
      this.pageNo = 1;
      this.getList();
    }
  }
  public changeActivePage = (value) => {
    this.pageNo = value;
    this.getList();
  }

  // #endregion

  public getList = () => {
    if (this.createModalState) this.closeCreateModal();
    const BODY: IGetServersBodyModel = {
      limit  : this.limit,
      offset : this.limit * this.pageNo,
    };
    this.serverService.getList(BODY)
      .subscribe(data => {
        this.pageCount = data.value.pageCount;
        this.tableData = data.value.data;
      });
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => {
        const DATA: IGetServersResModel = data.data.value;
        this.pageCount = DATA.pageCount;
        this.tableData = DATA.data;
      });
  }
}
