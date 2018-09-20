import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { HttpModule }              from '@angular/http';
import { NavigationStart, Router } from '@angular/router';

/* modules importing that are created for this application start */

import { AppComponent }  from './controller';
import { AppRouter }     from './route';
import { AppLoader }     from './components/loader';
import { AppLeftSide }   from './components/leftSide';
import { HelpersModule } from './platform/sharedModules/helpers';

/* modules importing that are created for this application end */

/* guards */

import { Login }  from 'app/platform/services/guards/login';

/* guards */

/* providers */

import { Settings }      from './platform/services/settings';
import { Dispatcher }    from './platform/services/dispatcher';
import { AppHelper }     from './platform/services/helper';
import { ToasterModule } from './platform/sharedModules/toaster';

/* providers */


@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    HelpersModule,
    ToasterModule,
    AppRouter,
  ],
  declarations: [
    AppComponent,
    AppLeftSide,
    AppLoader,
  ],
  bootstrap: [ AppComponent ],
  providers: [],
})
export class AppModule {
  constructor(
    private router: Router,
    private settings: Settings,
    private helper: AppHelper,
    private login: Login,
    private dispatcher: Dispatcher,
  ) {
    // this.router.events
    //   .subscribe(event => {
    //     if (this.helper.getCookieStatus(event)) {
    //       if (this.settings.token) {
    //         if (event instanceof NavigationStart) {
    //           if (!this.settings.routePermissions.length) {
    //             this.permissionsService.getPagePermissions()
    //               .subscribe(data => {
    //                 if (data && data.value) {
    //                   this.dispatcher.routePermissionsState = data.value;
    //                   this.login.loggedIn();
    //                   if (event.url === '/' || event.url === '/sign-in') {
    //                     this.router.navigate([this.settings.defaultPath]);
    //                   } else this.router.navigate([event.url]);
    //                 } else this.login.loggedOut();
    //               }, () => this.login.loggedOut());
    //           }
    //         }
    //       } else if (event instanceof NavigationStart) {
    //         if (event.url.search('sign-in') === -1) {
    //           this.router.navigate(['sign-in']);
    //         }
    //       }
    //     }
    //   });
  }
}
