import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CallPage } from '../pages/call/call';

@NgModule({
  declarations: [
    MyApp,
    CallPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CallPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidFullScreen,
    LaunchNavigator
  ]
})
export class AppModule {}
