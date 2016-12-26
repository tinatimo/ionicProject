import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { File } from 'ionic-native';
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   inputName: string;
   inputDOB: number;
   inputGender: string;
   inputNationality: string;
   inputSchool: string;
   inputCourse: string;
   inputGPA: number;
   platform: any;
   fs: any;
  constructor(public navCtrl: NavController, platform: Platform) {
    this.platform = platform
  }
  goToAboutYouPage(){
    var info = {
      "name": this.inputName,
      "dob": this.inputDOB,
      "gender": this.inputGender,
      "nationality":this.inputNationality,
      "current_school":this.inputSchool,
      "current_major":this.inputCourse,
      "current_gpa":this.inputGPA,
    }
    if (this.platform.is('core')) { //if this is desktop browser
      localStorage.setItem('userInfo', JSON.stringify(info));
    } else { 
      this.platform.ready().then((readySource) => {
        File.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(info), true)
      })

    }
  }

}
