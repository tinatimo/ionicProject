import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { File } from 'ionic-native';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { AboutYouPage} from '../aboutYou/aboutYou';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   inputName: string;
   inputDOB: string = new Date("January 1, 2004").toISOString();
   inputGender: string;
   inputNationality: string;
   inputSchool: string;
   inputCourse: string;
   inputGPA: number;
   platform: any;
   fs: any;
   myForm: FormGroup;
   info: any;
  constructor(public navCtrl: NavController, platform: Platform,private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      inputName: ['', Validators.required],
      inputDOB:['', Validators.required],
      inputGender:['',Validators.required],
      inputNationality:['',Validators.required],
      inputSchool:['',Validators.required],
      inputCourse:['',Validators.required],
      inputGPA:['',Validators.compose([Validators.required, Validators.maxLength(2)])],
    });

    this.platform = platform;
  }

  writeJsonFile() {
    var self = this;
    File.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(self.info))
      .then(function (success) {
        console.log('json file written to:')
        console.log(cordova.file.dataDirectory)
        console.log('with content:')
        console.log(success)
        self.navCtrl.push(AboutYouPage);
      }, function (error) {
        console.log('error writeJsonFile...')
        console.log(JSON.stringify(error));
      });
  }

  removeJsonFile() {
    var self = this;
    File.removeFile(cordova.file.dataDirectory, "userInfo.json")
      .then(function (success) {
        self.writeJsonFile()
      }, function (error) {
        console.log('error removeJsonFile...')
        console.log(JSON.stringify(error));
      });
  }

  logForm(){
    this.info = {
    "name": this.inputName,
    "dob": this.inputDOB,
    "gender": this.inputGender,
    "nationality":this.inputNationality,
    "current_school":this.inputSchool,
    "current_major":this.inputCourse,
    "current_gpa":this.inputGPA,
    };

    if (this.platform.is('core')) { //if this is desktop browser
      localStorage.setItem('userInfo', JSON.stringify(this.info));
      this.navCtrl.push(AboutYouPage);
    } else {

      this.platform.ready().then((readySource) => {
        var self = this;

        // keep getting PATH_EXISTS_ERR error when we pass true to overwrite it:
        //.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(info), true)
        // think this is a bug on ionic, going to go the long way of checking if the file exist then remove.

        File.checkFile(cordova.file.dataDirectory, "userInfo.json")
          .then(function (fileExist) {
            console.log('checkFile')
            if (fileExist) {
              self.removeJsonFile()
            } else {
              self.writeJsonFile()
            }
          }, function (error) {
            console.log(JSON.stringify(error))
          });
      });
    };

  }



}
