import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutYouPage } from '../pages/aboutYou/aboutYou';
import { AmbassadorPage } from '../pages/ambassador/ambassador';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutYouPage,
    AmbassadorPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutYouPage,
    AmbassadorPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
