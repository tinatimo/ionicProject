import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavController, Platform } from 'ionic-angular';
import{File} from 'ionic-native';
declare var cordova: any;

@Component({
  selector: 'page-aboutYou',
  templateUrl: 'aboutYou.html'
})

export class AboutYouPage {
 if (this.platform.is('core')) {
} else {
  this.platform.ready().then((readySource) => {
    File.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(this.userInfo), true)
  });
};

  constructor(public navCtrl: NavController) {

  }


}
