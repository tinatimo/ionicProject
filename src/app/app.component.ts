import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AboutYouPage} from '../pages/aboutYou/aboutYou';
import { AmbassadorPage } from '../pages/ambassador/ambassador';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  //rootPage = AboutYouPage;
  //rootPage = AmbassadorPage;
  pages: Array <{ title: string, component: any}>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });


    this.pages = [
      {title:'home', component:HomePage},
      {title:'aboutYou', component:AboutYouPage},
      {title:'ambassador', component:AmbassadorPage}
    ]
  }
}
