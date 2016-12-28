import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { File } from 'ionic-native';
import {FormGroup,Validators, FormBuilder } from '@angular/forms';

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
   myForm: FormGroup;
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

  logForm(){
    var info = {
"name": this.inputName,
"dob": this.inputDOB,
"gender": this.inputGender,
"nationality":this.inputNationality,
"current_school":this.inputSchool,
"current_major":this.inputCourse,
"current_gpa":this.inputGPA,
};

console.log(this.myForm.value);
console.log(info);

if (this.platform.is('core')) { //if this is desktop browser
  localStorage.setItem('userInfo', JSON.stringify(info));

} else {
  this.platform.ready().then((readySource) => {
    File.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(info), true)
  })

};
  }



}
