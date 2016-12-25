import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {

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

    console.log(info);

  }

}
