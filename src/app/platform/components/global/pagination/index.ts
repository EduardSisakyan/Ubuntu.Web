import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector    : 'g-pagination',
  templateUrl : './index.html',
  styleUrls   : ['./index.scss']
})

export class Pagination {

  @Output() changeLimit: EventEmitter<number> = new EventEmitter();
  @Output() changeActivePage: EventEmitter<number> = new EventEmitter();
  @Input() activePageInterval: number = 3;
  @Input() activePage: number = 1;
  @Input() limit: number = 20;
  @Input() pageCount: number = 0;

  constructor() { }

  public changeLimitValue = () => {
    if (!this.limit) this.limit = 1;
    this.changeLimit.emit(this.limit);
  }
  public changeActivePageValue = () => this.changeActivePage.emit(this.activePage);

  public checkPaginationItems = (item: number): boolean => {
    const CHECK_INTERVAL = !(item > this.activePage + this.activePageInterval) && !(item < this.activePage - this.activePageInterval);
    const CHECK_FIRST = item === 1;
    const CHECK_LAST = item === this.pageCount;
    return CHECK_INTERVAL || CHECK_FIRST || CHECK_LAST;
  }

  public createRange = (count: number): Array<number> => {
    const newArr = [];
    for (let i = 1; i <= count; i++) {
      newArr.push(i);
    }
    return newArr;
  }

  public prev = () => {
    this.activePage -= 1;
    this.changeActivePageValue();
  }
  public next = () => {
    this.activePage += 1;
    this.changeActivePageValue();
  }
  public changePage = (page: number) => {
    this.activePage = page;
    this.changeActivePageValue();
  }
}
