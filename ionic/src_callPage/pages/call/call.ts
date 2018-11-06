import { Component,
         ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


@Component({ 
  selector: 'call-page',
  templateUrl: 'call.html'
})

export class CallPage {

  constructor(public navCtrl: NavController, private androidFullScreen: AndroidFullScreen, private launchNavigator: LaunchNavigator) {
    androidFullScreen.immersiveMode();

  }

  show_map(){
    let options: LaunchNavigatorOptions = {
    };

    this.launchNavigator.navigate([parseFloat(""), parseFloat("")], options)
    .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
    );

  }
  
  @ViewChild('emojidummy') emoji_input;
  show_emoji_panel(){
    this.emoji_input.setFocus();

  }

  mute_call(){

  }

  end_call(){
    this.androidFullScreen.showSystemUI();
    this.navCtrl.pop();
  }

}
