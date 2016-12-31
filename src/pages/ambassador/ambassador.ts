import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import ambassadorsJSON from './ambassadors.json';

@Component({
  selector: 'page-ambassador',
  templateUrl: 'ambassador.html'
})
export class AmbassadorPage {

  ambassadors: any;
  constructor(public navCtrl: NavController) {
    console.log(ambassadorsJSON)
    this.ambassadors = ambassadorsJSON;
  }

}
