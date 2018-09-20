
import { Component, OnInit } from '@angular/core';
import { Dispatcher } from 'app/platform/services/dispatcher';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../view/index.html',
  styleUrls: ['../styles/index.scss']
})
export class AppComponent implements OnInit {

  public loginState: boolean;
  private loaderFlag: boolean;
  public loaderState: boolean = true;

  constructor(
    private dispatcher: Dispatcher,
    private router: Router,
  ) {
    this.dispatcher.loading.subscribe(state => {
      this.loaderFlag = state;
      if (state) {
        setTimeout(() => {
          if (this.loaderFlag) this.loaderState = true;
        }, 200);
      } else this.loaderState = state;
    });
    this.dispatcher.login.subscribe(state => this.loginState = state);
  }


  ngOnInit(): void { }
}
