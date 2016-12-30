import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { File } from 'ionic-native';
declare var cordova: any;

@Component({
  selector: 'page-aboutYou',
  templateUrl: 'aboutYou.html',

})

export class AboutYouPage {
  userInfo: any;
  platform: any;

  constructor(public navCtrl: NavController, platform: Platform) {
    console.log('inside constructor?')
    this.platform = platform;
    if (this.platform.is('core')) {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(this.userInfo["name"]);
    } else {
      console.log('inside AboutYouPage')
      this.userInfo = {}
      var self = this;
      this.platform.ready().then((readySource) => {
        File
          .readAsText(cordova.file.dataDirectory, "userInfo.json")
          .then(function (success) {
            console.log('success:')
            console.log(success)
            self.userInfo = JSON.parse(success.toString());
          }, function (error) {
            console.log('error:')
            console.log(error)
          });
      });
    };

  }

  getPersonalityLabel() {
    var activePersonalityBox = document.getElementById('personality-box');
    var activePersonalityChips = activePersonalityBox.getElementsByClassName('chip-active');
    var personalityArray = []
    for (var index = 0; index < activePersonalityChips.length; index++) {
      personalityArray.push(activePersonalityChips[index].getAttribute("data-personality"));
    }
    return personalityArray;
  }

  getLifestyle(){

    var activeLifestyleBox = document.getElementById('lifestyle-box');
    console.log(activeLifestyleBox);
    var activeLifestyleChips = activeLifestyleBox.getElementsByClassName('chip-active');
    var lifestyleArray = []
    for (var index = 0; index < activeLifestyleChips.length; index++) {
      lifestyleArray.push(activeLifestyleChips[index].getAttribute("data-lifestyle"));
    }
    return lifestyleArray;
  }

  writeJsonFile() {
    var self = this;
    File.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(self.userInfo))
      .then(function (success) {
        console.log('success....')
        // self.navCtrl.push(AboutYouPage);
      }, function (error) {
        console.log('error writeJsonFile...')
        console.log(JSON.stringify(error));
      });
  }

  goToAmbassadorPage() {
    console.log('goToAmbassadorPage');
    this.userInfo['label'] = this.getPersonalityLabel();
    this.userInfo['lifestyle'] = this.getLifestyle();
    console.log('====================================')
    console.log(JSON.stringify(this.userInfo));
    console.log('====================================')

    if (this.platform.is('core')) {
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    } else {
      // keep getting PATH_EXISTS_ERR error when we pass true to overwrite it:
      //.writeFile(cordova.file.dataDirectory, "userInfo.json", JSON.stringify(info), true)
      // think this is a bug on ionic, going to go the long way of checking if the file exist then remove.

      var self = this;
      File.removeFile(cordova.file.dataDirectory, "userInfo.json")
        .then(function (success) {
          self.writeJsonFile()
        }, function (error) {
          console.log('error removeJsonFile...')
          console.log(JSON.stringify(error));
        });
    };
  }




  removePersonalityClicked(event) {

    var personality = event.target.dataset.personality;
    document.getElementById('remove-'+personality).classList.remove("chip-active");
    document.getElementById('add-'+personality).classList.add("chip-active");
  }

  addPersonalityClicked(event) {
    var personality = event.target.dataset.personality;
    document.getElementById('remove-'+personality).classList.add("chip-active");
    document.getElementById('add-'+personality).classList.remove("chip-active");

  }

  removelifestyleClicked(event) {
    var lifestyle = event.target.dataset.lifestyle;
    document.getElementById('remove-lifestyle-'+lifestyle).classList.remove("chip-active");
    document.getElementById('add-lifestyle-'+lifestyle).classList.add("chip-active");

  }

  addLifestyleClicked(event) {
    var lifestyle = event.target.dataset.lifestyle;
    document.getElementById('remove-lifestyle-'+lifestyle).classList.add("chip-active");
    document.getElementById('add-lifestyle-'+lifestyle).classList.remove("chip-active");
  }








}
